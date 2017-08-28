import React from 'react';

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
