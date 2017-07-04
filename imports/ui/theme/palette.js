import createPalette from 'material-ui/styles/palette';
import {
  lightBlue,
  pink,
  blueGrey,
 } from 'material-ui/styles/colors';

const palette = createPalette({
  primary: lightBlue,
  accent: pink,
  type: 'light',
});

palette.text.primary = blueGrey[50];
palette.text.secondary = lightBlue;

export default palette;
