# Tooltip-generator
JS package for easy tooltip generation

### Installation
Download the `tooltip-generator` zip file and unzip it. Distribute the file inside your project

```
yourProject
│
└─── css
│      tooltipGenerator.css
│
│
└─── js
│      tooltipGenerator.js
│      index.js (you can edit your config here)
│
│
└─── icons
|      ...
|
```

Just add a link to the css file in your `<head>`:
```
<link rel="stylesheet" href="./icons/icons.css">
<link rel="stylesheet" href="./css/tooltipGenerator.css">
```
  
Then, before your closing `<body>` tag add:
```
<script type="module" src="./js/tooltipGenerator.js"></script>
<script type="module" src="./js/index.js"></script>
```

Set up your HTML markup
```
<div class="your-class">Your Element</div>
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
allowOnAnyElement | boolean | false | Makes the tooltip available on the targeted element (div element). If the user lets the default setting `(allowOnAnyElement: false)`, the targeted element will be converted into a tooltip icon.
title | string | 'This is the default tooltip title' | Changes the title of the tooltip content. The `title` ignores HTML tags and is `bold` by default.
content | string | 'This is the default tooltip content' | Changes the body text of the tooltip content. `content` accepts HTML tags.
placement | string | 'bottom' | Changes the placement of the tooltip content when it is shown. Accepts `top`, `right`, `bottom` and `left`.
trigger | string | 'hover' | Changes the trigger of tooltip. `click` - click on the element to show the tooltip content. `hover` - hover on the element to show the tooltip content.
style | string | 'titleWithClose' | Changes the style behavior of the tooltip content. `stlye` can be `titleWithClose` - tooltip content with title and a close button, `textOnlyWithClose` - tooltip content with no title and a close button, `textOnly` - tooltip content with just a text content only.
className | string | n/a | adds a class name to the targeted class' tooltip container. Just separate classes with spaces if you want multiple classes on the container

### Example
```
  import generator from './tooltipGenerator.js';
  
  generator('.your-class', {
    title: 'Here's your title',
    content: 'and here's your content',
    trigger: 'click,
    className: 'class1 class2',
    placement: 'top'
  });
```

### Browser support
Tooltip-generatos works on IE8+ in addition to other modern browsers such as Chrome, Firefox, and Safari.

### License
Copyright (c) 2022 Elizer Lumilay

Free as in Bacon.
