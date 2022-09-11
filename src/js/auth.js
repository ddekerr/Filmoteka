function onClickHomeBtn(e) {
    refs.searchForm.addEventListener('submit', searchHandler);
    refs.queueBtn.classList.remove('active');
    refs.watchedBtn.classList.remove('active');
    tapHome();
    searchTrand();
  }

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('guides').onSnapshot(
      snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user);
      },
      err => console.log(err.message)
    );
  } else {
    setupUI();
    setupGuides([]);
  }
});

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', e => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user & add firestore data
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        bio: signupForm['signup-bio'].value,
      });
    })
    .then(() => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
      localStorage.setItem('auth', 'true');
    });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
  onClickHomeBtn();
  localStorage.setItem('auth', 'false');
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
    localStorage.setItem('auth', 'true');
  });
});