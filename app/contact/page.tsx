"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setForm({ name: "", company: "", phone: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-indigo-500/60 transition-colors duration-200"

  return (
    <main className="min-h-screen bg-black">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-indigo-400 mb-6">Contact</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
              도입 문의
            </h1>
            <p className="mt-4 text-white/50 text-lg">
              궁금한 점이 있으시면 언제든지 연락주세요.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-1.5 ml-1">
                  이름 <span className="text-indigo-400">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="홍길동"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5 ml-1">회사명</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="(주)ONYX"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-1.5 ml-1">연락처</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="010-0000-0000"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5 ml-1">
                  이메일 <span className="text-indigo-400">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/50 mb-1.5 ml-1">
                문의 내용 <span className="text-indigo-400">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="문의하실 내용을 자유롭게 작성해주세요."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                전송에 실패했습니다. 잠시 후 다시 시도해주세요.
              </p>
            )}

            {status === "success" ? (
              <div className="rounded-xl border border-indigo-500/40 bg-indigo-500/10 py-5 text-center">
                <p className="text-white font-light">문의가 성공적으로 접수되었습니다.</p>
                <p className="text-white/50 text-sm mt-1">빠른 시일 내에 연락드리겠습니다.</p>
              </div>
            ) : (
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-light rounded-xl hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "전송 중..." : "문의하기"}
              </motion.button>
            )}
          </motion.form>
        </div>
      </section>
    </main>
  )
}
