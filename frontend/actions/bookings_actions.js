import React from 'react';
import * as APIUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_HOST_BOOKINGS = 'RECEIVE_HOST_BOOKINGS';
export const RECEIVE_SURFER_BOOKINGS = 'RECEIVE_SURFER_BOOKINGS';
export const RECEIVE_UPDATE_HOST_BOOKING = 'RECEIVE_UPDATE_HOST_BOOKING';
export const RECEIVE_UPDATE_SURFER_BOOKING = 'RECEIVE_UPDATE_SURFER_BOOKING';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveBooking = (booking) => {
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

export const receiveHostBookings = (payload) => {
  return {
    type: RECEIVE_HOST_BOOKINGS,
    payload
  }
};

export const receiveSurferBookings = (payload) => {
  return {
    type: RECEIVE_SURFER_BOOKINGS,
    payload
  };
};

export const receiveUpdateHostBooking = (payload) => {
  return {
    type: RECEIVE_UPDATE_HOST_BOOKING,
    payload
  }
}

export const receiveUpdateSurferBooking = (payload) => {
  return {
    type: RECEIVE_UPDATE_SURFER_BOOKING,
    payload
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const processForm = (booking) => (dispatch) => {
  return APIUtil.createBooking(booking)
    .then(
      (res) => dispatch(receiveBooking(res)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const requestHostBookings = (spot) => (dispatch) => {
  return APIUtil.requestHostBookings(spot)
    .then(
      (payload) => dispatch(receiveHostBookings(payload)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const requestSurferBookings = (current_user) => (dispatch) => {
  return APIUtil.requestSurferBookings(current_user)
    .then(
      (payload) => dispatch(receiveSurferBookings(payload)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const requestUpdateHostBooking = (booking) => (dispatch) => {
  return APIUtil.requestUpdateHostBooking(booking)
    .then(
      (payload) => dispatch(receiveUpdateHostBooking(payload)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const requestUpdateSurferBooking = (booking) => (dispatch) => {
  return APIUtil.requestUpdateSurferBooking(booking)
    .then(
      (payload) => dispatch(receiveUpdateSurferBooking(payload)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const destroyBooking = (booking) => (dispatch) => {
  return APIUtil.destroyBooking(booking)
    .then(
      (res) => dispatch(receiveBooking(null)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};
