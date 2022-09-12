import { createLibraryFilmsGallery } from './markups';
import { pagination } from './pagination';
import { topFunction } from './functions';

const gallery = document.querySelector('.films');
const queueBtn = document.querySelector('[data-queue="data-queue"]');
const watchedBtn = document.querySelector('[data-watched="data-watched"]');

queueBtn.addEventListener('click', onclickQueue);
watchedBtn.addEventListener('click', onClickWatched);
queueBtn.disabled = false;


// вызываем функцию пагинации
const pagin = pagination();

// функция, которая режет массив
const paginate = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

// функции получения данных из локалстора и рендеринга их

export function getWatchedItems() {
  const watchedMovies = localStorage.getItem('watched');
    let arrayOFWatched = JSON.parse(watchedMovies);

  const total = arrayOFWatched.length;
  // рендерим первые 20 фильмов
  const markup = createLibraryFilmsGallery(paginate(arrayOFWatched, 20, 1));
  gallery.innerHTML = markup;
  pagin.reset(total);
  return arrayOFWatched;
}


function getQueueItems() {
  const queueMovies = localStorage.getItem('queue');
    let arrayOFQueue = JSON.parse(queueMovies);

  const total = arrayOFQueue.length;
  // рендерим первые 20 фильмов
  const markup = createLibraryFilmsGallery(paginate(arrayOFQueue, 20, 1));
  gallery.innerHTML = markup;
  pagin.reset(total);
  return arrayOFQueue;
}



// функции нажатия на кнопки 

function onClickWatched(e) {
  getWatchedItems();
  // рендерим пагинацию остальных страниц
    pagin.on('beforeMove', event => {
        topFunction();
    // получаем номер активной страницы на кнопках
    const currentPage = event.page;
    // создаем массив для рендера по 20 айтемов на страницу
    const arrayForMarkup = paginate(getWatchedItems(), 20, currentPage);
    console.log(arrayForMarkup);
    const markup = createLibraryFilmsGallery(arrayForMarkup);
    gallery.innerHTML = markup;
  });
  queueBtn.disabled = false;
  queueBtn.classList.remove('active');
  watchedBtn.classList.add('active');
  watchedBtn.disabled = true;
};


function onclickQueue(e) {
 getQueueItems();
  // рендерим пагинацию остальных страниц
    pagin.on('beforeMove', event => {
        topFunction();
    // получаем номер активной страницы на кнопках
    const currentPage = event.page;
    // создаем массив для рендера по 20 айтемов на страницу
    const arrayForMarkup = paginate(getQueueItems(), 20, currentPage);
    console.log(arrayForMarkup);
    const markup = createLibraryFilmsGallery(arrayForMarkup);
    gallery.innerHTML = markup;
  });
  watchedBtn.disabled = false;
  queueBtn.classList.add('active');
  watchedBtn.classList.remove('active');
  queueBtn.disabled = true;
}


