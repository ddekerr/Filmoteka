import { createModalFilm } from './markups';
import {fetchMovieByID} from './filmoteka';


(() => {
   const refs = {
      openModalButton: document.querySelector("[modal-open]"),
      closeModalButton: document.querySelector("[modal-close]"),
      modalFilm: document.querySelector("[modal]"),
      backdrop: document.querySelector('.backdrop'),
      cardLink: document.querySelector('.films'),
      modalBox: document.querySelector('.modal__movie')
   };

   if (refs.openModalButton) {
      refs.cardLink.addEventListener("click", openModal);
   }

   if (refs.closeModalButton) {
      refs.closeModalButton.addEventListener("click", closeModal);
   }

   function openModal(e) {
      e.preventDefault();
      if (e.target.nodeName !== "IMG") {
      return;
      }
      
      refs.modalFilm.classList.toggle("is-open");
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', offModalForEscape);
      document.addEventListener('click', offModalBackdrop);
      refs.modalBox.innerHTML = '';

      selectFilm(e);
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

   function selectFilm(event) {


      const linkID = document.querySelector('.film__image');
      console.log(event.target.dataset.id);
      const FilmID = event.target.dataset.id;
            
      fetchMovieByID(FilmID).then(data => {
         console.log(data);
         const markup = createModalFilm(data);
         refs.modalBox.innerHTML = markup;
      })
   }
})();

