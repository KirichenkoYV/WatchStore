const React = require('react');
const Layout = require('./Layout');

function AdminPage({ watchList }) {
  return (
    <Layout>
      <div className="create-new-watch">
        <a href="/admin/new">Добавить часы</a>
      </div>
      <br />
      <div className="watches">
        {watchList.map((watch) => (
          <div key={watch.id} className="js-watch" data-id={watch.id}>
            <form action={`/admin/${watch.id}/put`} method="POST">
              <div>
                <input
                  name="title"
                  placeholder="Название часов"
                  defaultValue={watch.title}
                />
              </div>
              <div>
                <input
                  name="note"
                  placeholder="Описание часов"
                  defaultValue={watch.note}
                />
              </div>
              <div>
                <input
                  name="imagePath"
                  placeholder="Путь до файла"
                  defaultValue={watch.imagePath}
                />
              </div>
              <div>
                <button type="submit">Изменить</button>
              </div>
            </form>
            <form action={`/admin/${watch.id}/delete`} method="POST">
              <button type="submit">Удалить</button>
            </form>
            <a href={`admin/${watch.id}`}>Подробнее...</a>
          </div>
        ))}
      </div>

      <script src="/client.js" defer />
    </Layout>
  );
}
module.exports = AdminPage;
