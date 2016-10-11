(function() {

    'use strict';

    function PropertyFactory($http, $window, $state) {
        return {
            getProperty: getProperty,
            createProperty: createProperty,
            createComment: createComment

        }

        function getProperty(compId) {
            return $http.get('property', {params: {compId: compId}})      
                       .then(handleResponse)
                       .catch(handleError);
        }

        function createProperty(property) {
            var req = {
                method: "POST",
                url: '/properties',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    property: property 
                }
            };
            return $http(req)
                .catch(handleError);
        }

        function createComment(comment, currentPropertyId) {
            var req = {
                method: "POST",
                url: '/comments',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    comment: comment,
                    currentPropertyId: currentPropertyId
                }
            };

            return $http(req)
                .catch(handleError);
        }

        function handleResponse(response) {
            return response.data
        }

        function handleError(error) {
            $window.alert("Your property was not found. Please enter a valid residential property address.")
            return error;
        }
    }

    angular
        .module('app')
        .factory('PropertyFactory', PropertyFactory);
}());