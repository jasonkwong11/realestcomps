Specifications for the Angular Assessment

Specs:

 Use Angular to build the app
  -yes

 Must contain some sort of nested views
  -yes, property is nested within the home state and comp is nested within the property state

 Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due
 -yes, can ng-model search through the comps (for anything) using a filter, checkbox filtering based on number of bathrooms

 Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart
 -yes, comments page allows for dynamic updating of comments. 

 Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product
-yes, links to the show page for each comp works

 Data should be validated in Angular before submission
 -yes this is done with ngMessages in the input and textarea fields for the comments section. a user must enter a name with at least 2 characters and is required. the comment textarea is also required and has a minlength of 5 characters.

 Must talk to the Rails backend using $http and Services
 -yes, angular makes a $http request to the rails API to receive the JSON objects, using a factory (a service wasn't used because factory made more sense for this use case: less bloat, unneeded features)
 
 Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code
 -yes, short description
Confirm

 You have a large number of small Git commits...yes
 Your commit messages are meaningful...yes
 You made the changes in a commit that relate to the commit message...yes
 You don't include changes in a commit that aren't related to the commit message...yes