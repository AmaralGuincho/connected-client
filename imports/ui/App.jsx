import React from 'react'

import { Switch, Route } from 'react-router-dom'

/* Local Imports */
import AppNav from './components/AppNav.jsx'
import DrawerButton from './components/DrawerButton.jsx'
import DrawerTab from './components/DrawerTab.jsx'

/* Pages Imports */
import Home from './pages/Home.jsx'
import Funcionarios from './pages/Funcionarios.jsx'
import Clientes from './pages/Clientes.jsx'
import Servico from './pages/Servico.jsx'
import Frota from './pages/Frota.jsx'
import Assistencia from './pages/Assistencia.jsx'

/* Icons Imports */
import HomeIcon from 'material-ui-icons/Home'
import PeopleIcon from 'material-ui-icons/People'
import CarIcon from 'material-ui-icons/DirectionsCar'
import ServiceIcon from 'material-ui-icons/Work'
import FrotaIcon from 'material-ui-icons/LocalShipping'
import AssistenciaIcon from 'material-ui-icons/ImportContacts'

const App = () => (
  <div>
    <AppNav title='Amaral Guincho'>
      <DrawerButton
        exact
        to='/'
        text='Home'
        icon={HomeIcon}
      />

      <DrawerButton
        to='/servico'
        text='Servico'
        icon={ServiceIcon}
      />

      <DrawerTab title='Gerenciar' >
        <DrawerButton
          to='/frota'
          text='Frota'
          icon={FrotaIcon}
        />
        <DrawerButton
          to='/funcionarios'
          text='Funcionários'
          icon={PeopleIcon}
        />
        <DrawerButton
          to='/clientes'
          text='Clientes'
          icon={CarIcon}
        />
        <DrawerButton
          to='/assistencia'
          text='Assistencia'
          icon={AssistenciaIcon}
        />
      </DrawerTab>

    </AppNav>

    <div className='app-content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/funcionarios' component={Funcionarios} />
        <Route path='/clientes' component={Clientes} />
        <Route path='/servico' component={Servico} />
        <Route path='/frota' component={Frota} />
        <Route path='/assistencia' component={Assistencia} />

        /* Redirect unknown rotes to home*/
        <Route component={Home} />
      </Switch>
    </div>
  </div>
)

export default App
