import merge from 'lodash/merge';
import { RECEIVE_BOOKING, RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/bookings_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKING:
      const booking = action.booking;
      return merge({}, state, { booking }, { errors })
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { booking }, { errors });
    case CLEAR_ERRORS:
      const newState = merge({},state)
      newState.errors = [];
      return newState;
    default:
      return state;
  };
};

export default bookingsReducer;
