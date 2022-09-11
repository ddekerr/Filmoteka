import { Notify } from 'notiflix';
import { spinner } from './spinner';
import options from './options-notiflix';
import { gallery } from './refs';
import { topFunction } from './functions';
import { pagination } from './pagination';
import { fetchMoviesByQuery } from './filmoteka';
import { createFilmsGallery, renderMarkup } from './markups';


// Set pagination
const pagin = pagination();
const page = pagin.getCurrentPage();


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
      Notify.failure('Search result not successful. Enter the correct movie name and try again please.', options);
      return;
    }
    
    Notify.success(`According to your request, we found ${data.total_results} movies.`, options);
    
    const total = data.total_results;
    pagin.reset(total);

    const markup = createFilmsGallery(data.results);
    spinner.stop(gallery);
    renderMarkup(gallery, markup);
  });
  
  pagin.on('beforeMove', onPaginClick);
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
