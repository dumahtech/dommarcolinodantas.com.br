import Image from 'next/image'
import logoDomCircular from '@/assets/logo dom-circular.png'
import nossaHistoria1 from '@/assets/nossa-historia/nossa-historia-1.webp'
import nossaHistoria2 from '@/assets/nossa-historia/nossa-historia-2.webp'
import nossaHistoria3 from '@/assets/nossa-historia/nossa-historia-3.webp'
import nossaHistoria4 from '@/assets/nossa-historia/nossa-historia-4.webp'
import nossaHistoria5 from '@/assets/nossa-historia/nossa-historia-5.webp'
import nossaHistoria6 from '@/assets/nossa-historia/nossa-historia-6-pastoral.webp'
import Topbar from '@/components/Topbar'
import Nav from '@/components/Nav'
import InfoForm from '@/components/InfoForm'
import SocialSection from '@/components/SocialSection'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Escola – EDMD | Natal/RN' }

export default function EscolaPage() {
  return (
    <>
      <Topbar />
      <Nav />

      <div className="page-wrapper">

        {/* EDUCAÇÃO VICENTINA */}
        <h1 className="section-title">Educação Vicentina</h1>
        <div className="two-col">
          <Image src={nossaHistoria1} alt="Nossa História" style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
          <div className="col-text">
            <p>A Escola Dom Marcolino Dantas (EDMD) é uma Escola Católica Vicentina fundada em 19 de março de 1950. Dirigida por Irmãs que pertencem à Companhia das Filhas da Caridade de São Vicente de Paulo – fundada no século XVII, na França, por São Vicente de Paulo e Santa Luísa de Marillac para auxiliar os pobres. A Companhia está presente em 95 países dos cinco continentes e chegou ao Brasil em 1849, movida por um grande ideal missionário.</p>
            <p>Em Natal, as Irmãs Filhas da Caridade iniciaram sua missão em 1950 com a Escola Estadual Dom Marcolino Dantas e há 28 anos a escola passou a ser particular.</p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* EDMD */}
        <h2 className="section-title-center">Escola Dom Marcolino Dantas (EDMD)</h2>
        <div className="two-col" style={{ marginBottom: '16px' }}>
          <Image src={nossaHistoria2} alt="Escola Dom Marcolino Dantas" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
          <div className="col-text">
            <p>Somos uma escola Católica e Vicentina. Isso significa dizer que o modo como assumimos a missão educativa encontra seu fundamento e inspiração no carisma religioso que nos é próprio.</p>
            <p>Essa dimensão não tem como finalidade definir conteúdos programáticos, nem ferir a autonomia da ciência e da técnica, mas permite imprimir transcendência ao projeto educativo, estabelecendo balizas antropológicas, éticas, pedagógicas que orientam nossas práticas.</p>
            <p>A nossa missão, ao longo de quase sete décadas, é promover uma educação de qualidade orientada por princípios cristãos e vicentinos que possibilitem o desenvolvimento do cidadão consciente, científico, resgatando e mantendo a dignidade humana.</p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* NOSSA HISTÓRIA */}
        <h2 className="section-title-center">Nossa História</h2>
        <p className="section-subtitle-center">Fundadores</p>
        <div className="fundadores-grid">
          <div className="fundador">
            <Image src={nossaHistoria3} alt="São Vicente de Paulo" style={{ width: '140px', height: '170px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
            <div className="fundador-text">
              <h4>São Vicente de Paulo</h4>
              <p>Grande sacerdote francês, considerado o pai dos pobres, pautou sua vida pela bondade, caridade e pelo amor. Fundou a Confraria do Rosário, a Congregação da Missão, a Confraria da Caridade, e a Companhia das Filhas da Caridade.</p>
            </div>
          </div>
          <div className="fundador">
            <Image src={nossaHistoria4} alt="Santa Luísa de Marillac" style={{ width: '140px', height: '170px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
            <div className="fundador-text">
              <h4>Santa Luísa de Marillac</h4>
              <p>Proclamada patrona de todas as obras sociais pelo papa João XXIII, foi co-fundadora da Companhia das Filhas da Caridade, juntamente com São Vicente de Paulo, criando uma vasta rede de bondade que não excluía ninguém.</p>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* IDENTIDADE */}
        <h2 className="section-title-center">Identidade Institucional</h2>
        <p className="section-subtitle-center">Como Educação Vicentina, temos:</p>
        <div className="identidade-inner" style={{ marginBottom: '60px' }}>
          <div className="identidade-text">
            <p><strong>MISSÃO:</strong> promover uma educação de qualidade orientada por princípios cristãos e vicentinos que possibilitem o desenvolvimento do cidadão, consciente, científico, resgatando e mantendo a dignidade humana, agindo como agente transformador e multiplicador do Carisma Vicentino.</p>
            <p><strong>VISÃO:</strong> Promover uma sociedade mais justa, humana e solidária.</p>
            <p><strong>VALORES:</strong></p>
            <ul className="valores-list">
              <li>Carisma Vicentino;</li>
              <li>Educação Humana e Cristã;</li>
              <li>Diálogo e Respeito;</li>
              <li>Sustentabilidade.</li>
            </ul>
          </div>
          <Image src={nossaHistoria5} alt="Identidade Institucional" style={{ width: '100%', minHeight: '280px', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
        </div>

        <hr className="section-divider" />

        {/* IDENTIDADE VISUAL */}
        <h2 className="section-title-center">Identidade Visual</h2>
        <div className="visual-inner" style={{ marginBottom: '60px', marginTop: '30px' }}>
          <div className="logo-display">
            <Image src={logoDomCircular} alt="Logo Dom Marcolino" width={180} style={{ display: 'block' }} />
          </div>
          <div className="visual-text">
            <p><strong>SLOGAN:</strong> Educação vicentina: um projeto de vida</p>
            <p><strong>LOGOMARCA:</strong> A logomarca das instituições educacionais vicentinas se fundamenta na filosofia vicentina. Ser &ldquo;educação vicentina&rdquo;, graficamente, significa dar as mãos – educadores e educandos, comunidade educativa e sociedade para juntos construir um mundo justo e solidário.</p>
            <p>As cores definidas na logomarca têm um significado claro: o azul Royal no V na palavra educação, simboliza a amplitude da missão proposta pela educação vicentina. A cor vermelha na palavra vicentina simboliza o amor-caridade.</p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* PASTORAL */}
        <h2 className="section-title-center">Pastoral Escolar Vicentina</h2>
        <div className="pastoral-inner" style={{ marginBottom: '60px' }}>
          <div className="pastoral-col">
            <h3>Nossa Proposta</h3>
            <p>A Pastoral Escolar é um &ldquo;jeito&rdquo; de ser e agir da Escola Católica, comprometida com os princípios do evangelho, dos quais buscam concretizar o Reino de Deus entre nós, inclusive no ambiente de educação. Inspirada pelo carisma de São Vicente de Paulo, a Pastoral Escolar tem a missão de sensibilizar os educadores, alunos e familiares sobre a importância em sermos presença de cuidado na vida do outro.</p>
          </div>
          <div className="pastoral-logo-center">
            <Image src={nossaHistoria6} alt="Pastoral Escolar Vicentina" width={160} style={{ borderRadius: '50%', display: 'block' }} />
          </div>
          <div className="pastoral-col">
            <h3>O que fazemos</h3>
            <p>Ajudamos a fazer da escola um espaço de fé e vida, vivendo a fraternidade e a solidariedade, apresentando Jesus Cristo como referencial de pessoa comprometida com a vida em sua plenitude.</p>
            <p>Convidamos a comunidade educativa para assumir e proclamar os valores do Reino de Deus, ser agente de transformação social na promoção da justiça e da paz.</p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* FAMÍLIA EDMD */}
        <h2 className="section-title-center">Conheça a Família EDMD</h2>
        <div className="familia-section">
          <p className="familia-intro">Nosso colégio é dirigido por Irmãs que pertencem à Companhia das Filhas da Caridade de São Vicente de Paulo. Contamos com uma equipe de profissionais qualificados em suas áreas e com experiência ampla em educação.</p>
        </div>

        <h2 className="section-title-center" style={{ paddingTop: 0 }}>Equipe Técnico-pedagógica</h2>
        <div className="equipe-section">
          <div className="equipe-list">
            {[
              { nome: 'Irmã Zelma Maria da Silva Patrício', cargo: 'Direção Escolar' },
              { nome: 'Mirlene Félix de Lima Julião', cargo: 'Coordenadora – Educação Infantil' },
              { nome: 'Maria Aline de Deus da Silva Vicente', cargo: 'Coordenadora – Fundamental I' },
              { nome: 'Angeline de Carvalho Alexandria Araújo', cargo: 'Coordenadora – Fundamental II e Ensino Médio' },
              { nome: 'Vilma Ferreira de Araújo e Adriana Gomes Freire da Silva', cargo: 'Auxiliar de Coordenação' },
              { nome: 'Aldair Rodrigues dos Santos', cargo: 'Coordenador de Esportes' },
              { nome: 'Roberta Kalline Candida Carneiro', cargo: 'Psicopedagoga' },
              { nome: 'José Hilton Xavier Gomes Cavalcante', cargo: 'Psicólogo' },
              { nome: 'Adriano Marrocos', cargo: 'Disciplinar' },
            ].map((m, i) => (
              <div className="equipe-item" key={i}>
                <div className="name">{m.nome}</div>
                <div className="role">{m.cargo}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />
      </div>

      <InfoForm />
      <SocialSection />
      <Footer />
    </>
  )
}
