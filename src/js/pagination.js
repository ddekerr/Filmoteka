import Pagination from 'tui-pagination';
import { pag } from './refs';

let instance = null;

export function pagination(params = {}) {
  if (null !== instance) {
    return instance;
  }

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

  instance = new Pagination(pag, { ...options, ...params });

  return instance;
}
