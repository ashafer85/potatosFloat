class Spot < ApplicationRecord
  # include PgSearch
  # multisearchable :against => [:capacity, :kid, :pet, :smoking, :wheelchair]
  # 
  # pg_search_scope :search_capacity, :against => [:capacity]
  # pg_search_scope :search_kid, :against => [:kid]
  # pg_search_scope :search_pet, :against => [:pet]
  # pg_search_scope :search_smoking, :against => [:smoking]
  # pg_search_scope :search_wheelchair, :against => [:wheelchair]


  validates :title, :description, :capacity, presence: true
  validates :city, :lat, :lng, presence: true
  # validates :sleep_arrangement, presence: true, default: 'One Couch'
  # validates :roommate_situation, presence: true, default: 'none'
  # validates :public_trans, presence: true, default: 'its New York...'
  validates :sleep_option, presence: true, inclusion: ['Private Room', 'Public Room', 'Shared Room', 'Shared Bed']
  validates :kid, :pet, :smoking, :wheelchair, default: false, inclusion: [true, false]
  validates :host_id, presence: true, uniqueness: true

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
