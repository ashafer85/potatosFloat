class Spot < ApplicationRecord
  validates :title, :description, :capacity, presence: true
  validates :city, :lat, :lng, presence: true
  validates :sleep_arrangement, :roommate_situation, :public_trans, presence: true
  validates :kid, :pet, :smoking, :wheelchair, presence: true



end
