import './refs';
import { getWatchedItems } from './library-buttons';
import { createFilmsGallery } from './markups';
import pagination from './pagination';
import './plug-for-library';
import './modal';

import { gallery } from './refs';
import { topFunction } from './functions';
import modalteam from './modalteam';

//const pagin = pagination();
const paginate = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
let totalPages;

getWatchedItems();
// рендерим пагинацию остальных страниц
pagination.on('beforeMove', event => {
  topFunction();
  // получаем номер активной страницы на кнопках
  const currentPage = event.page;

  // создаем массив для рендера по 20 айтемов на страницу
  const arrayForMarkup = paginate(getWatchedItems(), 20, currentPage);

  const markup = createFilmsGallery(arrayForMarkup);
  gallery.innerHTML = markup;
});
