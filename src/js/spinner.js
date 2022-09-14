import { Spinner } from 'spin.js';

// css спиннера для страници
var opts = {
  lines: 10, // The number of lines to draw
  length: 18, // The length of each line
  width: 11, // The line thickness
  radius: 29, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 0.7, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ff6b01', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '170%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

// включить спиннер
export const spinner = new Spinner(opts);
