import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BookingForm from './booking_form';
import { processForm, clearErrors } from '../../actions/bookings_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.bookings.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (booking) => dispatch(processForm(booking)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingForm));
