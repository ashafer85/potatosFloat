import React from 'react';
import { connect } from 'react-redux';
import { requestHostBookings, requestSurferBookings, clearErrors } from '../../actions/bookings_actions';

const mapStateToProps = (state, ownProps) => {

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // currentUser below should instead pertain to bookings
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return {
    hostBookings: state.session.currentUser,

    errors: state.bookings.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestHostBookings: () => dispatch(requestHostBookings()),
    requestSurferBookings: () => dispatch(requestSurferBookings()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingForm);
