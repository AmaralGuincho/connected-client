import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from '../imports/ui/theme';
// Redux
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// Roboto font global import
import 'typeface-roboto';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>,
    document.querySelector('#app'),
  );
});
