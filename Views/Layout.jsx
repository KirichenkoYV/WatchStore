const React = require('react');
const Navigation = require('./Navigation');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />

        <title></title>
        <script defer />
      </head>
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

module.exports = Layout;
