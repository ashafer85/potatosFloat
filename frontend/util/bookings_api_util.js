export const createBooking = (booking) => {
  debugger
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
