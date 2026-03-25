export default function About({ setSection }) {
  return (
    <>
      <div className="overlay about fade-in" id="about">
        <button className="close-btn" onClick={() => setSection(null)}>
          X
        </button>
        <h1>Mais Sobre mim</h1>

        <h3>Pequeno Resumo</h3>

        <div className="about-stats">
          <p>
            Desenvolvedor Front-End em inicio de carreira e em constante
            evolucao buscando aprendizado continuo e pratica de conhecimentos,
            participando de cursos e projetos fornecidos pelo <b>SENAI</b> e{" "}
            <b>IFRS</b> que reforçam boas praticas de desenvolvimento,
            responsividade, acessibilidade e organizacao de codigo.
          </p>

          <p>
            Busco sempre transformar teoria em solucoes reais, com atencao aos
            detalhes, performance e experiencia do usuario, evoluindo passo a
            passo para atuar de forma profissional no mercado.
          </p>

          <div className="about-actions">
            <a href="#" className="btn secondary">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
