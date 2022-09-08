const queueBtn = document.querySelector('[data-queue="data-queue"]');
const watchedBtn = document.querySelector('[data-watched="data-watched"]');


queueBtn.addEventListener('click', onclickQueue);
watchedBtn.addEventListener('click', onClickWatched);


function onclickQueue(e) {
    changeActiveClass();
}

function onClickWatched(e) {
    changeActiveClass();
}


function changeActiveClass() {
    queueBtn.classList.toggle('active');
    watchedBtn.classList.toggle('active');
}

