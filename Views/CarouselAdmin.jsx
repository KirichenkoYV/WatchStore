/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function CarouselAdmin({ el, i }) {
  return (
    <tr key={el.id} id={`card-${el.id}`}>
      <th scope="row">{i + 1}</th>
      <td>{el.dataValues.title}</td>
      <td>{el.dataValues.note}</td>
      <td className="admin__font-size">{el.dataValues.imagePath}</td>
      <td>
        <button type="button" className="admin__delete">
          <img
            id={el.id}
            src="img/x.svg"
            alt="delete"
            className="admin__delete deleteCarousel"
          />
        </button>
      </td>
    </tr>
  );
};
