import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MyBookings from './my_bookings';
import { requestHostBookings, requestSurferBookings, requestUpdateHostBooking, requestUpdateSurferBooking, clearErrors } from '../../actions/bookings_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    current_user: state.session.currentUser,
    hostBookings: state.bookings.hostBookings,
    surferBookings: state.bookings.surferBookings,
    currentBooking: state.bookings.surferBookings,
    errors: state.bookings.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // Host Bookings pulled based on Spot ID
  // Surfer Bookings pulled based on User ID
  return {
    requestHostBookings: (spot) => dispatch(requestHostBookings(spot)),
    requestSurferBookings: (current_user) => dispatch(requestSurferBookings(current_user)),
    requestUpdateHostBooking: (booking) => dispatch(requestUpdateHostBooking(booking)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyBookings));
