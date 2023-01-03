/* eslint-disable object-curly-newline */
const changeCarousel = document.querySelector('#changeCarousel');
const tableCarousel = document.querySelector('.tableCarousel');
changeCarousel.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { title, note, imagePath, method, action } = event.target;
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

const changeCatolog = document.querySelector('#changeCatolog');
const tableCatalog = document.querySelector('.tableCatalog');
changeCatolog.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { titleWatch, urlWatch, method, action } = event.target;
  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      titleWatch: titleWatch.value,
      urlWatch: urlWatch.value,
    }),
  });
  const data = await response.text();
  tableCatalog.innerHTML += data;
});

const admin = document.querySelector('.admin');
admin.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteCarousel')) {
    event.preventDefault();
    const { id } = event.target;
    const response = await fetch(`/cabinetAdmin/${id}`, {
      method: 'delete',
    });
    const data = await response.json();
    if (data.delete) {
      document.querySelector(`#card-${id}`).remove();
    }
  }
});

admin.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteCatalog')) {
    event.preventDefault();
    const { id } = event.target;
    const response = await fetch(`/cabinet/${id}`, {
      method: 'delete',
    });
    const data = await response.json();
    if (data.delete) {
      document.querySelector(`#card-${id}`).remove();
    }
  }
});
