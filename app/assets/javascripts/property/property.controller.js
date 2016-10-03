(function() {
    'use strict';

    function PropertyController(PropertyFactory, $state, $timeout) {

        var vm = this;

        // callable methods on the VM
  
        vm.getProperty = getProperty;
        vm.createProperty = createProperty;
        vm.loading = false;

        activate();



        // defined methods
        function activate() {
              getProperty();
        }
        

        function getProperty() {
            return PropertyFactory.getProperty()
                        .then(setProperty)
                        
        }

        function setProperty(data) {
            console.log(data);
            return vm.property = data;
        }

        function createProperty() {
            vm.loading = true;
            return PropertyFactory.createProperty(vm.newProperty)
                    .then(getProperty)
                    .then(goToProperties);

            function goToProperties() {
                return $timeout(function() {
                    vm.loading = false;
                    $state.go('search.property')
                }, 1000);
            }
        }
    };

    angular
        .module('app')
        .controller('PropertyController', PropertyController);
}());