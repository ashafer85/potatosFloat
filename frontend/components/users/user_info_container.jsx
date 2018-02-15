import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UerInfo from './user_info';
import { requestUserInfo } from '../../actions/bookings_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // Host Bookings pulled based on Spot ID
  // Surfer Bookings pulled based on User ID
  return {
    requestHostBookings: (spot) => dispatch(requestHostBookings(spot)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyBookings));
