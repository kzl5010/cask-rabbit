class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :location, null: false

      t.timestamps null: false
    end

    add_index :tasks, :title
  end
end
