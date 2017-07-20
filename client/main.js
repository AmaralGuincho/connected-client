import { Meteor } from 'meteor/meteor'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from '../imports/ui/App.jsx'
import theme from '../imports/ui/theme'

/* Inject React Touch Tap Plugin */
import injectOnTouchTapPlugin from 'react-tap-event-plugin'
injectOnTouchTapPlugin()

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>,
    document.querySelector('#app')
  )
})
