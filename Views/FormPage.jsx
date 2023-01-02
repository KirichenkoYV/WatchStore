const React = require('react');

module.exports = function FormPage() {
  return (
    <div className="order" id="Order">
      <h1 className="order__title">Create an order for a unique watch</h1>
      <div className="order__content">
        <form method="POST" action="/neworder" className="order__item">
          <input
            className="nameClient form-control"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
          <input
            className="emailClient form-control"
            type="text"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="phoneClient form-control"
            type="text"
            placeholder="Phone"
            name="phone"
            required
          />
          <input
            className="urlClient form-control"
            type="text"
            placeholder="Link to favorite watch"
            name="url"
            required
          />
          <a href="/">
            <button type="submit" className="btn">
              SEND
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};
