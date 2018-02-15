export const createBooking = (booking) => {
  return $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: { booking },
  });
};

export const destroyBooking = (booking) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${booking.id}`,
  });
};

export const requestHostBookings = (spot) => {
  return $.ajax({
    method: 'GET',
    url: `api/spots/${spot.id}/bookings`,
  });
};

export const requestSurferBookings = (surfer) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${surfer.spot.host_id}/bookings`,
  });
};

// UpdateHost SHOULD DO DIFFERENT THINGS than UpdateSurfer ??????

export const requestUpdateHostBooking = (booking) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: { booking },
  });
};
export const requestUpdateSurferBooking = (booking) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: { booking },
  });
};
