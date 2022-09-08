import axios from "axios";
import debounce from 'lodash.debounce';
import config from "./config";
import { Notify } from 'notiflix';
import options from './options-notiflix'

const KEY = config.api_key;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const POSTER_URL = 'https://image.tmdb.org/t/p/'
const POSTER_SIZE = 'w400'

export default async function fetchMovie(query, page = 1) {
    const params = {
        api_key: `${KEY}`,
        language: 'en-US',
        query: `${query}`,
        page: `${page}`,
    };
  try {
    const response = await axios.get(BASE_URL, {params});
    return response;
  } catch (error) {
    console.log(error);
  }
}

const inputSearch = document.querySelector('.search-form__input');
// Тут треба підставити той елемент, де буде рендер фільмів по запиту. 
// const listFilms = document.querySelector('.films')
inputSearch.addEventListener('input', debounce(searchMovie, 1000));

let page = 1;
let query = '';
let repeatQuery = null;

async function searchMovie(e) {
    page = 1;
    repeatQuery = query;
    query = e.target.value;
    console.log(e.target.value);

  if (query === '') {
Notify.info('Please enter a movie name to search.', options);
    return;
  }

  if (query === repeatQuery) {
Notify.warning('Please enter another movie name to search.', options);
    return;
  }

  await fetchMovie(query, page).then(movie => {
  console.log(movie)
      if (movie.data.results.length === 0) {
      // listFilms.innerHTML = '';
Notify.failure('Search result not successful. Enter the correct movie name and try again please.', options);
      return;
    }

Notify.success(`According to your request, we found ${movie.data.total_results} movies.`, options);
    // listFilms.innerHTML = '';
      // createGallaryMoviesMarkup(movie.data.results); Змінити назву функції на функцію з маркапом.
    });
};

