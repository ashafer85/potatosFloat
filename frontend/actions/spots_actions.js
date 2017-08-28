import React from 'react';
import * as APIUtil from '../util/spots_api_util';

import { fetchAllSpots } from '../util/spots_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

export const receiveSpots = (payload) => {
  return {
    type: RECEIVE_SPOTS,
    payload
  };
};

export const receiveSpot = (payload) => {
  return {
    type: RECEIVE_SPOT,
    payload
  };
};

export const requestAllSpots = () => (dispatch) => {
  return APIUtil.fetchAllSpots()
    .then( (spots) => dispatch(receiveAllSpots(spots)));
}
