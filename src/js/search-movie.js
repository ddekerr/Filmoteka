import { Notify } from 'notiflix';
import { spinner } from './spinner';
import { options } from './options-notiflix';
import { gallery, formSearch, imp, pag } from './refs';
import { topFunction, addAnimation, removeAnimation } from './functions';
import pagination from './pagination';
import { deletePageButton } from './pagination-layout';
import { fetchMoviesByQuery } from './filmoteka';
import { createFilmsGallery, renderMarkup } from './markups';

// Set pagination
const page = pagination.getCurrentPage();
let totalPages;

let query = '';
let repeatQuery = null;

export function searchMovie(e) {
  e.preventDefault();
  // start spinner
  spinner.spin(gallery);

  repeatQuery = query;
  query = formSearch.searchQuery.value.trim();

  if (query === '') {
    spinner.stop(gallery);
    Notify.info('Please enter a movie name to search.', options);
    return;
  }
  if (query === repeatQuery) {
    spinner.stop(gallery);
    Notify.warning('Please enter another movie name to search.', options);
    return;
  }

  addAnimation();
  setTimeout(removeAnimation, 1500);

  fetchMoviesByQuery(query, page).then(data => {
    if (data.results.length === 0) {
      renderMarkup(gallery, '');
      // pagination does not show up
      pag.classList.add('is-hidden');
      spinner.stop(gallery);
      Notify.failure(
        'Search result not successful. Enter the correct movie name and try again please.',
        options
      );
      return;
    }

    Notify.success(
      `According to your request, we found ${data.total_results} movies.`,
      options
    );

    const total = data.total_results;
    totalPages = data.total_pages;
    pagination.reset(total);

    const markup = createFilmsGallery(data.results, true, false);
    renderMarkup(gallery, markup);
    renderPagin();
    pag.classList.remove('is-hidden');
    spinner.stop(gallery);
  });

  pagination.on('beforeMove', onPaginClick);
  pagination.on('afterMove', renderPagin);
}

//Pagination event function
function onPaginClick(e) {
  topFunction();
  spinner.spin(gallery);

  // получаем номер активной страницы на кнопках
  const currentPage = e.page;

  // получаем фильмы согласно страницы
  fetchMoviesByQuery(query, currentPage).then(data => {
    const markup = createFilmsGallery(data.results, true, false);
    renderMarkup(gallery, markup);
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
