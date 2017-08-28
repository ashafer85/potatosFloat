import values from 'lodash/values';

export const selectAllSpots = (state) => {
  return(
    values(state.spots)
  );
};
