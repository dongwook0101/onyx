"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "타깃 맞춤형 IP 딜리버리",
    items: ["국가별 소비 성향과 문화를 완벽히 흡수한 로컬라이징 페르소나를 가장 유연하게 제공합니다."],
    decoration: "rings",
  },
  {
    title: "압도적인 비용 절감",
    items: [
      "A급 쇼호스트 및 인플루언서 섭외에 소요되는 막대한 비용을 획기적으로 낮춥니다.",
    ],
    decoration: "droplet",
  },
  {
    title: "영구적인 자산 구축",
    items: ["제약 없이 통제 가능하며 기업의 영구적인 자산이 되는 버추얼 IP를 육성합니다."],
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
      className="relative rounded-2xl border border-indigo-500/40 bg-white/5 p-8 py-12 overflow-hidden flex-1 min-w-[min(100%,260px)] min-h-[260px] flex flex-col"
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
      <h3 className="text-lg font-bold text-white mb-0.5 relative z-10">{title}</h3>
      {items.length > 0 && (
        <div className="flex-1 flex items-center relative z-10">
          <ul className="space-y-1 text-white/70 text-sm leading-relaxed">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}
