class RemoveLocationFromTasks < ActiveRecord::Migration
  def change
    remove_column :tasks, :location, :text
  end
end
