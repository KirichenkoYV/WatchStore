const React = require('react');

module.exports = function FormPage() {
  return (
    <form
      method="POST"
      action="/neworder"
      className="js-creatOrder"
      style={{ display: 'block' }}
    >
      <div>
        Cоздать заказ:
        <input
          className="nameClient"
          type="text"
          placeholder="Ваше имя"
          name="name"
          required
        />
        <input
          className="emailClient"
          type="text"
          placeholder="Ваша почта"
          name="email"
          required
        />
        <input
          className="phoneClient"
          type="text"
          placeholder="Ваш номер телефона"
          name="phone"
          required
        />
        <input
          className="urlClient"
          type="text"
          placeholder="Ссылка на понравившиеся часы"
          name="url"
          required
        />
        <a href="/">
          <button type="submit" className="buttonSend">
            Small button
          </button>
        </a>
      </div>
    </form>
  );
};
