import config from "./config";
import { fetchTrendingFilms } from './fetchTrendingFilms';


//  !!!!!!!!!! Перед сдачей проекта удалить этот кусок -  
// Консолим результат работы функции для теста
let page = 1;
fetchTrendingFilms(page).then(films => console.log(films));