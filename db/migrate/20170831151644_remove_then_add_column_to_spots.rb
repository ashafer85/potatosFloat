class RemoveThenAddColumnToSpots < ActiveRecord::Migration[5.0]
  def change
    remove_column :spots, :sleep_option
    add_column :spots, :sleep_option, :string, null: false, default: 'Public Room'
  end
end
