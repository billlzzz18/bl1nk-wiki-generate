import './globals.css'
import { Noto_Serif_Thai, Prompt } from 'next/font/google'

const thai = Noto_Serif_Thai({ subsets: ['thai'], weight: ['400', '600'] })
const en = Prompt({ subsets: ['latin'], weight: ['400', '500'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="dark">
      <body className={`${thai.className} ${en.variable}`}>
        {children}
      </body>
    </html>
  )
}
