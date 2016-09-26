class CreateProperties < ActiveRecord::Migration[5.0]
  def change
    create_table :properties do |t|
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :latitude
      t.string :longitude
      t.string :zestimate
      t.string :thirty_day_change
      t.string :percentile
      t.string :rent_zestimate
      t.string :year_tax_assessed
      t.string :tax_assessment
      t.string :year_built
      t.string :square_feet
      t.string :bathrooms
      t.string :bedrooms
      t.string :last_sold_date
      t.string :last_sold_price
      t.string :compscore
      t.string :zpid
    end
  end
end
