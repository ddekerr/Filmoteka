import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { pag } from './refs';
import { fetchTrendingFilms } from './fetchingTrendingFilms';

// const pag = document.querySelector('.tui-pagination');

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: `<a href="#" class="tui-page-btn">{{page}}</a>`,
    currentPage: `<strong class="tui-page-btn tui-is-selected">{{page}}</strong>`,
    moveButton:
      `<a href="#" class="tui-page-btn tui-{{type}}">` +
      `<span class="tui-ico-{{type}}">{{type}}</span>` +
      `</a>`,
    disabledMoveButton:
      `<span class="tui-page-btn tui-is-disabled tui-{{type}}">` +
      `<span class="tui-ico-{{type}}">{{type}}</span>` +
      `</span>`,
    moreButton:
      `<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">` +
      `<span class="tui-ico-ellip">...</span>` +
      `</a>`,
  },
};
const paganation = new Pagination(pag, options);

console.log(paganation);
// получаем первую страницу
const firstPage = fetchTrendingFilms(options.page);
console.log(firstPage);
paganation.on('beforeMove', event => {
  // получаем номер активной страницы на кнопках
  const currentPage = event.page;
  console.log(currentPage);
  // получаем фильмы согласно страницы
  const movies = fetchTrendingFilms(currentPage);
  console.log(movies);
});
