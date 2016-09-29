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
            return PropertyFactory.getProperty()
                       .then(setPropertyAndComps)
        }

        function setPropertyAndComps(data) {
            vm.comps = data.data.comps; 
            return vm.property = data;  
        }

        function setCurrentComp(){
            var compsArray = vm.comps;
            return vm.currentComp = compsArray.find(comp.id === $stateParams.id)
            
        }
    };

    angular
        .module('app')
        .controller('CompController', CompController);
}());