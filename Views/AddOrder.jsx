/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function AddOrder({ watches }) {
  return (
    <Layout>
      <div className="div" style={{ display: 'block' }}>
        ваш заказа принят
      </div>
      <script src="/order.js" defer />
    </Layout>
  );
};
