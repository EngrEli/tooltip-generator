export default function generator(elem, options) {
  var components = document.querySelectorAll(elem);
  components.forEach(function(item) {
    // Create tooltip container
    const oTooltipContainer = document.createElement('div');
    oTooltipContainer.className = 'tooltip__container';

    // Create tooltip text container
    const oTooltipText = document.createElement('div');
    oTooltipText.className = 'tooltip__text-container';

    // Create tooltip title
    const oTooltipTextTitle = document.createElement('div');
    oTooltipTextTitle.className = 'tooltip__text-title';

    // Create tooltip text content
    const oTooltipTextContent = document.createElement('div');
    oTooltipTextContent.className = 'tooltip__text-content';

    // Append the tooltipContainer to the parent container
    item.parentNode.appendChild(oTooltipContainer);

    // Append title and content to tooltip text container
    oTooltipText.appendChild(oTooltipTextTitle);
    oTooltipText.appendChild(oTooltipTextContent);

    // Append the tooltipText inside the tooltipContainer
    oTooltipContainer.appendChild(oTooltipText);

    // Append the targeted element inside the tooltipContainer
    oTooltipContainer.appendChild(item);

    // ----------OPTIONS------------------------------------------------------------------
    /**
     * allowOnAnyElement - user can choose true or false. True if he wants a regular tooltip,
     * false if the user wants the element to transform into a tooltip icon
     *
     * If default, element's tagname must be div only to avoid future errors
     * else, the tooltip will not run
     *
     * @returns void
    */
    if (options.allowOnAnyElement) {
      item.classList.add('tooltip__element');
    } else if (!options.allowOnAnyElement || options.allowOnAnyElement == null) {
      // DIV tags can be transformed to tooltip
      // WARNING: tooltip functionality will be removed if the target is not a
      //  div element (to avoid element conflicts eg. li tag, a tag, progress tag)
      if (item.tagName !== 'DIV') {
        item.parentNode.classList.remove('tooltip__container');
      } else {
        item.classList.add('icon-question-circle', 'tooltip__element');
        item.innerHTML = '';
      }
    }

    /**
     * title - the user can enter a string or a string with HTML element.
     * Initially, the default value will be a standard text.
     *
     * @returns void
    */
    // title option
    if (!options.title) {
      oTooltipTextTitle.innerHTML = 'This is the default tooltip title';
    } else {
      oTooltipTextTitle.innerHTML = options.title;
    }

    /**
     * content - the user can enter a string or a string with HTML element.
     * Initially, the default value will be a standard text.
     *
     * @returns void
    */
    if (!options.content) {
      oTooltipTextContent.innerHTML = 'This is the default tooltip content';
    } else {
      oTooltipTextContent.innerHTML = options.content;
    }

    /**
     * trigger - user can select if he wants a
     * click or a default mouseover/hover to show tooltip text
     *
     * @returns void
    */
    if (!options.trigger || options.trigger === 'hover') {
      oTooltipContainer.addEventListener('mouseover', function() {
        // Remove all the active class for all the
        // container and just add active class on the hovered item
        document.querySelectorAll('.tooltip__container').forEach(function(i) {
          i.classList.remove('tooltip__container--show');
        });
        this.classList.add('tooltip__container--show');
      });
      oTooltipContainer.addEventListener('mouseout', function() {
        // If options.style is title with a close button don't remove the show class
        if (!oTooltipContainer.classList.contains('tooltip__container--with-close-btn')) {
          this.classList.remove('tooltip__container--show');
        }
      });
      document.addEventListener('click', function(evt) {
        // when X button is clicked, the tooltip will be closed
        if (evt.target.classList.contains('icon-cross1')) {
          oTooltipContainer.classList.remove('tooltip__container--show');
        }
      });
    } else if (options.trigger === 'click') {
      // If the trigger was set to 'click', the tooltip element needs to be
      // clicked for the tooltip container to appear.
      // Clicking the tooltip element closes other tooltips that were previously open.
      oTooltipContainer.addEventListener('click', function() {
        document.querySelectorAll('.tooltip__container').forEach(function(j) {
          j.classList.remove('tooltip__container--show');
        });
        this.classList.add('tooltip__container--show');
      });
      document.addEventListener('click', function(evt) {
        // Clicking close button removes tooltip
        if (evt.target.classList.contains('icon-cross1')) {
          oTooltipContainer.classList.remove('tooltip__container--show');
        }
        // If the container contains a close button,
        // user can't click the outside to close the tooltip
        if (!evt.target.classList.contains('tooltip__element') && !oTooltipContainer.classList.contains('tooltip__container--with-close-btn')) {
          oTooltipContainer.classList.remove('tooltip__container--show');
        }
      });
      // Remove active tooltip when clicking outside a tooltip
      // document.addEventListener('click', function(evt) {
      //   if (!evt.target.classList.contains('icon-question-circle')) {
      //     oTooltipContainer.classList.remove('tooltip__container--show');
      //   }
      // })
    }

    /**
     * placement - user can select if he wants a
     * top, bottom, left or right placed tooltip. Default is bottom placement
     *
     * @returns void
    */
    if (!options.placement || options.placement === 'bottom') {
      oTooltipContainer.classList.add('tooltip__container--bottom-placement');
    } else if (options.placement === 'top') {
      oTooltipContainer.classList.add('tooltip__container--top-placement');
    } else if (options.placement === 'right') {
      oTooltipContainer.classList.add('tooltip__container--right-placement');
    } else if (options.placement === 'left') {
      oTooltipContainer.classList.add('tooltip__container--left-placement');
    }

    /**
     * style - user can select if he wants a
     * titleWithClose, textOnly or a textOnlyWithClose style for the tooltip content.
     * The default is titleWithClose.
     *
     * @returns void
    */
    if (!options.style || options.style === 'titleWithClose') {
      // add class to the container
      oTooltipContainer.classList.add('tooltip__container--with-close-btn');
      // Create close button
      const oTooltipClose = document.createElement('span');
      oTooltipClose.className = 'icon-cross1';
      oTooltipText.appendChild(oTooltipClose);
    } else if (options.style === 'textOnlyWithClose') {
      // add class to the container
      oTooltipContainer.classList.add('tooltip__container--with-close-btn');
      // Create close button
      const oTooltipClose = document.createElement('span');
      oTooltipClose.className = 'icon-cross1';
      oTooltipText.appendChild(oTooltipClose);
      // remove title
      oTooltipTextTitle.style.display = 'none';
    } else if (options.style === 'textOnly') {
      oTooltipTextTitle.style.display = 'none';
    }
  });
}
