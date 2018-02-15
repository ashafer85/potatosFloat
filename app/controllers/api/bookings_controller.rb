class Api::BookingsController < ApplicationController
  def create
    @booking = current_user.bookings.new(booking_params)
    @booking.status = "PENDING"
    if @booking.save
      render json: @booking
    else
      render json: @booking.errors.full_messages
    end
  end

  def new
    @booking = Booking.new
    render json: @booking
  end

  def update
    @booking = Booking.find(params['id'])

    if booking_params['status'] == 'APPROVED'
      @booking.approve!
    else
      @booking.deny!
    end
    if @booking.save!
      render json: @booking
    else
      render json: @booking.errors.full_messages
    end
  end

  def index
    if params[:user_id]
      @bookings = Booking.where(surfer_id: params[:user_id])
    elsif params[:spot_id]
      @bookings = Booking.where(spot_id: params[:spot_id])
    end
    render :index
  end


  private

  def current_booking
    @booking ||=
      Booking.includes(:spot).find(params[:id])
  end

  def current_spot
    current_booking.spot
  end

  def booking_params
    params.require(:booking).permit(:id, :spot_id, :surfer_id, :end_date, :start_date, :status)
  end
end
