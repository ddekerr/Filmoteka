import config from './config';
import { genersForFilmCard } from './getGenres';
/**
 * Function generate markup string from array of objects
 * @param {Array of Objects} items
 * @returns {String} markup
 */
export function createFilmsGallery(items) {
  const markupСard = items
    .map(item => {
      if (item.poster_path === null) {
        console.log('Here no poster_path', item);
        return `
    <li class="film">
      <a class="film__link link" href="">
        <div class="film__image-container">
          <img class="film__image" src="https://www.vaureal.fr/sites/vaureal/files/styles/_site_contenu_image_principale/public/image/2022-03/Solidarit%C3%A9%20ukraine.jpg?itok=Gcqq2tD3" alt="${
            item.original_title
          }" load="lazy"/>
        </div>
        <div class="film__info">
        <h2 class="film__name title">${item.title}</h2>
        <div class="film__description">
          <span class="film__genre">${genersForFilmCard(item.genre_ids)}</span>
          <span class="film__span">|</span>
          <span class="film__year">${item.release_date.slice(0, 4)}</span>
          <span class="film__rating">${item.vote_average.toFixed(1)}</span>
        </div>
        </div>
      </a>
    </li>
  `;
      }
      return `
    <li class="film">
      <a class="film__link link" href="">
        <div class="film__image-container">
          <img class="film__image" src="${
            config.postersUrl + config.postersSize + item.poster_path
          }" alt="${item.original_title}" load="lazy"/>
        </div>
                <div class="film__info">

        <h2 class="film__name title">${item.title}</h2>
        <div class="film__description">
          <span class="film__genre">${genersForFilmCard(item.genre_ids)} </span>
                    <span class="film__span">| </span>
          <span class="film__year">${item.release_date.slice(0, 4)}</span>
          <span class="film__rating">${item.vote_average.toFixed(1)}</span>
        </div>
        </div>
      </a>
    </li>
  `;
    })
    .join('');
  return markupСard;
}
