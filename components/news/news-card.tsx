import Link from "next/link"
import { NewsPost } from "@/lib/news"
import { formatDate } from "@/lib/news-service"

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link href={`/news/${post.id}`} className="block group">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-indigo-500/40 transition-colors duration-300">
        <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
          <img
            src={post.thumbnailUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5">
          <p className="text-xs text-indigo-400 mb-2">{formatDate(post.createdAt)}</p>
          <h3 className="text-white font-medium leading-snug group-hover:text-indigo-300 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
