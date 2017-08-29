
export const fetchAllSpots = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/spots'
  });
};

export const fetchOneSpot = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/spots/${id}`
  });
};
