import pagination from './pagination';
import { deletePageButton } from './pagination-layout';
import { spinner } from './spinner';
import { gallery, pag, cardModal, formSearch } from './refs';

import { topFunction } from './functions';
import { fetchTrendingMovies, fetchMovieByID } from './filmoteka';
import { searchMovie } from './search-movie';
import { createFilmsGallery, renderMarkup } from './markups';
import { onHoverBtnCLick } from './local-storage';

import './modal';
import modalteam from './modalteam';


let totalPages;

// Set pagination
const page = pagination.getCurrentPage();

// start spinner
spinner.spin(gallery);

// Listeners
pagination.on('beforeMove', onPaginClick);
pagination.on('afterMove', renderPagin);
formSearch.addEventListener('submit', searchMovie);

gallery.addEventListener('click', onHoverBtnCLick);
cardModal.addEventListener('click', onHoverBtnCLick);
/**
 * Default request when page opening
 * if everything fine render films gallery
 * @param {Integer} page getting from pagination object
 */
fetchTrendingMovies(page).then(data => {
  // Total films result - array.length of data.results object
  const total = data.total_results;
  totalPages = data.total_pages;
  // Init counts of page depends of pagination instance (20 count on page)
  pagination.reset(total);

  // Render list of objects
  const markup = createFilmsGallery(data.results, true, false);
  spinner.stop(gallery);
  renderMarkup(gallery, markup);
  pag.classList.remove('is-hidden');
  renderPagin();
});

//Pagination event function
function onPaginClick(e) {
  topFunction();
  spinner.spin(gallery);

  // получаем номер активной страницы на кнопках
  const currentPage = e.page;

  // получаем фильмы согласно страницы
  fetchTrendingMovies(currentPage).then(data => {
    const markup = createFilmsGallery(data.results, true, false);
    renderMarkup(gallery, markup);
    spinner.stop(gallery);
  });
}

// рендерим кастомную пагинацию
function renderPagin() {
  const first = document.querySelector('.tui-ico-first');
  if (null !== first) {
    first.textContent = '1';
  }

  const last = document.querySelector('.tui-pagination .tui-ico-last');
  if (null !== last) {
    last.textContent = totalPages;
  }

  deletePageButton(1, '.tui-first');
  deletePageButton(totalPages, '.tui-last');
}
