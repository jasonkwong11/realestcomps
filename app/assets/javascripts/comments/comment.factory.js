(function() {

    'use strict';

    function CommentFactory($http) {
        return {
            getComments: getComments
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

    angular
        .module('app')
        .factory('CommentFactory', CommentFactory);
}());