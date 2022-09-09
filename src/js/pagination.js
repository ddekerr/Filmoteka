import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { pag } from './refs';

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
export const pagination = new Pagination(pag, options);

// console.log(pagination);
// получаем первую страницу
// const firstPage = fetchTrendingFilms(options.page);
// console.log(firstPage);

