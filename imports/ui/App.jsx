import React from 'react'

import { Switch, Route } from 'react-router-dom'

/* Local Imports */
import AppNav from './components/AppNav.jsx'
import DrawerButton from './components/DrawerButton.jsx'

/* Pages Imports */
import Home from './pages/Home.jsx'
import Funcionarios from './pages/Funcionarios.jsx'

/* Icons Imports */
import HomeIcon from 'material-ui-icons/Home'
import PeopleIcon from 'material-ui-icons/People'

const App = () => (
  <div>
    <AppNav title='Amaral Guincho'>
      <DrawerButton to='/' text='Home'
        icon={<HomeIcon />}
      />
      <DrawerButton to='/funcionarios' text='Funcionários'
        icon={<PeopleIcon />}
      />
    </AppNav>

    <div className='app-content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/funcionarios/:id?' component={Funcionarios} />
      </Switch>
    </div>
  </div>
)

export default App
