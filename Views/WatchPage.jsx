const React = require('react');
const Layout = require('./Layout');

function WatchPage({ watch }) {
  return (
    <Layout>
      <h3>{watch.title}</h3>
      <div>{watch.note}</div>
      <div>{watch.imagePath}</div>
    </Layout>
  );
}

module.exports = WatchPage;
