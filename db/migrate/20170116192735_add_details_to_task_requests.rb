class AddDetailsToTaskRequests < ActiveRecord::Migration
  def change
    add_column :task_requests, :details, :text
  end
end
