const React = require('react');
const Layout = require('./Layout');

module.exports = function newOrder() {
  return (
    <Layout>
      <h1>Lets order unique watches</h1>
      <form method="post" action="/">
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" />
          <div id="emailHelp" className="form-text">
            How may I address you
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Please write your name{' '}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone-input" className="form-label">
            Phone
          </label>
          <input type="phone" className="form-control" />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupFile01">
            Upload
          </label>
          <input type="file" class="form-control" id="inputGroupFile01" />
        </div>
        <button type="submit" className="btn btn-primary">
          Order
        </button>
      </form>
    </Layout>
  );
};
