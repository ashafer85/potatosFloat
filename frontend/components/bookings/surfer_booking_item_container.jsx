import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SurferBookingItem from './surfer_booking_item';
import { requestUpdateSurferBooking, clearErrors } from '../../actions/bookings_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentBooking: state.bookings.surferBookings[ownProps.findMe],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateSurferBooking: (booking) => dispatch(requestUpdateSurferBooking(booking)),
    deleteSurferBooking: (booking) => dispatch(requestDeleteSurferBooking(booking)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SurferBookingItem));
