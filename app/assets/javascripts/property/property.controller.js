(function() {
    'use strict';

    function PropertyController(PropertyFactory, $state) {

        var vm = this;

        // callable methods on the VM
  
        vm.createProperty = createProperty;
        vm.loading = false;

        function createProperty() {
            vm.loading = true;
            return PropertyFactory.createProperty(vm.newProperty)
                    .then(function(response){
                        vm.property = response.data
                        console.log(vm.property)
                    }, function(response){
                      console.log("The request failed: " + response);
                    }).then(function(){
                        vm.loading = false;
                        $state.go('search.property')
                    });

        }
    };

    angular
        .module('app')
        .controller('PropertyController', PropertyController);
}());