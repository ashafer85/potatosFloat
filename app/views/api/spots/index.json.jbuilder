
@spots.each do |spot|
  json.set!(spot.id) do
    json.partial!('/api/spots/index_item', spot: spot)

    # another json request for host data (host has many spots)
  end
end
