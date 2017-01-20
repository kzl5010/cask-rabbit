# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20170120205010) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "task_requests", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "task_id"
    t.integer  "tasker_id"
    t.date     "date"
    t.string   "address"
    t.text     "details"
    t.integer  "hours"
  end

  add_index "task_requests", ["task_id"], name: "index_task_requests_on_task_id", using: :btree
  add_index "task_requests", ["tasker_id"], name: "index_task_requests_on_tasker_id", using: :btree
  add_index "task_requests", ["user_id"], name: "index_task_requests_on_user_id", using: :btree

  create_table "taskers", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "email",      null: false
    t.string   "zip_code",   null: false
    t.integer  "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "price"
    t.string   "imageurl"
  end

  add_index "taskers", ["email"], name: "index_taskers_on_email", unique: true, using: :btree

  create_table "tasks", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "imageurl"
  end

  add_index "tasks", ["title"], name: "index_tasks_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "zip_code",        null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "imageurl"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

  add_foreign_key "task_requests", "taskers"
  add_foreign_key "task_requests", "tasks"
  add_foreign_key "task_requests", "users"
end
