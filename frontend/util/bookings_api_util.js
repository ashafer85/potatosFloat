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
    url: `/api/session/${booking.id}`,
  });
};

export const requestHostBookings = (host) => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${host.spot.id}`,
  });
};

export const requestSurferBookings = (surfer_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${host.spot.id}`,
  });
};
