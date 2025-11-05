import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
        Wiki AI Generator
      </h1>
      <Link href="/generator" className="px-6 py-3 bg-accent text-white rounded-card font-medium">
        เริ่มสร้างภาพ AI
      </Link>
    </div>
  )
}
