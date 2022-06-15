import generator from './tooltipGenerator.js';

document.addEventListener('DOMContentLoaded', function() {
  // OPTIONS:
  // 1. allowOnAnyElement (true, false(default))
  // 2. content (any text or text with HTML tags, none(default))
  // 3. placement (top, bottom - default no value needed, left, right)
  // 4. trigger (click, hover - if no value default)
  // 5. style ( default(titleWithClose), textOnlyWithClose, textOnly)
  // 6. title (any text or text with HTML tags, default) not done
  generator('.test', {
    content: 'test content',
  });
});
