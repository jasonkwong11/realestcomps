(function() {
    'use strict';

    function HomeController() {

        var vm = this;

        // callable methods on the VM
        vm.name = "Jason is cool and smart"
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