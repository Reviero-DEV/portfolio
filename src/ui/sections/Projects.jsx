import Crypto from "../../assets/images/dashboard-crypto.png";
import buscadeusuarios from "../../assets/images/buscadeusuarios.png";
import ecommerceresponsivo from "../../assets/images/ecommerce-responsivo-js.png";

export default function Projects({ setSection }) {
  return (
    <>
    <div className="overlay">
      <button className="close-btn" onClick={() => setSection(null)}>X</button>
      <h1>Projetos</h1>

      <h3>O Que Esperar de Mim?</h3>

      <div className="service-list">
        <div className="service-card">
          <img src={Crypto} alt="pj-dashboard crypto" />
          <h4>Dashboard Crypto</h4>
          <p>
            Dashboard de cripto otimizado para análise de dados e performance em
            tempo real.
          </p>
          <a href="https://reviero-dev.github.io/Dashboard-Crypto/">
            <button>Ver Projeto →</button>
          </a>
          <a href="https://github.com/reviero-dev/Dashboard-Crypto">
            <button>Ver Repositorio</button>
          </a>
        </div>

        <div className="service-card">
          <img src={buscadeusuarios} alt="pj-busca de usuario" />

          <h4>Busca de usuario GitHub</h4>

          <p>
            Buscador de usuários via API do GitHub com busca de dados em tempo
            real.
          </p>

          <a href="https://reviero-dev.github.io/Busca-de-usuarios--GitHub/">
            <button>Ver Projeto →</button>
          </a>

          <a href="https://github.com/reviero-dev/Busca-de-usuarios--GitHub">
            <button>Ver Repositorio</button>
          </a>
        </div>

        <div className="service-card">
          <img src={ecommerceresponsivo} alt="vvv" />

          <h4>Ecommerce Responsivo</h4>

          <p>
            Plataforma de e-commerce escalável com filtragem dinâmica e
            sincronização de estoque.
          </p>

          <a href="https://reviero-dev.github.io/ecommerce-responsivo-js/">
            <button>Ver Projeto →</button>
          </a>

          <a href="https://github.com/reviero-dev/ecommerce-responsivo-js">
            <button>Ver Repositorio</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
