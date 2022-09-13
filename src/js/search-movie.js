import { Notify } from 'notiflix';
import { spinner } from './spinner';
import  options  from './options-notiflix';
import { gallery, formSearch, imp, pag } from './refs';
import { topFunction, addAnimation, removeAnimation } from './functions';
import pagination from './pagination';
import { fetchMoviesByQuery } from './filmoteka';
import { createFilmsGallery, renderMarkup } from './markups';

// Set pagination
const page = pagination.getCurrentPage();

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
      Notify.failure('Search result not successful. Enter the correct movie name and try again please.',
        options);
      return;
    }

    Notify.success(`According to your request, we found ${data.total_results} movies.`,
      options);

    const total = data.total_results;
    pagination.reset(total);

    const markup = createFilmsGallery(data.results);
    renderMarkup(gallery, markup);
    pag.classList.remove('is-hidden');
    spinner.stop(gallery);
  });

  pagination.on('beforeMove', onPaginClick);
}

//Pagination event function
function onPaginClick(e) {
  e.preventDefault();
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
