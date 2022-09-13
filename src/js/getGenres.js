const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

/**
 * Function for generate string by array of integer in genres object
 * @param {Array of Integer} arrayOfGenersID
 * @returns {String} looks like "first, second, third"
 */
export function genersForFilmCard(arrayOfGenersID) {
  const arrayOfGenres = arrayOfGenersID.map(id => {
    return genres.find(genre => genre.id === id).name;
  });
  const result =
    arrayOfGenres.length > 2
      ? arrayOfGenres.splice(0, 2).concat('Other').join(', ')
      : arrayOfGenres.join(', ');
  return result;
}
