import { Notify } from 'notiflix';
import { spinner } from './spinner';
import options from './options-notiflix';
import { gallery, svgSearch, imp, pag } from './refs';
import { topFunction } from './functions';
import pagination from './pagination';
import { fetchMoviesByQuery } from './filmoteka';
import { createFilmsGallery, renderMarkup } from './markups';

// Set pagination
const page = pagination.getCurrentPage();

let query = '';
let repeatQuery = null;

export function searchMovie(e) {
  // start spinner
  spinner.spin(gallery);

  repeatQuery = query;
  query = e.target.value.trim();

  if (query === '') {
    Notify.info('Please enter a movie name to search.', options);
    return;
  }
  if (query === repeatQuery) {
    Notify.warning('Please enter another movie name to search.', options);
    return;
  }

  fetchMoviesByQuery(query, page).then(data => {
    if (data.results.length === 0) {
      renderMarkup(gallery, '');
      // pagination does not show up
      pag.classList.add('is-hidden');
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
    pagination.reset(total);

    const markup = createFilmsGallery(data.results);
    renderMarkup(gallery, markup);
    pag.classList.remove('is-hidden');

    spinner.stop(gallery);
  });
  svgSearch.classList.remove('animation');
  pagination.on('beforeMove', onPaginClick);
}

//Pagination event function
function onPaginClick(e) {
  topFunction();
  spinner.spin(gallery);

  // получаем номер активной страницы на кнопках
  const currentPage = e.page;

  // получаем фильмы согласно страницы
  fetchMoviesByQuery(query, currentPage).then(data => {
    const markup = createFilmsGallery(data.results);
    renderMarkup(gallery, markup);
  });
}
