export { createFilmsGallery };
import config from './config';
const filmListEl = document.querySelector('.films.list');

// Функция которая принимает "массив обьектов"/массив фильмов с сервера
// идет и чистит все что находиться в МЭЙНЕ в списке (UL -.films.list)
// после создает и пушит новую разметку в тотже (UL -.films.list)

function createFilmsGallery(items) {
  filmListEl.innerHTML = ' ';

  const markupForGallery = items
    .map(
      item =>
        `<li class="film">
  <a class="film__link link" href="">
    <div class="film__image-container">
      <img class="film__image" src="${
        config.postersUrl + item.poster_path
      }" alt="${item.original_title}" />
    </div>
    <h2 class="film__name title">${item.title}</h2>
    <div class="film__description">
      <p class="film__genre">${item.genre_ids}</p>
      <p class="film__year">${item.release_date.slice(0, 4)}</p>
      <p class="film__rating">${item.vote_average.toFixed(1)}</p>
    </div>
  </a>
</li>`
    )
    .join(``);

  filmListEl.insertAdjacentHTML('beforeend', markupForGallery);
}
