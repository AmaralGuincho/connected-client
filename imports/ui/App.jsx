import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

// External Components
import AppNav from './components/AppNav.jsx';

// Pages Import
import Home from './pages/home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Funcionarios from './pages/Funcionarios.jsx';

// Style
import theme from './theme';

function App() {
  return (
    <div>
      <AppNav title="Amaral Guincho" >
        <h1>hello</h1>
      </AppNav>

      <div className="content" >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/funcionarios" component={Funcionarios} />
        </Switch>
      </div>

    </div>
  );
}


export default App;
