// setup materialize components
// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', e => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      // console.log(cred.user);
    })
    .then(() => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
  });
});

// Initialize Firebase
let config = {
  api_key: 'fd7e9d42e4eb94adcf7c367528854213',
  base_url: 'https://api.themoviedb.org/3',
  postersUrl: 'https://image.tmdb.org/t/p/',
  postersSize: 'w500',
  altPosterUrl:
    'https://www.vaureal.fr/sites/vaureal/files/styles/_site_contenu_image_principale/public/image/2022-03/Solidarit%C3%A9%20ukraine.jpg?itok=Gcqq2tD3',
};
firebase.initializeApp(config);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({ timestampsInSnapshots: true });
