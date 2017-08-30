class AddUniqueValidationToSpotHostId < ActiveRecord::Migration[5.0]
  def change
    add_index :spots, [:host_id], :unique => true
  end
end
