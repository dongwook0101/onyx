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
    id: "homepage",
    badge: "Website",
    title: "메인 홈페이지 비디오",
    description:
      "브랜드의 첫인상을 결정짓는 메인 홈페이지에 디지털 트윈 영상을 삽입하여, 방문자에게 생동감 있는 브랜드 경험을 제공합니다. 실제 모델이 직접 말하는 듯한 자연스러운 인사 영상으로 신뢰와 친밀감을 동시에 전달합니다.",
    highlights: [
      "브랜드 대표/모델의 환영 메시지",
      "서비스 소개 및 프로모션 안내",
      "다국어 지원으로 글로벌 대응",
    ],
    media: {
      type: "image" as const,
      src: "/images/solution/homepage-mockup.png",
      alt: "홈페이지 비디오 목업",
    },
  },
  {
    id: "did",
    badge: "On-site",
    title: "현장 DID 비디오",
    description:
      "매장, 전시장, 병원 등 오프라인 현장의 디지털 사이니지(DID)에 AI 아바타 영상을 송출합니다. 시간대별, 고객 세그먼트별로 맞춤 콘텐츠를 자동 생성하여 운영 효율을 극대화합니다.",
    highlights: [
      "매장·병원·전시장 등 현장 디스플레이",
      "시간대·상황별 자동 콘텐츠 변환",
      "촬영 없이 신속한 영상 교체",
    ],
    media: {
      type: "video" as const,
      src: "/videos/did_mockup.mp4",
      alt: "DID 비디오 목업",
    },
  },
  {
    id: "vip",
    badge: "Personalized",
    title: "VIP 고객 커스텀 비디오",
    description:
      "수백 명의 고객 각각에게 이름을 불러주는 1:1 맞춤 영상 메시지를 생성합니다. 카카오톡, 문자 등 다양한 채널로 발송하여 특별한 고객 경험을 선사합니다.",
    highlights: [
      "고객 이름·정보 기반 개인화 메시지",
      "카카오톡·문자·이메일 다채널 발송",
      "시술 후기, VIP 초대, 기념일 축하 등",
    ],
    media: {
      type: "image" as const,
      src: "/images/solution/vip-mockup.png",
      alt: "VIP 커스텀 비디오 목업",
    },
  },
  {
    id: "clothing",
    badge: "E-commerce",
    title: "의류 피팅 이미지",
    description:
      "실제 모델의 체형 데이터를 기반으로 다양한 의류를 AI로 피팅한 이미지를 생성합니다. 촬영 일정과 비용 없이도 수백 벌의 룩북을 빠르게 제작할 수 있습니다.",
    highlights: [
      "실물과 구분 어려운 고품질 피팅 이미지",
      "촬영 비용·시간 대폭 절감",
      "시즌별 대량 룩북 제작 가능",
    ],
    media: {
      type: "image" as const,
      src: "/images/solution/clothing-mockup.png",
      alt: "의류 피팅 이미지 목업",
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
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight"
          >
            하나의 촬영으로
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              무한한 콘텐츠를
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            홈페이지, 현장 디스플레이, 개인화 메시지, 피팅 이미지까지 —
            <br className="hidden md:block" />
            AI 디지털 트윈이 만드는 새로운 콘텐츠 파이프라인을 만나보세요.
          </motion.p>
        </div>
      </section>

      {/* ── Solution Cards ── */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto space-y-32 md:space-y-40">
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
                title: "촬영 & 수집",
                desc: "모델의 영상·음성·이미지를 1회 촬영합니다. 기존 소스가 있다면 그대로 활용 가능합니다.",
              },
              {
                step: "02",
                title: "AI 생성",
                desc: "디지털 트윈 제작 파이프라인으로 콘텐츠를 생성합니다. 원하는 영상을 모두 제작해드립니다.",
              },
              {
                step: "03",
                title: "배포 & 운영",
                desc: "홈페이지, DID, 메신저 등 원하는 채널에 바로 배포합니다. 수정과 업데이트도 실시간으로 가능합니다.",
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
