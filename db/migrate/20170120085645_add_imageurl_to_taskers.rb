class AddImageurlToTaskers < ActiveRecord::Migration
  def change
    add_column :taskers, :imageurl, :string
  end
end
