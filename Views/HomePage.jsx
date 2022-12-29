/* eslint-disable react/prop-types */
const React = require('react');
const FormPage = require('./FormPage');
const Layout = require('./Layout');

module.exports = function HomePage({ watches, watchesCatalog }) {
  return (
    <Layout>
      <div className="brand" id="About">
        <div className="brand__flex">
          <div className="brand__first">
            <div className="brand__info">
              <h2 className="brand__title">Create your own unique design</h2>
              <p className="brand__text">
                The watch workshop InTime was founded in 2021. We love it when
                everything is done on time, so we believe that everyone needs a
                watch. We focus on detail-oriented design based on minimalism
                and precision. Whether it's gold watches, silver watches or rose
                gold watches, we produce flawless timepieces that will enhance
                your image.
              </p>
            </div>
            <img src="img/item.png" alt="item" className="brand__img" />
            <img
              src="img/watchBr.png"
              alt="watch"
              className="brand__img-watch"
            />
          </div>
          <div className="brand__second">
            <img src="img/item1.png" alt="woman" className="brand__img-woman" />
            <img src="img/detail.png" alt="" className="brand__img-detail" />
            <div className="brand__info">
              <h2 className="brand__title">Reliable and durable material</h2>
              <p className="brand__text">
                All of our watch faces are designed with timeless material and
                versatility in mind, and are easy to pair with a variety of
                interchangeable straps. Whether you're attending a formal event,
                or enjoying a sunny day at the beach club, our watches are the
                perfect companion for any occasion or setting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-slider" id="Examples">
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
      <div className="catalog row">
        {watchesCatalog.map((el) => (
          <div className="card catalog__card" key={el.id}>
            <img src={el.urlWatch} className="catalog__img" />
            <h5 className="catalog__title">{el.titleWatch}</h5>
          </div>
        ))}
      </div>
      <FormPage />
      <div className="line">
        <h2 className="line__title">We work all over the world</h2>
        <div className="line__container">
          <p className="line__words">
            LONDON - PARIS - SYDNEY - TOKYO - NEW YORK - BERLIN - ROME - LONDON
            - PARIS - SYDNEY - TOKYO - NEW YORK - BERLIN - ROME -
          </p>
        </div>
      </div>
    </Layout>
  );
};
