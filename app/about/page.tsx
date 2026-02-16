"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const stats = [
  { value: "50+", label: "프로젝트 완료" },
  { value: "99.2%", label: "음성 자연도" },
  { value: "24/7", label: "서비스 가용성" },
  //{ value: "30+", label: "파트너 기업" },
]

const values = [
  {
    title: "혁신",
    description:
      "우리는 기술의 경계를 끊임없이 확장합니다. AI와 인간의 교차점에서 새로운 가능성을 탐구하며, 아직 누구도 가보지 않은 길을 개척합니다.",
    icon: "✦",
  },
  {
    title: "신뢰",
    description:
      "실제 인물의 외모와 음성을 다루는 만큼, 윤리적 기준과 투명성을 최우선으로 합니다. 모든 디지털 트윈은 본인의 동의 하에 제작됩니다.",
    icon: "◈",
  },
  {
    title: "연결",
    description:
      "기술은 사람과 사람을 이어주는 다리여야 합니다. 우리는 브랜드와 고객 사이의 거리를 좁히고, 진정한 소통이 일어나는 경험을 설계합니다.",
    icon: "◇",
  },
]

const milestones = [
  { year: "2024", event: "디지털 트윈 파이프라인 개발" },
  { year: "2025", event: "첫 번째 모델 계약" },
  { year: "2025", event: "첫 수요처 파트너십 체결" },
  { year: "2025", event: "INSIDERS 대상 수상" },
  //{ year: "2025", event: "시리즈 A 투자 유치" },
  //{ year: "2025", event: "글로벌 시장 진출 (일본·동남아)" },
]

export default function AboutPage() {
  return (
    <main className="bg-black">
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/8 blur-[100px]" />
        </div>

        {/* Decoration
        <motion.div
          className="absolute top-16 right-[10%] w-28 h-28 md:w-40 md:h-40 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/decoration/rings.png"
            alt=""
            width={160}
            height={160}
            className="object-contain"
          />
        </motion.div> */}
        {/* <motion.div
          className="absolute bottom-20 left-[8%] w-24 h-24 md:w-32 md:h-32 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/decoration/droplet.png"
            alt=""
            width={128}
            height={128}
            className="object-contain"
          />
        </motion.div> */}

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-indigo-400 mb-6"
          >
            About ONYX
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight"
          >
            디지털 트윈의 가능성을
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              무한히 확장하다
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed"
          >
            ONYX는 AI 디지털 휴먼 기술을 통해
            <br className="hidden md:block" />
            시공간의 한계를 넘어선 커뮤니케이션을 만들어갑니다.
          </motion.p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-sm tracking-[0.2em] uppercase text-indigo-400 mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-snug">
                디지털 트윈으로 여는
                <br />
                새로운 소통의 시대
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-white/70 text-lg leading-relaxed">
                우리는 실제 인물의 외모, 음성, 표정을 정밀하게 재현하는 AI 디지털
                트윈 기술을 개발합니다. 이를 통해 기업은 시간과 장소에 구애받지
                않고, 신뢰할 수 있는 브랜드 메시지를 수백만 명에게 개인화하여
                전달할 수 있습니다.
              </p>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                단순한 기술이 아닌, 사람과 사람 사이의 연결을 더 깊고 넓게 만드는
                것이 ONYX의 미션입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 md:p-14"
          >
            <div className="grid grid-cols-3 gap-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-light bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-indigo-400 mb-4">
              Core Values
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              우리가 믿는 가치
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-indigo-500/30 bg-white/5 p-8 py-10 group hover:border-indigo-500/60 transition-colors duration-300"
              >
                <span className="inline-block text-2xl text-indigo-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-indigo-400 mb-4">
              Milestones
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              ONYX의 여정
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-transparent" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={`${m.year}-${i}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0
                      ? "md:flex-row md:text-right"
                      : "md:flex-row-reverse md:text-left"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-indigo-500 bg-black z-10" />

                  {/* Content */}
                  <div
                    className={`pl-8 md:pl-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <span className="text-xs tracking-wider text-indigo-400 font-medium">
                      {m.year}
                    </span>
                    <p className="mt-1 text-white/80 text-base">{m.event}</p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
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
            함께 만들어갈 준비가 되셨나요?
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            ONYX와 함께 브랜드의 새로운 커뮤니케이션을 시작하세요.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-10 px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-base font-light rounded-xl hover:opacity-90 transition-opacity duration-200"
          >
            문의하기
          </motion.a>
        </motion.div>
      </section>
    </main>
  )
}
