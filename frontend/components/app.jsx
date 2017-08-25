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
        <body>
          <div>Top of body</div>
          <Switch>
            <Route path='/signup' component={ AuthFormContainer } />
            <Route path='/login' component={ AuthFormContainer } />
          </Switch>

          <div className='splashFrontPage'> </div>
          <div>bottom of bosy (or at least last element)</div>
        </body>
        <footer>
          ...there goes the footer
        </footer>
      </div>
  );
};

export default App;
