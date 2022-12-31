const React = require('react');
const Layout = require('./Layout');

function CreateWatchPage() {
  return (
    <Layout>
      <form action="/admin/post" method="POST" className="titleInput">
        <div>
          <h5 htmlFor="titleInput">Название часов</h5>
        </div>
        <div>
          <input name="title" placeholder="Название часов" />
        </div>
        <div>
          <h5 htmlFor="noteInput">Описание часов</h5>
        </div>
        <div>
          <input name="note" placeholder="Описание часов" />
        </div>
        <div>
          <input name="imagePath" placeholder="Путь до фотографии часов" />
        </div>
        <div>
          <button type="submit">Добавить</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = CreateWatchPage;
