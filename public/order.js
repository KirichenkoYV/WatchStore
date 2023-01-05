const closeModal = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');

closeModal.addEventListener('click', (event) => {
  popUp.style.display = 'none';
});
