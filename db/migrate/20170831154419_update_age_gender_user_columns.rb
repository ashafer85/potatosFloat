class UpdateAgeGenderUserColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :age
    add_column :users, :age, :integer, null: false
    remove_column :users, :gender
    add_column :users, :gender, :string, null: false
  end
end
