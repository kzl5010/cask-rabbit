class CreateTaskRequests < ActiveRecord::Migration
  def change
    create_table :task_requests do |t|
      t.timestamps null: false
    end
  end
end
