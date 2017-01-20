class AddHoursToTaskRequests < ActiveRecord::Migration
  def change
    add_column :task_requests, :hours, :integer
  end
end
