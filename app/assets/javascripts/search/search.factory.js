(function() {

    'use strict';

    function SearchFactory($http) {
        return {
            postSearch: postSearch
        }

        function postSearch() {
            return $http.post('/search')
            console.log("inside of postSearch")
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
        .factory('SearchFactory', SearchFactory);
}());