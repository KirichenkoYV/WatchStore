const React = require('react');

function Navigation() {
  return (
    <nav>
      <a href="/">Home</a>
      {' · '}
      <a href="/notes">Our performances</a>
      {' · '}
      <a href="/notes">Order</a>
      {' · '}
      <a href="/auth/login">Contacts</a>
    </nav>
  );
}

module.exports = Navigation;
