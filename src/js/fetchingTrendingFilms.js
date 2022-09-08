// Импортируем настройки для запроса на сервер
import axios from 'axios';
import config from './config';

const { base_url, api_key } = config;

// Экспортируем функцию поиска фильмов в тренде
export { fetchTrendingFilms };

// Функция запроса фильмов в тренде с пагинацией - Функция ожидает в
// переменную "page" номер страници которую нужно загрузить. Функция возвращает масив из 20 обьектов.
async function fetchTrendingFilms(page) {
  try {
    const films = await axios.get(
      `${base_url}/trending/movie/week?page=${page}&api_key=${api_key}`
    );
    return films;
  } catch (error) {
    console.log(error.message);
  }
}

//  !!!!!!!!!! Перед сдачей проекта удалить этот кусок -
// Консолим результат работы функции для теста
let page = 1;
fetchTrendingFilms(page).then(films => console.log(films));
