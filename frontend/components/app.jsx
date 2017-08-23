import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import AuthFormContainer from './auth_form/auth_form_container';

const App = () => {
  return(
      <div>
        <header>
          <NavBarContainer />
        </header>
        <Switch>
          <Route path='/signup' component={ AuthFormContainer } />
          <Route path='/login' component={ AuthFormContainer } />
        </Switch>
      </div>
  );
};

export default App;
