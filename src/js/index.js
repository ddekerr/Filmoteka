import { gallery } from './refs';
import {topFunction, noReloadByEnter, renderMarkup} from './functions'

import modal from './modal';
import modalteam from './modalteam';
// import './modal-log-in';
// import './log-in';
import searchMovie from './search-movie';
// import './library-buttons';
import { pagination } from './pagination';
import { spinner } from './spinner';

import { fetchTrendingMovies, fetchMoviesByQuery, fetchMovieByID, } from './filmoteka';
import { createFilmsGallery,  } from './markups';


const pagin = pagination();
const page = pagin.getCurrentPage();
console.log(page)
spinner.spin(gallery);

/**
 * Default request when page opening
 * if everything fine render films gallery
 * @param {Integer} page getting from pagination object
 */
fetchTrendingMovies(page).then(data => {
  // Total films result - array.length of data.results object
  const total = data.total_results;
  // Init counts of page depends of pagination instance (20 count on page)
  pagin.reset(total);

  const markup = createFilmsGallery(data.results);
  renderMarkup(gallery, markup);
  spinner.stop(gallery);
});


/**
 * Event click on pagination elements
 */
pagin.on('beforeMove', event => {
  spinner.spin(gallery);
  topFunction();
  // получаем номер активной страницы на кнопках
  const currentPage = event.page;

  // получаем фильмы согласно страницы
  fetchTrendingMovies(currentPage).then(data => {
    const markup = createFilmsGallery(data.results);
    renderMarkup(gallery, markup);
    spinner.stop(gallery);
  });
});
