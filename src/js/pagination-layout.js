export function first() {
  const first = document.querySelector('.tui-ico-first');

  first.textContent = '1';
}

export function deletePageButton(index, edgeButtonSelector) {
  let button = document.querySelector(
    `.tui-pagination .tui-page-btn[data-page-number="${index}"]`
  );
  if (null !== button) {
    if (button.classList.contains('tui-is-selected')) {
      button = document.querySelector(edgeButtonSelector);
    }
    button.remove();
  }
}
