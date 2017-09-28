import { receiveSpots } from './spots_actions';
import * as APIUtil from '../util/search_api_util';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  };
};

export const updateFilter = (filter, value) => (dispatch) => {
  return(
    dispatch(changeFilter(filter, value))
  );
};

export const searchSpots = (filters) => (dispatch) => {
  return APIUtil.searchSpots(filters.capacity, filters.sleep_option)
    .then((spots) => dispatch(receiveSpots(spots)));
};
