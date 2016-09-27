(function() {

    'use strict';

    function PropertyFactory($http) {
        return {
            getProperty: getProperty
        }

        function getProperty() {
            return $http.get('/property')
                       .then(handleResponse)
                       .catch(handleError);
        }

        function handleResponse(response) {
            console.log(response)
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