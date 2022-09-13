refs.btnAddWatched.addEventListener('click', handleBtnAddWatched);
refs.btnAddQueue.addEventListener('click', handleBtnAddQueue);
refs.btnRemoveWathed.addEventListener('click', handleBtnRemoveWatched);
refs.btnRemoveQueue.addEventListener('click', handleBtnRemoveQueue);

function handleBtnAddWatched() {
  getLocalStorage('watched');
  removeMovieInLocalStorage(movie, 'watched');

  refs.btnAddWatched.removeEventListener('click', handleBtnAddWatched);
}

function handleBtnAddQueue() {
  getLocalStorage('queue');
  addMovieInLocalStorage(movie, 'queue');

  refs.btnAddQueue.removeEventListener('click', handleBtnAddQueue);
}

function handleBtnRemoveWatched() {
  getLocalStorage('watched');
  removeMovieInLocalStorage(movie, 'watched');

  refs.btnAddWatched.removeEventListener('click', handleBtnRemoveWatched);
}

function handleBtnRemoveQueue() {
  getLocalStorage('queue');
  removeMovieInLocalStorage(movie, 'queue');

  refs.btnAddWatched.removeEventListener('click', handleBtnRemoveQueue);
}
