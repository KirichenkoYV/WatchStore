const React = require('react');
const Layout = require('./Layout');

function WatchList({ watchList }) {
  <Layout>
    {watchList.map((watch) => (
      <>
        <title>{watch.dataValues.title}</title>
        <img
          className="d-block w-30 h-25"
          width="50"
          height="15"
          src={watch.dataValues.imagePath}
          alt="image1"
        />
        <text>{watch.dataValues.note}</text>
        <small>{watch.dataValues.createdAt}</small>
      </>
    ))}
  </Layout>;
}
module.exports = WatchList;
