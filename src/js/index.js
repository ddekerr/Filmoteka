import { pagination } from './pagination';
import { spinner } from './spinner';
import { gallery, inputSearch, svgSearch, pag } from './refs';
import debounce from 'lodash.debounce';
import { topFunction, noReloadByEnter, addAnimation } from './functions';
import { fetchTrendingMovies, fetchMovieByID } from './filmoteka';
import { searchMovie } from './search-movie';
import { createFilmsGallery, renderMarkup } from './markups';
import { onHoverBtnCLick } from './local-storage';

import './modal';
import modalteam from './modalteam';

import './modal-log-in';
// import './log-in';
import './library'
// import './library-buttons';

// Set pagination
const pagin = pagination();
const page = pagin.getCurrentPage();

// start spinner
spinner.spin(gallery);

// Listeners
pagin.on('beforeMove', onPaginClick);
inputSearch.addEventListener('input', debounce(searchMovie, 1000));
inputSearch.addEventListener('keydown', noReloadByEnter);
inputSearch.addEventListener('input', debounce(addAnimation, 100));
gallery.addEventListener('click', onHoverBtnCLick);

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

  pag.classList.remove('is-hidden');
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