const React = require('react');

function Navigation() {
  return (
    <nav className="clearfix mar-b-1">
      <ul className="no-bullets no-margin no-padding left">
        <li className="pipe-separate t-light-green left">
          <a href="/">Home</a>
        </li>
        <li className="pipe-separate t-light-green left">
          <a href="/">Our performances</a>
        </li>
        <li className="pipe-separate t-light-green left">
          <a href="/">Order</a>
        </li>
        <li className="pipe-separate t-light-green left">
          <a href="/">Contacts</a>
        </li>
      </ul>
      <div>
      <ul className="no-bullets no-margin no-padding right">
        <li className="pipe-separate t-light-green left">
          <a href="/auth/login">Login</a>
        </li>
        <li className="pipe-separate t-light-green left">
          <a href="/auth/login">Password</a>
        </li>
      </ul>
    </div>
    </nav>
    
  );
}

module.exports = Navigation;
