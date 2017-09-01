import React from 'react';
import * as APIUtil from '../util/spots_api_util';

import { fetchAllSpots, fetchSpots, createSpot } from '../util/spots_api_util';

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_ONE_SPOT = 'RECEIVE_ONE_SPOT';
export const RECEIVE_SPOT_ERROR = 'RECEIVE_SPOT_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';



export const receiveAllSpots = (payload) => {
  return {
    type: RECEIVE_ALL_SPOTS,
    spots: payload
  };
};

export const receiveSpots = (payload) => {
  return {
    type: RECEIVE_SPOTS,
    spots: payload
  };
};

export const receiveOneSpot = (spot) => {
  return {
    type: RECEIVE_ONE_SPOT,
    spot
  };
};

export const receiveSpotError = (err) => {
  return {
    type: RECEIVE_SPOT_ERROR,
    err
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const requestAllSpots = () => (dispatch) => {
  // dispatch(startLoadingAllSpots);
  return APIUtil.fetchAllSpots()
    .then(
      (payload) => dispatch(receiveAllSpots(payload))
  );
};

export const requestSpots = (ids) => (dispatch) => {
  // dispatch(startLoadingAllSpots);
  return APIUtil.fetchSpots(ids).then(
      (payload) => dispatch(receiveSpots(payload)),
      (err) => dispatch(receiveSpotError(err))
  );
};

export const requestOneSpot = (id) => (dispatch) => {
  // dispatch(startLoadingAllSpots);
  return APIUtil.fetchOneSpot(id).then(
    (payload) => dispatch(receiveOneSpot(payload)),
    (err) => dispatch(receiveSpotError(err))
  );
};

export const processForm = (spot) => (dispatch) => {
  return APIUtil.createSpot(spot)
    .then(
      (res) => {
        return dispatch(receiveOneSpot(res))
      },
      (res) => {
        return dispatch(receiveSpotError(res.responseJSON))
      }
    );
};

// export const startLoadingAllSpots = () => {
//   return {
//     type: START_LOADING_ALL_SPOTS
//   };
// };
// export const startLoadingSpot = () => {
//   return {
//     type: START_LOADING_SINGLE_SPOT
//   };
// };
