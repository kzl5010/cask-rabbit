class AddPriceToTaskers < ActiveRecord::Migration
  def change
    add_column :taskers, :price, :integer
  end
end
