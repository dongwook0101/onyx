import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/navigation'

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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="font-sans antialiased bg-black text-white">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
