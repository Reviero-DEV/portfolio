import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contacts({ setSection }) {
  return (
    <>
      <div className="overlay contacts">
        <button className="close-btn" onClick={() => setSection(null)}>
          X
        </button>
        <h1>Contatos</h1>
        <h3>Aberto a oportunidades, networking e freelas</h3>
        <div className="icons">
          <div className="icon">
            <a href="mailto:netoreviero@gmail.com" target="_blank">
              <div className="box">
                <MdEmail className="contact-icon" />
              </div>
            </a>

            <a href="mailto:netoreviero@gmail.com" target="_blank">
              <p>E-mail</p>
            </a>

            <a href="mailto:netoreviero@gmail.com" target="_blank">
              <p>Contato direto</p>
            </a>
          </div>

          <div className="icon">
            <a href="https://www.linkedin.com/in/neto-reviero" target="_blank">
              <div className="box">
                <FaLinkedin className="contact-icon" />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/neto-reviero" target="_blank">
              <p>Linkedin</p>
            </a>

            <a href="https://www.linkedin.com/in/neto-reviero" target="_blank">
              <p>Perfil profissional</p>
            </a>
          </div>

          <div className="icon">
            <a href="https://github.com/reviero-dev" target="_blank">
              <div className="box">
                <FaGithub className="contact-icon" />
              </div>
            </a>

            <a href="https://github.com/reviero-dev" target="_blank">
              <p>Github</p>
            </a>

            <a href="https://github.com/reviero-dev" target="_blank">
              <p>Projetos e repositorios</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
