class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :capacity, null: false, default: 1

      t.string :city, null: false, default: 'New York City'
      t.float :lat, null: false, default: 40.745269
      t.float :lng, null: false, default: -73.994013

      t.text :sleep_arrangement, default: 'one couch'
      t.text :roommate_situation, default: 'none'
      t.text :public_trans, default: 'its new york...'

      t.boolean :kid, null: false, default: false
      t.boolean :pet, null: false, default: false
      t.boolean :smoking, null: false, default: false
      t.boolean :wheelchair, null: false, default: false

      t.integer :host_id, null: false

      t.timestamps
    end
  end
end
