//Thanks to Christian Fleschhut for help on this
(function() {
    'use strict';

    function CommentsController(CommentFactory){
    
      var vm = this;

        vm.displayComments = displayComments;
        vm.displayProperties = displayProperties;

        activate();

        function activate(){
          displayComments();
          displayProperties();
        }

        function displayComments(){
          return CommentFactory.getComments()
            .then(function(response){
              vm.allComments = response.data
            });
        }

        function displayProperties(){
          return CommentFactory.getProperties()
            .then(function(response){
              vm.allProperties = response.data
            });
        }

    }
    CommentsController.$inject = ['CommentFactory']
    angular
        .module('app')
        .controller('CommentsController', CommentsController);
}());