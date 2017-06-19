import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// Material-UI REQUIREMENT
import injectTapEventPlugin from 'react-tap-event-plugin';

// External Components
import AppDrawer from './components/AppDrawer.jsx';

// Pages Import
import Home from './pages/home.jsx';
import Dashboard from './pages/Dashboard.jsx';

// Material-UI REQUIREMENT
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div className="app-shell">
      <AppDrawer title="Amaral Guincho" />

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
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
