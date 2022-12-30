const React = require('react');

module.exports = function FormPage() {
  return (
    <div className="order" id="Order">
      <form method="POST" action="/neworder" className="order__content">
        <span>Create an order for a unique watch</span>
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
          <button type="submit" className="buttonSend">
            Small button
          </button>
        </a>
      </form>
    </div>
  );
};
