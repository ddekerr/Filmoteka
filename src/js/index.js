// import './refs';
// import config from './config';

// import modal from './modal';

// import { fetchTrendingFilms } from './fetchingTrendingFilms';
// import './library-buttons';
// import { paganation } from './pagination';

import {fetchTrendingMovies, fetchMoviesByQuery, fetchMovieByID} from './filmoteka';

const a = fetchTrendingMovies(1)
const b = fetchMoviesByQuery('term')
const c = fetchMovieByID(100)

console.log(a, b, c)