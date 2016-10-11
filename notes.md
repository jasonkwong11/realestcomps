
  <nav class="navbar navbar-default" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <a href="#" class="btn navbar-brand" ui-sref="search">Search</a>
        <a href="#" class="btn navbar-brand" ui-sref="about">About</a>
        <a href="#" class="btn navbar-brand" ui-sref="comments">Comments</a>
      </div>
    </div>
  </nav>

<div class="template">          
    <h1>Comments</h1>

  <div class='row'>
    <div class='column'>
      <div ng-app='app'>
        <div class='comments' ng-controller='CommentsController as vm'>
          <form name="form">
            <fieldset>
              <legend>
              Please leave feedback on features you'd like added:
              </legend>
              <div>
                <label>
                  Name: <br>
                  <input
                    name="name"
                    id="nameInput"
                    require="required"
                    ng-model='name' 
                    type='text'>
                  <div ng-messages="form.name.$error">
                    <p ng-message="required"> Name is required </p>
                  </div>  
                </label>
              </div>
              <div>
                <label>
                  Comment:<br>
                  <textarea 
                    name="text"
                    id="commentText"
                    required="required"
                    ng-model='text'> 
                  </textarea>
                    <div ng-messages="form.text.$error">
                      <p ng-message="required"> Comment is required </p>
                    </div>
                </label>
              </div>
              <div>
                <input class='button' ng-click='vm.submit()' type='submit' value='Submit'>
              </div>
            </fieldset>
          </form>
          <h3>
            {{vm.comments.length}} Comments
          </h3>
          <ul>
            <li ng-repeat='comment in vm.comments'>
              <div class='comment' ng-class='{approved: comment.approved}'>
                <h5>
                  {{comment.name}}:
                </h5>
                <div>
                  {{comment.text}}
                </div>
                <p>
                  <small>
                    <a ng-click='vm.approve(comment)' ng-hide='comment.approved'>
                      approve comment
                      |
                    </a>
                    <a ng-click='vm.drop(comment)'>
                      delete comment
                    </a>
                  </small>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


THIS IS RESULT IN THE RAILS CONTROLLER....
{"xsi:schemaLocation"=>"http://www.zillow.com/static/xsd/SearchResults.xsd http://www.zillowstatic.com/vstatic/93d7ec3/static/xsd/SearchResults.xsd", "xmlns:xsi"=>"http://www.w3.org/2001/XMLSchema-instance", "xmlns:SearchResults"=>"http://www.zillow.com/static/xsd/SearchResults.xsd", "request"=>[{"address"=>["508 South Applecross Rd."], "citystatezip"=>["Highland Heights, OH 44143"]}], "message"=>[{"text"=>["Request successfully processed"], "code"=>["0"]}], "response"=>[{"results"=>[{"result"=>[{"zpid"=>["58553402"], "links"=>[{"homedetails"=>["http://www.zillow.com/homedetails/508-S-Applecross-Rd-Cleveland-OH-44143/58553402_zpid/"], "graphsanddata"=>["http://www.zillow.com/homedetails/508-S-Applecross-Rd-Cleveland-OH-44143/58553402_zpid/#charts-and-data"], "mapthishome"=>["http://www.zillow.com/homes/58553402_zpid/"], "comparables"=>["http://www.zillow.com/homes/comps/58553402_zpid/"]}], "address"=>[{"street"=>["508 S Applecross Rd"], "zipcode"=>["44143"], "city"=>["Cleveland"], "state"=>["OH"], "latitude"=>["41.554503"], "longitude"=>["-81.456289"]}], "zestimate"=>[{"amount"=>[{"currency"=>"USD", "content"=>"424561"}], "last-updated"=>["10/09/2016"], "oneWeekChange"=>[{"deprecated"=>"true"}], "valueChange"=>[{"duration"=>"30", "currency"=>"USD", "content"=>"-558"}], "valuationRange"=>[{"low"=>[{"currency"=>"USD", "content"=>"394842"}], "high"=>[{"currency"=>"USD", "content"=>"458526"}]}], "percentile"=>["0"]}], "localRealEstate"=>[{"region"=>[{"name"=>"Highland Heights", "id"=>"32032", "type"=>"city", "zindexValue"=>["243,800"], "links"=>[{"overview"=>["http://www.zillow.com/local-info/OH-Highland-Heights/r_32032/"], "forSaleByOwner"=>["http://www.zillow.com/highland-heights-oh/fsbo/"], "forSale"=>["http://www.zillow.com/highland-heights-oh/"]}]}]}]}]}]}]}


 if result["request"][0]["message"][0]["text"][0] = "Error: no exact match found for input address"
  raise "Error: no exact match found for input address"


Started POST "/properties" for ::1 at 2016-10-10 17:06:44 -0400
Processing by PropertiesController#create as HTML
  Parameters: {"property"=>{"street_address"=>"2", "citystatezip"=>"2"}}
THIS IS RESULT IN THE RAILS CONTROLLER....
{"xsi:schemaLocation"=>"http://www.zillow.com/static/xsd/SearchResults.xsd http://www.zillowstatic.com/vstatic/93d7ec3/static/xsd/SearchResults.xsd", "xmlns:xsi"=>"http://www.w3.org/2001/XMLSchema-instance", "xmlns:SearchResults"=>"http://www.zillow.com/static/xsd/SearchResults.xsd", "request"=>[{"address"=>["2"], "citystatezip"=>["2"]}], "message"=>[{"text"=>["Error: no exact match found for input address"], "code"=>["508"]}]}
Completed 500 Internal Server Error in 159ms (ActiveRecord: 0.0ms)


  
NoMethodError (undefined method `[]' for nil:NilClass):
  
app/controllers/properties_controller.rb:20:in `create'
  
