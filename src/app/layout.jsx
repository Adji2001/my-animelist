import { Oswald } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'My AnimeList',
  description: 'Website anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-warne-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
