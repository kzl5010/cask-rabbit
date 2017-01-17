class Api::TasksController < ApplicationController
  before_action :require_logged_in

  def index
    tasks = Task.all
    @tasks = tasks.order(params[:name])
    render :index

  end

  def show
    @tasker = Task.find_by_id(params[:id])
  end


  #
  # private
  #
  # def task_params
  #   params.require(:task).permit(:title, :description)
  # end

end
