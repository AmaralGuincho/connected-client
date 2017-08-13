import React from 'react'

import { Switch, Route } from 'react-router-dom'

/* Local Imports */
import AppNav from './components/AppNav.jsx'
import DrawerButton from './components/DrawerButton.jsx'

/* Pages Imports */
import Home from './pages/Home.jsx'
import Funcionarios from './pages/Funcionarios.jsx'
import Clientes from './pages/Clientes.jsx'
import Servico from './pages/Servico.jsx'

/* Icons Imports */
import HomeIcon from 'material-ui-icons/Home'
import PeopleIcon from 'material-ui-icons/People'
import CarIcon from 'material-ui-icons/DirectionsCar'

const App = () => (
  <div>
    <AppNav title='Amaral Guincho'>
      <DrawerButton
        exact
        to='/'
        text='Home'
        icon={<HomeIcon />}
      />
      <DrawerButton
        to='/funcionarios'
        text='Funcionários'
        icon={<PeopleIcon />}
      />
      <DrawerButton
        to='/clientes'
        text='Clientes'
        icon={<CarIcon />}
      />
      <DrawerButton
        to='/servico'
        text='Servico'
      />
    </AppNav>

    <div className='app-content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/funcionarios' component={Funcionarios} />
        <Route path='/clientes' component={Clientes} />
        <Route path='/servico' component={Servico} />

        /* Redirect unknown rotes to home*/
        <Route component={Home} />
      </Switch>
    </div>
  </div>
)

export default App
