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

ActiveRecord::Schema.define(version: 20161006175136) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string  "username"
    t.integer "property_id"
    t.string  "content"
  end

  create_table "comps", force: :cascade do |t|
    t.string  "street"
    t.string  "city"
    t.string  "state"
    t.string  "zip"
    t.string  "latitude"
    t.string  "longitude"
    t.string  "zestimate"
    t.string  "thirty_day_change"
    t.string  "percentile"
    t.string  "rent_zestimate"
    t.string  "year_tax_assessed"
    t.string  "tax_assessment"
    t.string  "year_built"
    t.string  "square_feet"
    t.string  "bathrooms"
    t.string  "bedrooms"
    t.string  "last_sold_date"
    t.string  "last_sold_price"
    t.string  "zpid"
    t.string  "home_details_link"
    t.string  "chart_data_link"
    t.string  "map_this_home_link"
    t.string  "similar_sales_link"
    t.integer "property_id"
  end

  create_table "properties", force: :cascade do |t|
    t.string "street"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "latitude"
    t.string "longitude"
    t.string "zestimate"
    t.string "thirty_day_change"
    t.string "percentile"
    t.string "rent_zestimate"
    t.string "year_tax_assessed"
    t.string "tax_assessment"
    t.string "year_built"
    t.string "square_feet"
    t.string "bathrooms"
    t.string "bedrooms"
    t.string "last_sold_date"
    t.string "last_sold_price"
    t.string "compscore"
    t.string "zpid"
  end

end
