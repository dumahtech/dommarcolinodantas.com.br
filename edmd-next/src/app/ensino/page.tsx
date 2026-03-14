import Topbar from '@/components/Topbar'
import Nav from '@/components/Nav'
import InfoForm from '@/components/InfoForm'
import SocialSection from '@/components/SocialSection'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ensino1 from '@/assets/ensino/ensino-1.webp'
import ensino2 from '@/assets/ensino/ensino-2.webp'
import ensino3 from '@/assets/ensino/ensino-3.webp'
import ensino4 from '@/assets/ensino/ensino-4.webp'
import ensino5 from '@/assets/ensino/ensino-5.webp'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Ensino – EDMD | Natal/RN' }

export default function EnsinoPage() {
  return (
    <>
      <Topbar />
      <Nav />

      <div className="page-wrapper" style={{ paddingTop: '50px', paddingBottom: 0 }}>
        <h1 className="page-title">Etapas de Ensino</h1>

        {/* EDUCAÇÃO INFANTIL */}
        <div className="etapa-block" style={{ borderTop: 'none', paddingTop: 0 }}>
          <h2 className="etapa-title">Educação Infantil</h2>
          <div className="etapa-cols">
            <div className="col-text">
              <p className="col-label">INÍCIO DA APRENDIZAGEM</p>
              <p>Primeira etapa da educação básica, a educação infantil é organizada conforme orientação da base nacional comum curricular (BNCC). No dia a dia, as crianças da Escola Dom Marcolino Dantas aprendem a se expressar por meio de interações e brincadeiras, onde são observados elementos, como: a expressão dos afetos, a mediação das frustrações, a resolução dos conflitos e a regulação das emoções. Tudo é realizado de maneira lúdica e afetiva. Esse processo complementa a ação da família e da comunidade, contribuindo na ampliação de suas experiências e conhecimentos sobre si e do mundo em que vive.</p>
              <p className="col-label" style={{ marginTop: '20px' }}>NOSSA PROPOSTA PEDAGÓGICA</p>
              <p>A Educação Infantil da Escola Dom Marcolino Dantas favorece a vivência dos valores vicentinos propiciando reconhecer o ambiente escolar como local prazeroso e seguro, rico para descobertas, experiências e aprendizagem em diferentes áreas do conhecimento. Trabalha com elementos essenciais na construção da identidade e autonomia da criança, valorizando o seu desenvolvimento e suas habilidades. Tem por objetivo desenvolver habilidades que estimulem a confiança, estabelecendo e ampliando suas relações sociais, a fim de auxiliá-la na ampliação do seu universo cultural e letrado. Este é um período sensível na vida da criança, de múltiplas conexões, que refletem no seu desenvolvimento moral e intelectual. Por essa razão, valorizamos a cultura de pensamento e de caminhos investigativos na aprendizagem.</p>
            </div>
            <div className="col-text">
              <p>Propomos, no dia a dia de nossos alunos, momentos de cuidado com o outro, brincadeiras e aprendizagens diversas, de forma integrada, que possam contribuir para:</p>
              <ol className="numbered-list" style={{ listStyle: 'decimal', paddingLeft: '18px', marginTop: '10px' }}>
                <li>Construção de autoimagem positiva;</li>
                <li>Vivência do brincar, imitando e recriando personagens como forma de organizar o mundo;</li>
                <li>Construção de vínculos afetivos por meio da interação social e comunicação;</li>
                <li>Desenvolvimento de capacidades de relações interpessoais;</li>
                <li>Respeito à diversidade;</li>
                <li>Valorização de hábitos de saúde e bem-estar;</li>
                <li>Conscientização da própria capacidade de aprender instigando a curiosidade, o gosto pela investigação, pela descoberta;</li>
                <li>Compreensão da necessidade de preservar o meio ambiente;</li>
                <li>Utilização de diferentes linguagens: corporal, plástica, musical, oral e escrita;</li>
                <li>Conhecimento de características, capacidades e limitações – elementos essenciais na construção da identidade e autonomia.</li>
              </ol>
              <div className="turmas-block" style={{ marginTop: '20px' }}>
                <p><strong>TURMAS:</strong> Nível I (1 Ano e 8 meses) | NÍVEL II 2 anos (completos até 31/03) | NÍVEL III: 3 Anos | NÍVEL IV: 4 Anos | NÍVEL V: 5 Anos</p>
              </div>
              <div className="horarios-block">
                <p className="horarios-label">HORÁRIOS</p>
                <p>Turno Matutino: das 7h10 às 11h</p>
                <p>Turno Vespertino: das 13 às 17h</p>
                <p>Período Integral: das 11h30 às 17h</p>
              </div>
            </div>
          </div>
        </div>

        {/* FUNDAMENTAL – ANOS INICIAIS */}
        <div className="etapa-block">
          <h2 className="etapa-title">Ensino Fundamental – Anos Iniciais</h2>
          <div className="etapa-cols">
            <div className="col-text">
              <p><strong>INTRODUÇÃO À ALFABETIZAÇÃO</strong> — Nossos alunos do Ensino Fundamental Anos Iniciais utilizam diferentes linguagens como base para trilhar o aprendizado, produzindo nas diversas áreas, verbal, musical, matemática, gráfica, plástica e corporal – um meio para produzir, expressar e comunicar suas ideias. Por meio de recursos tecnológicos e pedagógicos, o aluno constrói seu conhecimento questionando e analisando a realidade, a fim de buscar soluções para situações problematizadas de forma sustentável, intuitiva e criativa, baseando-se em um currículo de excelência acadêmica e de formação humana e cristã. Assim, todas as atividades são pensadas para que o aluno seja protagonista de sua aprendizagem e possa identificar suas competências, habilidades e potenciais.</p>
              <p><strong>NOSSA PROPOSTA PEDAGÓGICA</strong> — No Ensino Fundamental, propomos uma experiência escolar estimulante que desafie nossos alunos a desenvolverem aprendizados dinâmicos.</p>
            </div>
            <div className="col-text">
              <p>Tudo é realizado por meio de uma abordagem educacional integrada que os prepara para serem cidadãos críticos. Com base nos padrões curriculares nacionais, temos como objetivos que os alunos desta etapa sejam capazes de:</p>
              <ol className="numbered-list" style={{ listStyle: 'decimal', paddingLeft: '18px', marginTop: '10px' }}>
                <li>Compreender a cidadania como participação social e política, bem como o exercício de direitos e deveres políticos, civis e sociais;</li>
                <li>Sentir-se integrante e agente transformador do ambiente, identificando seus elementos e interações;</li>
                <li>Conhecer o cuidar do próprio corpo e dele cuidar, valorizando e adotando hábitos saudáveis;</li>
                <li>Utilizar as diferentes linguagens como meio para produzir, expressar e comunicar suas ideias, bem como saber interpretar e usufruir as produções culturais.</li>
              </ol>
              <div className="horarios-block" style={{ marginTop: '20px' }}>
                <p className="horarios-label">HORÁRIOS</p>
                <p>Turno Matutino: das 7h às 11h30, com intervalo de 20 minutos.</p>
                <p>Turno Vespertino: das 13h às 17h, com intervalo de 20 minutos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FUNDAMENTAL – ANOS FINAIS */}
        <div className="etapa-block">
          <h2 className="etapa-title">Ensino Fundamental – Anos Finais</h2>
          <div className="etapa-cols">
            <div className="col-text">
              <p className="col-label">ACOMPANHANDO UMA NOVA FASE</p>
              <p>Nesta etapa, a Escola Dom Marcolino Dantas acompanha os alunos que estão na fase mais transformadora e cheia de mudanças em suas vidas (a adolescência), estimulando-os constantemente por meio de criações, tecnologias, experimentos, linguagens, manifestações artísticas, culturais e esportivas, com o olhar voltado sempre para o autoconhecimento e o desenvolvimento contínuo.</p>
            </div>
            <div className="col-text">
              <div className="horarios-block">
                <p className="horarios-label">HORÁRIO</p>
                <p>6º ao 8º Ano: das 7h15 às 11h45, com intervalo de 20 minutos</p>
                <p>9º Ano: das 7h15 às 12h45, com intervalo de 20 minutos</p>
              </div>
            </div>
          </div>
        </div>

        {/* ENSINO MÉDIO */}
        <div className="etapa-block">
          <h2 className="etapa-title">Ensino Médio</h2>
          <div className="etapa-cols">
            <div className="col-text">
              <p className="col-label">CONQUISTAS E DESAFIOS DO MUNDO MODERNO</p>
              <p>Objetiva uma educação para a vida, preparando o aluno para o exercício da cidadania. Busca o aprimoramento como pessoa humana, com formação ética, trabalho cooperativo, melhoramento contínuo, desenvolvimento intelectual e responsabilidade social. A modelagem de ensino volta-se para a aprendizagem significativa, agregando elementos essenciais para o exercício da profissão e o domínio das competências básicas para a resolução de problemas em diferentes situações.</p>
              <p>Como Instituição Educativa Vicentina acreditamos que o Ensino Médio está pautado na concepção de formação integral, nos aspectos cognitivos e socioemocionais, do educando/educanda.</p>
            </div>
            <div className="col-text">
              <p>Os aspectos científicos, tecnológicos, humanísticos, políticos, estéticos, culturais e espirituais estão incorporados e integrados. Sendo assim, os conhecimentos das ciências sociais e humanas serão contemplados de forma justa, em nível de importância e de conteúdo.</p>
              <p>Esse processo visa a emancipação dos sujeitos, a construção de seus projetos de vida, gerando uma postura de transformação para um mundo melhor, mais justo e solidário para todos e todas.</p>
            </div>
          </div>
        </div>

        {/* ATIVIDADES EXTRACURRICULARES */}
        <div className="extra-section-page">
          <h2 className="extra-title-page">Atividades Extracurriculares</h2>

          <div className="atividade-block">
            <Image src={ensino1} alt="Balé" className="ativ-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
            <div className="ativ-text">
              <h3>BALÉ</h3>
              <p>Dança que além de promover a diversão também melhora a coordenação motora, aumenta a concentração, desenvolve as noções de espaço e de localização, aumenta a flexibilidade, mais resistência corporal, corrige e melhora a postura, estimula o desenvolvimento intelectual, ajuda a expressão e memória.</p>
              <p>O ballet clássico consiste em unir técnica, música e a atuação nos movimentos, são habilidades que as crianças vão adquirindo pouco a pouco através de exercícios e posturas. De uma forma prazerosa e lúdica as crianças aprendem brincando a arte de dançar.</p>
              <p className="beneficios-label">BENEFÍCIOS</p>
              <ol className="beneficios-list" style={{ listStyle: 'decimal', paddingLeft: '18px' }}>
                <li>Coordenação</li>
                <li>Ritmo</li>
                <li>Postura</li>
                <li>Flexibilidade e alongamento do corpo</li>
                <li>Iniciação musical</li>
              </ol>
            </div>
          </div>

          <div className="atividade-block">
            <Image src={ensino2} alt="Futsal" className="ativ-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
            <div className="ativ-text">
              <h3>FUTSAL</h3>
              <p>Também conhecido como futebol de salão, é uma modalidade esportiva que foi adaptada do futebol de campo para as quadras. Desenvolve atitudes de respeito e cooperação, incluindo regras da modalidade e capacidades e habilidades físicas.</p>
              <p className="beneficios-label">BENEFÍCIOS</p>
              <ol className="beneficios-list" style={{ listStyle: 'decimal', paddingLeft: '18px' }}>
                <li>Atitudes de cooperação</li>
                <li>Integração</li>
                <li>Agilidade</li>
                <li>Força muscular</li>
                <li>Pensamento rápido</li>
              </ol>
            </div>
          </div>

          <div className="atividade-block">
            <Image src={ensino3} alt="Judô" className="ativ-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
            <div className="ativ-text">
              <h3>JUDÔ</h3>
              <p>Estilo de arte marcial esportiva de origem japonesa utilizada como uma técnica de defesa pessoal. O Judô é indicado não apenas ao desenvolvimento físico de quem pratica, mas também ao seu espírito e mente. Utiliza princípios e valores das artes marciais desenvolvendo a autonomia e a consciência corporal, enfatizando o respeito pelo ritmo de cada um.</p>
              <p className="beneficios-label">BENEFÍCIOS</p>
              <ol className="beneficios-list" style={{ listStyle: 'decimal', paddingLeft: '18px' }}>
                <li>Concentração</li>
                <li>Meditação</li>
                <li>Consciência corporal</li>
                <li>Integração</li>
              </ol>
            </div>
          </div>

          <div className="atividade-block">
            <Image src={ensino4} alt="Handebol" className="ativ-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
            <div className="ativ-text">
              <h3>HANDEBOL</h3>
              <p>Modalidade esportiva, jogada em equipe, em que a bola deve ser conduzida e arremessada somente com as mãos. Desenvolve os aspectos socioafetivos de cooperação, integração, liderança, autoestima, e autoconfiança, bem como capacidades físicas.</p>
              <p className="beneficios-label">BENEFÍCIOS</p>
              <ol className="beneficios-list" style={{ listStyle: 'decimal', paddingLeft: '18px' }}>
                <li>Liderança</li>
                <li>Cooperação</li>
                <li>Integração</li>
                <li>Autoconfiança</li>
                <li>Agilidade</li>
              </ol>
            </div>
          </div>

          <div className="atividade-block">
            <Image src={ensino5} alt="Voleibol" className="ativ-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
            <div className="ativ-text">
              <h3>VOLEIBOL</h3>
              <p>O voleibol é uma das modalidades esportivas mais conhecidas atualmente. Trata-se de um jogo competitivo entre duas equipes divididas por uma rede. O objetivo é fazer a bola tocar o chão da área do adversário e impedir que isto aconteça em sua própria área. Assim, esse é um esporte que visa deixar a bola sempre no ar, em fluxo.</p>
              <p className="beneficios-label">BENEFÍCIOS</p>
              <ol className="beneficios-list" style={{ listStyle: 'decimal', paddingLeft: '18px' }}>
                <li>Melhora a cognição;</li>
                <li>Estimula a sinapse dos neurônios;</li>
                <li>Melhora as capacidades físicas funcionais;</li>
                <li>Fortalece o corpo;</li>
                <li>Melhora a coordenação motora;</li>
                <li>Aumenta a flexibilidade;</li>
                <li>Estimula membros inferiores e superiores do corpo.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <InfoForm />
      <SocialSection />
      <Footer />
    </>
  )
}
