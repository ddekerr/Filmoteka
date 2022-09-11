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


// Set pagination
const pagin = pagination();
const page = pagin.getCurrentPage();

// start spinner
spinner.spin(gallery);

// Listeners
pagin.on('beforeMove', onPaginClick);

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

  // Render list of objects
  const markup = createFilmsGallery(data.results);
  spinner.stop(gallery);
  renderMarkup(gallery, markup);
});


//Pagination event function
function onPaginClick(e) {
  topFunction();
  spinner.spin(gallery);

  // получаем номер активной страницы на кнопках
  const currentPage = e.page;

  // получаем фильмы согласно страницы
  fetchTrendingMovies(currentPage).then(data => {
    const markup = createFilmsGallery(data.results);
    renderMarkup(gallery, markup);
    spinner.stop(gallery);
  });
}
