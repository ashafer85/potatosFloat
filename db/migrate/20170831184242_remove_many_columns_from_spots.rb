class RemoveManyColumnsFromSpots < ActiveRecord::Migration[5.0]
  def change
    remove_column :spots, :sleep_arrangement
    remove_column :spots, :roommate_situation
    remove_column :spots, :public_trans
    remove_column :spots, :kid
    remove_column :spots, :pet
    remove_column :spots, :smoking
    remove_column :spots, :wheelchair
  end
end
