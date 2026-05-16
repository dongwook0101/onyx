"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { NewsPost } from "@/lib/news"
import { getAllPosts } from "@/lib/news-service"
import { NewsCard } from "@/components/news/news-card"

export default function NewsPage() {
  const [posts, setPosts] = useState<NewsPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-indigo-400 mb-6"
          >
            News
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight"
          >
            최신 소식
          </motion.h1>
        </div>
      </section>

      {/* 뉴스 그리드 */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] aspect-[4/3] animate-pulse"
                />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-white/40 py-20">등록된 뉴스가 없습니다.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <NewsCard post={post} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
