
import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spots_actions';

export const spotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SPOTS:
      const spots = action.spots;
      return merge( {}, state, { spots } );
    case RECEIVE_SPOT:
      const spot = action.spots;
    default:
      return state;
  };
};
