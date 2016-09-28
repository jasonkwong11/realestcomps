(function() {
    'use strict';

    function PropertyController(PropertyFactory) {

        var vm = this;

        // callable methods on the VM
  
        vm.getProperty = getProperty;

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
            return vm.property = data;
            debugger;
        }
    };

    angular
        .module('app')
        .controller('PropertyController', PropertyController);
}());