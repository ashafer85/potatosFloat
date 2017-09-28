@bookings.each do |booking|
  json.set!(spot.id) do
    json.partial!('/api/bookings/index_item', booking: booking)

    # another json request for host data (host has many spots)
  end
end
