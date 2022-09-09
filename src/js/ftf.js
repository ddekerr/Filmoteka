// Импортируем настройки для запроса на сервер
import axios from 'axios';
import config from './config';

const { base_url, api_key } = config;

// Экспортируем функцию поиска фильмов в тренде
export { fetchTrendingFilms };

// Функция запроса фильмов в тренде с пагинацией - Функция ожидает в
// переменную "page" номер страници которую нужно загрузить. Функция возвращает масив из 20 обьектов.
async function fetchTrendingFilms(page) {
  const config = {
    baseURL: base_url,
    params: {
      page: page,
      api_key: api_key,
      //   total: total_results,
    },
  };
  try {
    const films = await axios
      .get('/trending/movie/week', config)
      .then(films => {
        // console.log(films.data);
        // console.log(films.data.total_results);
        return films.data;
      });

    return films;
  } catch (error) {
    console.log(error.message);
  }
}
fetchTrendingFilms(1);
