const React = require('react');
const Layout = require('./Layout');

module.exports = function HomePage({ watches }) {
  console.log(watches[0].dataValues.title);
  return (
    <Layout>
      <div
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
      </div>
      <div>
        О нас: Мастерская часов Дом Быта.com, предлагает широкий спектр услуг по
        ремонту, а также обслуживанию часов ведущих отечественных швейцарских,
        европейских и азиатских марок. Накопленный годами опыт работы, позволяет
        нам осуществлять ремонт часов любой сложности, вне зависимости от их
        типа, будь то ремонт механических или кварцевых часов.
      </div>
      <form>
        <div>
          Cоздать заказ:
          <input
            className="nameClient"
            type="text"
            placeholder="Ваше имя"
            aria-label="default input example"
          />
          <input
            className="emailClient"
            type="text"
            placeholder="Ваша почта"
            aria-label="default input example"
          />
          <input
            className="phoneClient"
            type="text"
            placeholder="Ваш номер телефона"
            aria-label="default input example"
          />
          <input
            className="urlClient"
            type="text"
            placeholder="Ссылка на понравившиеся часы"
            aria-label="default input example"
          />
          <button type="button" className="buttonSend">Small button</button>
        </div>
      </form>
    </Layout>
  );
};
