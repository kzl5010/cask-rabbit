class AddAddressToTaskRequests < ActiveRecord::Migration
  def change
    add_column :task_requests, :address, :string
  end
end
