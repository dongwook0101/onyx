import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'ONYX AI * PROJECT',
  description: '물리적 제약에서 벗어나 IP의 가능성을 무한히 확장합니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className="font-sans antialiased bg-black text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
