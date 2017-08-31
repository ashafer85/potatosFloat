// responsible for saying whether the dropdown should be showing or not
// should return an object with key of userDropStatus... with value of either true or false


import { SWITCH_USER_DROP_STATUS, switchUserDropStatus } from '../actions/ui_actions';
import { merge } from 'lodash';

const _defaultUI = {
  userDropStatus: false
};

const uiReducer = ( state = _defaultUI, action) => {
  Object.freeze(state);
  switch(action.type) {

    case SWITCH_USER_DROP_STATUS:
      const userDropStatus = action.userDropStatus;
      return merge({}, state, { userDropStatus });

    default:
      return state;
  };
};

export default uiReducer;
