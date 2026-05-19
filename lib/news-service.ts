import { supabase } from "./supabase"
import { NewsPost, ContentBlock } from "./news"

// ── DB row → NewsPost 변환 ────────────────────────────────────────────
function mapRow(row: {
  id: string
  title: string
  thumbnail_url: string
  body: ContentBlock[]
  created_at: string
}): NewsPost {
  return {
    id: row.id,
    title: row.title,
    thumbnailUrl: row.thumbnail_url,
    body: row.body,
    createdAt: row.created_at,
  }
}

// ── 이미지 업로드 → public URL 반환 ─────────────────────────────────
export async function uploadImage(file: File, folder: "thumbnails" | "body"): Promise<string> {
  const ext = file.name.split(".").pop()
  const path = `${folder}/${Date.now()}.${ext}`

  const { error } = await supabase.storage.from("news").upload(path, file, { upsert: true })
  if (error) throw error

  const { data } = supabase.storage.from("news").getPublicUrl(path)
  return data.publicUrl
}

// ── CRUD ─────────────────────────────────────────────────────────────

export async function getAllPosts(): Promise<NewsPost[]> {
  const { data, error } = await supabase
    .from("news_posts")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) throw error
  return data.map(mapRow)
}

export async function getPostById(id: string): Promise<NewsPost | null> {
  const { data, error } = await supabase
    .from("news_posts")
    .select("*")
    .eq("id", id)
    .single()

  if (error) return null
  return mapRow(data)
}

export async function createPost(
  input: Pick<NewsPost, "title" | "thumbnailUrl" | "body"> & { createdAt?: string }
): Promise<NewsPost> {
  const { data, error } = await supabase
    .from("news_posts")
    .insert({
      title: input.title,
      thumbnail_url: input.thumbnailUrl,
      body: input.body,
      ...(input.createdAt ? { created_at: input.createdAt } : {}),
    })
    .select()
    .single()

  if (error) throw error
  return mapRow(data)
}

export async function updatePost(
  id: string,
  input: Pick<NewsPost, "title" | "thumbnailUrl" | "body"> & { createdAt?: string }
): Promise<NewsPost> {
  const { data, error } = await supabase
    .from("news_posts")
    .update({
      title: input.title,
      thumbnail_url: input.thumbnailUrl,
      body: input.body,
      ...(input.createdAt ? { created_at: input.createdAt } : {}),
    })
    .eq("id", id)
    .select()
    .single()

  if (error) throw error
  return mapRow(data)
}

export async function deletePost(id: string): Promise<void> {
  const { error } = await supabase.from("news_posts").delete().eq("id", id)
  if (error) throw error
}

// ── 유틸 ─────────────────────────────────────────────────────────────

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
