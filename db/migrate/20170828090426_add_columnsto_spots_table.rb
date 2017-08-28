class AddColumnstoSpotsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :spots, :spot_image_url, :string
  end
end
