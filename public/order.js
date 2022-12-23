const formOrder = document.querySelector('.js-creatOrder');
const div = document.querySelector('.div');
formOrder.addEventListener('submit', async (event) => {
  event.preventDefault();
  formOrder.style.display = 'none';
  div.style.display = 'block';
});
