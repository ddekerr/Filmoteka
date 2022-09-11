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
    return `
    <li class="film">
      <a class="film__link link" href="">
        <div class="film__image-container">
          <img class="film__image" src="${src}" alt="${item.original_title}" load="lazy"/>
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
                <button type="button" data-btn="watched" class="option__button button">add to Watched</button>
              </li>
              <li class="option__item">
                <button type="button" data-btn="queue" class="option__button button">add to queue</button>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </li>
  `}).join('');

  return markupСard;
}
