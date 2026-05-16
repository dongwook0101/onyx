"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ImageIcon, Loader2 } from "lucide-react"
import { ContentBlock } from "@/lib/news"
import { createPost, uploadImage } from "@/lib/news-service"
import { BlockEditor } from "@/components/news/block-editor"

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors duration-200"

export default function AdminNewsPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [body, setBody] = useState<ContentBlock[]>([{ type: "text", content: "" }])
  const [submitting, setSubmitting] = useState(false)
  const [thumbUploading, setThumbUploading] = useState(false)
  const thumbRef = useRef<HTMLInputElement>(null)

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
      const post = await createPost({ title: title.trim(), thumbnailUrl, body })
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
        </motion.div>
      </div>
    </main>
  )
}
