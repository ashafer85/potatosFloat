import merge from 'lodash/merge';
import {
  RECEIVE_ALL_SPOTS,
  RECEIVE_ONE_SPOT
} from '../actions/spots_actions';

export const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_SPOTS:
      // const spots = action.payload;
      return merge( {}, state, action.spots );

    case RECEIVE_ONE_SPOT:
      return merge( {}, state, action.spots);

    //   // spot.review_ids = action.payload.reviews.map(review => review.id);
    //   return merge({}, state, { [spot.id]: spot });
    default:
      return state;
  };
};
