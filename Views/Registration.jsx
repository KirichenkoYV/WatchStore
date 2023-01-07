const React = require('react');
const Layout = require('./Layout');

function RegistrationPage() {
  return (
    <Layout>
      <header className="header">
        <div className="header__content container">
          <div className="header__logo">
            <a href="/" className="header__link">
              <img src="img/logo.png" alt="Logo" className="header__img" />
              <span className="header__text">InTime</span>
            </a>
          </div>
        </div>
      </header>
      <div className="admin__login">
        <form className="container admin__rega" method="POST" action="/admin">
          <span>Username</span>
          <input
            className="form-control mb-2 bg-light"
            name="login"
            id="loginInput"
            type="text"
            required
          />
          <span>Password</span>
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
            SING IN
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = RegistrationPage;
