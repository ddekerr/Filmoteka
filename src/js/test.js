fetchTrendingFilms(page)
  .then(result => ({
    items: result.data.results,
    total: result.data.total_results,
  }))
  .then(({ items, total }) => {
    createFilmsGallery(items);
    pagin.reset(total);
  });

pagin.on('beforeMove', event => {
  // получаем номер активной страницы на кнопках
  const currentPage = event.page;
  // console.log(currentPage);

  // получаем фильмы согласно страницы и рендерим их
  fetchTrendingFilms(currentPage).then(res => {
    createFilmsGallery(res.data.results);
  });
});
