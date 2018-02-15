@bookings.each do |booking|
  # if booking.surfer_id == current_user.id do
    json.set!(booking.id) do
      json.partial!('/api/bookings/index_item', booking: booking)
    end
  # end
  # another json request for host data (host has many spots)
end
