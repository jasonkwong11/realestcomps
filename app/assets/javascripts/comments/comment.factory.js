(function() {

    'use strict';

    function CommentFactory($http) {
        return {
            getComments: getComments,
            getProperties: getProperties
        }

        function getComments() {
            var req = {
                method: "GET",
                url: '/comments',
                headers: {
                    'Content-Type': 'application/json'
                },
            };

            return $http(req)
                .catch(handleError);
        }

        function getProperties() {
            var req = {
                method: "GET",
                url: '/properties',
                headers: {
                    'Content-Type': 'application/json'
                },
            };

            return $http(req)
                .catch(handleError);
        }


        function handleError(error) {
            console.log(error)
        }

    }

    CommentFactory.$inject = ['$http']
    angular
        .module('app')
        .factory('CommentFactory', CommentFactory);
}());