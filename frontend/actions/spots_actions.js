import React from 'react';
import * as APIUtil from '../util/spots_api_util';

import { fetchAllSpots } from '../util/spots_api_util';

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const START_LOADING_ALL_SPOTS = 'START_LOADING_ALL_SPOTS';
export const RECEIVE_ONE_SPOT = 'RECEIVE_ONE_SPOT';
export const START_LOADING_SINGLE_SPOT = 'START_LOADING_SINGLE_SPOT';


export const receiveAllSpots = (payload) => {
  return {
    type: RECEIVE_ALL_SPOTS,
    spots: payload
  };
};

export const receiveOneSpot = (spot) => {
  return {
    type: RECEIVE_ONE_SPOT,
    spot
  };
};

export const requestAllSpots = () => (dispatch) => {
  // dispatch(startLoadingAllSpots);
  return APIUtil.fetchAllSpots()
    .then( (payload) => dispatch(receiveAllSpots(payload)));
};

export const requestOneSpot = () => (dispatch) => {
  // dispatch(startLoadingAllSpots);
  return APIUtil.fetchOneSpot().then(
    (payload) => dispatch(receiveOneSpot(payload)),
    (err) => dispatch(receiveSpotError(err))
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
