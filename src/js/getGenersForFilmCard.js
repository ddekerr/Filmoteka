import config from './config';
export { genersForFilmCard };

function genersForFilmCard(arrayOfGenersID) {
  const genres = [];
  arrayOfGenersID.map(item => {
    genres.push(config.genres.find(genre => genre.id === item).name);
  });

  return genres;
}
