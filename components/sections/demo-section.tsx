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
            <div className="aspect-video w-full bg-white/5 flex flex-col items-center justify-center gap-3">
              <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <p className="text-white/40 text-sm tracking-widest uppercase">영상 준비중입니다</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
