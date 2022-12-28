const React = require('react');

function WatchCreatedPage({ watch }) {
  return (
    <div>
      <h3>Запись добавлена</h3>
      <div>{watch.title}</div>
      <div>{watch.note}</div>
      <div>{watch.imagePath}</div>
      <br />
      <a href="/admin"> Назад </a>
    </div>
  );
}

module.exports = WatchCreatedPage;
