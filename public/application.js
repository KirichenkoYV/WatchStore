const changeCarousel = document.querySelector('#changeCarousel');
const tableCarousel = document.querySelector('.tableCarousel');
changeCarousel.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    title, note, imagePath, method, action,
  } = event.target;
  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      title: title.value,
      note: note.value,
      imagePath: imagePath.value,
    }),
  });
  const data = await response.text();
  tableCarousel.innerHTML += data;
});
