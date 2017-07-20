import { Meteor } from 'meteor/meteor'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import App from '../imports/ui/App.jsx'

/* Inject React Touch Tap Plugin */
import 'react-tap-event-plugin'
import 'typeface-roboto'

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <MuiThemeProvider theme={getMuiTheme(lightBaseTheme)}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>,
    document.querySelector('#app')
  )
})
