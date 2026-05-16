"use client"

import { useState } from "react"
import { ContentBlock } from "@/lib/news"
import { uploadImage } from "@/lib/news-service"
import { Trash2, ChevronUp, ChevronDown, ImageIcon, Type, Loader2 } from "lucide-react"

interface Props {
  blocks: ContentBlock[]
  onChange: (blocks: ContentBlock[]) => void
}

export function BlockEditor({ blocks, onChange }: Props) {
  const [uploading, setUploading] = useState<Record<number, boolean>>({})

  const update = (i: number, block: ContentBlock) => {
    const next = [...blocks]
    next[i] = block
    onChange(next)
  }

  const remove = (i: number) => onChange(blocks.filter((_, idx) => idx !== i))

  const move = (i: number, dir: -1 | 1) => {
    const next = [...blocks]
    const target = i + dir
    if (target < 0 || target >= next.length) return
    ;[next[i], next[target]] = [next[target], next[i]]
    onChange(next)
  }

  const handleImageFile = async (i: number, file: File) => {
    setUploading((prev) => ({ ...prev, [i]: true }))
    try {
      const url = await uploadImage(file, "body")
      update(i, { type: "image", url, alt: file.name.replace(/\.[^.]+$/, "") })
    } catch (e) {
      alert("이미지 업로드에 실패했습니다.")
    } finally {
      setUploading((prev) => ({ ...prev, [i]: false }))
    }
  }

  return (
    <div className="space-y-3">
      {blocks.map((block, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          {/* 블록 헤더 */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-indigo-400 uppercase tracking-wider">
              {block.type === "text" ? "텍스트" : "이미지"}
            </span>
            <div className="flex items-center gap-1">
              <button type="button" onClick={() => move(i, -1)} disabled={i === 0}
                className="p-1 text-white/40 hover:text-white disabled:opacity-20 transition-colors">
                <ChevronUp size={14} />
              </button>
              <button type="button" onClick={() => move(i, 1)} disabled={i === blocks.length - 1}
                className="p-1 text-white/40 hover:text-white disabled:opacity-20 transition-colors">
                <ChevronDown size={14} />
              </button>
              <button type="button" onClick={() => remove(i)}
                className="p-1 text-white/40 hover:text-red-400 transition-colors ml-1">
                <Trash2 size={14} />
              </button>
            </div>
          </div>

          {/* 텍스트 블록 */}
          {block.type === "text" && (
            <textarea
              value={block.content}
              onChange={(e) => update(i, { type: "text", content: e.target.value })}
              placeholder="텍스트를 입력하세요..."
              rows={4}
              className="w-full bg-transparent text-white/80 text-sm leading-relaxed resize-y outline-none placeholder-white/30"
            />
          )}

          {/* 이미지 블록 */}
          {block.type === "image" && (
            <div className="space-y-3">
              <label className="cursor-pointer block">
                <input type="file" accept="image/*" className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleImageFile(i, file)
                  }}
                />
                {uploading[i] ? (
                  <div className="w-full h-32 rounded-lg border border-white/10 flex items-center justify-center text-white/40">
                    <Loader2 size={24} className="animate-spin" />
                  </div>
                ) : block.url ? (
                  <div className="relative">
                    <img src={block.url} alt={block.alt} className="w-full max-h-64 object-cover rounded-lg" />
                    <span className="absolute bottom-2 right-2 px-3 py-1 text-xs bg-black/70 text-white rounded-lg border border-white/20">변경</span>
                  </div>
                ) : (
                  <div className="w-full h-32 rounded-lg border border-dashed border-white/20 flex flex-col items-center justify-center gap-2 text-white/40 hover:border-indigo-500/50 hover:text-white/60 transition-colors">
                    <ImageIcon size={24} />
                    <span className="text-sm">이미지를 업로드하세요</span>
                  </div>
                )}
              </label>
              <input
                type="text"
                value={block.alt ?? ""}
                onChange={(e) => update(i, { ...block, alt: e.target.value })}
                placeholder="이미지 설명 (선택)"
                className="w-full bg-transparent text-white/60 text-xs outline-none placeholder-white/30 border-b border-white/10 pb-1"
              />
            </div>
          )}
        </div>
      ))}

      {/* 블록 추가 */}
      <div className="flex gap-3 pt-1">
        <button type="button"
          onClick={() => onChange([...blocks, { type: "text", content: "" }])}
          className="flex items-center gap-2 px-4 py-2 text-sm text-white/60 border border-dashed border-white/20 rounded-xl hover:border-indigo-500/50 hover:text-white/80 transition-colors">
          <Type size={14} />텍스트 추가
        </button>
        <button type="button"
          onClick={() => onChange([...blocks, { type: "image", url: "", alt: "" }])}
          className="flex items-center gap-2 px-4 py-2 text-sm text-white/60 border border-dashed border-white/20 rounded-xl hover:border-indigo-500/50 hover:text-white/80 transition-colors">
          <ImageIcon size={14} />이미지 추가
        </button>
      </div>
    </div>
  )
}
