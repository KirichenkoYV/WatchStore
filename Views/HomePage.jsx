/* eslint-disable react/prop-types */
const React = require('react');
const FormPage = require('./FormPage');
const Layout = require('./Layout');

module.exports = function HomePage({ watches, watchesCatalog }) {
  return (
    <Layout>
      <header className="header">
        <section className="header__content container">
          <div className="header__logo">
            <a href="/" className="header__link">
              <img src="img/logo.png" alt="Logo" className="header__img" />
              <span className="header__text">InTime</span>
            </a>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#About" className="nav__link">
                <span className="nav__text">About us</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Examples" className="nav__link">
                <span className="nav__text">Work examples</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Order" className="nav__link">
                <span className="nav__text">Order</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Contacts" className="nav__link">
                <span className="nav__text">Contacts</span>
              </a>
            </li>
          </ul>
        </section>
      </header>
      <main className="main">
        <div className="brand" id="About">
          <div className="brand__flex">
            <div className="brand__first container">
              <div className="brand__info">
                <h2 className="brand__title">Create your own unique design</h2>
                <p className="brand__text">
                  The watch workshop InTime was founded in 2021. We love it when
                  everything is done on time, so we believe that everyone needs
                  a watch. We focus on detail-oriented design based on
                  minimalism and precision. Whether it's gold watches, silver
                  watches or rose gold watches, we produce flawless timepieces
                  that will enhance your image.
                </p>
              </div>
              <img src="img/item.png" alt="item" className="brand__img" />
              <img
                src="img/watchBr.png"
                alt="watch"
                className="brand__img-watch"
              />
            </div>
            <div className="wrapper">
              <div className="parallax-img" />
            </div>
            <div />
            <div className="brand__second container">
              <img
                src="img/item1.png"
                alt="woman"
                className="brand__img-woman"
              />
              <img src="img/detail.png" alt="" className="brand__img-detail" />
              <div className="brand__info">
                <h2 className="brand__title">Reliable and durable material</h2>
                <p className="brand__text">
                  All of our watch faces are designed with timeless material and
                  versatility in mind, and are easy to pair with a variety of
                  interchangeable straps. Whether you're attending a formal
                  event, or enjoying a sunny day at the beach club, our watches
                  are the perfect companion for any occasion or setting.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-slider container" id="Examples">
          <h2 className="my-slider__title">Sensuality and style</h2>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              {watches.map((el, i) => (
                <div
                  className={`carousel-item ${i === 0 ? 'active' : ''}`}
                  data-bs-interval="8000"
                  key={el.id}
                >
                  <img
                    src={el.dataValues.imagePath}
                    className="d-block w-100 my-slider__style"
                    alt="img"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{el.dataValues.title}</h5>
                    <p>{el.dataValues.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <br />
        </div>
        <div className="catalog row container">
          {watchesCatalog.map((el) => (
            <div className="card catalog__card" key={el.id}>
              <img src={el.urlWatch} className="catalog__img" />
              <h5 className="catalog__title">{el.titleWatch}</h5>
            </div>
          ))}
        </div>
        <FormPage />
        <div className="wrapper">
          <div className="parallax-img__world" />
        </div>
        <div className="line">
          <h2 className="line__title">We work all over the world</h2>
          <div className="line__container">
            <p className="line__words">
              LONDON - PARIS - SYDNEY - TOKYO - NEW YORK - BERLIN - ROME -
              LONDON - PARIS - SYDNEY - TOKYO - NEW YORK - BERLIN - ROME -
            </p>
          </div>
        </div>
      </main>
      <footer className="footer" id="Contacts">
        <div className="">
          <div className="">
            <p className="footer__text">© 2023 Brand All Rights Reserved.</p>
            <div className="footer__social">
              <a href="/" className="footer__item">
                <i className="footer__icon fa-brands fa-facebook-f" />
              </a>
              <a href="/" className="footer__item">
                <i className="footer__icon fa-brands fa-instagram" />
              </a>
              <a href="/" className="footer__item">
                <i className="footer__icon fa-brands fa-pinterest-p" />
              </a>
              <a href="/" className="footer__item">
                <i className="footer__icon fa-brands fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      />
      <script src="/order.js" defer />
    </Layout>
  );
};
