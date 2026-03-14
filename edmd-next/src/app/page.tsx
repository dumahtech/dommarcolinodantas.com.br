import Topbar from '@/components/Topbar'
import Nav from '@/components/Nav'
import HeroSlider from '@/components/HeroSlider'
import InfoForm from '@/components/InfoForm'
import SocialSection from '@/components/SocialSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import ttEducacaoVicentina from '@/assets/home/tt-educação-vicentica.jpg'
import propostaPedagogica from '@/assets/home/proposta-pedagogica.jpg'
import depoimento1 from '@/assets/home/depoismento-1.webp'
import depoimento2 from '@/assets/home/depoismento-2.webp'
import depoimento3 from '@/assets/home/depoismento-3.webp'

export default function HomePage() {
  return (
    <>
      <Topbar />
      <Nav />
      <HeroSlider />

      {/* INFO + FORM */}
      <InfoForm />

      {/* ETAPAS DE ENSINO */}
      <div className="stages-section">
        <div className="stages-grid">
          {[
            { icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>, title: 'Educação Infantil', text: 'A educação infantil da Escola Vicentina Dom Marcolino Dantas proporciona um ambiente de ensino composto por um espaço organizado de interação entre professores e alunos e entre alunos.' },
            { icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>, title: 'Ensino Fundamental Anos Iniciais', text: 'O Ensino Fundamental I tem como objetivo a construção do processo de aprendizagem com base nos quatro pilares estabelecidos pela UNESCO.' },
            { icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>, title: 'Ensino Fundamental Anos Finais', text: 'O Ensino Fundamental II conta com metodologia que estimula o processo de investigação-discussão entre professores e alunos.' },
            { icon: <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>, title: 'Ensino Médio', text: 'O Ensino Médio utiliza material didático com conteúdos necessários para desenvolver excelentes resultados no Enem e vestibulares.' },
          ].map((s, i) => (
            <div className="stage-card" key={i}>
              <div className="stage-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{s.icon}</svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCAÇÃO VICENTINA + #SOUEDMD */}
      <div className="split-section">
        <div className="split-inner">
          <Image src={ttEducacaoVicentina} alt="Educação Vicentina" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
          <div className="split-text">
            <h2>Educação Vicentina</h2>
            <p>Nos preocupamos em respeitar o princípio de liberdade religiosa, inserir os alunos em projetos que conduzam relações fraternas, ensinando-os a superar preconceitos, incentivar o diálogo, celebrar a vida que nos une.</p>
            <Link href="/escola" className="btn-blue">Saiba mais ›</Link>
          </div>
        </div>
        <div className="split-inner">
          <div className="split-text">
            <h2>#SouEDMD</h2>
            <p>A Escola Dom Marcolino Dantas (EDMD) é uma Instituição Educativa Católica Apostólica Romana, fundada em 19 de março de 1950, dia de São José. Sempre esteve sob a direção das Irmãs Filhas da Caridade de São Vicente de Paulo.</p>
            <Link href="/escola" className="btn-blue">Saiba mais ›</Link>
          </div>
          <div className="video-placeholder">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gWFtXO8mxi0"
              title="Escola Dom Marcolino Natal"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: 'block', borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>

      {/* PROPOSTA PEDAGÓGICA */}
      <div className="proposta-ped-section">
        <div className="proposta-ped-inner">
          <Image src={propostaPedagogica} alt="Proposta Pedagógica" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
          <div className="proposta-ped-text">
            <h2>Proposta Pedagógica</h2>
            <p>A Escola Vicentina Dom Marcolino Dantas visa à educação da pessoa para a vida, focando em três aspectos: realização pessoal, competência profissional e cidadania responsável, a partir de uma visão humana e cristã da vida e da História.</p>
            <Link href="/proposta" className="btn-red">Saiba mais ›</Link>
          </div>
        </div>
      </div>

      {/* VANTAGENS */}
      <div className="vantagens-section">
        <div className="vantagens-header">
          <h2>Vantagens e diferenciais</h2>
          <Link href="/ensino" className="btn-outline-blue">Saiba mais ›</Link>
        </div>
        <div className="vantagens-grid">
          <Link href="/ensino" className="vantagem-card">
            <div className="vantagem-bg google">
              {/* Google for Education icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="vantagem-icon" stroke="none">
                <path d="M12 11h8.533c.072.387.11.79.11 1.2C20.643 17.373 17.065 21 12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9c2.395 0 4.565.94 6.192 2.473L16.27 7.4A6.27 6.27 0 0 0 12 5.76c-3.447 0-6.24 2.793-6.24 6.24S8.553 18.24 12 18.24c3.103 0 5.518-2.058 6.1-4.8H12V11z"/>
              </svg>
              <span className="vantagem-label">Google for Education</span>
              <span className="vantagem-cta">Saiba mais →</span>
            </div>
          </Link>
          <Link href="/ensino" className="vantagem-card">
            <div className="vantagem-bg esporte">
              {/* Soccer ball icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="vantagem-icon">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
              <span className="vantagem-label">Esporte e cultura</span>
              <span className="vantagem-cta">Saiba mais →</span>
            </div>
          </Link>
          <Link href="/ensino" className="vantagem-card">
            <div className="vantagem-bg lab">
              {/* Lab/flask icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="vantagem-icon">
                <path d="M9 3v8l-4.5 7.5A1 1 0 0 0 5.4 20h13.2a1 1 0 0 0 .9-1.5L15 11V3"/><path d="M6 3h12"/><path d="M9 15h6"/>
              </svg>
              <span className="vantagem-label">Laboratórios de práticas</span>
              <span className="vantagem-cta">Saiba mais →</span>
            </div>
          </Link>
        </div>
      </div>

      {/* DEPOIMENTOS */}
      <div className="depoimentos-section">
        <div className="depoimentos-header">
          <h2>Depoimentos</h2>
          <Link href="/contato" className="btn-outline-blue">Fale conosco ›</Link>
        </div>
        <div className="depoimentos-grid">
          {[
            { foto: depoimento1, nome: 'Aline', papel: 'Aluna', texto: '"Adoro o Dom Marcolino, o nível de ensino e o jeito acolhedor da escola. Aqui os alunos têm voz e opinião!"' },
            { foto: depoimento2, nome: 'Marlon', papel: 'Aluno', texto: '"O Dom Marcolino é a minha paixão. É um privilégio estudar em uma escola que carrega tanta tradição."' },
            { foto: depoimento3, nome: 'Carlos', papel: 'Aluno', texto: '"O Dom Marcolino já é parte da minha família. Aqui é um ambiente onde respeitamos e ajudamos uns aos outros."' },
          ].map((d, i) => (
            <div className="depo-card" key={i}>
              <div className="stars">★★★★★</div>
              <p className="depo-text">{d.texto}</p>
              <div className="depo-author">
                <Image src={d.foto} alt={d.nome} className="depo-avatar-img" />
                <div className="depo-info">
                  <div className="name">{d.nome}</div>
                  <div className="role">{d.papel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SocialSection />
      <Footer />
    </>
  )
}
