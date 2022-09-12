import './refs';
import { getWatchedItems } from './library-buttons';
import { createFilmsGallery } from './markups';
import { pagination } from './pagination';
import './plug-for-library';


const pagin = pagination();

getWatchedItems();
  // рендерим пагинацию остальных страниц
  pagin.on('beforeMove', event => {
    // получаем номер активной страницы на кнопках
    const currentPage = event.page;
    // создаем массив для рендера по 20 айтемов на страницу
    const arrayForMarkup = paginate(getWatchedItems(), 20, currentPage);
    console.log(arrayForMarkup);
    const markup = createFilmsGallery(arrayForMarkup);
    gallery.innerHTML = markup;
  });