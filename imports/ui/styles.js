import { typography } from 'material-ui/styles';
import { grey500, grey100 } from 'material-ui/styles/colors';

const styles = {
  navigation: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: typography.fontWeightLight,
    color: grey500,
    paddingTop: 5,
    paddingBottom: 5,
    display: 'block',
  },
  title: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: typography.fontWeightLight,
    marginBottom: 5,
  },
  paper: {
    paddingTop: 10,
    paddingBottom: 40,
    paddingLeft: 35,
    paddingRight: 35,
    marginTop: 30,
  },
  clear: {
    clear: 'both',
  },
  contentContainer: {
    backgroundColor: grey100,
    padding: 20,
  },
};

export default styles;
