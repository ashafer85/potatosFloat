
@spots.each do |spot|
  json.set!(spot.id) do
    json.partial!('/api/spots/index_item', spot: spot)
  end
end
