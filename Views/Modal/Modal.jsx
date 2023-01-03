const React = require('react');

module.exports = function Modal() {
  return (
    <div className="pop-up">
      <div className="pop-up__content">
        <span>Your order is accepted!</span>
        <span className="pop-up__close">X</span>
      </div>
    </div>
  );
};
