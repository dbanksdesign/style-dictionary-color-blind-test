const fs = require('fs');
const styles = fs.readFileSync('./formats/colorTest.css');

// Recursive function to take the whole color object and
// create HTML from it.
const colorMapper = (object) => {
  var toRet = '';

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      if (element.hasOwnProperty('value')) {
       toRet += `<div class="swatch">
  <div class="swatch-color" style="background-color: ${element.value}"></div>
  <div class="swatch-name">${element.name}</div>
</div>
`
      } else {
        toRet += `<div class="color-group">
<h2>${key}</h2>
<div class="swatches">
${colorMapper(element)}
</div>
</div>
`
      }
    }
  }

  return toRet;
}

module.exports = {
  name: 'colorTest',
  formatter: function(dictionary, config) {
    const toRet = `
<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
<style>
  ${styles}
</style>
</head>
<body>
  <h1>${this.title}</h1>
  ${colorMapper(dictionary.properties.color)}
</body>`
    return toRet;
  }
}