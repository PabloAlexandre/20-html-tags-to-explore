'use client';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>The HTML Tags</title>
        <base target="_blank" />
        <link rel="preload" href="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" as="image" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-800`}>{children}</body>
    </html>
  )
}
