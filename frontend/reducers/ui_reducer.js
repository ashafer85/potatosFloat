// responsible for saying whether the dropdown should be showing or not
// should return an object with key of userDropStatus... with value of either true or false


import { SWITCH_USER_DROP_STATUS, CLOSE_USER_DROP_STATUS, switchUserDropStatus } from '../actions/ui_actions';
import { merge } from 'lodash';

const _defaultUI = {
  userDropStatus: false
};

const uiReducer = ( state = _defaultUI, action) => {
  Object.freeze(state);
  let userDropStatus;
  switch(action.type) {

    case SWITCH_USER_DROP_STATUS:
      userDropStatus = action.userDropStatus;
      return merge({}, state, { userDropStatus });
    case CLOSE_USER_DROP_STATUS:
      userDropStatus = action.userDropStatus;
      return merge({}, state, {userDropStatus});
    default:
      return {
        userDropStatus: false
      };
  };
};

export default uiReducer;
