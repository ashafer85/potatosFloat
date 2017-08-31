
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import spotsReducer from './spots_reducer';
import bookingsReducer from './bookings_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  spots: spotsReducer,
  bookings: bookingsReducer,
});

export default rootReducer;
