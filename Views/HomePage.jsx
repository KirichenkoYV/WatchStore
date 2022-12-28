/* eslint-disable react/prop-types */
const React = require('react');
const FormPage = require('./FormPage');
const Layout = require('./Layout');

module.exports = function HomePage({ watches, watchesCatalog }) {
  return (
    <Layout>
      <section className="brand" id="About">
        <div className="brand__flex">
          <div className="brand__first">
            <div className="brand__info">
              <h2 className="brand__title">Create your own unique design</h2>
              <p className="brand__text">
                An ode to detail-oriented design, crafted around minimalism and
                preciseness. We make immaculate watches that elevate your look
                with a statement, be it gold watches, silver watchess or watches
                in rose gold.
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
              <h2 className="brand__title">
                Reliable and transparent material
              </h2>
              <p className="brand__text">
                An ode to detail-oriented design, crafted around minimalism and
                preciseness. We make immaculate watches that elevate your look
                with a statement, be it gold watches, silver watchess or watches
                in rose gold.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-slider" id="Examples">
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
        <button type="button" className="my-slider__bnt">
          MORE WORKS
        </button>
      </section>
      <div>
        {watchesCatalog.map((el) => (
          <div id="catalog" key={el.id}>
            <div className="card-watches" />
            <img src={el.urlWatch} />
            <div>
              <h5>{el.titleWatch}</h5>
            </div>
          </div>
        ))}
      </div>
      <FormPage />
      <script src="/order.js" defer />
    </Layout>
  );
};
