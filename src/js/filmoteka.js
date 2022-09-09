import axios from 'axios';
import globalConfig from './config';





// Функция запроса фильмов в тренде с пагинацией - Функция ожидает в
// переменную "page" номер страници которую нужно загрузить. Функция возвращает масив из 20 обьектов.
export async function fetchTrendingMovies(page) {
  const config = {
    baseURL: globalConfig.base_url,
    params: {
      api_key: globalConfig.api_key,
      page: page,
      language: 'en-US'
    }
  }

  try {
    const response = await axios.get('/trending/movie/week', config)
    .then(response => response.data);

    return response;
  } catch (error) {
    console.log(error.message);
  }
}

// Функція запиту фільмів по query
export async function fetchMoviesByQuery(query, page = 1) {
  const config = {
    baseURL: globalConfig.base_url,
    params: {
        api_key: globalConfig.api_key,
        query: query,
        page: page,
        language: 'en-US'
    }
  }

  try {
    const response = await axios.get('/search/movie', config);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}


// Функція запиту фільма по id
export async function fetchMovieByID(id) {
  const config = {
    baseURL: globalConfig.base_url,
    params: {
        api_key: globalConfig.api_key,
        language: 'en-US',
    }
  }

  try {
    const response = await axios.get(`movie/${id}`, config);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
