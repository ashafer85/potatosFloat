class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Credentials, please try again :)'], status: 422
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
