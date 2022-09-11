import { createFilmsGallery } from './markups';
import { pagination } from './pagination';

const gallery = document.querySelector('.films');
const queueBtn = document.querySelector('[data-queue="data-queue"]');
const watchedBtn = document.querySelector('[data-watched="data-watched"]');

queueBtn.addEventListener('click', onclickQueue);
watchedBtn.addEventListener('click', onClickWatched);
queueBtn.disabled = false;

movieObject = [
  {
    id: 1,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 2,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 3,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 4,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 5,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 6,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 7,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 8,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 9,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 10,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 11,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 12,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 13,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 14,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 15,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 16,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 17,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 18,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 19,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 20,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
  {
    id: 21,
    original_title: 'Eternals',
    poster_path:
      'https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg',
    title: 'Eternals',
    release_date: '2021',
    vote_average: 7,
    genre_ids: [35, 16],
  },
];

// вызываем функцию пагинации
const pagin = pagination();

// функция, которая режет массив
const paginate = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

import { watchMovieObject } from './localstorage_imitation';
import { queueMovieObject } from './localstorage_imitation';
localStorage.setItem('watched', JSON.stringify(watchMovieObject));
localStorage.setItem('queue', JSON.stringify(queueMovieObject));



// функции получения данных из локалстора и рендеринга их

export function getWatchedItems() {
  const watchedMovies = localStorage.getItem('watched');
    let arrayOFWatched = JSON.parse(watchedMovies);

  const total = arrayOFWatched.length;
  // рендерим первые 20 фильмов
  const markup = createFilmsGallery(paginate(arrayOFWatched, 20, 1));
  gallery.innerHTML = markup;
  pagin.reset(total);
  return arrayOFWatched;
}


function getQueueItems() {
  const queueMovies = localStorage.getItem('queue');
    let arrayOFQueue = JSON.parse(queueMovies);

  const total = arrayOFQueue.length;
  // рендерим первые 20 фильмов
  const markup = createFilmsGallery(paginate(arrayOFQueue, 20, 1));
  gallery.innerHTML = markup;
  pagin.reset(total);
  return arrayOFQueue;
}



// функции нажатия на кнопки 

function onClickWatched(e) {
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
  queueBtn.disabled = false;
  queueBtn.classList.remove('active');
  watchedBtn.classList.add('active');
  watchedBtn.disabled = true;
};


function onclickQueue(e) {
 getQueueItems();
  // рендерим пагинацию остальных страниц
  pagin.on('beforeMove', event => {
    // получаем номер активной страницы на кнопках
    const currentPage = event.page;
    // создаем массив для рендера по 20 айтемов на страницу
    const arrayForMarkup = paginate(getQueueItems(), 20, currentPage);
    console.log(arrayForMarkup);
    const markup = createFilmsGallery(arrayForMarkup);
    gallery.innerHTML = markup;
  });
  watchedBtn.disabled = false;
  queueBtn.classList.add('active');
  watchedBtn.classList.remove('active');
  queueBtn.disabled = true;
}


