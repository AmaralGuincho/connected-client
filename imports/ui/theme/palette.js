import createPalette from 'material-ui/styles/palette';
import {
  lightBlue,
  pink,
  grey,
 } from 'material-ui/styles/colors';

const palette = createPalette({
  primary: lightBlue,
  accent: pink,
  type: 'light',
});

palette.text.primary = grey[900];
palette.text.secondary = lightBlue;

export default palette;
