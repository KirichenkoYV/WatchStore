const React = require('react');
const Layout = require('./Layout');

function LoginPage() {
  return (
    <Layout>
      <form method="POST" action="/auth/login">
        <label htmlFor="loginInput">Email</label>
        <input name="login" id="loginInput" type="email" placeholder="Email" required />

        <label htmlFor="passwordInput">Password</label>
        <input name="password" id="passwordInput" type="password" required />

        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}

module.exports = LoginPage;
