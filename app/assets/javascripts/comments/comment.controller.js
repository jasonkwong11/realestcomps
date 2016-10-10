//Thanks to Christian Fleschhut for help on this
(function() {
    'use strict';

    function CommentsController(CommentFactory){
    
      var vm = this;

        vm.displayComments = displayComments;

        activate();

        function activate(){
          displayComments();
        }

        function displayComments(){
          return CommentFactory.getComments()
            .then(function(response){
              vm.allComments = response.data
            });
        }

    }

    angular
        .module('app')
        .controller('CommentsController', CommentsController);
}());