import { initializeApp } from "firebase/app";
import Notiflix from 'notiflix';
import { chooseThemeForNotiflix } from './notiflix';

const firebaseConfig = {

    apiKey: "fd7e9d42e4eb94adcf7c367528854213",
    databaseURL: "https://api.themoviedb.org/3",
    // authDomain: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: "",
    // appId: "",
    // measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
let user;

headerMyLibrary.addEventListener('click', checkLogInForMyLibrary);

function checkLogInForMyLibrary() {
    chooseThemeForNotiflix();
    if (auth.currentUser === null) {
        headerMyLibrary.removeAttribute('href');
        Notiflix.Report.info('Stop', 'Please Log In', 'Okay');
    } else {
        headerMyLibrary.setAttribute('href', './header-library.html');
    };
};

if (formLogIn) {
    formLogIn.addEventListener('submit', onLogin);
};

if (formCheckbox) {
    formCheckbox.onchange = function () {
        if (this.checked) {
            buttonRegister.classList.remove('disabled_for_signUp')
            buttonRegister.removeAttribute('disabled')
        } else {
            buttonRegister.classList.add('disabled_for_signUp')
            buttonRegister.setAttribute('disabled', 'disabled')
        }
    };
};

if (signUp) {
    signUpLink.addEventListener('click', goToSignUp);
};
if (signIn) {
    signInLink.addEventListener('click', goToSignIn);
};
