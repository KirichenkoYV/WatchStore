const React = require('react');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>InTime store</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <script
          src="https://kit.fontawesome.com/91f59af31d.js"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <header className="header">
          <section className="header__content">
            <div className="header__logo">
              <a href="/" className="header__link">
                <img src="img/logo.png" alt="Logo" className="header__img" />
                <span className="header__text">InTime</span>
              </a>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#About" className="nav__link">
                  <span className="nav__text">About us</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#Examples" className="nav__link">
                  <span className="nav__text">Work examples</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#Order" className="nav__link">
                  <span className="nav__text">Order</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#Contacts" className="nav__link">
                  <span className="nav__text">Contacts</span>
                </a>
              </li>
            </ul>
          </section>
        </header>
        <main className="main">{children}</main>
        <footer className="footer" id="Contacts">
          <div className="">
            <div className="">
              <p className="footer__text">© 2023 Brand All Rights Reserved.</p>
              <div className="footer__social">
                <a href="/" className="footer__item">
                  <i className="footer__icon fa-brands fa-facebook-f" />
                </a>
                <a href="/" className="footer__item">
                  <i className="footer__icon fa-brands fa-instagram" />
                </a>
                <a href="/" className="footer__item">
                  <i className="footer__icon fa-brands fa-pinterest-p" />
                </a>
                <a href="/" className="footer__item">
                  <i className="footer__icon fa-brands fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        />
        <script src="/order.js" defer />
      </body>
    </html>
  );
}

module.exports = Layout;
