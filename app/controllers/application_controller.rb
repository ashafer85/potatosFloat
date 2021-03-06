class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :login, :logout

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_token!
    @current_user = user
  end

  def logout
    current_user.try(:reset_token!)
    session[:session_token] = nil
  end

  def ensure_logged_in
    redirect unless logged_in?
  end

end
