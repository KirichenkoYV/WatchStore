const React = require('react');
const Layout = require('./Layout');

module.exports = function HomePage({ watches }) {
  return (
    <Layout>
      <section className="brand">
        <div className="brand__content">
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
          <img src="img/watchBr.png" alt="watch" className="brand__img-watch" />
        </div>
      </section>
      {/* <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        {watches.map((el, i) => (
          <div className="carousel-inner">
            <div
              className={`carousel-item ${i === 0 ? 'active' : ''}`}
              data-bs-interval="1000"
            >
              <img
                src={el.dataValues.imagePath}
                className="d-block w-30 h-25"
                width="300"
                height="150"
                alt="image1"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{el.dataValues.title}</h5>
                <p>{el.dataValues.note}</p>
              </div>
            </div>
          </div>
        ))}

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Предыдущая</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Следующая</span>
        </button>
      </div> */}
      <form className="js-creatOrder" style={{ display: 'block' }}>
        <div>
          Cоздать заказ:
          <input
            className="nameClient"
            type="text"
            placeholder="Ваше имя"
            aria-label="default input example"
            name="name"
          />
          <input
            className="emailClient"
            type="text"
            placeholder="Ваша почта"
            aria-label="default input example"
            name="email"
          />
          <input
            className="phoneClient"
            type="text"
            placeholder="Ваш номер телефона"
            aria-label="default input example"
            name="phone"
          />
          <input
            className="urlClient"
            type="text"
            placeholder="Ссылка на понравившиеся часы"
            aria-label="default input example"
            name="url"
          />
          <button type="button" className="buttonSend">
            Small button
          </button>
        </div>
      </form>
      <div className="div" style={{ display: 'none' }}>
        ваш заказа принят
      </div>
      <script src="/order.js" defer />
    </Layout>
  );
};
