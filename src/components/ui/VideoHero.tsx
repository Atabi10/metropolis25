'use client'

export function VideoHero({ src }: { src: string }) {
  return (
    <video
      src={src}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  )
}
