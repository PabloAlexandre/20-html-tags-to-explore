import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" spellCheck={false} contentEditable translate='no'>
      <head>
        <title>The HTML Tags</title>
        <base target="_blank" />
      </head>
      <body className={`${inter.className} bg-white dark:text-white dark:bg-gray-800`}>{children}</body>
    </html>
  )
}
