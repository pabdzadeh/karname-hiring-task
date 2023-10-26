import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/providers/query-client-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karnameh Hiring Task',
  description: 'A demo of some question answering pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <QueryProvider>
        <body className="font-yekan">{children}</body>
      </QueryProvider>
    </html>
  )
}
