class CreateComps < ActiveRecord::Migration[5.0]
  def change
    create_table :comps do |t|
    t.string  :street
    t.string  :city
    t.string  :state
    t.string  :zip
    t.string  :latitude
    t.string  :longitude
    t.string  :zestimate
    t.string  :thirty_day_change
    t.string  :percentile
    t.string  :rent_zestimate
    t.string  :year_tax_assessed
    t.string  :tax_assessment
    t.string  :year_built
    t.string  :square_feet
    t.string  :bathrooms
    t.string  :bedrooms
    t.string  :last_sold_date
    t.string  :last_sold_price
    t.string  :zpid
    t.string  :home_details_link
    t.string  :chart_data_link
    t.string  :map_this_home_link
    t.string  :similar_sales_link
    t.integer :property_id
    end
  end
end
