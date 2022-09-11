const { Notify } = require("notiflix");
import {fetchMovieByID} from './filmoteka';
import './refs';


/**
 * Call function to save local film
 * @param {event} e 
 */
export async function saveFilm(e) {
  const filmId = e.target.dataset.id;
  const storageKey = e.target.dataset.btn;
  const film = await fetchMovieByID(filmId);
  addFilmToLocaleStorage(film, storageKey);
}

/**
 * Call function to remove local film
 * @param {event} e 
 */
export function removeFilm(e) {
  const filmId = e.target.dataset.id;
  const storageKey = e.target.dataset.btn;
  removeFilmFromLocalrStorage(filmId, storageKey);
}

/**
 * Add new film to locale storage if that film doesn`t exist
 * @param {Object} newFilm film to adding to locale storage
 * @param {String} localeStorageKey key of locale storage which film will be adding
 */
function addFilmToLocaleStorage(newFilm, localeStorageKey) {
  const localStData = JSON.parse(localStorage.getItem(localeStorageKey)) || [];
  const isFilmHere = localStData.find(film => film.id === newFilm.id) || false;
  if(!isFilmHere) {
    const newArr = localStData.concat(newFilm);
    localStorage.setItem(localeStorageKey, JSON.stringify(newArr));
  }
}

/**
 * Remove film from locale storage by id
 * @param {Integer} id id by which the movie will be deleted
 * @param {String} localeStorageKey key of locale storage which film will be adding
 */
export function removeFilmFromLocalrStorage(id, localeStorageKey){
  const localStData = JSON.parse(localStorage.getItem(localeStorageKey)) || false;
  if(localStData) {
    const newArr = localStData.filter(film => film.id !== id);
    localStorage.setItem(localeStorageKey, JSON.stringify(newArr));
  }
}
