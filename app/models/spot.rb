class Spot < ApplicationRecord
  include PgSearch
  multisearchable :against => [:capacity, :sleep_option]
  pg_search_scope :search_by_capacity, :against => [:capacity]
  pg_search_scope :search_by_sleep_option, :against => [:sleep_option]
  # pg_search_scope :search_by_kid, :against => [:kid]
  # pg_search_scope :search_by_pet, :against => [:pet]
  # pg_search_scope :search_by_smoking, :against => [:smoking]
  # pg_search_scope :search_by_wheelchair, :against => [:wheelchair]


  validates :title, :description, :capacity, presence: true
  validates :city, :lat, :lng, presence: true
  validates :host_id, presence: true, uniqueness: true
  validates :sleep_option, presence: true, inclusion: ['Private Room', 'Public Room', 'Shared Room', 'Shared Bed']
  # validates :kid, :pet, :smoking, :wheelchair, default: false, inclusion: [true, false]

  # has_attached_file :image, default_url: "favicon_foggy.jpg"
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :host,
    class_name: :User,
    primary_key: :id,
    foreign_key: :host_id
  has_many :bookings,
    class_name: :Booking,
    primary_key: :id,
    foreign_key: :spot_id
  has_many :surfers_requesting,
    through: :bookings,
    source: :surfer
end
