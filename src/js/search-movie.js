import axios from "axios";
import debounce from 'lodash.debounce';
import config from "./config";
import Notiflix from 'notiflix';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const KEY = config.api_key;
const POSTER_URL = 'https://image.tmdb.org/t/p/'
const POSTER_SIZE = 'w200'

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

const inputSearch = document.querySelector('.searchQuery-js');
const galleryEl = document.querySelector('.gallery')
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
    Notiflix.Notify.info('Please enter a movie name to search.');
    return;
  }

  if (query === repeatQuery) {
    Notiflix.Notify.info('Please enter a new movie name to search.');
    return;
  }

  await fetchMovie(query, page).then(movie => {
  console.log(movie)
      if (movie.data.results.length === 0) {
      galleryEl.innerHTML = '';
      Notiflix.Notify.failure(
        'Search result not successful. Enter the correct movie name and try again please.'
      );
      return;
    }

    Notiflix.Notify.success(`According to your request, we found ${movie.data.total_results} movies.`);
    galleryEl.innerHTML = '';
      createGallaryMarkup(movie.data.results);
    });
};

