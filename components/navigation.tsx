"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "ABOUT", href: "/about" },
  { name: "SOLUTION", href: "/solution" },
  { name: "NEWS", href: "/news" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            ONYX
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-light text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://www.avatarstudio.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center text-[16.8px] font-semibold text-white/80 hover:text-white transition-colors duration-200"
            >
              <Image
                src="/images/brand/avatar-studio-logo.png"
                alt=""
                aria-hidden="true"
                width={31}
                height={31}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[31px] w-[31px] opacity-90"
              />
              <span className="relative z-10">AVATAR STUDIO</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-light rounded-xl hover:opacity-90 transition-opacity duration-200"
            >
              CONTACT
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-light text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.avatarstudio.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 relative inline-flex items-center text-[21.6px] font-semibold text-white/80 hover:text-white transition-colors"
              >
                <Image
                  src="/images/brand/avatar-studio-logo.png"
                  alt=""
                  aria-hidden="true"
                  width={37}
                  height={37}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[37px] w-[37px] opacity-90"
                />
                <span className="relative z-10">AVATAR STUDIO</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-base font-light rounded-xl"
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
