'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import banner1 from '@/assets/home/banner-1.webp'
import banner2 from '@/assets/home/banner-2.webp'
import banner3 from '@/assets/home/banner-3.webp'

const slides = [
  { badge: 'Google for Education', title: 'Google for Education', desc: 'Recursos avançados para ajudar no desenvolvimento dos alunos.', link: '/ensino', bg: banner2, imageOnly: false },
  { imageOnly: true, bg: banner1 },
  { badge: 'Esporte e Cultura', title: 'Esporte e cultura', desc: 'Estrutura e recursos humanos unidos para um ensino de qualidade', link: '/ensino', bg: banner3, imageOnly: false },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const go = (n: number) => setCurrent((n + slides.length) % slides.length)

  return (
    <div className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: i === 0 ? 'relative' : 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: i === current ? 1 : 0,
            width: '100%',
            height: '100%',
          }}
        >
          {s.imageOnly ? (
            <Image src={s.bg} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <>
              <Image src={s.bg} alt="Banner" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,60,0.75) 0%, rgba(10,10,60,0.2) 50%, transparent 100%)', zIndex: 1 }} />
              <div className="hero-content" style={{ position: 'absolute', bottom: '60px', zIndex: 2 }}>
                <div className="hero-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                  </svg>
                  {s.badge}
                </div>
                <h1>{s.title}</h1>
                <p>{s.desc}</p>
                <Link href={s.link!} className="btn-saiba">Saiba mais</Link>
              </div>
            </>
          )}
        </div>
      ))}
      <button className="hero-arrow hero-arrow-left" style={{ zIndex: 10 }} onClick={() => go(current - 1)}>&#8249;</button>
      <button className="hero-arrow hero-arrow-right" style={{ zIndex: 10 }} onClick={() => go(current + 1)}>&#8250;</button>
      <div className="hero-nav-dots" style={{ zIndex: 10 }}>
        {slides.map((_, i) => (
          <button key={i} className={`hero-dot${i === current ? ' active' : ''}`} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  )
}
