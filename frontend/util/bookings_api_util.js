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
