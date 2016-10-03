(function() {
    'use strict';

    function PropertyController(PropertyFactory, $state) {

        var vm = this;

        // callable methods on the VM
  
        vm.getProperty = getProperty;
        vm.createProperty = createProperty;

        // instantiated info
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
            console.log("INSIDE SETPROPERTY!!!!!!!!!!!!!!!!!")
            return vm.property = data;
        }

        function createProperty() {
            return PropertyFactory.createProperty(vm.newProperty)
                    .then($state.go('search.property'))
                    .then(getProperty);
        }
    };

    angular
        .module('app')
        .controller('PropertyController', PropertyController);
}());