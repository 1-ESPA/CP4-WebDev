import '../css/global.css'
import '../css/sobre.css'

const Sobre = () => {
  return (
    <main className="sobre">
      <section className="sobre-hero">
        <div className="sobre-texto">
          <h1>Sobre a nossa academia</h1>
          <p>
            Mais do que um espaço para treinar, nossa academia foi criada para
            inspirar saúde, bem-estar e superação. Aqui, acreditamos que cada
            aluno tem seu próprio ritmo, seus próprios objetivos e sua própria
            jornada.
          </p>
        </div>
      </section>

      <section className="sobre-missao">
        <h2>Nossa missão</h2>
        <p>
          Oferecer um ambiente acolhedor, moderno e motivador, onde pessoas de
          todos os níveis possam desenvolver força, disciplina e qualidade de
          vida.
        </p>
      </section>

      <section className="sobre-diferenciais">
        <h2>Nossos diferenciais</h2>

        <div className="cards-diferenciais">
          <article className="card">
            <h3>Treinos personalizados</h3>
            <p>
              Cada aluno recebe atenção especial para alcançar seus objetivos de
              forma segura e eficiente.
            </p>
          </article>

          <article className="card">
            <h3>Equipe qualificada</h3>
            <p>
              Contamos com profissionais preparados para orientar, acompanhar e
              motivar durante toda a jornada.
            </p>
          </article>

          <article className="card">
            <h3>Ambiente motivador</h3>
            <p>
              Nossa estrutura foi pensada para tornar os treinos mais
              confortáveis, dinâmicos e inspiradores.
            </p>
          </article>
        </div>
      </section>

      <section className="sobre-final">
        <h2>Seu melhor resultado começa aqui</h2>
        <p>
          Seja para ganhar condicionamento, melhorar a saúde ou transformar seu
          estilo de vida, estamos prontos para treinar com você.
        </p>
      </section>
    </main>
  )
}

export default Sobre
