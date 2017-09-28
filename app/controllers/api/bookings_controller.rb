class Api::BookingsController < ApplicationController
  def approve
    current_booking.approve!
    render json: current_booking
  end

  def create
    @booking = current_user.bookings.new(booking_params)
    if @booking.save
      render json: @booking
    else
      render json: @booking.errors.full_messages
    end
  end

  def deny
    current_booking.deny!
  end

  def new
    @booking = Booking.new
    render json: @booking
  end

  def index
    @bookings = Booking.all
    render :index
  end

  # def create
  #   @spot = Spot.new(spot_params)
  #   @spot.host_id = current_user.id
  #   if @spot.save
  #     render :show
  #   else
  #     render json: [@spot.errors.full_messages], status: 422
  #   end
  # end

  private

  def current_booking
    @booking ||=
      Booking.includes(:spot).find(params[:id])
  end

  def current_spot
    current_booking.spot
  end

  def booking_params
    params.require(:booking).permit(:spot_id, :surfer_id, :end_date, :start_date, :status)
  end
end
