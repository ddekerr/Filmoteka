import { gallery } from './refs';
// import config from './config';

import modal from './modal';
import modalteam from './modalteam';
// import './modal-log-in';
// import './log-in';
import searchMovie from './search-movie';
// import './library-buttons';
import { pagination, topFunction } from './pagination';
import { spinner } from './spinner';

import {
  fetchTrendingMovies,
  fetchMoviesByQuery,
  fetchMovieByID,
  genersForFilmCard,
} from './filmoteka';
import { createFilmsGallery } from './markups';

/**
 * Default request when page opening
 * if everything fine render films gallery
 */
const pagin = pagination();
const page = pagin.getCurrentPage();
spinner.spin(gallery);

fetchTrendingMovies(page).then(data => {
  const total = data.total_results;
  pagin.reset(total);
  const markup = createFilmsGallery(data.results);
  gallery.innerHTML = markup;
  spinner.stop(gallery);
});

pagin.on('beforeMove', event => {
  spinner.spin(gallery);
  topFunction();
  // получаем номер активной страницы на кнопках
  const currentPage = event.page;

  // получаем фильмы согласно страницы
  fetchTrendingMovies(currentPage).then(data => {
    const markup = createFilmsGallery(data.results);
    gallery.innerHTML = markup;
    spinner.stop(gallery);
  });
});
