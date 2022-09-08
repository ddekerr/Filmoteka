const queueBtn = document.querySelector('[data-queue="data-queue"]');
const watchedBtn = document.querySelector('[data-watched="data-watched"]');


queueBtn.addEventListener('click', onclickQueue);
watchedBtn.addEventListener('click', onClickWatched);


function onclickQueue(e) {
    watchedBtn.disabled = false;
    queueBtn.classList.add('active');
    watchedBtn.classList.remove('active');
    queueBtn.disabled = true;

}
function onClickWatched(e) {
    queueBtn.disabled = false;
    queueBtn.classList.remove('active');
    watchedBtn.classList.add('active');
    watchedBtn.disabled = true;
}


