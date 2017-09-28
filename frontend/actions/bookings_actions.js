import React from 'react';
import * as APIUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_HOST_BOOKINGS = 'RECEIVE_HOST_BOOKINGS';
export const RECEIVE_SURFER_BOOKINGS = 'RECEIVE_SURFER_BOOKINGS';

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
      (res) => {
        return dispatch(receiveBooking(res))
      },
      (res) => {
        return dispatch(receiveErrors(res.responseJSON))
      }
    );
};

export const requestHostBookings = () => (dispatch) => {
  return APIUtil.requestHostBookings()
    .then(
      (payload) => dispatch(receiveBookingsHost(payload)),
      (err) => dispatch(receiveErrors(err))
    );
};

export const requestSurferBookings = () => (dispatch) => {
  return APIUtil.requestSurferBookings()
    .then(
      (payload) => dispatch(receiveHostBookings(payload)),
      (err) => dispatch(receiveErrors(err))
    );
};

export const destroyBooking = (booking) => (dispatch) => {
  return APIUtil.destroyBooking(booking)
    .then(
      (res) => {
        return dispatch(receiveBooking(null))
      },
      (res) => {
        return dispatch(receiveErrors(res.responseJSON))
      }
    );
};
