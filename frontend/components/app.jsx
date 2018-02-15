import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import AuthFormContainer from './auth_form/auth_form_container';
import SpotsIndexContainer from './spots/index_container';
import SpotShowContainer from './spots/show_container';
import SpotFormContainer from './spots/spot_form_container';
import SearchContainer from './search/search_container';
import MyBookingsContainer from './bookings/my_bookings_container';
// import LandingPage from './landing_page/landing_page';
import FooterBar from './footer/footer';
import { closeUserDropStatus } from '../actions/ui_actions';


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Making this a class component versus a functional compnent
//  enabled us to utilize the mapDispatchToProps function... which
//  allowed us to re-render the App with a different userDropStatus
//  --------  this.props.userDropStatus = false ----------

//  invoked the key on the props
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
      if (this.props.userDropStatus == true) {
      this.props.closeUserDropStatus();
    }
  }

  render(){
    return(
        <main>
          <NavBarContainer />

          <div onClick={this.handleClick} className='pfBody'>
            <Switch>
              <AuthRoute path='/signup' component={ AuthFormContainer } />
              <AuthRoute path='/login' component={ AuthFormContainer } />
            </Switch>
              <ProtectedRoute exact path='/spots/:id' component={ SpotShowContainer }/>
              <ProtectedRoute exact path='/spots_new' component={ SpotFormContainer }/>
              <ProtectedRoute exact path='/spots_search' component={ SearchContainer }/>
              <ProtectedRoute exact path='/bookings' component={ MyBookingsContainer }/>
              <Route path='/' component={ SpotsIndexContainer }/>
          </div>

        </main>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeUserDropStatus: () => ( dispatch(closeUserDropStatus()) )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
