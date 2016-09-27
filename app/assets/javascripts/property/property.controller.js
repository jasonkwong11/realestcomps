(function() {
    'use strict';

    function PropertyController(PropertyFactory) {

        var vm = this;

        // callable methods on the VM
        vm.name = 'You are in the Property app';

        vm.getProperty = getProperty;


        // instantiated info
        activate();


        // defined methods
        function activate() {
            getProperty();
            console.log(vm.property);
        }

        function getProperty() {
            return PropertyFactory.getProperty()
                       .then(setProperty)
        }

        function getProperty() {

        }

        function createProperty() {
            return PropertyFactory.createProperty(vm.newProperty)
                       .then(getProperty)
        }

        function updateProperty() {

        }

        function deleteProperty() {

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