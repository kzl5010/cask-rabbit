class Api::TaskersController < ApplicationController
  def index

    render: index

  end 



  private

  def tasker_params
    params.require(:tasker).permit(:name, :email, :zip_code, :rating)
  end

end
