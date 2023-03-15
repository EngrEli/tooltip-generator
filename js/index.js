import generator from './tooltipGenerator.js';

document.addEventListener('DOMContentLoaded', function() {
  generator('.your-class', {
    title: 'This is a title',
    placement: 'top',
  });
});
