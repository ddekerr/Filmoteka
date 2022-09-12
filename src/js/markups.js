import config from './config';
import { genersForFilmCard } from './getGenres';


/**
 * Function generate markup string from array of objects
 * @param {Array of Objects} items
 * @returns {String} markup
 */
export function createFilmsGallery(items) {
  const markupСard = items.map(item => {
    const src = item.poster_path === null ? config.altPosterUrl : config.postersUrl + config.postersSize + item.poster_path;

    return `<li class="film">
      <a class="film__link link" href="" ">
        <div class="film__image-container">
          <img class="film__image" src="${src}" alt="${item.original_title}" load="lazy" data-id='${item.id}'/>
        </div>
        <div class="film__info">
          <h2 class="film__name title">${item.title}</h2>
          <div class="film__description">
            <span class="film__genre">${genersForFilmCard(item.genre_ids)}</span>
            <span class="film__span">&#124;</span>
            <span class="film__year">${item.release_date.slice(0, 4)}</span>
            <span class="film__rating">${item.vote_average.toFixed(1)}</span>
          </div>
        </div>
        <div class="thumb">
          <div class="overlay">
            <ul class="option list">
              <li class="option__item">
                <button type="button" data-action="add" data-id="${item.id}" data-btn="watched" class="option__button button">add to Watched</button>
              </li>
              <li class="option__item">
                <button type="button" data-action="add" data-id="${item.id}" data-btn="queue" class="option__button button">add to queue</button>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </li>
  `}).join('');

  return markupСard;
}

/**
 * Function generate markup string from object
 * @param {Object} item film object
 * @returns {String} markup
 */
 export function createModalFilm(item) {
  const src = item.poster_path === null ? config.altPosterUrl : config.postersUrl + config.postersSize + item.poster_path;
    return `
    <div class="modal__movie">
      <button class="modal__close" modal-close>
      <svg class="modal__btn" width="20px" height="20px">
        <use  href="./images/icons.svg#icon-arrow-left" fill="black"></use>
      </svg>
      </button>
      <div class="modal__img">
        <img src="${src}" alt="${item.original_title}" />
      </div>
      <div class="modal-info">
        <h2 class="modal-info__header title">${item.title}</h2>
        <table class="modal-info-table">
          <tbody>
            <tr class="modal-info__row">
              <td><p class="modal-info__attribute">Vote / Votes</p></td>
              <td>
                <p><span class="film__rating modal-info__rating">${item.vote_average}</span> / ${item.vote_count}</p>
              </td>
            </tr>
            <tr class="modal-info__row">
              <td><p>Popularity</p></td>
              <td><p>${item.popularity}</p></td>
            </tr>
            <tr class="modal-info__row">
              <td><p>Original Title</p></td>
              <td><p>${item.original_title}</p></td>
            </tr>
            <tr class="modal-info__row">
              <td><p>Genre</p></td>
              <td><p>${item.genres.map(item => item.name).join(', ')}</p></td>
            </tr>
          </tbody>
        </table>
        <h3 class="modal-info__about-title">About</h3>
        <p class="modal-info__about">
          ${item.overview}
        </p>
        <ul class="modal-info__buttons-list">
          <li class="movie-data__button-item">
            <button type="button" data-btn="watched" class="modal-info__button button active">
              add to Watched
            </button>
          </li>
          <li class="modal-info__button-item">
            <button type="button" data-btn="queue" class="modal-info__button button">add to queue</button>
          </li>
        </ul>
      </div>
    </div>
  `
}


/**
 * Render markup to container
 * @param {HTML Object} container 
 * @param {String} markup 
 */
export function renderMarkup (container, markup) {
  container.innerHTML = markup;
}