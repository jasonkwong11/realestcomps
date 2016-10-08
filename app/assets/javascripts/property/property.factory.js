(function() {

    'use strict';

    function PropertyFactory($http) {
        return {
            getProperty: getProperty,
            createProperty: createProperty

        }

        function getProperty(compId) {
           // console.log("inside of getProperty")
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
            //console.log(response)
            return response.data
        }

        function handleError(error) {
            console.log(error)
        }
    }

    angular
        .module('app')
        .factory('PropertyFactory', PropertyFactory);
}());