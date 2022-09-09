import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { pag } from './refs';
// import { fetchTrendingFilms } from './ftf';
import { fetchTrendingFilms } from './fetchingTrendingFilms';
import { createFilmsGallery } from './markUpFilmsGallery';

export function pagination(params = {}) {
  const options = {
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
  return new Pagination(pag, { ...options, ...params });
}

// const paganation = new Pagination(pag, { ...options });

// fetchTrendingFilms(1).then(result => {
//   const total = result.data.total_results;
//   paganation.setTotalItems(total);
//   console.log(total);
//   return total;
// });

// .then(data => ({
//   itemsFilm: data.results,
//   total: 20000,
// }))
// .then(({ itemsFilm, total }) => {
//   console.log(itemsFilm);
//   console.log(total);
// });

// console.log(paganation);
// получаем первую страницу
// const firstPage = fetchTrendingFilms(options.page);
// console.log(firstPage);

// paganation.on('beforeMove', event => {
//   paganation.setTotalItems(20000);
//   // получаем номер активной страницы на кнопках
//   const currentPage = event.page;
//   // console.log(currentPage);

//   // получаем фильмы согласно страницы и рендерим их
//   fetchTrendingFilms(currentPage).then(res => {
//     createFilmsGallery(res.data.results);
//   });
// });

// let totalItemsFromServer;

// const init = async total => {
//   if (total === undefined && !totalItemsFromServer) {
//     totalItemsFromServer = await fetchTrendingFilms(page);
//   }

//   if (total === undefined) {
//     total = totalItemsFromServer.total_results;
//   }

//   paganation.setTotalItems(total);
//   // paganation.reset();
// };

// init();
// export default {
//   reset: init,
// };
