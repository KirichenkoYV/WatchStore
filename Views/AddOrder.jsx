/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function AddOrder() {
  return (
    <Layout>
      <div className="div" style={{ display: 'block' }}>
        Ваш заказ принят
      </div>
      <script src="/order.js" defer />
    </Layout>
  );
};
