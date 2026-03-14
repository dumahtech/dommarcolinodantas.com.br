'use client'
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

  return (
    <nav className="main-nav">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? 'active' : ''}
        >
          {label}
        </Link>
      ))}
      <Link href="/matriculas" className="btn-matriculas">
        Matrículas
      </Link>
    </nav>
  )
}
