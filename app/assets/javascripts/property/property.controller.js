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
                    vm.comments = response.data.comments
                }, function(response){
                    console.log("The request failed: " + response)
                });
        }
    };

    angular
        .module('app')
        .controller('PropertyController', PropertyController);
}());