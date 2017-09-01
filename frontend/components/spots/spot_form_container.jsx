import React from 'react';
import { connect } from 'react-redux';
import SpotForm from './spot_form';
import { processForm, clearErrors } from '../../actions/spots_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.spots.errors || []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (spot) => dispatch(processForm(spot)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotForm);
