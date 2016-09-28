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
                })
                .state('home.property.comp', {
                    url: '/comps/:compId',
                    templateUrl: 'comp/comp.html',
                    controller: 'CompController as vm'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'home/about.html'
                });

            $urlRouterProvider.otherwise('/');
        });

}());