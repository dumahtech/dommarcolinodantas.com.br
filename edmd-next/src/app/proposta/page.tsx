import Topbar from '@/components/Topbar'
import Nav from '@/components/Nav'
import SocialSection from '@/components/SocialSection'
import Footer from '@/components/Footer'
import Image from 'next/image'
import proposta1 from '@/assets/proposta/proposta-1.jpg'
import proposta2 from '@/assets/proposta/proposta-2.jpg'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Proposta – EDMD | Natal/RN' }

export default function PropostaPage() {
  return (
    <>
      <Topbar />
      <Nav />

      {/* EDUCAÇÃO VICENTINA — hero card */}
      <div className="hero-card-section">
        <div className="hero-card">
          <div className="hero-card-text">
            <h2>Educação Vicentina</h2>
            <p>A Escola Dom Marcolino Dantas (EDMD) é uma Escola Católica Vicentina fundada em 19 de março de 1950. Dirigida por Irmãs que pertencem à Companhia das Filhas da Caridade de São Vicente de Paulo – fundada no século XVII, na França, por São Vicente de Paulo e Santa Luísa de Marillac para auxiliar os pobres. A Companhia está presente em 95 países dos cinco continentes e chegou ao Brasil em 1849, movida por um grande ideal missionário. Em Natal, as Irmãs Filhas da Caridade iniciaram sua missão em 1950 com a Escola Estadual Dom Marcolino Dantas. E há 28 anos a escola passou a ser particular.</p>
          </div>
          <Image src={proposta1} alt="Proposta Pedagógica" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      {/* PROPOSTA ESCOLAR */}
      <div className="proposta-page-section">
        <div className="proposta-page-inner">
          <Image src={proposta2} alt="Proposta Escolar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
          <div className="proposta-page-text">
            <h2>Proposta Escolar</h2>
            <p>A Pastoral Escolar é um &ldquo;jeito&rdquo; de ser e agir da Escola Católica, comprometida com os princípios do evangelho, dos quais buscam concretizar o Reino de Deus entre nós, inclusive no ambiente de educação. Inspirada pelo carisma de São Vicente de Paulo, a Pastoral Escolar tem a missão de sensibilizar os educadores, alunos e familiares sobre a importância em sermos presença de cuidado na vida do outro.</p>
          </div>
        </div>
      </div>

      <SocialSection />
      <Footer />
    </>
  )
}
