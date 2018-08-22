const FEColor = require('fe-color');

module.exports = {
  protanopia: (color) => FEColor(color, [
    0.567, 0.433, 0,     0, 0,
    0.558, 0.442, 0,     0, 0,
    0,     0.242, 0.758, 0, 0,
    0,     0,     0,     1, 0
  ]),
  deuteranopia: (color) => FEColor(color, [
    0.567, 0.433, 0, 0,
    0, 0.558, 0.442, 0,
    0, 0, 0, 0.242, 0.758,
    0, 0, 0, 0, 0, 1, 0
  ]),
  deuteranomaly: (color) => FEColor(color, [
    0.8,   0.2,   0,     0, 0,
    0.258, 0.742, 0,     0, 0,
    0,     0.142, 0.858, 0, 0,
    0,     0,     0,     1, 0
  ])
};