# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170831184242) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "spot_id",    null: false
    t.integer  "surfer_id",  null: false
    t.date     "end_date",   null: false
    t.date     "start_date", null: false
    t.string   "status",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.string   "searchable_type"
    t.integer  "searchable_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree
  end

  create_table "spots", force: :cascade do |t|
    t.string   "title",                                        null: false
    t.text     "description",                                  null: false
    t.integer  "capacity",           default: 1,               null: false
    t.string   "city",               default: "New York City", null: false
    t.float    "lat",                default: 40.745269,       null: false
    t.float    "lng",                default: -73.994013,      null: false
    t.integer  "host_id",                                      null: false
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.string   "spot_image_url"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "sleep_option",       default: "Public Room",   null: false
    t.index ["host_id"], name: "index_spots_on_host_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                           null: false
    t.string   "password_digest",                                    null: false
    t.string   "session_token",                                      null: false
    t.datetime "created_at",                                         null: false
    t.datetime "updated_at",                                         null: false
    t.string   "status",          default: "Maybe Accepting Guests", null: false
    t.integer  "age",                                                null: false
    t.string   "gender",                                             null: false
  end

end
