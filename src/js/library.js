import './refs';
import { getWatchedItems } from './library-buttons';
import { createFilmsGallery } from './markups';
import pagination from './pagination';
import { deletePageButton } from './pagination-layout';
import './plug-for-library';
import { createModalFilm } from './markups';
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

// pagination.on('afterMove', event => {
//   topFunction();
//   // получаем номер активной страницы на кнопках
//   const currentPage = event.page;

//   // создаем массив для рендера по 20 айтемов на страницу
//   const arrayForMarkup = paginate(getWatchedItems(), 20, currentPage);

//   totalPages = Math.ceil(arrayForMarkup.length / 20);

//   const first = document.querySelector('.tui-ico-first');
//   if (null !== first) {
//     first.textContent = '1';
//   }

//   const last = document.querySelector('.tui-pagination .tui-ico-last');
//   if (null !== last) {
//     last.textContent = totalPages;
//   }

//   deletePageButton(1, '.tui-first');
//   deletePageButton(totalPages, '.tui-last');

//   // const markup = createFilmsGallery(arrayForMarkup);
//   // gallery.innerHTML = markup;
// });

// function renderPagin() {
//   first();

//   const last = document.querySelector('.tui-pagination .tui-ico-last');

//   last.textContent = totalPages;

//   deletePageButton(1, '.tui-first');
//   deletePageButton(totalPages, '.tui-last');
// }
