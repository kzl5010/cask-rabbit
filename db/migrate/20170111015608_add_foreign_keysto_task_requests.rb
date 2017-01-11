class AddForeignKeystoTaskRequests < ActiveRecord::Migration
  def change
    add_reference :task_requests, :user, index: true, foreign_key: true
    add_reference :task_requests, :task, index: true, foreign_key: true
    add_reference :task_requests, :tasker, index: true, foreign_key: true
  end
end
