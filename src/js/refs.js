const refs = {

  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal-login]'),

    // for log-in
  headerLogIn: document.querySelector('#header-login'),
  headerLogOut: document.querySelector('#header-logout'),
  backdropLogIn: document.querySelector('.backdrop_login'),
  modalDivLogIn: document.querySelector('.modal_login'),
  formLogIn: document.querySelector('.modal_login__form'),
  formTitleSignIn: document.querySelector('.modal_login__title_signIn'),
  formTitleSignUp: document.querySelector('.modal_login__title_signUp'),
  formWrapName: document.querySelector('.modal_login__wrap_name'),
  inputPassword: document.querySelector('#password'),
  buttonShowPassword: document.querySelector('#button_show_password'),
  iconForShowPassword: document.querySelector('#icon_show_password'),
  iconForUnShowPassword: document.querySelector('#icon_un_show_password'),
  formWrapCheckbox: document.querySelector('.modal_login__wrap_checkbox'),
  formCheckbox: document.querySelector('#checkbox'),
  buttonRegister: document.querySelector('.modal_login__button_register'),
  buttonConfirm: document.querySelector('.modal_login__button_confirm'),
  signUp: document.querySelector('.signUp_now'),
  signUpLink: document.querySelector('.signUp_now__link'),
  signIn: document.querySelector('.signIn_now'),
  signInLink: document.querySelector('.signIn_now__link'),
  logOut: document.querySelector('#header-logout'),
  // container for pagination
  pag: document.querySelector('.tui-pagination'),

  // container for markup films list
  gallery: document.querySelector('.films'),

  //search movies button on index.html page
  inputSearch: document.querySelector('.search-form__input')
};

export const {
  headerLogIn,
  headerLogOut,
  openModalBtn,
  closeModalBtn,
  modal,
  backdropLogIn,
  modalDivLogIn,
  formLogIn,
  formTitleSignIn,
  formTitleSignUp,
  formWrapName,
  inputPassword,
  inputSearch,
  buttonShowPassword,
  iconForShowPassword,
  iconForUnShowPassword,
  formWrapCheckbox,
  formCheckbox,
  buttonRegister,
  buttonConfirm,
  signUp,
  signUpLink,
  signIn,
  signInLink,
  logOut,
  pag,
  gallery
} = refs;
