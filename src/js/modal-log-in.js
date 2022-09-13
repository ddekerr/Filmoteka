// setup materialize components
document.addEventListener('DOMContentLoaded', function () {
  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  let items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});

// import { openModalBtn, closeModalBtn, modal, backdropLogIn, formLogIn, buttonRegister, inputPassword, buttonShowPassword, iconForShowPassword, iconForUnShowPassword } from './refs';
// import { goToSignIn } from './log-in';

// if (openModalBtn) {
//   openModalBtn.addEventListener("click", openModalLogIn);
//   closeModalBtn.addEventListener("click", closeModalLogIn);
// };

// function openModalLogIn() {
//   document.body.style.overflow = 'hidden';
//   buttonShowPassword.addEventListener("click", showPassword);
//   modal.classList.remove("is-hidden");
//   backdropLogIn.addEventListener('click', offModalLogInForClickBeackdrop);
//   document.addEventListener('keydown', offModalLogInForEscape);
// };

// export function closeModalLogIn() {
//   formLogIn.reset();
//   buttonRegister.classList.add('disabled_for_signUp');
//   buttonRegister.setAttribute('disabled', 'disabled');
//   goToSignIn();
//   document.body.style.overflow = 'overlay';
//   buttonShowPassword.removeEventListener("click", showPassword);
//   modal.classList.add("is-hidden");
//   backdropLogIn.removeEventListener('click', offModalLogInForClickBeackdrop);
//   document.removeEventListener('keydown', offModalLogInForEscape);
// };

// function offModalLogInForClickBeackdrop(event) {
//   if (event.target === backdropLogIn) {
//     closeModalLogIn();
//   }
// }

// function offModalLogInForEscape(event) {
//   if (event.key === 'Escape') {
//     closeModalLogIn();
//   }
// }

// function showPassword() {
//   if (inputPassword.getAttribute('type') === 'password') {
//     inputPassword.removeAttribute('type');
//     inputPassword.setAttribute('type', 'text');
//     iconForShowPassword.classList.add('visually-hidden');
//     iconForUnShowPassword.classList.remove('visually-hidden');
//   } else {
//     inputPassword.removeAttribute('type');
//     inputPassword.setAttribute('type', 'password');
//     iconForShowPassword.classList.remove('visually-hidden');
//     iconForUnShowPassword.classList.add('visually-hidden');
//   };
// };
