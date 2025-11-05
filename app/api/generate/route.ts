import { NextRequest } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt,
    n: 4,
    size: '1024x1024',
  })
  const images = response.data.map(img => img.url!).filter(Boolean)
  return Response.json({ images })
}
