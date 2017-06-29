import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MenuItem from 'material-ui/MenuItem';
// Material-UI REQUIREMENT
import injectTapEventPlugin from 'react-tap-event-plugin';


// External Components
import AppNav from './components/AppNav.jsx';

// Pages Import
import Home from './pages/home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Funcionarios from './pages/Funcionarios.jsx';

import globalStyles from './styles';

// Material-UI REQUIREMENT
injectTapEventPlugin();

const customTheme = () => {
  const overwrites = {
    palette: {
      primary1Color: '#2196f3',
    },
  };
  return getMuiTheme(baseTheme, overwrites);
};

const App = () => (
  <MuiThemeProvider muiTheme={customTheme()}>
    <div className="app-shell">

      <AppNav title="Amaral Guincho" >
        <MenuItem
          primaryText="Dashboard"
          containerElement={<Link to="/dashboard" />}
        />
        <MenuItem
          primaryText="Funcionarios"
          containerElement={<Link to="/funcionarios" />}
        />
      </AppNav>

      <div className="content" style={globalStyles.contentContainer}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/funcionarios" component={Funcionarios} />
        </Switch>
      </div>

    </div>
  </MuiThemeProvider>
);


Meteor.startup(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.querySelector('#app'),
  );
});
