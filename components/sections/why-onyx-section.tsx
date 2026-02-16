"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "시공간의 해방",
    items: ["24/7 언제 어디서나", "실시간 음성/이미지 생성"],
    decoration: "rings",
  },
  {
    title: "브랜드 신뢰 구축",
    items: [
      "실제 인물이 직접 그려내어",
      "귀사의 비전과 신뢰를",
      "풍부하게 전달합니다.",
    ],
    decoration: "droplet",
  },
  {
    title: "초개인화",
    items: ["수백 명 개개인의 이름을", "부르는 1:1 메시지"],
    decoration: "ribbon",
  },
]

export function WhyOnyxSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
            Why ONYX?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            기존 방식의 한계를 넘어섭니다.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-6 flex-wrap justify-center">
          <FeatureCard
            title={features[0].title}
            items={features[0].items}
            decoration={features[0].decoration}
          />
          <FeatureCard
            title={features[1].title}
            items={features[1].items}
            decoration={features[1].decoration}
          />
          <FeatureCard
            title={features[2].title}
            items={features[2].items}
            decoration={features[2].decoration}
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  items,
  decoration,
}: {
  title: string
  items: string[]
  decoration: string | null
}) {
  const decorationSrc =
    decoration === "rings"
      ? "/images/decoration/rings.png"
      : decoration === "droplet"
        ? "/images/decoration/droplet.png"
        : decoration === "ribbon"
          ? "/images/decoration/ribbon.png"
          : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative rounded-2xl border border-indigo-500/40 bg-white/5 p-8 py-12 overflow-hidden flex-1 min-w-[min(100%,260px)] min-h-[260px]"
    >
      {decorationSrc && (
        <div className="absolute top-0 right-0 w-24 h-24">
          <Image
            src={decorationSrc}
            alt=""
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
      )}
      <h3 className="text-lg font-bold text-white mb-3 relative z-10">{title}</h3>
      {items.length > 0 && (
        <ul className="space-y-1 text-white/70 text-sm leading-relaxed relative z-10">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
