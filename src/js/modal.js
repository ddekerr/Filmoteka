import { createModalFilm } from './markups';
import { fetchMovieByID } from './filmoteka';

(() => {
  const refs = {
    openModalButton: document.querySelector('.films'),
    backdrop: document.querySelector('.backdrop'),
  };

  if (refs.openModalButton) {
    refs.openModalButton.addEventListener('click', createModal);
  }

  function openModal() {
    refs.backdrop.classList.toggle('is-open');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', offModalForEscape);
    document.addEventListener('click', offModalBackdrop);
    document.addEventListener('click', offModalButton);
    document
      .querySelector('.modal__close')
      .addEventListener('click', closeModal);
  }

  function closeModal() {
    refs.backdrop.classList.toggle('is-open');
    document.body.style.overflow = 'overlay';
    document.removeEventListener('keydown', offModalForEscape);
    document.removeEventListener('click', offModalBackdrop);
    document.removeEventListener('click', closeModal);
  }

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
  
  function offModalButton(event) {
    if (event.target === refs.closeModalButton) {
      closeModal();
    }
  }

  async function createModal(event) {
    event.preventDefault();
    const selectedMovie = event.target.closest('.film__image');
    const FilmID = event.target.dataset.id;
    if (selectedMovie) {
      await fetchMovieByID(FilmID).then(data => {
        console.log(selectedMovie.dataset.page);
        const markup = createModalFilm(data, selectedMovie.dataset.page);
        refs.backdrop.innerHTML = markup;
        return data;
      });
      openModal();
    }
  }
})();
