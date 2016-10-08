(function() {
    'use strict';

    function PropertyController(PropertyFactory, $state) {

        var vm = this;

        // callable methods on the VM
  
        vm.createProperty = createProperty;
        vm.loading = false;
        vm.currentPropertyId = "";

        function createProperty() {
            vm.loading = true;
            return PropertyFactory.createProperty(vm.newProperty)
                    .then(function(response){
                        vm.property = response.data
                        console.log(vm.property)
                        vm.currentPropertyId = vm.property.id
                    }, function(response){
                      console.log("The request failed: " + response);
                    }).then(function(){
                        vm.loading = false;
                        $state.go('search.property')
                    });
        }

        function createComment() {
            return PropertyFactory.createComment(vm.newComment, vm.currentPropertyId)
                .then(function(response){

                })
        }
    };

    angular
        .module('app')
        .controller('PropertyController', PropertyController);
}());