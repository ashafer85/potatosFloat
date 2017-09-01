
class Api::SpotsController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def index
    @spots = Spot.all
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
    render :show
  end

  def create
    @spot = Spot.new(spot_params)
    @spot.host_id = current_user.id
    if @spot.save
      render :show
    else
      render json: [@spot.errors.full_messages], status: 422
    end
  end


  def search
    # Generate the pg_search train from spot_params
    @spots = Spot.all
    @spots = @spots.search_by_capacity(params[:capacity]) if params[:capacity]
    @spots = @spots.search_by_sleep_option(params[:sleep_option]) if params[:sleep_option]
    render :search
  end


  private
  def spot_params
    params.require(:spot).permit(:title, :description, :city, :capacity, :sleep_option, :lat, :lng)
      # :kid, :pet, :smoking, :wheelchair
  end

end
