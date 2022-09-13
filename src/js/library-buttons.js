import { createFilmsGallery } from './markups';
import { onHoverBtnCLick } from './local-storage';
import pagination from './pagination';
import { topFunction } from './functions';
import { pag, gallery } from './refs';


const queueBtn = document.querySelector('[data-queue="data-queue"]');
const watchedBtn = document.querySelector('[data-watched="data-watched"]');
let tab = 'watched';

queueBtn.addEventListener('click', onclickQueue);
watchedBtn.addEventListener('click', onClickWatched);
queueBtn.disabled = false;

// функция, которая режет массив
const paginate = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

// функции получения данных из локалстора и рендеринга их

export function getWatchedItems() {
  tab = 'watched';
  const watchedMovies = localStorage.getItem('watched');
  let arrayOFWatched = JSON.parse(watchedMovies) || [];
  const total = arrayOFWatched.length;

  // включаем пагинацию если больше 20 фильмов
  if (arrayOFWatched.length > 20) {
    pag.classList.remove('is-hidden');
  } else if (arrayOFWatched.length <= 20) {
    pag.classList.add('is-hidden');
  }

  // рендерим первые 20 фильмов
  const markup = createFilmsGallery(paginate(arrayOFWatched, 20, 1), false, true, 'watched');
  gallery.innerHTML = markup;
  pagination.reset(total);
  return arrayOFWatched;
}

function getQueueItems() {
  tab = 'queue';
  const queueMovies = localStorage.getItem('queue');
  let arrayOFQueue = JSON.parse(queueMovies) || [];
  const total = arrayOFQueue.length;

  // включаем пагинацию если больше 20 фильмов
  if (arrayOFQueue.length > 20) {
    pag.classList.remove('is-hidden');
  } else if (arrayOFQueue.length <= 20) {
    pag.classList.add('is-hidden');
  }

  // рендерим первые 20 фильмов
  const markup = createFilmsGallery(paginate(arrayOFQueue, 20, 1), false, true, 'queue');
  gallery.innerHTML = markup;
  pagination.reset(total);
  return arrayOFQueue;
}

// функции нажатия на кнопки

function onClickWatched() {
  getWatchedItems();

  // рендерим пагинацию остальных страниц
  pagination.on('beforeMove', event => {
    topFunction();
    // получаем номер активной страницы на кнопках
    const currentPage = event.page;
    // создаем массив для рендера по 20 айтемов на страницу
    const arrayForMarkup = paginate(getWatchedItems(), 20, currentPage);
    console.log(arrayForMarkup);
    const markup = createFilmsGallery(arrayForMarkup);
    gallery.innerHTML = markup;
  });

  // вкл/выкл кнопок
  queueBtn.disabled = false;
  queueBtn.classList.remove('active');
  watchedBtn.classList.add('active');
  watchedBtn.disabled = true;
}

function onclickQueue() {
  getQueueItems();

  // рендерим пагинацию остальных страниц
  pagination.on('beforeMove', event => {
    topFunction();
    // получаем номер активной страницы на кнопках
    const currentPage = event.page;
    // создаем массив для рендера по 20 айтемов на страницу
    const arrayForMarkup = paginate(getQueueItems(), 20, currentPage);
    console.log(arrayForMarkup);
    const markup = createFilmsGallery(arrayForMarkup);
    gallery.innerHTML = markup;
  });

  // вкл/выкл кнопок
  watchedBtn.disabled = false;
  queueBtn.classList.add('active');
  watchedBtn.classList.remove('active');
  queueBtn.disabled = true;
}


gallery.addEventListener('click', e => {
  onHoverBtnCLick(e);
  console.log(tab)
  if(tab === 'watched') {
    onClickWatched();
  } else {
    onclickQueue()
  }
});