import generator from './tooltipGenerator.js';

document.addEventListener('DOMContentLoaded', function() {
  generator('.your-class', {
    className: 'class1 class2',
    placement: 'right',
  });
});
