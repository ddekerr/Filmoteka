const { Notify } = require("notiflix");
import {fetchMovieByID} from './filmoteka';
import './refs';


export async function saveFilm(e) {
  const filmId = e.target.dataset.id;
  const storageKey = e.target.dataset.btn;
  const film = await fetchMovieByID(filmId);
  addFilmToLocaleStorage(film, storageKey);
}

export function removeFilm(e) {
  const filmId = e.target.dataset.id;
  const storageKey = e.target.dataset.btn;
  removeFilmFromLocalrStorage(filmId, storageKey);
}


function addFilmToLocaleStorage(newFilm, localeStorageKey) {
  const localStData = JSON.parse(localStorage.getItem(localeStorageKey)) || [];
  const isFilmHere = localStData.find(film => film.id === newFilm.id) || false;
  if(!isFilmHere) {
    const newArr = localStData.concat(newFilm);
    localStorage.setItem(localeStorageKey, JSON.stringify(newArr));
  }
}


export function removeFilmFromLocalrStorage(id, localeStorageKey){
  const localStData = JSON.parse(localStorage.getItem(localeStorageKey)) || false;
  if(localStData) {
    const newArr = localStData.filter(film => film.id !== id);
    localStorage.setItem(localeStorageKey, JSON.stringify(newArr));
  }
}
