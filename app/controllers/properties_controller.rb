require 'rillow'

class PropertiesController < ApplicationController

  def zillow
    rillow = Rillow.new('X1-ZWz1fgbe5szxmz_29gz1') 
    result = rillow.get_search_results(params[:address], params[:citystatezip]) 
    result.to_hash

    zpid = result["response"][0]["results"][0]["result"][0]["zpid"][0]
    street = result["response"][0]["results"][0]["result"][0]["address"][0]["street"][0]
    city = result["response"][0]["results"][0]["result"][0]["address"][0]["city"][0]
    zip = result["response"][0]["results"][0]["result"][0]["address"][0]["zipcode"][0]
    state = result["response"][0]["results"][0]["result"][0]["address"][0]["state"][0]
    latitude = result["response"][0]["results"][0]["result"][0]["address"][0]["latitude"][0]
    longitude = result["response"][0]["results"][0]["result"][0]["address"][0]["longitude"][0]
    zestimate = result["response"][0]["results"][0]["result"][0]["zestimate"][0]["amount"][0]["content"] 
    thirty_day_change = result["response"][0]["results"][0]["result"][0]["zestimate"][0]["valueChange"][0]["content"]

    principle_property = Property.create(zpid:zpid, street:street, city:city, zip:zip, state:state, latitude:latitude, longitude:longitude, zestimate:zestimate, thirty_day_change:thirty_day_change)
    
    comps = Rillow.new('X1-ZWz1fgbe5szxmz_29gz1')
    response = comps.get_deep_comps(principle_property.zpid, 25) 

    principle_property.percentile = response["response"][0]["properties"][0]["principal"][0]["zestimate"][0]["percentile"][0]
    principle_property.year_tax_assessed = response["response"][0]["properties"][0]["principal"][0]["taxAssessmentYear"][0]
    principle_property.tax_assessment = response["response"][0]["properties"][0]["principal"][0]["taxAssessment"][0]
    principle_property.year_built = response["response"][0]["properties"][0]["principal"][0]["yearBuilt"][0]
    principle_property.square_feet = response["response"][0]["properties"][0]["principal"][0]["lotSizeSqFt"][0]
    principle_property.bathrooms = response["response"][0]["properties"][0]["principal"][0]["bathrooms"][0]
    principle_property.bedrooms = response["response"][0]["properties"][0]["principal"][0]["bedrooms"][0]
    principle_property.last_sold_date = response["response"][0]["properties"][0]["principal"][0]["lastSoldDate"][0]
    principle_property.last_sold_price = response["response"][0]["properties"][0]["principal"][0]["lastSoldPrice"][0]["content"]

    #principle_property object is has all of it's associated data
    #now iterate through the comparables has to instantiate new comp objects
    comparables_hash = response["response"][0]["properties"][0]["comparables"][0]["comp"]

    comparables_hash.each do |property|

      street = property["address"][0]["street"][0]
      city = property["address"][0]["city"][0]
      state = property["address"][0]["state"][0]
      zip = property["address"][0]["zipcode"][0]
      latitude = property["address"][0]["latitude"][0]
      longitude = property["address"][0]["longitude"][0]
      zestimate = property["zestimate"][0]["amount"][0]["content"]
      thirty_day_change = property["zestimate"][0]["valueChange"][0]["content"]
      percentile = property["zestimate"][0]["percentile"][0]
      year_tax_assessed = property["taxAssessmentYear"][0]
      tax_assessment = property["taxAssessment"][0]
      year_built = property["yearBuilt"][0]
      square_feet = property["lotSizeSqFt"][0]
      bathrooms = property["bathrooms"][0]
      bedrooms = property["bedrooms"][0]
      last_sold_date = property["lastSoldDate"][0]
      last_sold_price = property["lastSoldPrice"][0]["content"]
      zpid = property["zpid"][0]
      home_details_link = property["links"][0]["homedetails"][0]
      chart_data_link = property["links"][0]["graphsanddata"][0]
      map_this_home_link = property["links"][0]["mapthishome"][0]
      similar_sales_link = property["links"][0]["comparables"][0]

      principle_property.comps.create(zpid:zpid, street:street, city:city, zip:zip, state:state, latitude:latitude, longitude:longitude, zestimate:zestimate, thirty_day_change:thirty_day_change, percentile:percentile, year_tax_assessed:year_tax_assessed, tax_assessment:tax_assessment, year_built:year_built, square_feet:square_feet, bathrooms:bathrooms, bedrooms:bedrooms, last_sold_date:last_sold_date, last_sold_price:last_sold_price, home_details_link:home_details_link, chart_data_link:chart_data_link, map_this_home_link:map_this_home_link, similar_sales_link:similar_sales_link)
    
    end
    #still need to validate for errors
     render file: "/Users/jasonkwong/developer/realestcomps/app/assets/javascripts/property/property.html"

  end

  def show
    @property = Property.last
    respond_to do |format|
      format.html {render :show}
      format.json { render json: @property}
    end
  end
end