const React = require('react');

module.exports = function CarouselAdmin({ el, i }) {
  return (
    <tr key={el.id}>
      <th scope="row">{i + 1}</th>
      <td>{el.dataValues.title}</td>
      <td>{el.dataValues.note}</td>
      <td>{el.dataValues.imagePath}</td>
      <td>
        <button type="button">
          <img src="img/x.svg" alt="delete" />
        </button>
      </td>
    </tr>
  );
};
