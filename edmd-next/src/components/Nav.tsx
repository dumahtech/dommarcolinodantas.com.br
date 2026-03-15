'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/escola', label: 'Escola' },
  { href: '/ensino', label: 'Ensino' },
  { href: '/proposta', label: 'Proposta' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/contato', label: 'Contato' },
]

export default function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="main-nav">
      <button
        className={`nav-hamburger${isOpen ? ' nav-hamburger-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links${isOpen ? ' nav-open' : ''}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link href="/matriculas" className="btn-matriculas" onClick={() => setIsOpen(false)}>
          Matrículas
        </Link>
      </div>
    </nav>
  )
}
