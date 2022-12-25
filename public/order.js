// const { json } = require('sequelize');

// const formOrder = document.querySelector('.js-creatOrder');
// const div = document.querySelector('.div');
// console.log(div);
// formOrder.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const name = event.target.name.value;
//   const email = event.target.email.value;
//   const phone = event.target.phone.value;
//   const url = event.target.url.value;
//   const response = await fetch('/neworder', {
//     method: 'GET',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify({
//       name,
//       email,
//       phone,
//       url,
//     }),
//   });
//   formOrder.style.display = 'none';
//   div.style.display = 'block';
//   const data = await response.text();
// });
