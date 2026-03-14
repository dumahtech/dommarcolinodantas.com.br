'use client'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Topbar from '@/components/Topbar'
import Nav from '@/components/Nav'
import SocialSection from '@/components/SocialSection'
import Footer from '@/components/Footer'

// Capas
import galeria1 from '@/assets/galeria/gaelria-1.webp'
import galeria2 from '@/assets/galeria/gaelria-2.webp'
import galeria3 from '@/assets/galeria/gaelria-3.webp'
import galeria4 from '@/assets/galeria/gaelria-4.webp'
import galeria5 from '@/assets/galeria/gaelria-5.webp'
import galeria6 from '@/assets/galeria/gaelria-6.webp'
import galeria7 from '@/assets/galeria/gaelria-7.webp'

// Missa de Conclusão do Pré 2023
import missa1 from '@/assets/galeria/Missa de Conclusão do Pré 2023/missa-1.webp'
import missa2 from '@/assets/galeria/Missa de Conclusão do Pré 2023/missa-2.webp'
import missa3 from '@/assets/galeria/Missa de Conclusão do Pré 2023/missa-3.webp'
import missa4 from '@/assets/galeria/Missa de Conclusão do Pré 2023/missa-4.webp'
import missa5 from '@/assets/galeria/Missa de Conclusão do Pré 2023/missa-5.webp'

// Festival de Futsal 2023
import festival1 from '@/assets/galeria/Festival de futsal 2023/festival-1.webp'
import festival2 from '@/assets/galeria/Festival de futsal 2023/festival-2.webp'
import festival3 from '@/assets/galeria/Festival de futsal 2023/festival-3.webp'
import festival4 from '@/assets/galeria/Festival de futsal 2023/festival-4.webp'
import festival5 from '@/assets/galeria/Festival de futsal 2023/festival-5.webp'

// Confra Natalina 2023
import confra1 from '@/assets/galeria/Confra natalina 2023/confra-1.webp'
import confra2 from '@/assets/galeria/Confra natalina 2023/confra-2.webp'
import confra3 from '@/assets/galeria/Confra natalina 2023/confra-3.webp'
import confra4 from '@/assets/galeria/Confra natalina 2023/confra-4.webp'
import confra5 from '@/assets/galeria/Confra natalina 2023/confra-5.webp'
import confra6 from '@/assets/galeria/Confra natalina 2023/confra-6.webp'

// Celebração Social do Pré 2023
import celebracao1 from '@/assets/galeria/Celebração Social do Pré 2023/celebração-1.webp'
import celebracao2 from '@/assets/galeria/Celebração Social do Pré 2023/celebração-2.webp'
import celebracao3 from '@/assets/galeria/Celebração Social do Pré 2023/celebração-3.webp'
import celebracao4 from '@/assets/galeria/Celebração Social do Pré 2023/celebração-4.webp'
import celebracao5 from '@/assets/galeria/Celebração Social do Pré 2023/celebração-5.webp'

// 3° lugar nos Jerninhos
import jerns1 from '@/assets/galeria/3° lugar nos Jerninhos/jerns_1.webp'

// São João 2023
import saoJoao1 from '@/assets/galeria/São João 2023/são joao-1.webp'
import saoJoao2 from '@/assets/galeria/São João 2023/são joao-2.webp'
import saoJoao3 from '@/assets/galeria/São João 2023/são joao-3.webp'
import saoJoao4 from '@/assets/galeria/São João 2023/são joao-4.webp'
import saoJoao5 from '@/assets/galeria/São João 2023/são joao-5.webp'

// Dia das Mães 2023
import maes1 from '@/assets/galeria/Dia das Mães 2023/Dia das Mães 2023-1.webp'
import maes2 from '@/assets/galeria/Dia das Mães 2023/Dia das Mães 2023-2.webp'
import maes3 from '@/assets/galeria/Dia das Mães 2023/Dia das Mães 2023-3.webp'
import maes4 from '@/assets/galeria/Dia das Mães 2023/Dia das Mães 2023-4.webp'
import maes5 from '@/assets/galeria/Dia das Mães 2023/Dia das Mães 2023-5.webp'

const albums = [
  { img: galeria1, title: 'Missa de Conclusão do Pré 2023', photos: [missa1, missa2, missa3, missa4, missa5] },
  { img: galeria2, title: 'Festival de Futsal 2023', photos: [festival1, festival2, festival3, festival4, festival5] },
  { img: galeria3, title: 'Confra Natalina 2023', photos: [confra1, confra2, confra3, confra4, confra5, confra6] },
  { img: galeria4, title: 'Celebração Social do Pré 2023', photos: [celebracao1, celebracao2, celebracao3, celebracao4, celebracao5] },
  { img: galeria5, title: '3° lugar nos Jerninhos', photos: [jerns1] },
  { img: galeria6, title: 'São João 2023', photos: [saoJoao1, saoJoao2, saoJoao3, saoJoao4, saoJoao5] },
  { img: galeria7, title: 'Dia das Mães 2023', photos: [maes1, maes2, maes3, maes4, maes5] },
]

type Album = typeof albums[0]

export default function GaleriaPage() {
  const [lightbox, setLightbox] = useState<null | { album: Album; index: number }>(null)

  const open = (album: Album, index = 0) => setLightbox({ album, index })
  const close = () => setLightbox(null)
  const prev = () => lightbox && setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.album.photos.length) % lightbox.album.photos.length })
  const next = () => lightbox && setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.album.photos.length })

  return (
    <>
      <Topbar />
      <Nav />

      <div className="galeria-section">
        <div className="galeria-header">
          <h1>Galeria de Fotos</h1>
          <p>Confira os registros dos nossos eventos e momentos especiais.</p>
        </div>
        <div className="galeria-grid">
          {albums.map((a) => (
            <div className="galeria-card" key={a.title} onClick={() => open(a, 0)}>
              <div className="galeria-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="galeria-card-body">
                <span className="galeria-tag">Galerias</span>
                <div className="galeria-card-title">{a.title}</div>
                <button className="btn-ver-fotos">Ver fotos ({a.photos.length})</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)',
            zIndex: 1000, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}
          onClick={close}
        >
          <button
            onClick={close}
            style={{
              position: 'absolute', top: '16px', right: '20px',
              background: 'none', border: 'none', color: 'white',
              fontSize: '36px', cursor: 'pointer', lineHeight: 1, zIndex: 10,
            }}
          >×</button>

          {/* Main photo */}
          <div
            style={{ position: 'relative', maxWidth: '85vw', maxHeight: '70vh', display: 'flex', alignItems: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prev}
              style={{
                position: 'absolute', left: '-50px', background: 'rgba(255,255,255,0.15)',
                border: 'none', color: 'white', fontSize: '32px', width: '44px', height: '44px',
                borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
              }}
            >&#8249;</button>

            <Image
              src={lightbox.album.photos[lightbox.index]}
              alt={lightbox.album.title}
              style={{ maxWidth: '85vw', maxHeight: '70vh', objectFit: 'contain', borderRadius: '8px', display: 'block' }}
            />

            <button
              onClick={next}
              style={{
                position: 'absolute', right: '-50px', background: 'rgba(255,255,255,0.15)',
                border: 'none', color: 'white', fontSize: '32px', width: '44px', height: '44px',
                borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
              }}
            >&#8250;</button>
          </div>

          {/* Title + counter */}
          <div
            style={{ color: 'white', textAlign: 'center', marginTop: '16px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontWeight: 600, fontSize: '16px' }}>{lightbox.album.title}</div>
            <div style={{ fontSize: '13px', opacity: 0.6, marginTop: '4px' }}>
              {lightbox.index + 1} / {lightbox.album.photos.length}
            </div>
          </div>

          {/* Thumbnails strip */}
          <div
            style={{
              display: 'flex', gap: '8px', marginTop: '16px', overflowX: 'auto',
              maxWidth: '90vw', padding: '4px 0',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.album.photos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setLightbox({ ...lightbox, index: i })}
                style={{
                  width: '64px', height: '48px', flexShrink: 0, cursor: 'pointer',
                  borderRadius: '4px', overflow: 'hidden',
                  outline: i === lightbox.index ? '2px solid white' : '2px solid transparent',
                  opacity: i === lightbox.index ? 1 : 0.5,
                  transition: 'opacity 0.2s, outline 0.2s',
                }}
              >
                <Image src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      )}

      <SocialSection />
      <Footer />
    </>
  )
}
