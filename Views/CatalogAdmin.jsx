/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function CatologAdmin({ el, i }) {
  return (
    <tr key={el.id} id={`card-${el.id}`}>
      <th scope="row">{i + 1}</th>
      <td>{el.dataValues.titleWatch}</td>
      <td className="admin__font-size">{el.dataValues.urlWatch}</td>
      <td>
        <button type="button" className="admin__delete">
          <img
            src="img/x.svg"
            alt="delete"
            id={el.id}
            className="admin__delete deleteCatalog"
          />
        </button>
      </td>
    </tr>
  );
};
