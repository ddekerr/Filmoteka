import './refs';
import config from './config';

import modal from './modal';

import { fetchTrendingFilms } from './fetchingTrendingFilms';
// import './library-buttons';
import { pagination } from './pagination';
import { createFilmsGallery } from './markUpFilmsGallery';

const pagin = pagination();
const page = pagin.getCurrentPage();

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
