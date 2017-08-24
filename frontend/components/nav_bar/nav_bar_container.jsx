
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { switchUserDropStatus} from '../../actions/ui_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    userDropStatus: state.ui.userDropStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    switchUserDropStatus: (oldDropStatus) => dispatch(switchUserDropStatus(oldDropStatus))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
