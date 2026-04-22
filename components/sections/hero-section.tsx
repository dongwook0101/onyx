"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-black">
      {/* Decorative elements - 첨부한 이미지 사용 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 왼쪽: 인터로킹 링 */}
        <motion.div
          className="absolute top-20 left-[12%] w-40 h-40 md:w-64 md:h-64 flex items-center justify-center origin-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/decoration/rings.png"
            alt=""
            width={240}
            height={240}
            className="object-contain"
          />
        </motion.div>
        <div className="absolute top-80 left-[20%] w-0.25 h-32 bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
        <div className="absolute top-82 left-[21%] w-0.25 h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />

        {/* 오른쪽: 리본 형태 */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-[6%] w-40 h-40 md:w-96 md:h-96 flex items-center justify-center origin-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/decoration/ribbon.png"
            alt=""
            width={320}
            height={320}
            className="object-contain"
          />
        </motion.div>
        <div className="absolute top-30 right-[14%] w-0.25 h-24 bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
        <div className="absolute top-32 right-[15%] w-0.25 h-24 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />

        {/* 하단 왼쪽: 물방울/액체 형태 */}
        <motion.div
          className="absolute bottom-32 left-[22%] w-40 h-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/decoration/droplet.png"
            alt=""
            width={160}
            height={160}
            className="object-contain"
          />
        </motion.div>
      </div>

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
            <Image
              src="/images/decoration/star.png"
              alt=""
              width={28}
              height={28}
              className="inline-block mx-1 align-middle w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 -translate-y-1"
            />
            PROJECT
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
        >
          단 하나의 버추얼 휴먼,
          <br />
          채널을 확장하는 혁신의 시작
        </motion.p>
      </div>
    </section>
  )
}
