# tooltip-generator
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
allowOnAnyElement | boolean | false | Makes the tooltip available on the targeted element. If the user lets the default setting(allowOnAnyElement: false), the targeted element will be converted into a tooltip icon.
adaptiveHeight | boolean | false | Adapts slider height to the current slide
appendArrows | string | $(element) | Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
