# CSS-Variable-Generator
Generate CSS variables from a base HEX color. Useful for theming websites and creating color palettes.

## Installation

```js
npm install css-variable-generator
yarn add css-variable-generator
```

## Usage
Add a style tag into the head of your project with the ID of 'root-style'

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style id="root-style"></style>
</head>
  <body>

  </body>
</html>
```

Import the module into your project...

```javascript
import createVariables from 'css-variable-generator';
```

Initialise the function with your chosen arguments. 

```javascript
createVariables(baseColor = '#45a59c', variableName = 'colorPrimary');
```

If you check the HTML element on your project you should now have 7 CSS Variables appended and ready to use in your project. 

## Naming Conventions
--${baseColor}-100 is the lightest variation and is 75% lighter than the base color. --${baseColor}-400 is the base color. --${baseColor}-700 is the darkest variation and is 75% darker than the base color. The variables will have the following names (where the argument 'variableName' is 'colorPrimary' and the 'baseColor' is '#45a59c'):

```css
:root {
    --colorPrimary-100: #d1e9e6;
    --colorPrimary-200: #a2d2ce;
    --colorPrimary-300: #74bcb5;
    --colorPrimary-400: #45a59c;
    --colorPrimary-500: #347c75;
    --colorPrimary-600: #23534e;
    --colorPrimary-700: #112927;
}
```

## Compatibility
The module works in all major browsers. I have also tested it in IE11 and it works alongside the <a href="https://www.npmjs.com/package/css-vars-ponyfill" target="_blank" rel="noopener noreferrer">css-vars-ponyfill</a>. The css-vars-ponyfill just needs to be initialised after the variables are created.

```js
import createVariables from 'css-variable-generator';
import cssVars from 'css-vars-ponyfill';

createVariables('#45a59c', 'colorPrimary');
cssVars();
```

## Example
https://codepen.io/jonescr/pen/GPeeWM

