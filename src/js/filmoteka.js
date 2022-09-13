import axios from 'axios';
import globalConfig from './config';

/**
 * Функция запроса фильмов в тренде с пагинацией - Функция ожидает в
 * переменную "page" номер страници которую нужно загрузить.
 * Функция возвращает масив из 20 обьектов.
 * @param {Integer} page current page number to be loaded
 * @returns {Promise} with data about films collection
 */
export async function fetchTrendingMovies(page) {
  const config = {
    baseURL: globalConfig.base_url,
    params: {
      api_key: globalConfig.api_key,
      page: page,
      language: 'en-US',
    },
  };

  try {
    const response = await axios
      .get('/trending/movie/week', config)
      .then(response => response.data);

    return response;
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * Function search movies by query string
 * @param {String} query search string for API request
 * @param {Integer} page current page number to be loaded
 * @returns {Promise} with data about films collection
 */

export async function fetchMoviesByQuery(query, page) {
  const config = {
    baseURL: globalConfig.base_url,
    params: {
      api_key: globalConfig.api_key,
      query: query,
      page: page,
      language: 'en-US',
    },
  };

  try {
    const response = await axios
      .get('/search/movie', config)
      .then(response => response.data);

    return response;
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * Function search movie by ID
 * @param {Integer} id film id to be loaded
 * @returns with data about film
 */
export async function fetchMovieByID(id) {
  const config = {
    baseURL: globalConfig.base_url,
    params: {
      api_key: globalConfig.api_key,
      language: 'en-US',
    },
  };

  try {
    const response = await axios
      .get(`movie/${id}`, config)
      .then(response => response.data);

    return response;
  } catch (error) {
    console.log(error.message);
  }
}
