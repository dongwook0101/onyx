"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const solutions = [
  {
    id: "clothing",
    badge: "AI CONTENT",
    title: "버추얼 인플루언서",
    description:
      "독보적인 퍼스널 브랜딩을 갖춘 버추얼 인플루언서를 기획하여 파급력 있는 브랜드 마케팅을 전개합니다. 충성도 높은 팬덤을 구축하고 유료 구독 플랫폼과 연계하여, 단순 홍보를 넘어 지속 가능한 형태의 독립적인 수익 파이프라인을 창출합니다.",
    highlights: [
      "매력적인 퍼스널 브랜딩 기반의 강력한 팬덤 구축",
      "인플루언서 영향력을 활용한 제휴 브랜드 홍보 효과 극대화",
      "유료 구독 서비스 연계를 통한 안정적인 부가가치 창출",
    ],
    media: {
      type: "image" as const,
      src: "/images/solution/virtual.png",
      alt: "버츄얼 인플루언서, 모찌츄 ",
    },
  },
  {
    id: "homepage",
    badge: "LIVE COMMERCE",
    title: "24시간 버추얼 라이브",
    description:
      "샤오홍슈·도우인에 최적화된 버추얼 인플루언서를 라이브 호스트로 도입하세요. 시공간의 제약 없이 24시간 끊임없는 라이브 방송이 가능하며, 원어민 수준의 자연스러운 중국어 소통으로 중화권 소비자의 구매 전환을 극대화합니다.",
    highlights: [
      "24시간 중단 없는 자동화 라이브 스트리밍",
      "중국인 대역을 활용한 실시간 고객 대응",
      "인플루언서 섭외 비용 절감 및 매출 극대화",
    ],
    media: {
      type: "image" as const,
      src: "/images/solution/live-commerce.png",
      alt: "홈페이지 비디오 목업",
    },
  },
  {
    id: "did",
    badge: "BRAND IP SOLUTION",
    title: "브랜드 버추얼 아바타",
    description:
      "기업의 고유한 IP를 바탕으로 한 버추얼 아바타를 도입해 보세요. 오프라인 프로모션 부스나 팝업스토어 현장부터 인스타그램, 틱톡 등 SNS 마케팅까지. 물리적 한계를 허물며 브랜드의 메시지를 가장 트렌디하고 일관되게 전달할 수 있습니다.",
    highlights: [
      "기업 고유의 IP(캐릭터, 브랜드 앰버서더)를 버추얼 아바타로 완벽 구현",
      "오프라인 팝업 현장 디스플레이에 최적화된 홍보 영상 제공",
      "SNS 마케팅 숏폼 콘텐츠의 무한한 생성 및 확장성",
    ],
    media: {
      type: "video" as const,
      src: "/videos/virtual-avatar.mp4",
      alt: "DID 비디오 목업",
    },
  },
]

export default function SolutionPage() {
  return (
    <main className="bg-black">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        {/* Ambient glow */}
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
            Solution
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight"
          >
            버추얼 IP로 만드는
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              비즈니스 스케일업 
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            중국 라이브 이커머스 호스트부터 브랜드 엠버서더까지,
            <br className="hidden md:block" />
            브랜드의 매출을 극대화하는 차세대 엔터테인먼트 파트너
          </motion.p>
        </div>
      </section>

      {/* ── Solution Cards ── */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-40">
          {solutions.map((sol, idx) => (
            <SolutionBlock key={sol.id} solution={sol} index={idx} />
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-indigo-400 mb-4">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              간단한 3단계로 시작하세요
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "페르소나 설계",
                desc: "활용 목적에 맞는 페르소나를 설계하고, 아바타 이미지를 생성합니다.",
              },
              {
                step: "02",
                title: "아바타 생성",
                desc: "버추얼 휴먼 제작 파이프라인으로 콘텐츠를 생성합니다. ",
              },
              {
                step: "03",
                title: "배포 & 운영",
                desc: "샤오홍슈, 인스타그램 등 원하는 채널에 바로 배포합니다.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 group hover:border-indigo-500/40 transition-colors duration-300"
              >
                <span className="text-3xl font-light bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Family ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-indigo-400 mb-4">
              Brand Family
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              오닉스가 만드는 또 하나의 브랜드
            </h2>
          </motion.div>

          <a
            href="https://www.avatarstudio.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center"
          >
            {/* Media */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex-shrink-0"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] group-hover:border-indigo-500/40 transition-colors duration-300">
                <Image
                  src="/images/solution/avatarstudio.png"
                  alt="아바타스튜디오"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase rounded-full border border-indigo-500/40 text-indigo-400 mb-4">
                Creator Management
              </span>
              <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                Avatar Studio
              </h3>
              <p className="mt-4 text-white/60 leading-relaxed">
                얼굴 노출 부담 없이 시작하는 크리에이터 매니지먼트. 자체 얼굴 변환 기술로 <br></br>새로운 가상 얼굴을 부여하고, 콘텐츠 제작부터 마케팅·운영까지 크리에이터 <br></br>활동 전 과정을 책임집니다.
              </p>
              <span className="inline-flex items-center gap-1 group-hover:gap-3 transition-all duration-300 mt-6 text-indigo-400 text-sm">
                사이트 방문하기 <span>→</span>
              </span>
            </motion.div>
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
            우리 브랜드에 적용하고 싶다면?
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            구체적인 활용 방안과 견적을 안내해드립니다.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-10 px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-base font-light rounded-xl hover:opacity-90 transition-opacity duration-200"
          >
            도입 문의하기
          </motion.a>
        </motion.div>
      </section>
    </main>
  )
}

/* ── Solution Block Component ── */
function SolutionBlock({
  solution,
  index,
}: {
  solution: (typeof solutions)[number]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`flex flex-col gap-10 md:gap-16 items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Media */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex-shrink-0"
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
          {solution.media.type === "video" ? (
            <video
              className="w-full aspect-video bg-black"
              controls
              playsInline
              preload="metadata"
              muted
            >
              <source src={solution.media.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={solution.media.src}
              alt={solution.media.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          )}
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase rounded-full border border-indigo-500/40 text-indigo-400 mb-4">
          {solution.badge}
        </span>
        <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight">
          {solution.title}
        </h3>
        <p className="mt-4 text-white/60 leading-relaxed">
          {solution.description}
        </p>
        <ul className="mt-6 space-y-3">
          {solution.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-white/70 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
