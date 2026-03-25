export default function Contacts({ setSection }) {
  return (
    <>
      <div className="overlay contacts">
        <button className="close-btn" onClick={() => setSection(null)}>
          X
        </button>
        <h1>Contatos</h1>
        <div className="icons">
          <div className="icon">
            <a href="mailto:netoreviero@gmail.com" target="_blank">
              <div className="box">
                <i className="fa-regular fa-envelope"></i>
              </div>
            </a>

            <a href="mailto:netoreviero@gmail.com" target="_blank">
              <p>E-mail</p>
            </a>

            <a href="mailto:netoreviero@gmail.com" target="_blank">
              <p>netoreviero@gmail.com</p>
            </a>
          </div>

          <div className="icon">
            <a
              href="https://api.whatsapp.com/send?phone=557777777777"
              target="_blank"
            >
              <div className="box">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=557777777777"
              target="_blank"
            >
              <p>Whatsapp</p>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=557777777777"
              target="_blank"
            >
              <p>(77) 777777777</p>
            </a>
          </div>

          <div className="icon">
            <a href="https://www.linkedin.com/in/neto-reviero" target="_blank">
              <div className="box">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/neto-reviero" target="_blank">
              <p>Linkedin</p>
            </a>

            <a href="https://www.linkedin.com/in/neto-reviero" target="_blank">
              <p>@netoreviero</p>
            </a>
          </div>

          <div className="icon">
            <a href="https://github.com/reviero-dev" target="_blank">
              <div className="box">
                <i className="fa-brands fa-github"></i>
              </div>
            </a>

            <a href="https://github.com/reviero-dev" target="_blank">
              <p>Github</p>
            </a>

            <a href="https://github.com/reviero-dev" target="_blank">
              <p>@reviero-dev</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
