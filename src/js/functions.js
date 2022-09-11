export function noReloadByEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
}

export function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function offModalForEscape(event) {
  if (event.key === 'Escape') {
     closeModal();
  }
}