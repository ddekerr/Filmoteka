import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

import options from './options-notiflix';

import { inputSearch } from './refs';
import { gallery } from './refs';

import { pagination } from './pagination';
import { fetchMoviesByQuery } from './filmoteka';
import { createFilmsGallery } from './markups';

const pagin = pagination();
const page = pagin.getCurrentPage();

inputSearch.addEventListener('input', debounce(searchMovie, 1000));

let query = '';
let repeatQuery = null;

export async function searchMovie(e) {
  e.preventDefault();
  repeatQuery = query;
  query = e.target.value.trim();
  console.log(query);

  if (query === '') {
    Notify.info('Please enter a movie name to search.', options);
    return;
  }
  if (query === repeatQuery) {
    Notify.warning('Please enter another movie name to search.', options);
    return;
  }
  
  fetchMoviesByQuery(query, page).then(data => {
    console.log(data)
    if (data.results.length === 0) {
      gallery.innerHTML = '';
      Notify.failure('Search result not successful. Enter the correct movie name and try again please.', options);
      return;
    }
    
    Notify.success(
      `According to your request, we found ${data.total_results} movies.`,
      options);
    
  const total = data.total_results;
  pagin.reset(total);
  const markup = createFilmsGallery(data.results);
  gallery.innerHTML = markup;
  });
  
  pagin.on('beforeMove', event => {
  // получаем номер активной страницы на кнопках
  const currentPage = event.page;
  // получаем фильмы согласно страницы
  fetchMoviesByQuery(query, currentPage).then(data => {
    const markup = createFilmsGallery(data.results);
    gallery.innerHTML = markup;
  });
});
}

