import { merge } from 'lodash';
import {
  RECEIVE_SPOTS,
  RECEIVE_SPOT
} from '../actions/spots_actions';

export const spotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SPOTS:
      // const spots = action.payload;
      return merge( {}, state, action.spots );
    case RECEIVE_SPOT:
      const spot = action.payload;
      // spot.review_ids = action.payload.reviews.map(review => review.id);
      return merge({}, state, { [spot.id]: spot });
    default:
      return state;
  };
};
