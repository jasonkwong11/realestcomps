//Thanks to Christian Fleschhut for help on this
(function() {
    'use strict';

    function CommentsController(CommentFactory){
    
      var vm = this;

      vm.name = '';


        vm.displayComments = displayComments;

        activate();

        function activate(){
          displayComments();
        }

        function displayComments(){
          return CommentFactory.getComments()
            .then(function(response){
              vm.comments = response.data
              console.log(vm.comments)
            });
        }

    }

    angular
        .module('app')
        .controller('CommentsController', CommentsController);
}());