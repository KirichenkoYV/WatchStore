const React = require('react');
const Layout = require('./Layout');

function NewContentPage() {
  return (
    <Layout>
      <form method="POST" action="admin/add-new-content" className="js-add-watch">
        <label htmlFor="titleInput">Название часов</label>
        <br />
        <input name="title" id="titleInput" placeholder="Название часов" />
        <br />

        <label htmlFor="bodyInput">Описание часов</label>
        <br />
        <textarea
          name="note"
          id="bodyInput"
          required
          placeholder="Описание часов"
          cols="30"
          rows="7"
        />
        <br />

        <button type="submit">Отправить</button>
      </form>
    </Layout>
  );
}

module.exports = NewContentPage;
