import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import AuthFormContainer from './auth_form/auth_form_container';
import SpotsIndexContainer from './spots/index_container';
import SpotShowContainer from './spots/show_container';
// import LandingPage from './landing_page/landing_page';
import FooterBar from './footer/footer';

const App = () => {
  return(
      <main>
        <NavBarContainer />

        <div className='pfBody'>
          <Switch>
            <Route path='/signup' component={ AuthFormContainer } />
            <Route path='/login' component={ AuthFormContainer } />
          </Switch>
          <Switch>
            <Route path='/spots/:id' component={ SpotShowContainer }/>
            <Route path='/spots' component={ SpotsIndexContainer }/>
          </Switch>
        </div>

        <FooterBar />
      </main>
  );
};

export default App;
