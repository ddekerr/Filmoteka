const refs = {
   openModalButton: document.querySelector(".films"),
   closeModalButton: document.querySelector("[modal-close]"),
   modalFilm: document.querySelector("[modal]"),
   backdrop: document.querySelector('.backdrop'),
   // list: document.querySelector('.poster-list'),
};

if (refs.openModalButton) {
   refs.openModalButton.addEventListener("click", openModal);
}

if (refs.closeModalButton) {
   refs.closeModalButton.addEventListener("click", closeModal);
}

function openModali() {
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


function openModal(event) {
   const selectedMovie = event.target.closest('li');
   const selectedMovieId = Number(selectedMovie.getAttribute('key'));
   let moviesData = JSON.parse(localStorage.getItem('moviesData'));
   if (selectedMovie) {
      const movieData = moviesData.find(movie => movie.id === selectedMovieId);
      // renderModalContent(movieData);
      openModali()
   }
}