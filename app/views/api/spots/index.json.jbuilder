
@spots.each do |spot|
  json.set!(spot.id) do
    json.partial!('/api/spots/spot_index_item', spot: spot)
  end
end
