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

ActiveRecord::Schema.define(version: 20170825211340) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "spots", force: :cascade do |t|
    t.string   "title",                                          null: false
    t.text     "description",                                    null: false
    t.integer  "capacity",           default: 1,                 null: false
    t.string   "city",               default: "New York City",   null: false
    t.float    "lat",                default: 40.745269,         null: false
    t.float    "lng",                default: -73.994013,        null: false
    t.text     "sleep_arrangement",  default: "one couch"
    t.text     "roommate_situation", default: "none"
    t.text     "public_trans",       default: "its new york..."
    t.boolean  "kid",                default: false,             null: false
    t.boolean  "pet",                default: false,             null: false
    t.boolean  "smoking",            default: false,             null: false
    t.boolean  "wheelchair",         default: false,             null: false
    t.integer  "host_id",                                        null: false
    t.datetime "created_at",                                     null: false
    t.datetime "updated_at",                                     null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "gender"
    t.integer  "age"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
