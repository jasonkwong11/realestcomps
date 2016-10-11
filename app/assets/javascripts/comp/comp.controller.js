(function() {
    'use strict';

    function CompController(PropertyFactory, $stateParams) {

        var vm = this;
           // callable methods on the VM
  
        vm.getProperty = getProperty;
        vm.compId = $stateParams.compId

        // instantiated info
        activate();


        // defined methods
        function activate() {
            getProperty();
        }

        function getProperty() {
            return PropertyFactory.getProperty(vm.compId)
                       .then(setPropertyAndComps)
        }

        function setPropertyAndComps(data) {
            vm.comps = data.comps; 
            return vm.property = data;  
        }

    };

    CompController.$inject = ['PropertyFactory', '$stateParams']

    angular
        .module('app')
        .controller('CompController', CompController);
}());