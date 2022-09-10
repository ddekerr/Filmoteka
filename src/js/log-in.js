import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { headerLogIn, headerLogOut, modalDivLogIn, formLogIn, formTitleSignIn, formTitleSignUp, formWrapName, formWrapCheckbox, formCheckbox, buttonRegister, buttonConfirm, signUp, signUpLink, signIn, signInLink, logOut } from './refs';
import { closeModalLogIn } from './modal-log-in';
import Notiflix from 'notiflix';

const firebaseConfig = {
    apiKey: "fd7e9d42e4eb94adcf7c367528854213",
    databaseURL: "https://api.themoviedb.org/3"
};

let app, database
try {
     app = initializeApp(firebaseConfig);
     database = getDatabase(app);
} catch (error) {
    // console.log(error.message)
}
export const auth = getAuth();
let user;

modalDivLogIn.addEventListener('click', checkLogInForMyLibrary);

function checkLogInForMyLibrary() {
    // console.log('called')
    if (auth.currentUser === null) {
        modalDivLogIn.removeAttribute('href');
        Notiflix.Report.info('Stop', 'Please Log In', 'Okay');
    } else {
        modalDivLogIn.setAttribute('href', './header-library.html');
    };
};



// console.log('called');
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

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        onUserLogIn();
    } else {
        onUserLogOut();
    };
});

function onRegister(event) { 
    event.preventDefault();
    const username = document.querySelector('#name_1').value;
    const email = document.querySelector('#email_1').value;
    const password = document.querySelector('#password').value;
    if (validateEmail(email) === false || validatePassword(password) === false) {
        Notiflix.Report.info('Error', 'Email or Password not found', 'Agree');
        return;
    };
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email
            })
            closeModalLogIn();
            formLogIn.reset();
            Notiflix.Report.success('Good!', 'Welcome to Filmoteka!', 'Thanks!');
        })
        .catch((error) => {
            Notiflix.Report.warning('Wait', 'User with such email already exists', 'Try again');
        });
    user = auth.currentUser;
};

function onLogin(event) { 
    event.preventDefault();
    const email = document.querySelector('#email_1').value;
    const password = document.querySelector('#password').value;
    if (validateEmail(email) === false || validatePassword(password) === false) {
        Notiflix.Report.info('Error', 'Email or Password is not found', 'Agree');
        return;
    };
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: dt,
            });
            closeModalLogIn();
            formLogIn.reset();
            onUserLogIn();
            Notiflix.Report.success('Hello there!', 'Welcome back to Filmoteka!', 'Stay here');
        })
        .catch((error) => {
            Notiflix.Report.warning('Something wrong', 'Try again', 'No problem');
        });
    user = auth.currentUser;
};

if (logOut) {
    logOut.addEventListener('click', (e) => {
        chooseThemeForNotiflix();
        Notiflix.Confirm.show('Exit confirmation',
            'Confirm exit?',
            'Bye',
            'Stay',
            function okCb() {
                signOut(auth)
                    .catch((error) => {
                        Notiflix.Report.warning('Error', 'Have one more try', 'Ok');
                    });;
                Notiflix.Report.success('Good bye!', 'Good Luck!', 'See you soon!')
            },
            function cancelCb() {
                Notiflix.Report.success('Great!', 'Let`s keep watching!', 'That`s right!')
            });
    });
};

function goToSignUp() {
    formTitleSignIn.classList.add('visually-hidden');
    formTitleSignUp.classList.remove('visually-hidden');
    formWrapName.classList.remove('visually-hidden');
    formWrapCheckbox.classList.remove('visually-hidden');
    buttonConfirm.classList.add('visually-hidden');
    buttonRegister.classList.remove('visually-hidden');
    signUp.classList.add('visually-hidden');
    signIn.classList.remove('visually-hidden');
    formLogIn.addEventListener('submit', onRegister);
    formLogIn.removeEventListener('submit', onLogin);
}

export function goToSignIn() {
    formTitleSignIn.classList.remove('visually-hidden');
    formTitleSignUp.classList.add('visually-hidden');
    formWrapName.classList.add('visually-hidden');
    formWrapCheckbox.classList.add('visually-hidden');
    buttonConfirm.classList.remove('visually-hidden');
    buttonRegister.classList.add('visually-hidden');
    signUp.classList.remove('visually-hidden');
    signIn.classList.add('visually-hidden');
    formLogIn.addEventListener('submit', onLogin);
    formLogIn.removeEventListener('submit', onRegister);
}

function onUserLogIn() {
    if (headerLogIn && headerLogOut) {
        headerLogIn.classList.add('visually-hidden');
        headerLogOut.classList.remove('visually-hidden');
    };
};

function onUserLogOut() {
    if (headerLogIn && headerLogOut) {
        headerLogIn.classList.remove('visually-hidden');
        headerLogOut.classList.add('visually-hidden');
    };
};

function validateEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) === true) {
        return true;
    } else {
        return false;
    };
};

function validatePassword(password) {
    if (password.length < 6) {
        return false;
    } else {
        return true;
    };
};

function validateField(field) {
    if (field === null) {
        return false;
    };
    if (field.length <= 0) {
        return false;
    } else {
        return true;
    };
};