import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import './refs';

const pag = document.querySelector('.tui-pagination');

export function pagination(params = {}) {
  const options = {
    itemsPerPage: 6,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    // template: {
    //   page: `<a href="#" class="tui-page-btn">{{page}}</a>`,
    //   currentPage: `<strong class="tui-page-btn tui-is-selected">{{page}}</strong>`,
    //   moveButton:
    //     `<a href="#" class="tui-page-btn tui-{{type}}">` +
    //     `<span class="tui-ico-{{type}}">{{type}}</span>` +
    //     `</a>`,
    //   disabledMoveButton:
    //     `<span class="tui-page-btn tui-is-disabled tui-{{type}}">` +
    //     `<span class="tui-ico-{{type}}">{{type}}</span>` +
    //     `</span>`,
    //   moreButton:
    //     `<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">` +
    //     `<span class="tui-ico-ellip">...</span>` +
    //     `</a>`,
    // },
  };
  return new Pagination(pag, { ...options, ...params });
}
pagination();
console.log(pag);
