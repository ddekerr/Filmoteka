import { gallery } from './refs';
// import config from './config';

import modal from './modal';

// import './library-buttons';
import { pagination } from './pagination';

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
fetchTrendingMovies().then(data => {
  const markup = createFilmsGallery(data.results);
  gallery.innerHTML = markup;
});

pagination.on('beforeMove', event => {
  // получаем номер активной страницы на кнопках
  const currentPage = event.page;

  // получаем фильмы согласно страницы
  fetchTrendingMovies(currentPage).then(data => {
    const markup = createFilmsGallery(data);
    gallery.innerHTML = markup;
  });
});
