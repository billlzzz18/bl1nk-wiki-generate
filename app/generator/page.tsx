'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Wand2 } from 'lucide-react'

export default function Generator() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('')

  const generate = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ prompt }),
      })
      const { images } = await res.json()
      setImages(images)
    } catch (e) {
      alert('Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Card className="border border-border rounded-card bg-[var(--color-neutral-surface)] backdrop-blur-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-accent" />
            AI Image Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="พิมพ์สิ่งที่ต้องการ เช่น cute cat sticker"
            className="border-border rounded-card"
          />
          <Button onClick={generate} disabled={loading} className="w-full bg-accent text-white rounded-card">
            {loading ? 'กำลังสร้าง...' : 'สร้างภาพ'}
          </Button>
        </CardContent>
      </Card>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((url, i) => (
            <div key={i} className="relative group">
              <img src={url} alt="" className="w-full h-48 object-cover rounded-card" />
              <Button
                onClick={() => navigator.clipboard.writeText(`![AI](${url})`)}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/60 text-white rounded-card"
              >
                Copy Markdown
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
