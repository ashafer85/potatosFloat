import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import AuthFormContainer from './auth_form/auth_form_container';
import SpotsIndexContainer from './spots/index_container';
import SpotShowContainer from './spots/show_container';
import SpotFormContainer from './spots/spot_form_container';
import SearchContainer from './search/search_container';
// import LandingPage from './landing_page/landing_page';
import FooterBar from './footer/footer';

const App = () => {
  return(
      <main>
        <NavBarContainer />

        <div className='pfBody'>
          <Switch>
            <AuthRoute path='/signup' component={ AuthFormContainer } />
            <AuthRoute path='/login' component={ AuthFormContainer } />
          </Switch>
            <ProtectedRoute exact path='/spots/:id' component={ SpotShowContainer }/>
            <ProtectedRoute exact path='/spots_new' component={ SpotFormContainer }/>
            <ProtectedRoute exact path='/spots_search' component={ SearchContainer }/>
            <Route path='/' component={ SpotsIndexContainer }/>
        </div>
      </main>
  );
};

export default App;
