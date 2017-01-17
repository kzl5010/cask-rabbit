class Api::TaskersController < ApplicationController
  before_action :require_logged_in

  def index
    taskers = Tasker.all
    @taskers = taskers.order(params[:name])
    render :index

  end

  def show
    @tasker = Tasker.find_by_id(params[:id])
  end



  # private
  #
  # def tasker_params
  #   params.require(:tasker).permit(:name, :email, :zip_code, :rating)
  # end

end
