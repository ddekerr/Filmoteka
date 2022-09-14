const plugContainer = document.querySelector('.plug')
 hidePlug ()

const COLOR_LIST = ['#ff6b01'];
let $targetList;

const init = () => {
  $targetList = document.querySelectorAll('[data-js="reveal"]');

  setup();

  window.addEventListener('scroll', onScroll, false);
  window.dispatchEvent(new Event('scroll'));
};

const getArrayRandomValue = array =>
  array[Math.floor(Math.random() * array.length)];

const setup = () => {
  for (const $target of $targetList) {
    const content = $target.innerHTML;
    const color =
      'revealColor' in $target.dataset
        ? $target.dataset.revealColor
        : getArrayRandomValue(COLOR_LIST);
    $target.innerHTML = `<span data-reveal="content"><div data-reveal="cover" style="background-color:${color}"></div><span data-reveal="text">${content}</span></span>`;
  }
};

const onScroll = () => {
  const windowH = window.innerHeight;
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const isMostScroll = document.body.clientHeight <= scrollTop + windowH;

  for (const $target of $targetList) {
    if ($target.classList.contains('loaded')) continue;

    const rect = $target.getBoundingClientRect();
    const top = rect.top + scrollTop;
    if (isMostScroll || top <= scrollTop + windowH * 0.8)
      $target.classList.add('loaded');
  }
};

document.addEventListener('DOMContentLoaded', init, false);




function hidePlug (){
  const storageW = localStorage.getItem('watched')
const storageQ = localStorage.getItem('queue')
  
  if (storageW.length !== 2 || storageQ.length !== 2) {
    plugContainer.remove()
  }
}