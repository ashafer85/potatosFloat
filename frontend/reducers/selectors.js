import values from 'lodash/values';

export const selectAllSpots = state => values(state.spots);
