class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login(@user)
      render json: user
    else
      render json: ['Invalid Credentials, try again'], status: 422
    end
  end

  def destroy
    if current_user
      logout()
      render json: []
    else
      render json: ['No One logged in!!']
    end
  end

  private
  def user_params
  params.require(:user).permit(:username, :password)
  end

end
