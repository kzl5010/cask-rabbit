class Api::TaskRequestsController < ApplicationController
  def index
    @task_requests = TaskRequest.all
    if current_user
      @task_requests = @task_requests.where(user_id: current_user.id)
    end

    render :index
  end

  def show
    @task_request = TaskRequest.find(params[:id])
  end

  def create
    @task_request = TaskRequest.new(task_request_params)
    @task_request.user_id = current_user.id

    if @task_request.save
      render :show
    else
      render json: @task_request.errors.full_messages, status: 422
    end
  end

  def update
    @task_request = TaskRequest.find(params[:id])
    render json: { message: "No task request found", status: 404 } if @task_request.nil?
    if @task_request.update(task_request_params)
      render "api/users/#{current_user.id}/task_requests/show"
    else
      render json: @task_request.errors.full_messages, status: 422
    end 
  end

  def destroy
    task = TaskRequest.find(params[:id])
    if task
      task.destroy
    else
      render json: { message: "Invalid request", status: 404}
    end
  end

  def task_request_params
    params.require(:task_request).permit(:task_id, :tasker_id)
  end

end
