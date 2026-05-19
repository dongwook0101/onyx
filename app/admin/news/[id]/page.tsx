"use client"

import { useState, useRef, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ImageIcon, Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ContentBlock } from "@/lib/news"
import { getPostById, updatePost, deletePost, uploadImage } from "@/lib/news-service"
import { BlockEditor } from "@/components/news/block-editor"

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors duration-200"

export default function EditNewsPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [body, setBody] = useState<ContentBlock[]>([])
  const [publishedAt, setPublishedAt] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [thumbUploading, setThumbUploading] = useState(false)
  const thumbRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    getPostById(id).then((post) => {
      if (!post) { router.replace("/news"); return }
      setTitle(post.title)
      setThumbnailUrl(post.thumbnailUrl)
      setBody(post.body)
      setPublishedAt(post.createdAt.slice(0, 10))
      setLoading(false)
    })
  }, [id, router])

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

  const handleDelete = async () => {
    if (!confirm("이 뉴스를 삭제할까요? 되돌릴 수 없습니다.")) return
    setDeleting(true)
    try {
      await deletePost(id)
      router.push("/news")
    } catch {
      alert("삭제에 실패했습니다. 다시 시도해주세요.")
    } finally {
      setDeleting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !thumbnailUrl) return
    setSubmitting(true)
    try {
      await updatePost(id, { title: title.trim(), thumbnailUrl, body, createdAt: new Date(publishedAt).toISOString() })
      router.push(`/news/${id}`)
    } catch {
      alert("수정에 실패했습니다. 다시 시도해주세요.")
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-indigo-400" />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href={`/news/${id}`}
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} />
            기사로 돌아가기
          </Link>

          <p className="text-sm tracking-[0.3em] uppercase text-indigo-400 mb-2">Admin</p>
          <h1 className="text-3xl font-medium text-white mb-10">뉴스 수정</h1>

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

            {/* 저장 */}
            <motion.button
              type="submit"
              disabled={submitting || thumbUploading || !title.trim() || !thumbnailUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-light rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitting ? "저장 중..." : "수정 저장"}
            </motion.button>

            {/* 삭제 */}
            <motion.button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 border border-red-500/40 text-red-400 text-sm font-light rounded-xl hover:bg-red-500/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {deleting ? "삭제 중..." : "뉴스 삭제"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </main>
  )
}
