'use client'
import { useState } from 'react'

export default function InfoForm() {
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
    <div style={{ background: 'white', padding: '0 40px' }}>
      <div className="info-section">
        <div className="info-left">
          <h2>Informações</h2>
          <p>Preencha o formulário ao lado para mais informações. Em breve nossos educadores entrarão em contato.</p>
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:recepcao@dommarcolinodantas.com.br" style={{ color: 'var(--text)', textDecoration: 'none' }}>recepcao@dommarcolinodantas.com.br</a>
          </div>
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            (84) 3213-6889
          </div>
        </div>
        <div>
          <div className="form-row">
            <div className="form-group"><input name="nome" value={form.nome} onChange={handle} type="text" placeholder="Nome" /></div>
            <div className="form-group"><input name="sobrenome" value={form.sobrenome} onChange={handle} type="text" placeholder="Sobrenome" /></div>
          </div>
          <div className="form-group"><input name="email" value={form.email} onChange={handle} type="email" placeholder="Digite seu e-mail" /></div>
          <div className="form-group"><input name="tel" value={form.tel} onChange={handle} type="tel" placeholder="Telefone com DDD ex.: (11) 1234-5678" /></div>
          <div className="form-group">
            <select name="segmento" value={form.segmento} onChange={handle}>
              <option value="" disabled>Segmento de interesse</option>
              <option>Educação Infantil</option>
              <option>Ensino Fundamental I</option>
              <option>Ensino Fundamental II</option>
              <option>Ensino Médio</option>
            </select>
          </div>
          <div className="form-submit"><button className="btn-enviar" onClick={submit}>Enviar</button></div>
        </div>
      </div>
      {sent && <div className="toast show">✓ Mensagem enviada com sucesso!</div>}
    </div>
  )
}
