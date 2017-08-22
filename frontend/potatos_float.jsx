import React from 'react';
import ReactDOM from 'react-dom';

// import Root from './components/root';
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  // const store
  // window.getState = store.getState;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1> Welcome to potatosFloat </h1>, root);

});
