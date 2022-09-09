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
// fetchTrendingMovies(page).then(data => {
//   const total = data.total_results;
//   pagin.reset(total);
//   const markup = createFilmsGallery(data.results);
//   gallery.innerHTML = markup;
// });

// pagin.on('beforeMove', event => {
//   // получаем номер активной страницы на кнопках
//   const currentPage = event.page;

//   // получаем фильмы согласно страницы
//   fetchTrendingMovies(currentPage).then(data => {
//     const markup = createFilmsGallery(data.results);
//     gallery.innerHTML = markup;
//   });
// });
