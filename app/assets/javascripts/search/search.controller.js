(function() {
    'use strict';

    function SearchController(SearchFactory) {
        var vm = this;

        // callable methods on the VM
  
        vm.search = search;

        // instantiated info
        activate();


        // defined methods
        function activate() {

        }

        function search () {

         console.log('THIS SEARCH IS WORKING');

         return SearchFactory.postSearch()
           .then(console.log("SEARCH WAS POSTED!!!"))


        //   if (nameInput == "" || textInput == "") {
        //      $window.alert("Please make sure there are no invalid fields.")
       //    } else { 
       //    vm.comments.push({
       //        name: nameInput,
       //        text: textInput,
       //        approved: false
       //    });
       //    nameInput = '';
        //   return textInput = '';
       //    } 
        };
    };

    angular
        .module('app')
        .controller('SearchController', SearchController);
}());