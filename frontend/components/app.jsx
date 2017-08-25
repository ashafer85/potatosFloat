import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import AuthFormContainer from './auth_form/auth_form_container';
import LandingPage from './landing_page/landing_page';
import FooterBar from './footer/footer';

const App = () => {
  return(
      <main>
        <header>
          <NavBarContainer />
        </header>
        <body>
          <LandingPage />
          <Switch>
            <Route path='/signup' component={ AuthFormContainer } />
            <Route path='/login' component={ AuthFormContainer } />
          </Switch>
        </body>
        <footer>
          <FooterBar />
        </footer>
      </main>
  );
};

export default App;
