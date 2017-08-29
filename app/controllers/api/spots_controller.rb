
class Api::SpotsController < ApplicationController

  def index
    @spots = Spot.all
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
    render :show
  end


  private
  def spot_params
    params.require(:spots).permit(
      :spot_image_url,
      :sleep_arrangement,
      :roommate_situation,
      :public_trans,
      :kid, :pet, :smoking, :wheelchair,
      :host_id
    )
  end

end
