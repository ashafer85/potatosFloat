class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :surfer_id, null: false
      t.date :end_date, null: false
      t.date :start_date, null: false
      t.string :status, null: false

      t.timestamps
    end
  end
end
