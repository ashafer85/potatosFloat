# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# CREATEING
  Spot.destroy_all

  Spot.create!(
    'title' => '001s Spot',
    'description' => 'One bedroom apartment in East Village',
    'capacity' => 1,
    'city' => 'New York City',
    'lat' => 40.727837,
    'lng' => -73.995820,
    'sleep_arrangement' => 'One couch in the living room',
    'public_trans' => 'three blocks away from the green 6 and four blocks from the orange B D F M',
    # 'kid' => false,
    # 'pet' => false,
    # 'smoking' => false,
    # 'wheelchair' => false,
    'host_id' => 44
  )

  Spot.create!('title' => '002s Spot',
    'description' => 'Two bedroom apartment near Gramercy Park',
    'capacity' => 2,

    'city' => 'New York City',
    'lat' => 40.737322,
    'lng' => -73.983413,

    'sleep_arrangement' => 'Two couches in living room with full-size pullout capablility',
    'roommate_situation' => 'One roommate in other bedroom',
    'public_trans' => 'three blocks away from the green 4 & 6 and seven street blocks from silver L',

    # 'kid' => false,
    # 'pet' => false,
    # 'smoking' => false,
    # 'wheelchair' => false,

    'host_id' => 45,
  )
  Spot.create!(
    'title' => '003s Spot',
    'description' => 'Four bedroom in Mid-town East',
    'capacity' => 1,


    'city' => 'New York City',
    'lat' => 40.743494,
    'lng' => -73.972652,

    'sleep_arrangement' => 'Large L couch in the living room',
    'roommate_situation' => 'Three other great roommates, each with separate room',
    'public_trans' => 'Twelve-minute walk to the green 6 & 4',

    # 'kid' => false,
    # 'pet' => false,
    # 'smoking' => false,
    # 'wheelchair' => false,

    'host_id' => 46,
  )



#   ActiveRecord::Base.transaction do

#   spots = {
#     '1' => {
#       'title' => '001s Spot',
#       'desription' => 'One bedroom apartment in East Village',
#       'capacity' => 1,
#
#
#       'city' => 'New York City',
#       'lat' => 40.727837,
#       'lng' => -73.995820,
#
#       'sleep_Arrangement' => 'One couch in the living room',
#       'puclic_trans' => 'three blocks away from the green 6 and four blocks from the orange B D F M',
#
#       'host_id' => 44,
#     },
#     '2' => {
#       'title' => '002s Spot',
#       'desription' => 'Two bedroom apartment near Gramercy Park',
#       'capacity' => 2,
#
#
#       'city' => 'New York City',
#       'lat' => 40.737322,
#       'lng' => -73.983413,
#
#       'sleep_Arrangement' => 'Two couches in living room with full-size pullout capablility',
#       'roommate_situation' => 'One roommate in other bedroom',
#       'public_trans' => 'three blocks away from the green 4 & 6 and seven street blocks from silver L',
#
#       'host_id' => 45,
#     },
#     '3' => {
#       'title' => '003s Spot',
#       'desription' => 'Four bedroom in Mid-town East',
#       'capacity' => 1,
#
#
#       'city' => 'New York City',
#       'lat' => 40.743494,
#       'lng' => -73.972652,
#
#       'sleep_Arrangement' => 'Large L couch in the living room',
#       'roommate_situation' => 'Three other great roommates, each with separate room',
#       'public_trans' => 'Twelve-minute walk to the green 6 & 4',
#
#       'host_id' => 46,
#     }
#   }
# end
