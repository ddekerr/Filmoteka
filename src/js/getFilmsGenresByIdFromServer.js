import axios from 'axios';
import config from './config';

// ${Promise.all(genersForFilmCard(item.genre_ids)).then(resolt => resolt.join(' '))}


// Функция которая лезет на бэк и определяет жанр по ID

async function getFilmGenres(genreID) {
  try {
    const respons = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${config.api_key}&language=en-US`
    );

    const genres = respons.data.genres.find(genre => genre.id === genreID);

    console.log(genres.name);

    return genres.name;
  } catch (error) {
    console.log(error.message);
  }
}

function genersForFilmCard(arrayOfGenersID) {
  return arrayOfGenersID.map(item => getFilmGenres(item));
}

console.log(genersForFilmCard([12, 28, 9648]));
