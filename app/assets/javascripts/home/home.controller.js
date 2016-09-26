(function() {
    'use strict';

    function HomeController() {

        var vm = this;

        // callable methods on the VM
        vm.name = "Jason"
        // instantiated info
        activate();

        // defined methods
        function activate() {

        }
    };

    angular
        .module('app')
        .controller('HomeController', HomeController);
}());