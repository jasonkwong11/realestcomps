(function() {

    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                .state('home.property', {
                    url: 'property',
                    templateUrl: 'property/property.html',
                    controller: 'PropertyController as vm'
                });

            $urlRouterProvider.otherwise('/');
        });

}());