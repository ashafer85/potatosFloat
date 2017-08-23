import React from 'react';
import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user)
    .then(
      (res) => {
        return dispatch(receiveCurrentUser(res))
      },
      (res) => {
        return dispatch(receiveErrors(res))
      }
    );
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then(
      (res) => {
        return dispatch(receiveCurrentUser(res))
      },
      (res) => {
        return dispatch(receiveErrors(res))
      }
    );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then((res) => {
      return dispatch(receiveCurrentUser(null))
    });
};
