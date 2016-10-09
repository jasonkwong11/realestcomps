(function() {
    'use strict';

    function PropertyController(PropertyFactory, $state, $scope) {

        var vm = this;

        // callable methods on the VM
  
        vm.createProperty = createProperty;
        vm.loading = false;
        vm.createComment = createComment;

        function createProperty() {
            vm.loading = true;
            return PropertyFactory.createProperty(vm.newProperty)
                    .then(function(response){
                        vm.property = response.data
                        console.log(vm.property)
                        $scope.currentPropertyId = vm.property.id
                    }, function(response){
                      console.log("The request failed: " + response);
                    }).then(function(){
                        vm.loading = false;
                        $state.go('search.property')
                    });
        }

        function createComment() {
            vm.newComment.currentPropertyId = $scope.currentPropertyId
            return PropertyFactory.createComment(vm.newComment)
                .then(function(response){
                    console.log("THIS IS response.config.data IN THE CONTROLLERS CREATE COMMENT....")
                    console.log(response.config.data)
                   // vm.comment = response.data
                });
        }
    };

    angular
        .module('app')
        .controller('PropertyController', PropertyController);
}());