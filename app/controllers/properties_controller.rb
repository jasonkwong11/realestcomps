require 'rillow'

class PropertiesController < ApplicationController
   skip_before_action :verify_authenticity_token

  def index
    @properties = Property.all
    render json: @properties
  end

  def create
    rillow = Rillow.new('X1-ZWz1fgbe5szxmz_29gz1')

    result = rillow.get_search_results(params[:property][:street_address], params[:property][:citystatezip])
    result.to_hash

    if result.to_hash["message"][0]["text"][0] == "Error: no exact match found for input address"
      render :json => { :errors => "Error: no exact match found for input address"}, :status => 500
    else
      zpid = result["response"][0]["results"][0]["result"][0]["zpid"][0]
      street = result["response"][0]["results"][0]["result"][0]["address"][0]["street"][0]
      city = result["response"][0]["results"][0]["result"][0]["address"][0]["city"][0]
      zip = result["response"][0]["results"][0]["result"][0]["address"][0]["zipcode"][0]
      state = result["response"][0]["results"][0]["result"][0]["address"][0]["state"][0]
      latitude = result["response"][0]["results"][0]["result"][0]["address"][0]["latitude"][0]
      longitude = result["response"][0]["results"][0]["result"][0]["address"][0]["longitude"][0]
      zestimate = result["response"][0]["results"][0]["result"][0]["zestimate"][0]["amount"][0]["content"]
      thirty_day_change = result["response"][0]["results"][0]["result"][0]["zestimate"][0]["valueChange"][0]["content"]

      @principle_property = Property.find_or_create_by(zpid:zpid, street:street, city:city, zip:zip, state:state, latitude:latitude, longitude:longitude, zestimate:zestimate, thirty_day_change:thirty_day_change)
      principle_property_zpid = @principle_property.zpid

      comps = Rillow.new('X1-ZWz1fgbe5szxmz_29gz1')
      response = comps.get_deep_comps(principle_property_zpid, 25)

      @principle_property.percentile = response["response"][0]["properties"][0]["principal"][0]["zestimate"][0]["percentile"] ? response["response"][0]["properties"][0]["principal"][0]["zestimate"][0]["percentile"][0] : 'N/A'
      @principle_property.year_built = response["response"][0]["properties"][0]["principal"][0]["yearBuilt"] ? response["response"][0]["properties"][0]["principal"][0]["yearBuilt"][0] : 'N/A'
      @principle_property.square_feet = response["response"][0]["properties"][0]["principal"][0]["lotSizeSqFt"] ? response["response"][0]["properties"][0]["principal"][0]["lotSizeSqFt"][0] : 'N/A'
      @principle_property.bathrooms = response["response"][0]["properties"][0]["principal"][0]["bathrooms"] ? response["response"][0]["properties"][0]["principal"][0]["bathrooms"][0] : 'N/A'
      @principle_property.bedrooms = response["response"][0]["properties"][0]["principal"][0]["bedrooms"] ? response["response"][0]["properties"][0]["principal"][0]["bedrooms"][0] : 'N/A'
      @principle_property.last_sold_date = response["response"][0]["properties"][0]["principal"][0]["lastSoldDate"] ? response["response"][0]["properties"][0]["principal"][0]["lastSoldDate"][0] : 'N/A'
      @principle_property.last_sold_price = response["response"][0]["properties"][0]["principal"][0]["lastSoldPrice"] ? response["response"][0]["properties"][0]["principal"][0]["lastSoldPrice"][0]["content"] : 'N/A'

      #@principle_property object is has all of it's associated data
      #now iterate through the comparables has to instantiate new comp objects
      comparables_hash = response["response"][0]["properties"][0]["comparables"][0]["comp"]

      comparables_hash.each do |property|

        street = property["address"][0]["street"][0]
        city = property["address"][0]["city"][0]
        state = property["address"][0]["state"][0]
        zip = property["address"][0]["zipcode"][0]
        latitude = property["address"][0]["latitude"][0]
        longitude = property["address"][0]["longitude"][0]
        zestimate = property["zestimate"][0]["amount"][0]["content"] || 'N/A'
        thirty_day_change = property["zestimate"][0]["valueChange"][0]["content"] || 'N/A'
        percentile = property["zestimate"][0]["percentile"][0] || 'N/A'
        year_built = property["yearBuilt"] ? property["yearBuilt"][0] : 'N/A'
        square_feet = property["lotSizeSqFt"] ? property["lotSizeSqFt"][0] : 'N/A'
        bathrooms = property["bathrooms"] ? property["bathrooms"][0] : 'N/A'
        bedrooms = property["bedrooms"] ? property["bedrooms"][0] : 'N/A'
        last_sold_date = property["lastSoldDate"] ? property["lastSoldDate"][0] : 'N/A'
        last_sold_price = property["lastSoldPrice"] ? property["lastSoldPrice"][0]["content"] : 'N/A'
        zpid = property["zpid"][0]
        home_details_link = property["links"][0]["homedetails"][0]
        map_this_home_link = property["links"][0]["mapthishome"][0]
        similar_sales_link = property["links"][0]["comparables"][0]

        @principle_property.comps.find_or_create_by(zpid:zpid, street:street, city:city, zip:zip, state:state, latitude:latitude, longitude:longitude, zestimate:zestimate, thirty_day_change:thirty_day_change, percentile:percentile, year_built:year_built, square_feet:square_feet, bathrooms:bathrooms, bedrooms:bedrooms, last_sold_date:last_sold_date, last_sold_price:last_sold_price, home_details_link:home_details_link, map_this_home_link:map_this_home_link, similar_sales_link:similar_sales_link)

      end

      if @principle_property.save
        render json: @principle_property
      else
        render json: {errors: @principle_property.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  def show
    comp = Comp.find(params[:compId])
    @property = Property.find(comp.property_id)
    render json: @property
  end
end
