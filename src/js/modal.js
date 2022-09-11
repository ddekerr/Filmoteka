import { createModalFilm } from './markups';
import { fetchMovieByID } from './filmoteka';


(() => {
   const refs = {
      openModalButton: document.querySelector(".films"),
      closeModalButton: document.querySelector(".modal__close"),
      backdrop: document.querySelector('.backdrop'),
   };

   if (refs.openModalButton) {
      refs.openModalButton.addEventListener("click", createModal);
   }

   if (refs.closeModalButton) {
      refs.closeModalButton.addEventListener("click", closeModal);
   }

   function openModal() {
      refs.backdrop.classList.toggle("is-open");
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', offModalForEscape);
      document.addEventListener('click', offModalBackdrop);

   };

   function closeModal() {
      refs.backdrop.classList.toggle("is-open");
      document.body.style.overflow = 'overlay';
      document.removeEventListener('keydown', offModalForEscape);
      document.removeEventListener('click', offModalBackdrop)

   };

   function offModalForEscape(event) {
      if (event.key === 'Escape') {
         closeModal();
      }
   };
   function offModalBackdrop(event) {
      if (event.target === refs.backdrop) {
         closeModal();
      }
   };

   function createModal(event) {
      const selectedMovie = event.target.closest('.film__image');
      const FilmID = event.target.dataset.id;
      if (selectedMovie) {
         // console.log(event.target.dataset.id);
         fetchMovieByID(FilmID).then(data => {
            console.log(data);
            const markup = createModalFilm(data);
            refs.backdrop.innerHTML = markup;
         });
         openModal()      
         refs.backdrop.innerHTML = '';
      }
   };
})();