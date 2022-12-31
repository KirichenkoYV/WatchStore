const React = require('react');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <script src="/client.js" defer />
      </head>
      <body>
        <header>
          <ul style={{ listStyleType: 'none' }}>
            <nav className="navbar bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="">
                  <img
                    src="/docs/5.2/assets/brand/bootstrap-logo.svg"
                    alt="Logo"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                  />
                  Сайт часов
                </a>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Главная
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Примеры работ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Заказ
                  </a>
                </li>
              </div>
            </nav>
          </ul>
        </header>
        <main>{children}</main>
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-light">
          <div className="container py-4 py-md-5 px-4 px-md-3">
            <div className="row">
              <div className="col-lg-3 mb-3">
                <ul className="list-unstyled small text-muted" />
              </div>
              <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                <h5>Кем разработана</h5>
                <ul className="list-unstyled" />
              </div>
              <div className="col-6 col-lg-2 mb-3">
                <h5>Контакты</h5>
              </div>
            </div>
          </div>
        </footer>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

module.exports = Layout;
