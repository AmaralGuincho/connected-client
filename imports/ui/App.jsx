import React from 'react'

/* Local Imports */
import AppNav from './components/AppNav.jsx'
import DrawerButton from './components/DrawerButton.jsx'

const App = () => (
  <div>
    <AppNav title='Amaral Guincho'>
      <DrawerButton to='/' exact text='Home' />
    </AppNav>
  </div>
)

export default App
