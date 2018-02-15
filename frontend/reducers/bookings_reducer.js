import merge from 'lodash/merge';
import { RECEIVE_BOOKING, RECEIVE_HOST_BOOKINGS, RECEIVE_SURFER_BOOKINGS, RECEIVE_UPDATE_HOST_BOOKING, RECEIVE_UPDATE_SURFER_BOOKING, RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/bookings_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKING:
      const booking = action.booking;
      return merge({}, state, booking, { errors });

    case RECEIVE_HOST_BOOKINGS:
      const hostBookings = action.payload;
      return merge({}, state, { hostBookings }, { errors });

    case RECEIVE_SURFER_BOOKINGS:
      const surferBookings = action.payload;
      return merge({}, state, { surferBookings }, { errors });

    case RECEIVE_UPDATE_HOST_BOOKING:
      const updatedHostBooking = action.payload;
      return merge({}, state, { updatedHostBooking }, { errors });

    case RECEIVE_UPDATE_SURFER_BOOKING:
      const updatedSurferBooking = action.payload;
      return merge({}, state, { updatedSurferBooking }, { errors });

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
