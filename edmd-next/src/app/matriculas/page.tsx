'use client'
import { useState } from 'react'
import Image from 'next/image'

// backgrounds
import bgNavy     from '@/assets/matriculas/assets-landing-page/Group 491.png'
import bgHero     from '@/assets/matriculas/assets-landing-page/bg pagina 1.png'
import bgPink     from '@/assets/matriculas/assets-landing-page/Group 533.png'
import bgBlue     from '@/assets/matriculas/assets-landing-page/Group 546.png'
import bgEstrutura from '@/assets/matriculas/assets-landing-page/bg-nossa estrutura.svg'

// hero / footer
import logo75       from '@/assets/matriculas/assets-landing-page/logo-75-anos.svg'
import logoVic      from '@/assets/matriculas/assets-landing-page/logo-educacao-vicentina.png'
import logo         from '@/assets/matriculas/assets-landing-page/logo.png'
import students     from '@/assets/matriculas/assets-landing-page/Agrupar 11 1.png'
import family       from '@/assets/matriculas/assets-landing-page/Camada 0 3.png'
import girl         from '@/assets/matriculas/assets-landing-page/Camada 32 copiar 1.png'
import incricaoFoto from '@/assets/matriculas/assets-landing-page/incrição foto.png'
import sloganInt    from '@/assets/matriculas/assets-landing-page/slogan integral.png'
import btnMatriculas from '@/assets/matriculas/assets-landing-page/Matriculas-abertas-botão.png'

// 75 anos student cards
import card1 from '@/assets/matriculas/assets-landing-page/1.png'
import card2 from '@/assets/matriculas/assets-landing-page/2.png'
import card3 from '@/assets/matriculas/assets-landing-page/3.png'
import card4 from '@/assets/matriculas/assets-landing-page/4.png'

// diferenciais icons
import iconPastoral  from '@/assets/matriculas/assets-landing-page/Pastoral Escolar.png'
import iconBernoulli from '@/assets/matriculas/assets-landing-page/bertoli.png'
import iconEsportes  from '@/assets/matriculas/assets-landing-page/esportes.png'
import iconIntegral  from '@/assets/matriculas/assets-landing-page/integral.png'
import iconNAC       from '@/assets/matriculas/assets-landing-page/nac.png'
import iconRobotica  from '@/assets/matriculas/assets-landing-page/robotica 1.png'


const inp: React.CSSProperties = {
  width: '100%', border: '1px solid #cbd5e1', borderRadius: '6px',
  padding: '10px 12px', fontSize: '14px', color: '#333', outline: 'none',
  background: 'white',
}
const label: React.CSSProperties = {
  display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e3a8a', marginBottom: '5px',
}

const EMPTY_FORM = {
  responsavel: '', serie: '', aluno: '', jaAluno: 'nao',
  whatsapp: '', horario: '', email: '', segmentos: [] as string[],
  necessidade: 'nao', qualNecessidade: '',
}

export default function MatriculasPage() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  const WA = 'https://wa.me/558432136889'

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const toggleSegmento = (s: string) =>
    setForm(prev => ({
      ...prev,
      segmentos: prev.segmentos.includes(s)
        ? prev.segmentos.filter(x => x !== s)
        : [...prev.segmentos, s],
    }))

  const submit = () => {
    if (!form.responsavel || !form.whatsapp || !form.email) {
      alert('Preencha nome do responsável, WhatsApp e e-mail.')
      return
    }
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm(EMPTY_FORM)
  }

  return (
    <div style={{ fontFamily: 'var(--font-geist-sans, sans-serif)', color: '#333' }}>
      <style>{`
        .btn-wa {
          display: inline-block;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
        }
        .btn-wa:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 8px 24px rgba(0,0,0,0.22);
          filter: brightness(1.08);
        }
        .btn-wa:active {
          transform: translateY(0) scale(0.98);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', background: '#1535c8', overflow: 'hidden' }}>
        <Image src={bgHero} alt="" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '36px 32px 0', display: 'flex', alignItems: 'flex-end', minHeight: '480px' }}>

          {/* LEFT */}
          <div style={{ flex: 1, color: 'white', paddingBottom: '72px' }}>

            {/* Logo 75 anos + Escola Dom Marcolino Dantas */}
            <Image src={logo75} alt="Escola Dom Marcolino Dantas – 75 anos" width={280} style={{ display: 'block', marginBottom: '14px' }} />

            {/* Slogan text */}
            <p style={{ fontSize: '17px', fontWeight: 700, color: 'white', lineHeight: 1.45, marginBottom: '14px', maxWidth: '340px' }}>
              Inspirando vidas, descobrindo<br />talentos e moldando cidadãos.
            </p>

            {/* Educação Vicentina sticker */}
            <Image src={logoVic} alt="Isso é Educação Vicentina" width={230} style={{ marginBottom: '22px', display: 'block' }} />

            {/* Matrículas badge + bullets */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ flexShrink: 0, lineHeight: 0 }}>
                <Image src={btnMatriculas} alt="Matrículas Abertas 2025" height={70} style={{ objectFit: 'contain', display: 'block' }} />
              </a>
              <div style={{ color: 'white', fontSize: '14px', lineHeight: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                  <span>▶ Ensino Infantil</span>
                  <span>▶ Ensino Fundamental</span>
                  <span>▶ Ensino Médio</span>
                  <span>▶ Ensino Integral</span>
                </div>
                <div style={{ fontWeight: 700, marginTop: '2px' }}>Faça parte dessa história!</div>
              </div>
            </div>
          </div>

          {/* RIGHT – students */}
          <div style={{ flexShrink: 0, width: '440px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <Image src={students} alt="Alunos Dom Marcolino" width={440} style={{ objectFit: 'contain', display: 'block' }} />
          </div>
        </div>

      </section>

      {/* Contact bar */}
      <div style={{ background: '#0a1a6b', padding: '12px 32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '32px', color: 'white', fontSize: '13px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            84 3213-6889
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            @dommarcolinonatal
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @dommarcolinonatal
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            dommarcolinodantas.com.br
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          2. PROPÓSITO
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', background: '#fff', overflow: 'hidden' }}>
        <Image src={bgBlue} alt="" fill style={{ objectFit: 'cover', opacity: 0.15 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', margin: '0 auto', padding: '64px 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#071055', marginBottom: '20px' }}>
            O propósito da Escola Dom Marcolino Dantas
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#444', marginBottom: '16px' }}>
            A nossa missão é promover uma educação de qualidade, orientada por princípios <strong>cristãos e vicentinos</strong>, que possibilitem o desenvolvimento do cidadão consciente e científico, resgatando e mantendo a dignidade humana, agindo como agente transformador da realidade social e multiplicador do carisma vicentino.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#444', marginBottom: '32px' }}>
            As Filhas da Caridade de São Vicente de Paulo e toda a comunidade educativa celebra <strong>75 anos de presença comprometida</strong> com uma educação integral...
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ background: '#1e3a8a', color: 'white', fontWeight: 700, fontSize: '15px', padding: '14px 32px', borderRadius: '8px' }}>
            Faça parte dessa história!
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. HÁ 75 ANOS
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', background: '#071055', overflow: 'hidden', padding: '60px 32px 0' }}>
        <Image src={bgNavy} alt="" fill style={{ objectFit: 'cover', opacity: 0.85 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: 'white', fontSize: '32px', fontWeight: 800, marginBottom: '40px' }}>
            Há 75 anos…
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { img: card1, level: 'Ensino Infantil',      sub: 'Descobrindo talentos' },
              { img: card2, level: 'Ensino Fundamental',   sub: 'Inspirando Vidas' },
              { img: card3, level: 'Ensino Médio',         sub: 'Moldando Cidadãos' },
              { img: card4, level: 'Ensino Integral',      sub: 'Abraçando o futuro' },
            ].map((c) => (
              <div key={c.level} style={{ textAlign: 'center' }}>
                <div style={{ borderRadius: '16px 16px 0 0', overflow: 'hidden', lineHeight: 0 }}>
                  <Image src={c.img} alt={c.level} width={260} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '0 0 16px 16px', padding: '14px 10px 18px' }}>
                  <div style={{ fontSize: '11px', color: '#aac4ff', letterSpacing: '1px', marginBottom: '4px' }}>{c.sub}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'white' }}>{c.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. NOSSOS DIFERENCIAIS
      ══════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '64px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 800, color: '#071055', marginBottom: '40px' }}>
            Nossos diferenciais
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { img: iconPastoral,  label: 'Pastoral Escolar',          h: 80 },
              { img: iconBernoulli, label: 'Escola Parceira – Bernoulli', h: 80 },
              { img: null,          label: 'Educação Bilíngue',          h: 80, svg: true },
              { img: iconIntegral,  label: 'Ensino Integral',            h: 80 },
              { img: iconRobotica,  label: 'Aulas de robótica',          h: 80 },
              { img: iconEsportes,  label: 'Prática Esportiva',          h: 80 },
              { img: iconNAC,       label: 'NAC – Núcleo de Arte e Cultura', h: 60 },
              { img: null,          label: 'Projeto Leitura',            h: 80, svg: 'book' },
            ].map((d) => (
              <div key={d.label} style={{
                border: '1.5px solid #e2e8f0', borderRadius: '14px',
                padding: '24px 16px', textAlign: 'center',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
              }}>
                <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {d.img
                    ? <Image src={d.img} alt={d.label} height={d.h} style={{ objectFit: 'contain' }} />
                    : d.svg === true
                      ? <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                          <circle cx="35" cy="35" r="34" fill="#e8f4fd"/>
                          <text x="35" y="42" textAnchor="middle" fontSize="28" fill="#1e3a8a">💬</text>
                        </svg>
                      : <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                          <circle cx="35" cy="35" r="34" fill="#e8f4fd"/>
                          <text x="35" y="42" textAnchor="middle" fontSize="28" fill="#1e3a8a">📖</text>
                        </svg>
                  }
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1e3a8a', lineHeight: 1.3 }}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. CONHEÇA NOSSA ESTRUTURA
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }}>
        {/* Background stretched to fill exactly — no crop */}
        <Image src={bgEstrutura} alt="" fill style={{ objectFit: 'fill' }} />

        {/* Centered container aligned to cream zone of SVG */}
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', alignItems: 'center', minHeight: '420px',
        }}>
          {/* Girl */}
          <div style={{ flex: '0 0 34%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', alignSelf: 'flex-end' }}>
            <Image src={girl} alt="Aluna" width={310} style={{ objectFit: 'contain', display: 'block' }} />
          </div>

          {/* Content */}
          <div style={{ flex: '0 0 52%', padding: '40px 16px 40px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1e3a8a', marginBottom: '20px', textAlign: 'center' }}>
              Conheça a nossa estrutura:
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 20px', marginBottom: '28px', width: '100%' }}>
              {['Espaços educativos','Quadra de esportes','Parque de areia','Área de lazer da Ed. Infantil','Salão de reuniões','Sala Google For Education',
                'Sala de Robótica','Laboratório de Ciências da Natureza e Matemática',
                'Equipe multidisciplinar com todos os professores licenciados, especialistas (mestres e doutorandos)']
                .map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '13px', color: '#1e3a8a', lineHeight: 1.6 }}>
                    <span style={{ color: '#e22e42', fontWeight: 800, flexShrink: 0, marginTop: '2px' }}>▶</span>
                    <span>{item}</span>
                  </div>
                ))}
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ background: '#e22e42', color: 'white', fontWeight: 700, fontSize: '14px', padding: '12px 28px', borderRadius: '8px' }}>
              Visite nossa escola!
            </a>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          7. FORMULÁRIO
      ══════════════════════════════════════════ */}
      <section id="form" style={{ position: 'relative', background: '#fafafa', overflow: 'hidden', padding: '64px 32px' }}>
        <Image src={bgBlue} alt="" fill style={{ objectFit: 'cover', opacity: 0.12 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Form */}
          <div style={{ flex: '1 1 480px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#071055', marginBottom: '28px', lineHeight: 1.3 }}>
              Faça sua inscrição e nossos educadores<br />entrarão em contato!
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={label}>Nome do(a) responsável *</label>
                <input name="responsavel" value={form.responsavel} onChange={handle} style={inp} placeholder="Ex: Carlos Silva Pessoa" />
              </div>
              <div>
                <label style={label}>Série pretendida</label>
                <select name="serie" value={form.serie} onChange={handle} style={{ ...inp }}>
                  <option value="">Selecione</option>
                  <option>Educação Infantil</option>
                  <option>1º ano – Fundamental I</option>
                  <option>2º ano – Fundamental I</option>
                  <option>3º ano – Fundamental I</option>
                  <option>4º ano – Fundamental I</option>
                  <option>5º ano – Fundamental I</option>
                  <option>6º ano – Fundamental II</option>
                  <option>7º ano – Fundamental II</option>
                  <option>8º ano – Fundamental II</option>
                  <option>9º ano – Fundamental II</option>
                  <option>1º ano – Médio</option>
                  <option>2º ano – Médio</option>
                  <option>3º ano – Médio</option>
                  <option>Ensino Integral</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={label}>Nome do(a) aluno(a)</label>
                <input name="aluno" value={form.aluno} onChange={handle} style={inp} placeholder="Ex: Pedro Silva Pessoa" />
              </div>
              <div>
                <label style={label}>Já é aluno/pai EDMD?</label>
                <div style={{ display: 'flex', gap: '20px', paddingTop: '10px' }}>
                  <label style={{ ...label, flexDirection: 'row', alignItems: 'center', gap: '6px', display: 'flex', cursor: 'pointer', margin: 0 }}>
                    <input type="radio" name="jaAluno" value="sim" checked={form.jaAluno === 'sim'} onChange={handle} /> Já sou pai/aluno EDMD
                  </label>
                  <label style={{ ...label, flexDirection: 'row', alignItems: 'center', gap: '6px', display: 'flex', cursor: 'pointer', margin: 0 }}>
                    <input type="radio" name="jaAluno" value="nao" checked={form.jaAluno === 'nao'} onChange={handle} /> Ainda não
                  </label>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={label}>Whatsapp *</label>
                <input name="whatsapp" value={form.whatsapp} onChange={handle} style={inp} placeholder="ex: (84)9xxxx-xxxx" />
              </div>
              <div>
                <label style={label}>Melhor horário para contato</label>
                <input name="horario" value={form.horario} onChange={handle} style={inp} placeholder="Ex: 08:00hs às 10:00hs" />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={label}>Email *</label>
              <input name="email" value={form.email} onChange={handle} style={inp} type="email" placeholder="ex: nome123@gmail.com" />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={label}>Segmento</label>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', paddingTop: '6px' }}>
                {['Infantil','Fundamental I','Fundamental II','Médio','Integral'].map(s => (
                  <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#444', cursor: 'pointer' }}>
                    <input type="checkbox" checked={form.segmentos.includes(s)} onChange={() => toggleSegmento(s)} /> {s}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: form.necessidade === 'sim' ? '16px' : '24px' }}>
              <label style={label}>O(a) aluno(a) possui alguma dificuldade ou necessidade especial?</label>
              <div style={{ display: 'flex', gap: '24px', paddingTop: '6px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
                  <input type="radio" name="necessidade" value="sim" checked={form.necessidade === 'sim'} onChange={handle} /> Sim
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
                  <input type="radio" name="necessidade" value="nao" checked={form.necessidade === 'nao'} onChange={handle} /> Não
                </label>
              </div>
            </div>

            {form.necessidade === 'sim' && (
              <div style={{ marginBottom: '24px' }}>
                <label style={label}>Se sim, qual?</label>
                <input name="qualNecessidade" value={form.qualNecessidade} onChange={handle} style={inp} placeholder="Descreva a necessidade" />
              </div>
            )}

            <button onClick={submit} className="btn-wa" style={{
              background: '#1e3a8a', color: 'white', fontWeight: 700, fontSize: '15px',
              padding: '14px 40px', borderRadius: '8px', border: 'none', width: '100%',
              textAlign: 'center',
            }}>
              Salvar e finalizar
            </button>

            {sent && (
              <div style={{
                marginTop: '16px', background: '#16a34a', color: 'white',
                borderRadius: '8px', padding: '14px 20px', textAlign: 'center',
                fontWeight: 600, fontSize: '15px',
                animation: 'fadeIn 0.3s ease',
              }}>
                ✓ Inscrição enviada com sucesso! Em breve entraremos em contato.
              </div>
            )}
          </div>

          {/* Photo */}
          <div style={{ flex: '0 0 300px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Image src={incricaoFoto} alt="Aluna" width={300} style={{ objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.15))' }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. FOOTER CTA
      ══════════════════════════════════════════ */}
      <section style={{ display: 'flex', minHeight: '360px', overflow: 'hidden' }}>
        {/* Left – pink */}
        <div style={{ flex: '0 0 45%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Image src={bgPink} alt="" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'relative', zIndex: 1, padding: '28px 28px 0' }}>
            <Image src={sloganInt} alt="Isso é Educação Vicentina" width={180} style={{ display: 'block' }} />
          </div>
          <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Image src={family} alt="Família Dom Marcolino" width={500} style={{ objectFit: 'contain', display: 'block' }} />
          </div>
        </div>

        {/* Right – navy */}
        <div style={{ flex: 1, background: '#071055', position: 'relative', overflow: 'hidden', padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white' }}>
          <Image src={bgNavy} alt="" fill style={{ objectFit: 'cover', opacity: 0.7 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>
              Descobrindo talentos há 75 anos.
            </h2>
            <Image src={logoVic} alt="Isso é Educação Vicentina" width={170} style={{ marginBottom: '20px', display: 'block' }} />
            <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '16px', color: '#ccd9f7' }}>
              Agende uma visita e conheça nossa escola!
            </h3>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ background: '#e22e42', color: 'white', fontWeight: 700, fontSize: '14px', padding: '12px 28px', borderRadius: '8px', marginBottom: '20px' }}>
              Fale pelo WhatsApp
            </a>
            <div style={{ fontSize: '14px', color: '#aac4ff', lineHeight: 2 }}>
              <div>📞 84 3213-6889</div>
              <div>📸 @dommarcolinonatal</div>
              <div style={{ fontSize: '12px', color: '#7a90c4', marginTop: '6px' }}>
                Rua Jaguarari 1678, Alecrim, Natal, Rio Grande do Norte 59030-500
              </div>
            </div>
          </div>
          {/* Logo */}
          <div style={{ position: 'absolute', bottom: '24px', right: '32px', zIndex: 1, opacity: 0.5 }}>
            <Image src={logo} alt="Dom Marcolino" height={50} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. COPYRIGHT
      ══════════════════════════════════════════ */}
      <div style={{ background: '#040c35', color: '#7a90c4', textAlign: 'center', fontSize: '12px', padding: '12px 32px' }}>
        Matrículas Dom Marcolino Dantas © 2024 | Todos os direitos reservados
      </div>

    </div>
  )
}
