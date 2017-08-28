class Spot < ApplicationRecord
  validates :title, :description, :capacity, presence: true
  validates :city, :lat, :lng, presence: true

  # validates :sleep_arrangement, presence: true
  # , default: 'One Couch'
  # validates :roommate_situation, presence: true
  # , default: 'none'
  # validates :public_trans, presence: true
  # , default: 'its New York...'
  validates :kid, :pet, :smoking, :wheelchair, default: false, inclusion: [true, false]
  validates :host_id, presence: true

  belongs_to :host,
    class_name: :User,
    primary_key: :id,
    foreign_key: :host_id

end
