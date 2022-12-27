const React = require('react');
const Layout = require('./Layout');

function WatchList({ watchList }) {
  return (
    <Layout>
      <h3>Редактирование контента</h3>
      <br />
      <a href="/admin/add-new-content">Добавить часы</a>
      <br />
      <br />
      <ol className="js-watches">
        {watchList.map((watch) => (
          <li>
            <div>
              <img src={watch.dataValues.imagePath} alt={watch.dataValues.id} />
              <div>
                <h6>{watch.dataValues.title}</h6>
                <p>{watch.dataValues.note}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      
    </Layout>
  );
}
module.exports = WatchList;
