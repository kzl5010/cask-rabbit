class CreateTaskers < ActiveRecord::Migration
  def change
    create_table :taskers do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :zip_code, null: false
      t.integer :rating

      t.timestamps null: false
    end
    add_index :taskers, :email, unique: true
  end
end
