# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# CREATEING

User.destroy_all
user1 = User.create!(
  'username' => 'Tiffany',
  'password' => 'gfgfgf',
  'gender' => 'Female',
  'age' => '24'
)
user2 = User.create!(
  'username' => 'Melissa',
  'password' => 'sissis',
  'gender' => 'Female',
  'age' => '27'
)
user3 = User.create!(
  'username' => 'Garrit',
  'password' => 'friend',
  'gender' => 'Male',
  'age' => '24'
)
user4 = User.create!(
  'username' => 'Guest',
  'password' => 'password',
  'gender' => 'Female',
  'age' => '29'
)

Spot.destroy_all
Spot.create!(
  'title' => 'Law Dorm',
  'description' => 'One bedroom apartment in East Village',
  'capacity' => 1,
  'city' => 'New York City',
  'lat' => 40.727837,
  'lng' => -73.995820,
  'sleep_option' => 'Shared Room',
  'sleep_arrangement' => 'One couch in the living room',
  'public_trans' => 'three blocks away from the green 6 and four blocks from the orange B D F M',
  # 'kid' => false,
  # 'pet' => false,
  # 'smoking' => false,
  # 'wheelchair' => false,
  'host_id' => user1.id,
  'spot_image_url' => 'couch01.jpg',
)
Spot.create!('title' => 'So Many Cacti',
  'description' => 'Two bedroom apartment near Gramercy Park',
  'capacity' => 2,
  'city' => 'New York City',
  'lat' => 40.737322,
  'lng' => -73.983413,
  'sleep_option' => 'Public Room',
  'sleep_arrangement' => 'Large L couch in living room',
  'roommate_situation' => 'One roommate in other bedroom',
  'public_trans' => 'three blocks away from the green 4 & 6 and seven street blocks from silver L',
  'host_id' => user2.id,
)
Spot.create!(
  'title' => 'See the Water',
  'description' => 'Four bedroom in Mid-town East, 23rd floor with balcony and view of East River',
  'capacity' => 1,
  'city' => 'New York City',
  'lat' => 40.743494,
  'lng' => -73.972652,
  'sleep_option' => 'Private Room',
  'sleep_arrangement' => 'Large L couch in the living room',
  'roommate_situation' => 'Three other great roommates, each with separate room',
  'public_trans' => 'Twelve-minute walk to the green 6 & 4',
  'host_id' => user3.id,
)
Spot.create!(
  'title' => 'Guest Spot',
  'description' => 'Previously an office space, fllor to ceiling windows allows for great views of city',
  'capacity' => 1,
  'city' => 'New York City',
  'lat' => 40.745200,
  'lng' => -73.994082,
  'sleep_arrangement' => 'Couch in the former corner office',
  'roommate_situation' => 'Multiple roommates come a go quietly',
  'public_trans' => 'Two blocks from the red 1 2 and grean 5',
  'host_id' => user4.id,
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
