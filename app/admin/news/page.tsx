"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ImageIcon, Loader2, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import { ContentBlock, NewsPost } from "@/lib/news"
import { createPost, uploadImage, getAllPosts, deletePost, formatDate } from "@/lib/news-service"
import { BlockEditor } from "@/components/news/block-editor"

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors duration-200"

export default function AdminNewsPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [body, setBody] = useState<ContentBlock[]>([{ type: "text", content: "" }])
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString().slice(0, 10))
  const [submitting, setSubmitting] = useState(false)
  const [thumbUploading, setThumbUploading] = useState(false)
  const thumbRef = useRef<HTMLInputElement>(null)

  const [posts, setPosts] = useState<NewsPost[]>([])
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    getAllPosts().then(setPosts)
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("이 뉴스를 삭제할까요? 되돌릴 수 없습니다.")) return
    setDeletingId(id)
    try {
      await deletePost(id)
      setPosts((prev) => prev.filter((p) => p.id !== id))
    } catch {
      alert("삭제에 실패했습니다. 다시 시도해주세요.")
    } finally {
      setDeletingId(null)
    }
  }

  const handleThumbnail = async (file: File) => {
    setThumbUploading(true)
    try {
      const url = await uploadImage(file, "thumbnails")
      setThumbnailUrl(url)
    } catch {
      alert("썸네일 업로드에 실패했습니다.")
    } finally {
      setThumbUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !thumbnailUrl) return
    setSubmitting(true)
    try {
      const post = await createPost({ title: title.trim(), thumbnailUrl, body, createdAt: new Date(publishedAt).toISOString() })
      router.push(`/news/${post.id}`)
    } catch {
      alert("발행에 실패했습니다. 다시 시도해주세요.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-indigo-400 mb-2">Admin</p>
          <h1 className="text-3xl font-medium text-white mb-10">뉴스 작성</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 제목 */}
            <div>
              <label className="block text-xs text-white/50 mb-1.5 ml-1">
                제목 <span className="text-indigo-400">*</span>
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="뉴스 제목을 입력하세요"
                className={inputClass}
              />
            </div>

            {/* 썸네일 */}
            <div>
              <label className="block text-xs text-white/50 mb-1.5 ml-1">
                썸네일 이미지 <span className="text-indigo-400">*</span>
              </label>
              <input
                ref={thumbRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleThumbnail(file)
                }}
              />
              {thumbUploading ? (
                <div className="w-full aspect-[16/9] rounded-xl border border-white/10 flex items-center justify-center text-white/40">
                  <Loader2 size={32} className="animate-spin" />
                </div>
              ) : thumbnailUrl ? (
                <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
                  <img src={thumbnailUrl} alt="썸네일" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => thumbRef.current?.click()}
                    className="absolute bottom-3 right-3 px-3 py-1.5 text-xs bg-black/70 text-white rounded-lg border border-white/20 hover:border-white/40 transition-colors"
                  >
                    변경
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => thumbRef.current?.click()}
                  className="w-full aspect-[16/9] rounded-xl border border-dashed border-white/20 flex flex-col items-center justify-center gap-3 text-white/40 hover:border-indigo-500/50 hover:text-white/60 transition-colors"
                >
                  <ImageIcon size={32} />
                  <span className="text-sm">썸네일 이미지를 업로드하세요</span>
                </button>
              )}
            </div>

            {/* 발행 날짜 */}
            <div>
              <label className="block text-xs text-white/50 mb-1.5 ml-1">발행 날짜</label>
              <input
                type="date"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                className={inputClass + " [color-scheme:dark]"}
              />
            </div>

            {/* 본문 */}
            <div>
              <label className="block text-xs text-white/50 mb-1.5 ml-1">본문</label>
              <BlockEditor blocks={body} onChange={setBody} />
            </div>

            {/* 발행 */}
            <motion.button
              type="submit"
              disabled={submitting || thumbUploading || !title.trim() || !thumbnailUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-light rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitting ? "발행 중..." : "발행하기"}
            </motion.button>
          </form>

          {/* 뉴스 목록 */}
          {posts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-lg font-medium text-white mb-4">게시된 뉴스</h2>
              <ul className="space-y-3">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    {post.thumbnailUrl && (
                      <img
                        src={post.thumbnailUrl}
                        alt=""
                        className="w-14 h-10 rounded-lg object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{post.title}</p>
                      <p className="text-xs text-white/40 mt-0.5">{formatDate(post.createdAt)}</p>
                    </div>
                    <Link
                      href={`/admin/news/${post.id}`}
                      className="p-2 text-white/40 hover:text-white transition-colors"
                    >
                      <Pencil size={15} />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      disabled={deletingId === post.id}
                      className="p-2 text-white/40 hover:text-red-400 transition-colors disabled:opacity-40"
                    >
                      {deletingId === post.id ? (
                        <Loader2 size={15} className="animate-spin" />
                      ) : (
                        <Trash2 size={15} />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
