import config from './config';

const refs = {
   openModalButton: document.querySelector(".films"),
   closeModalButton: document.querySelector("[modal-close]"),
   modalFilm: document.querySelector("[modal]"),
   backdrop: document.querySelector('.backdrop'),
};

if (refs.openModalButton) {
   refs.openModalButton.addEventListener("click", createModal);
}

if (refs.closeModalButton) {
   refs.closeModalButton.addEventListener("click", closeModal);
}

function openModal() {
   refs.modalFilm.classList.toggle("is-open");
   document.body.style.overflow = 'hidden';
   document.addEventListener('keydown', offModalForEscape);
   document.addEventListener('click', offModalBackdrop)
};

function closeModal() {
   refs.modalFilm.classList.toggle("is-open");
   document.body.style.overflow = 'overlay';
   document.removeEventListener('keydown', offModalForEscape);
   document.removeEventListener('click', offModalBackdrop)

};

function offModalForEscape(event) {
   if (event.key === 'Escape') {
      closeModal();
   }
}
function offModalBackdrop(event) {
   if (event.target === refs.backdrop) {
      closeModal();
   }
}


function createModal(event) {
   const selectedMovie = event.target.closest('li');
   // let moviesData = JSON.parse(localStorage.getItem('moviesData'));
   if (selectedMovie) {
      const selectedMovieId = Number(selectedMovie.getAttribute('key'));
      // const movieData = moviesData.find(movie => movie.id === selectedMovieId);
      // renderModalContent(movieData);
      // const movieData = moviesData.find(movie => movie.id === selectedMovieId);
      openModal()
      console.log(selectedMovieId)
   }
}

function renderModalContent(movieData) {
   refs.backdrop.firstElementChild.innerHTML = modalMoviemarkup(movieData);
}



const modalMoviemarkup = ({ poster_path, popularity, vote_average, vote_count, original_title, genre_ids, overview }) => {
   let posterPath = ``
   const src = item.poster_path === null ? config.altPosterUrl : config.postersUrl + config.postersSize + item.poster_path;
   return `<div class="modal__movie">
      <button class="modal__close" modal-close>
      <svg class="modal__btn" width="20px" height="20px">
         <use href="./images/icons.svg#icon-close" fill="black"></use>
      </svg>
      </button>
      <div class="modal__img">
      <img src="${posterPath}" alt="" />
      </div>
      <div class="modal-info">
      <h2 class="modal-info__header title">${original_title}</h2>
      <table class="modal-info-table">
         <tbody>
            <tr class="modal-info__row">
            <td><p class="modal-info__attribute">Vote / Votes</p></td>
            <td>
               <span class="film__rating modal-info__rating">${vote_average.toFixed(1)}</span> <span>/</span> <span>${vote_count}</span>
            </td>
            </tr>
            <tr class="modal-info__row">
            <td><p>Popularity</p></td>
            <td><p>${popularity.toFixed(1)}</p></td>
            </tr>
            <tr class="modal-info__row">
            <td><p>Original Title</p></td>
            <td><p>${original_title}</p></td>
            </tr>
            <tr class="modal-info__row">
            <td><p>Genre</p></td>
            <td><p>${genresConverting(genre_ids)}</p></td>
            </tr>
         </tbody>
      </table>

      <h3 class="modal-info__about-title">About</h3>
      <p class="modal-info__about">${overview}</p>
      <ul class="modal-info__buttons-list">
         <li class="movie-data__button-item">
            <button type="button" data-btn="watched" class="modal-info__button button active">
            add to Watched
            </button>
         </li>
         <li class="modal-info__button-item">
            <button type="button" data-btn="queue" class="modal-info__button button">add to queue</button>
         </li>
         </ul>
      </div>
   </div>`
}