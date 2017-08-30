class BookingsController < ApplicationController
  def approve
    current_booking.approve!
    render json: current_booking
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render json: @booking.spot
    else
      flash.now[:errors] = @booking.errors.full_messages
    end
  end

  def deny
    current_booking.deny!
  end

  def new
    @booking = Booking.new
    render json: @booking
  end

  private

  def current_booking
    @booking ||=
      Booking.includes(:spot).find(params[:id])
  end

  def current_spot
    current_bookingt.spot
  end

  def booking_params
    params.require(:booking).permit(:spot_id, :surfer_id, :end_date, :start_date, :status)
  end
end
