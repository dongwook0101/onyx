"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

export function HeroSection() {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springCfg = { damping: 30, stiffness: 60 }
  const smoothX = useSpring(rawX, springCfg)
  const smoothY = useSpring(rawY, springCfg)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5)
      rawY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [rawX, rawY])

  // 각 오브젝트별 Z-depth 차등: ribbon > rings > droplet
  const ribbonX = useTransform(smoothX, [-0.5, 0.5], [40, -40])
  const ribbonY = useTransform(smoothY, [-0.5, 0.5], [28, -28])

  const ringsX  = useTransform(smoothX, [-0.5, 0.5], [20, -20])
  const ringsY  = useTransform(smoothY, [-0.5, 0.5], [14, -14])

  const dropletX = useTransform(smoothX, [-0.5, 0.5], [10, -10])
  const dropletY = useTransform(smoothY, [-0.5, 0.5], [7,  -7])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* ── 배경 글로우 ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[700px] rounded-full
                        bg-indigo-600/15 blur-[160px]" />
        <div className="absolute top-1/3 left-1/4
                        w-[400px] h-[400px] rounded-full
                        bg-purple-700/10 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4
                        w-[300px] h-[300px] rounded-full
                        bg-indigo-500/8 blur-[100px]" />
      </div>

      {/* ── 3D 데코레이션 ── */}
      <div className="absolute inset-0 pointer-events-none">

        {/* 링 — 모바일: 우상단 / 데스크탑: 좌상단 */}
        <motion.div
          className="absolute top-20 right-4 md:top-20 md:right-auto md:left-[12%]"
          style={{ x: ringsX, y: ringsY }}
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, -3, 0], scale: [1, 1.05, 0.97, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          >
            <Image
              src="/images/decoration/ring.png"
              alt="" width={240} height={240}
              className="w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 리본 — 모바일: 우하단 / 데스크탑: 우측 중앙 */}
        <motion.div
          className="absolute bottom-28 right-2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-[6%]"
          style={{ x: ribbonX, y: ribbonY }}
        >
          <motion.div
            animate={{ y: [0, 26, 0], rotate: [0, -6, 4, 0], scale: [1, 1.07, 0.96, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <Image
              src="/images/decoration/ribbon.png"
              alt="" width={320} height={320}
              className="w-32 h-32 md:w-40 md:h-40 lg:w-96 lg:h-96 object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 물방울 — 모바일: 좌하단 / 데스크탑: 좌하단 */}
        <motion.div
          className="absolute bottom-28 left-2 md:bottom-32 md:left-[22%]"
          style={{ x: dropletX, y: dropletY }}
        >
          <motion.div
            animate={{ y: [0, -28, 0], rotate: [0, 12, -7, 0], scale: [1, 1.14, 0.92, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          >
            <Image
              src="/images/decoration/droplet.png"
              alt="" width={160} height={160}
              className="w-28 h-28 md:w-40 md:h-40 object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 라인 액센트 */}
        <div className="hidden md:block absolute top-80 left-[20%] w-px h-32
                        bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
        <div className="hidden md:block absolute top-80 left-[21%] w-px h-32
                        bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
        <div className="hidden md:block absolute top-30 right-[14%] w-px h-24
                        bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
        <div className="hidden md:block absolute top-32 right-[15%] w-px h-24
                        bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      </div>

      {/* ── 텍스트 ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-light text-white tracking-tight"
        >
          <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            ONYX
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight mt-2">
            AI
            {/* 별 — 천천히 회전 + 미세 opacity 변화 */}
            <motion.span
              className="inline-block mx-1 align-middle -translate-y-1"
              animate={{
                rotate: [0, 360],
                opacity: [0.65, 1, 0.65],
              }}
              transition={{
                rotate:  { duration: 14, repeat: Infinity, ease: "linear" },
                opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Image
                src="/images/decoration/star.png"
                alt="" width={28} height={28}
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </motion.span>
            PROJECT
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto"
        >
          단 하나의 버추얼 휴먼,
          <br />
          채널을 확장하는 혁신의 시작
        </motion.p>
      </div>
    </section>
  )
}
