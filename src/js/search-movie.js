import axios from "axios";
import debounce from 'lodash.debounce';
import config from "./config";
import Notiflix from 'notiflix';

const KEY = config.api_key;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
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

const inputSearch = document.querySelector('.search-form__input');
// Тут треба замінити "galleryEl" на той елемент-контейнер, де буде рендер фільмів по запиту. 
// const galleryEl = document.querySelector('.gallery')
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
    Notiflix.Notify.info('Please enter a movie name to search.', option);
    return;
  }

  if (query === repeatQuery) {
    Notiflix.Notify.info('Please enter a new movie name to search.', option);
    return;
  }

  await fetchMovie(query, page).then(movie => {
  console.log(movie)
      if (movie.data.results.length === 0) {
    //   galleryEl.innerHTML = '';
      Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name and try again please.', option);
      return;
    }

    Notiflix.Notify.success(`According to your request, we found ${movie.data.total_results} movies.`, option);
    // galleryEl.innerHTML = '';
    //   createGallaryMarkup(movie.data.results);
    });
};

const option = {
    width: '393px',
    position: 'center-top',
    distance: '162px',
    zindex: 4001,
    fontFamily: 'Roboto',
    fontSize: '14px',
    // font-weight: '700',
    useIcon: false,
            
    success: {
        background: 'transparent',
        textColor: '#04BF00',
    },
    failure: {
        background: 'transparent',
        textColor: '#FF001B',
    },
    warning: {
        background: 'transparent',
        textColor: '#FF6B08',
    },
    info: {
        background: 'transparent',
        textColor: '#08C4FF',
    }};