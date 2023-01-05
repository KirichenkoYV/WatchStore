const React = require('react');

module.exports = function Modal() {
  return (
    <div className="pop-up">
      <div className="pop-up__content">
        <span className="pop-up__close">X</span>
        <span className="pop-up__text">Your order is accepted!</span>
      </div>
    </div>
  );
};
