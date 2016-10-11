(function() {
    'use strict';

    function PropertyController(PropertyFactory, $state, $scope) {

        var vm = this;

        // callable methods on the VM
  
        vm.createProperty = createProperty;
        vm.loading = false;
        vm.createComment = createComment;
        vm.newComments = [];

        function createProperty() {
            vm.loading = true;
            return PropertyFactory.createProperty(vm.newProperty)
                    .then(function(response){
                    if (response.data.errors == null){
                        vm.property = response.data
                        $scope.currentPropertyId = vm.property.id
                    } else {vm.error = true}
                    }, function(response){
                      console.log("The request failed: " + response);
                    }).then(function(){
                        vm.loading = false;
                        if (vm.error === true) { 
                            vm.error = false;
                            $state.go('search')
                        } else {
                            vm.error = false;
                            $state.go('search.property')
                        }
                    });
        }



        function createComment() {
            vm.newComment.currentPropertyId = $scope.currentPropertyId
            return PropertyFactory.createComment(vm.newComment)
                .then(function(response){

                    if (!Array.prototype.last){
                        Array.prototype.last = function(){
                            return this[this.length - 1];
                        };
                    };

                    vm.newComments.push(response.data.comments.last());
                }, function(response){
                    console.log("The request failed: " + response)
                });
        }
    };

    angular
        .module('app')
        .controller('PropertyController', PropertyController);
}());