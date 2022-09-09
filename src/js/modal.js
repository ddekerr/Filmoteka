(() => {
   const refs = {
      openModalButton: document.querySelector("[modal-open]"),
      closeModalButton: document.querySelector("[modal-close]"),
      modalFilm: document.querySelector("[modal]"),
      backdrop: document.querySelector('.backdrop'),
   };

   if (refs.openModalButton) {
      refs.openModalButton.addEventListener("click", openModal);
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
})();