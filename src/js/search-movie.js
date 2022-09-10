import axios from 'axios';
import debounce from 'lodash.debounce';
import config from './config';
import { Notify } from 'notiflix';
import options from './options-notiflix';
import { createFilmsGallery } from './markups';
import { gallery } from './refs';
import { pagination } from './pagination';

const KEY = config.api_key;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const pagin = pagination();
const page = pagin.getCurrentPage();
export default async function fetchMovie(query, page) {
  const params = {
    api_key: `${KEY}`,
    language: 'en-US',
    query: `${query}`,
    page: `${page}`,
  };
  try {
    const response = await axios
      .get(BASE_URL, { params })
      .then(response => response.data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const inputSearch = document.querySelector('.search-form__input');
inputSearch.addEventListener('input', debounce(searchMovie, 1000));

let query = '';
let repeatQuery = null;

async function searchMovie(e) {
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
  
  fetchMovie(query, page).then(data => {
    if (data.results.length === 0) {
      gallery.innerHTML = '';
      Notify.failure('Search result not successful. Enter the correct movie name and try again please.', options);
      return;}

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
  fetchMovie(query, currentPage).then(data => {
    const markup = createFilmsGallery(data.results);
    gallery.innerHTML = markup;
  });
});
}