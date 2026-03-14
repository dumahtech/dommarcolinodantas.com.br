'use client'
import { useState } from 'react'
import Topbar from '@/components/Topbar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: '', sobrenome: '', email: '', tel: '', segmento: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = () => {
    if (!form.nome || !form.email) return alert('Preencha nome e e-mail.')
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm({ nome: '', sobrenome: '', email: '', tel: '', segmento: '' })
  }

  return (
    <>
      <Topbar />
      <Nav />

      <div className="contato-section">
        <div className="contato-card">

          {/* INFO */}
          <div className="contato-info">
            <div className="info-block">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="info-label">Fone</div>
              <div className="info-value">
                <a href="tel:+558432136889">(84) 3213-6889</a>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="info-label">E-mail</div>
              <div className="info-value">
                <a href="mailto:recepcao@dommarcolinodantas.com.br">recepcao@dommarcolinodantas.com.br</a>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="info-label">Localização</div>
              <div className="info-value">
                R. Jaguarari, 1678 – Alecrim,<br />Natal – RN, 59030-500
              </div>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="contato-form">
            <h2>Fale conosco</h2>
            <p className="subtitle">Preencha o formulário abaixo para mais informações. Em breve nossos educadores entrarão em contato.</p>

            <div className="form-row">
              <div className="form-group">
                <label>Nome <span>*</span></label>
                <input name="nome" value={form.nome} onChange={handle} type="text" placeholder="Nome" />
              </div>
              <div className="form-group">
                <label>&nbsp;</label>
                <input name="sobrenome" value={form.sobrenome} onChange={handle} type="text" placeholder="Sobrenome" />
              </div>
            </div>
            <div className="form-group">
              <label>E-mail <span>*</span></label>
              <input name="email" value={form.email} onChange={handle} type="email" placeholder="Digite seu e-mail" />
            </div>
            <div className="form-group">
              <label>Telefone <span>*</span></label>
              <input name="tel" value={form.tel} onChange={handle} type="tel" placeholder="Telefone com DDD ex.: (11) 1234-5678" />
            </div>
            <div className="form-group">
              <label>Segmento de Interesse <span>*</span></label>
              <select name="segmento" value={form.segmento} onChange={handle}>
                <option value="" disabled>Segmento de interesse</option>
                <option>Educação Infantil</option>
                <option>Ensino Fundamental I</option>
                <option>Ensino Fundamental II</option>
                <option>Ensino Médio</option>
              </select>
            </div>
            <div className="form-submit" style={{ textAlign: 'right', marginTop: '6px' }}>
              <button className="btn-enviar-contato" onClick={submit}>Enviar</button>
            </div>
          </div>
        </div>
      </div>

      {/* MAPA */}
      <div className="map-section">
        <a
          href="https://maps.google.com/?q=R.+Jaguarari,+1678,+Alecrim,+Natal,+RN"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}
        >
          <div className="fake-map">
            <div className="map-pin">
              <div className="map-pin-icon" />
              <div className="map-pin-label">
                <div className="map-label-name">Escola Dom Marcolino Dantas</div>
                <div className="map-label-addr">R. Jaguarari, 1678 – Alecrim, Natal/RN</div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <Footer />

      {sent && <div className="toast show">✓ Mensagem enviada com sucesso!</div>}
    </>
  )
}
