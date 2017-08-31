
import React from 'react';
import { connect } from 'react-redux';
import UserDrop from './user_drop';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};



export default connect(
  mapStateToProps,
  null
)(UserDrop);
