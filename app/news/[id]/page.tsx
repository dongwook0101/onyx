"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { NewsPost } from "@/lib/news"
import { getPostById, formatDate } from "@/lib/news-service"
import { BlockRenderer } from "@/components/news/block-renderer"

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [post, setPost] = useState<NewsPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPostById(id).then((data) => {
      if (!data) router.replace("/news")
      else setPost(data)
      setLoading(false)
    })
  }, [id, router])

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
      </main>
    )
  }

  if (!post) return null

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            뉴스 목록
          </Link>

          <p className="text-sm text-indigo-400 mb-3">{formatDate(post.createdAt)}</p>
          <h1 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-8">
            {post.title}
          </h1>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 mb-10">
            <img
              src={post.thumbnailUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-px bg-white/10 mb-10" />

          <BlockRenderer blocks={post.body} />
        </motion.div>
      </div>
    </main>
  )
}
