class AddDatesToTaskRequests < ActiveRecord::Migration
  def change
    add_column :task_requests, :date, :date
  end
end
