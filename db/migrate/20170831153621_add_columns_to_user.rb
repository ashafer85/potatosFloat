class AddColumnsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :status, :string, null: false, default: 'Maybe Accepting Guests'
  end
end
