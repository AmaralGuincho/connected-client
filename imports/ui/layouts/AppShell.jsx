import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// Material-UI REQUIREMENT
import injectTapEventPlugin from 'react-tap-event-plugin';

// External Components
import AppDrawer from '../components/AppDrawer.jsx';

// Material-UI REQUIREMENT
injectTapEventPlugin();


const AppShell = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div className="app-shell">

      <AppDrawer title="Amaral Guincho" />

      <div className="content" />

    </div>
  </MuiThemeProvider>
);

AppShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AppShell;
