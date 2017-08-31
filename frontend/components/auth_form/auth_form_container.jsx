import React from 'react';
import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { signup, login, logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let bool;
  if (state.session.currentUser === null) {
    bool = false;
  } else {
    bool = true;
  }
  return {
    loggedIn: bool,
    errors: state.session.errors,
    formType: ownProps.location.pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/signup') {
    return {
      processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors()),
      login: (user) => dispatch(login(user))
    };
  } else if (ownProps.location.pathname === '/login') {
    return {
      processForm: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors()),
      login: (user) => dispatch(login(user))

    };
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthForm);
