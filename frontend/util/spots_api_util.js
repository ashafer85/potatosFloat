
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

export const createSpot = (spot) => {
  return $.ajax({
    method: 'POST',
    url: '/api/spots',
    data: { spot }
  });
};
