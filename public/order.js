const closeModal = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');

const buttonSend = document.querySelector('#btnSend');
buttonSend.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { name, email, phone, url, action, method } = event.target;
  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      phone: phone.value,
      url: url.value,
    }),
  });
  const Modal = document.querySelector('.pop-up');
  Modal.style.display = 'flex';
});

closeModal.addEventListener('click', (event) => {
  popUp.style.display = 'none';
});
