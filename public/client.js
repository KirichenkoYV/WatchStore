document.querySelectorAll('.remove-watch').forEach((button) => {
  button.addEventListener('click', async (event) => {
    const el = event.target;
    const watch = el.closest('.watch');
    // В dataset лежат все данные, которые мы прописали в data-атрибуты
    const id = Number(watch.dataset.id);

    await fetch('/admin/remove-watch', {
      method: 'POST',
      body: JSON.stringify({ id }), // Отослали это тело в виде строки
      headers: {
        'Content-Type': 'application/json', // и сказали серверу, что это строка в виде json
      },
    });

    watch.remove();
  });
});
