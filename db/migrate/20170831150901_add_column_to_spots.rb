class AddColumnToSpots < ActiveRecord::Migration[5.0]
  def change
    add_column :spots, :sleep_option, :string, presence: true, default: 'Public Room', inclusion: ['Private Room', 'Public Room', 'Shared Room', 'Shared Bed']
  end
end
