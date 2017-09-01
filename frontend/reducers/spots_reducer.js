import merge from 'lodash/merge';
import {
  RECEIVE_ALL_SPOTS,
  RECEIVE_SPOTS,
  RECEIVE_ONE_SPOT,
  RECEIVE_SPOT_ERROR,
  CLEAR_ERRORS
} from '../actions/spots_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_SPOTS:
      return merge( {}, state, action.spots );
    case RECEIVE_SPOTS:
      return merge( {}, state, action.spots );
    case RECEIVE_ONE_SPOT:
      return merge( {}, state, {[action.spot.id]: action.spot});
    case RECEIVE_SPOT_ERROR:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      const newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  };
};

export default spotsReducer;
