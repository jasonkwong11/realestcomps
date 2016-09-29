//Thanks to Christian Fleschhut for help on this
(function() {
    'use strict';

    function CommentsController($window){
    
      var vm = this;

      vm.name = '';
      vm.comments = [
            {
                name: 'naomi',
                text: 'Cap rates would be really helpful!!',
                approved: true
            }, 
            {
                name: 'brad',
                text: 'good work on this site, could use some css',
                approved: false
            }
        ];

        vm.submit = submit;
        vm.approve = approve;
        vm.drop = drop;

        function submit () {
         var nameInput = form.name.value
         var textInput = form.text.value

           if (nameInput == "" || textInput == "") {
              $window.alert("Please make sure there are no invalid fields.")
           } else { 
           vm.comments.push({
               name: nameInput,
               text: textInput,
               approved: false
           });
           nameInput = '';
           return textInput = '';
           } 
        };

        function approve (comment) {
            return comment.approved = true;
        };

        function drop (comment) {
            return vm.comments.splice(vm.comments.indexOf(comment), 1);
        };

    }

    angular
        .module('app')
        .controller('CommentsController', CommentsController);
}());