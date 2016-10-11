(function() {

    'use strict';

    angular
        .module('app')
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
              $stateProvider
                .state('search', {
                    url: '/',
                    templateUrl: 'search/search.html',
                    controller: 'PropertyController as vm'
                })
                .state('search.property', {
                    url: 'property',
                    templateUrl: 'property/property.html',
                    controller: 'PropertyController as vm'
                })
                .state('search.property.comp', {
                    url: '/comps/:compId',
                    templateUrl: 'comp/comp.html',
                    controller: 'CompController as vm'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'search/about.html'
                })
                .state('comments', {
                    url: '/comments',
                    templateUrl: 'comments/comment.html',
                    controller: 'CommentsController as vm'
                });

                $urlRouterProvider.otherwise('/');
            }]);
}());