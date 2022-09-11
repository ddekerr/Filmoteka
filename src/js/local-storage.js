const { Notify } = require("notiflix");
import {fetchMovieByID} from './filmoteka';
import './refs';


function addFilmToLocaleStorage(newFilm, localeStorageKey) {
  const localStData = JSON.parse(localStorage.getItem(localeStorageKey)) || [];
  const isFilmHere = localStData.find(film => film.id === newFilm.id) || false;
  if(!isFilmHere) {
    const newArr = localStData.concat(newFilm);
    localStorage.setItem(localeStorageKey, JSON.stringify(newArr));
  }
}

function removeFilmFromLocalrStorage(newFilm, localeStorageKey){
  const localStData = JSON.parse(localStorage.getItem(localeStorageKey)) || false;
  if(localStData) {
    const newArr = localStData.filter(film => film.id !== newFilm.id);
    localStorage.setItem(localeStorageKey, JSON.stringify(newArr));
  }
}




// // получаем массив из localStorage и парсим
// export function getLocalStorage(key){
//     const data = localStorage.getItem(key);    
//     try { 
//         return dataFilms = data ? JSON.parse(data) : [];              
//     }
//     catch {
//         console.log (error)
//     }    
// }    

// // добавляем объект по ключу
// export function addMovieInLocalStorage(movie, key) {     
//     if (dataFilms) {
//         for (const dataFilm of dataFilms) {
//             if (movie.id == dataFilm.id) {
//                 Notify.info("This movie has already been added to the list");
//                 return
//                 }
//         }

//     }  
//         dataFilms.push(movie);
//         const dataFilmsJSON = JSON.stringify(dataFilms)
//         console.log(dataFilmsJSON)
//         localStorage.setItem(key, dataFilmsJSON);       
                  
// }

// // удаляем объект по ключу
// export function removeMovieInLocalStorage(movie, key){
//     if (dataFilms.length !== 0) {
//         for (const dataFilm of dataFilms) {
//             if (movie.id === dataFilm.id) {
//                 const searchIndex = dataFilms.findIndex(dataFilm => dataFilm.id === movie.id);
   
//             if (searchIndex !== -1) {
//             dataFilms.splice(searchIndex, 1);
//             localStorage.setItem(key, JSON.stringify(dataFilms));
//             }
//         }

//         }        

//     }  else {
//         Notify.info('This movie is not in the library');
//         return
//     } 
// } 