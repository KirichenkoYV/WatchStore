const React = require('react');
const Navigation = require('./Navigation');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <header>
          <div>
            <nav>
              <Navigation />
            </nav>
            <div className="logo-container">
              <img className="logo" src="/images/logo.png" alt="logo" />
              <h1>Watch Store</h1>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

module.exports = Layout;
