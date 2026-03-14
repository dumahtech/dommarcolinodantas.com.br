'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/DomMarcolino_Logo-03.png'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-logo">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Image src={logo} alt="Escola Dom Marcolino Dantas" height={110} style={{ display: 'block' }} />
        </Link>
      </div>

      <div className="topbar-search">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input type="text" placeholder="Pesquisar" />
      </div>

      <div className="topbar-btns">
        <a href="https://webmail.dommarcolinodantas.com.br" target="_blank" rel="noopener noreferrer" className="btn-webmail">
          Web Mail
        </a>
        <a href="https://siga.activesoft.com.br" target="_blank" rel="noopener noreferrer" className="btn-siga">
          SIGA – Activesoft
        </a>
      </div>
    </div>
  )
}
