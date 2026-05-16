import { ContentBlock } from "@/lib/news"

export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "text") {
          return (
            <p key={i} className="text-white/70 text-base leading-relaxed whitespace-pre-wrap">
              {block.content}
            </p>
          )
        }
        if (block.type === "image") {
          return (
            <figure key={i} className="w-full">
              <img
                src={block.url}
                alt={block.alt ?? ""}
                className="w-full h-auto rounded-xl object-cover"
              />
              {block.alt && (
                <figcaption className="mt-2 text-xs text-white/40 text-center">
                  {block.alt}
                </figcaption>
              )}
            </figure>
          )
        }
        return null
      })}
    </div>
  )
}
