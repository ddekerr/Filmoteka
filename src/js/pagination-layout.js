export function deletePageButton(index, edgeButtonSelector) {
  let button = document.querySelector(
    `.tui-pagination .tui-page-btn[data-page-number="${index}"]`
  );
  if (null !== button) {
    if (button.classList.contains('tui-is-selected')) {
      button = document.querySelector(edgeButtonSelector);
      if (null === button) {
        return;
      }
    }
    button.remove();
  }
}
