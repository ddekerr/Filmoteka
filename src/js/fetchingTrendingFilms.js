// Импортируем настройки для запроса на сервер
import config from './config';
import axios from 'axios';

// Экспортируем функцию поиска фильмов в тренде
export { fetchTrendingFilms };

// Функция запроса фильмов в тренде с пагинацией - Функция ожидает в
// переменную "page" номер страници которую нужно загрузить. Функция возвращает масив из 20 обьектов.
async function fetchTrendingFilms(page) {
  try {
    const films = await axios.get(
      `${config.base_url}/trending/movie/week?page=${page}&api_key=${config.api_key}`
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
