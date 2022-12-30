const React = require('react');

function RegistrationPage() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        />
        <title>Document</title>
      </head>
      <body className="bg-secondary">
        <form className="container mt-2" method="POST" action="/admin">
          <label htmlFor="loginInput">Login</label>
          <input
            className="form-control mb-2 bg-light"
            name="login"
            id="loginInput"
            type="text"
            required
          />

          <label htmlFor="passwordInput">Password</label>
          <input
            className="form-control mb-2 bg-light"
            name="password"
            id="passwordInput"
            type="password"
            required
          />

          <button
            id="knopka"
            className="btn btn-default btn-m bg-info"
            type="submit"
          >
            Subbmit
          </button>
        </form>
      </body>
    </html>
  );
}

module.exports = RegistrationPage;
