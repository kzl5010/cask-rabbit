class AddImageurlToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :imageurl, :string
  end
end
