class Booking < ApplicationRecord
  STATUS_STATES = %w(APPROVED DENIED PENDING).freeze


  validates :spot_id, :surfer_id, presence: true
  validates :end_date, :start_date, presence: true
  validates :status, inclusion: STATUS_STATES

  belongs_to :spot,
    class_name: :Spot,
    primary_key: :id,
    foreign_key: :spot_id

  belongs_to :surfer,
    class_name: :User,
    primary_key: :id,
    foreign_key: :surfer_id

  has_one :host,
    through: :spot,
    source: :host

  after_initialize :assign_pending


  def approve!
    raise 'not pending' unless self.status == 'PENDING'
    transaction do
      self.status = 'APPROVED'
      self.save!

      # when a request is approved, it inherently DENIES any overlapping_pending_request
      overlapping_pending_requests.update_all(status: 'DENIED')
    end
  end

  def approved?
    self.status == 'APPROVED'
  end

  def denied?
    self.status == 'DENIED'
  end

  def deny!
    self.status = 'DENIED'
    self.save!
  end

  private
  def assign_pending
    self.status = 'PENDING'
  end

  def overlapping_requests
    Booking
      .where.not(id: self.id)
      .where(spot_id: spot_id)
      .where.not('start_date > :end_date OR end_date < :start_date',
                 start_date: start_date, end_date: end_date)
  end

  def overlapping_approved_requests
    overlapping_bookings.where('status = \'APPROVED\'')
  end

  def overlapping_pending_requests
    overlapping_bookings.where('status = \'PENDING\'')
  end

  def start_must_come_before_end
    return if start_date < end_date
    errors[:start_date] << 'must come before end date'
    errors[:end_date] << 'must come after start date'
  end

  def does_not_overlap_approved_booking
    # A denied request doesn't need to be checked. A pending request
    # should be checked; users shouldn't be able to make requests for
    # periods during which a cat has already been spoken for.
    return if self.denied?

    unless overlapping_approved_bookings.empty?
      errors[:base] <<
        'Booking conflicts with existing approved booking'
    end
  end

end
