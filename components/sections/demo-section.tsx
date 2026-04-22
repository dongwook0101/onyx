"use client"

import { motion } from "framer-motion"

export function DemoSection() {
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
            DEMO
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            인플루언서의 영향력을 자산화하는 고정밀 버추얼 휴먼 솔루션을 제공합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
              브라우저가 비디오 태그를 지원하지 않습니다.
            </video>
            
          </div>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto text-center">
            Digital Twin | 미스 춘향 진 김도연 모델
          </p>
        </motion.div>
      </div>
    </section>
  )
}
