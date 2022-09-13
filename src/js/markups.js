import config from './config';
import { genersForFilmCard } from './getGenres';

/**
 * Function generate markup string from array of objects
 * @param {Array of Objects} items
 * @returns {String} markup
 */
export function createFilmsGallery(items, hide, hideLibr, actionBtn) {
  const markupСard = items.map(item => {
    const src = item.poster_path === null ? config.altPosterUrl : config.postersUrl + config.postersSize + item.poster_path;
    let genres;
    if(item.hasOwnProperty('genre_ids')) {genres = genersForFilmCard(item.genre_ids)}
    else { genres = item.genres.map(item => item.name).join(', ') }

    let hidden = (hide) ?  '' : 'is-hidden'
    let hiddenRemove = (hideLibr) ? '' : 'is-hidden';

    return `<li class="film">
      <a class="film__link link" href="" ">
        <div class="film__image-container">
          <img data-page="${actionBtn}" class="film__image" src="${src}" alt="${item.original_title}" data-id='${item.id}'/>
          <div class="thumb">
            <div class="overlay">
              <ul class="option list">
                <li class="option__item ${hidden}">
                 <button type="button" data-action="add" data-id="${item.id}" data-btn="watched" class="option__button button">add to Watched</button>
                </li>
                <li class="option__item ${hidden}">
                 <button type="button" data-action="add" data-id="${item.id}" data-btn="queue" class="option__button button">add to queue</button>
                </li>
                <li class="option__item ${hiddenRemove}">
                 <button type="button" data-action="remove" data-id="${item.id}" data-btn="${actionBtn}" class="option__button button">remove film</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="film__info">
          <h2 class="film__name title">${item.title}</h2>
          <div class="film__description">
            <span class="film__genre">${genres}</span>
            <span class="film__span">&#124;</span>
            <span class="film__year">${item.release_date.slice(0, 4)}</span>
            <span class="film__rating">${item.vote_average.toFixed(1)}</span>
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
 export function createModalFilm(item, tab) {
  const src = item.poster_path === null ? config.altPosterUrl : config.postersUrl + config.postersSize + item.poster_path;

   return `
    <div class="modal__movie">
    <button class="modal__close">
    <svg class="modal__btn" width="20px" height="20px">
    width="20" height="20" viewBox="0 0 20 20">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
    </svg>
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
                <p><span class="film__rating modal-info__rating">${item.vote_average.toFixed(1)}</span> / ${item.vote_count}</p>
              </td>
            </tr>
            <tr class="modal-info__row">
              <td><p class="modal-info__attribute">Popularity</p></td>
              <td><p>${item.popularity}</p></td>
            </tr>
            <tr class="modal-info__row">
              <td><p class="modal-info__attribute">Original Title</p></td>
              <td><p>${item.original_title}</p></td>
            </tr>
            <tr class="modal-info__row">
              <td><p class="modal-info__attribute">Genre</p></td>
              <td><p>${item.genres.map(item => item.name).join(', ')}</p></td>
            </tr>
          </tbody>
        </table>
        <h3 class="modal-info__about-title">About</h3>
        <p class="modal-info__about">
          ${item.overview}
        </p>
        <ul class="modal-info__buttons-list modal-info__btn">
          ${renderModalButtons(item.id, tab)}
        </ul>
      </div>
    </div>
  `
}


function renderModalButtons(filmId, tab) {
  if(tab !== 'undefined') {
    return `
      <li class="movie-data__button-item">
        <button type="button" data-action="remove" data-id="${filmId}" data-btn="${tab}" class="modal-info__button button active">remove film</button>
      </li>
    `
  } else {
    return `
      <li class="movie-data__button-item">
        <button type="button" data-action="add" data-id="${filmId}" data-btn="watched" class="modal-info__button button active">add to Watched</button>
      </li>
      <li class="modal-info__button-item modal-info__btn">
        <button type="button" data-action="add" data-id="${filmId}" data-btn="queue" class="modal-info__button button">add to queue</button>
      </li>
    `
  }
}


/**
 * Render markup to container
 * @param {HTML Object} container 
 * @param {String} markup 
 */
export function renderMarkup(container, markup) {
   container.innerHTML = markup;
}