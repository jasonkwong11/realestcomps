class PropertySerializer < ActiveModel::Serializer
  has_many :comps
  has_many :comments
  attributes :id, :street, :city, :state, :zip, :latitude, :longitude, :zestimate, :thirty_day_change, :percentile, :year_tax_assessed, :tax_assessment, :year_built, :square_feet, :bathrooms, :bedrooms, :last_sold_date, :last_sold_price, :zpid
end
