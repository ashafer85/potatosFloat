import React from 'react';
import { connect } from 'react-redux';

const AuthErrors = ( { errors } = [] ) => {
  // map over errors array and create react elements
  debugger

  return <ul className>errors.map((el, idx) => <li key='idx'> { el } </li>)</ul>
}


const mapStateToProps = (state, ownProps) => {
  let bool;
  debugger
  if (state.session.currentUser === null) {
    bool = false;
  } else {
    bool = true;
  }
  debugger
  return {
    loggedIn: bool,
    errors: state.session.errors,
    formType: ownProps.location.pathname,
  };
};

export default connect(
  mapStateToProps,
  null
)(AuthErrors);
