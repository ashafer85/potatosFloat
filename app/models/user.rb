class User < ApplicationRecord
  # include PgSearch
  # multisearchable :against => [:age, :gender]

  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :gender, inclusion: ['Female', 'Male', 'Non-Binary']
  validates :age, numericality: { greater_than_or_equal_to: 18, only_integer: true }

  has_one :spot,
    class_name: :Spot,
    primary_key: :id,
    foreign_key: :host_id

  has_many :bookings, # user.bookings represent bookings made as a surfer
    class_name: :Booking,
    primary_key: :id,
    foreign_key: :surfer_id

  has_many :bookings_spots, # represents spots for which user(surfer) has made a booking
    through: :bookings,
    source: :spot

  has_many :spot_bookings, # represents user's spots with pending/approved/denied bookings
    through: :spots,
    source: :bookings


  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_token!
    self.session_token = self.class.generate_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_token
  end


end
