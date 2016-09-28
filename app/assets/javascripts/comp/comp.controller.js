(function() {
    'use strict';

    function CompController() {

        var vm = this;

        // callable methods on the VM
        vm.name = "This is vm.name inside the comp controller"
        // instantiated info
        activate();

        // defined methods
        function activate() {

        }
    };

    angular
        .module('app')
        .controller('CompController', CompController);
}());