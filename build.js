const StyleDictionary = require('style-dictionary');
const blindnesses = require('./blindnesses');

// Iterate over the color blindnesses and register a value transform
// for that particular color blindness.
for (const key in blindnesses) {
  if (blindnesses.hasOwnProperty(key)) {
    StyleDictionary.registerTransform({
      type: 'value',
      name: `color/${key}`,
      matcher: (prop) => prop.attributes.category === 'color',
      transformer: (prop) => blindnesses[key](prop.value)
    });
  }
}

// Iterate over all the color blindness types to create a platform for each one
// Each platform will be the same except they will each add a different transform
// for that particular blindness, and will each build 1 file
const platforms = Object.keys(blindnesses).reduce((obj, key) => {
  return Object.assign({}, obj, {
    [key]: {
      buildPath: 'build/blindnesses/',
      transforms: StyleDictionary.transformGroup.scss.concat(`color/${key}`),
      files: [{
        destination: `${key}.html`,
        filter: (prop) => prop.attributes.category === 'color',
        title: `${key} Test`,
        format: 'colorTest'
      }]
    }
  })
}, {});

StyleDictionary.registerFormat( require('./formats/colorTest.js') )

StyleDictionary.extend({
  source: ['properties/**/*.json'],
  platforms: platforms
}).buildAllPlatforms();