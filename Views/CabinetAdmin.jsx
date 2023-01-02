/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const CarouselAdmin = require('./CarouselAdmin');

module.exports = function CabinetAdmin({ orders, carousel, catalog }) {
  return (
    <Layout>
      <header className="header">
        <section className="header__content">
          <div className="header__logo">
            <a href="/" className="header__link">
              <img src="img/logo.png" alt="Logo" className="header__img" />
              <span className="header__text">InTime</span>
            </a>
          </div>
        </section>
      </header>
      <div className="admin">
        <div>
          <h2>Таблица заказов:</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Имя клиента</th>
                <th scope="col">Номер телефона</th>
                <th scope="col">Почта</th>
                <th scope="col">Ссылка на часы</th>
                <th scope="col">Дата оформления заказа</th>
                <th scope="col">Cтатус заказа</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((el, i) => (
                <tr key={el.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{el.dataValues.name}</td>
                  <td>{el.dataValues.email}</td>
                  <td>{el.dataValues.phone}</td>
                  <td>{el.dataValues.url}</td>
                  <td>{Date(el.dataValues.createdAt)}</td>
                  <td>{el.dataValues.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2>Таблица изменения карусели:</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Название часов</th>
                <th scope="col">Описание часов</th>
                <th scope="col">URL картинки</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody className="tableCarousel">
              {carousel.map((el, i = 0) => (
                <CarouselAdmin el={el} i={i} />
              ))}
            </tbody>
          </table>
          <div className="" id="Order">
            <form
              method="POST"
              className=""
              id="changeCarousel"
              action="/cabinetAdmin"
            >
              Изменить карусель:
              <input
                className="nameClient form-control"
                type="text"
                placeholder="Название часов"
                name="title"
                required
              />
              <input
                className="emailClient form-control"
                type="text"
                placeholder="Описание часов"
                name="note"
                required
              />
              <input
                className="phoneClient form-control"
                type="text"
                placeholder="URL картинки"
                name="imagePath"
                required
              />
              <button type="submit" className="buttonSend">
                Добавить
              </button>
            </form>
          </div>
        </div>
        <div>
          <h2>Таблица изменения каталог:</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Название часов</th>
                <th scope="col">URL картинки</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {catalog.map((el, i) => (
                <tr key={el.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{el.dataValues.titleWatch}</td>
                  <td>{el.dataValues.urlWatch}</td>
                  <td>
                    <button type="button">
                      <img src="img/x.svg" alt="delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="" id="Order1">
            <form method="POST" className="" action="/cabinet">
              Изменить каталог:
              <input
                className="nameClient form-control"
                type="text"
                placeholder="Название часов"
                name="titleWatch"
                required
              />
              <input
                className="phoneClient form-control"
                type="text"
                placeholder="URL картинки"
                name="urlWatch"
                required
              />
              <button type="submit" className="buttonSend">
                Добавить
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
