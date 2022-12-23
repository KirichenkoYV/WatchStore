const React = require('react');
const Layout = require('./Layout');

function RegistrationPage() {
  return (
    <Layout>
      <form method="POST" action="/admin">
        <label htmlFor="loginInput">Login</label>
        <input name="login" id="loginInput" type="text" required />

        <label htmlFor="passwordInput">Password</label>
        <input name="password" id="passwordInput" type="password" required />

        <button id="knopka" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;
