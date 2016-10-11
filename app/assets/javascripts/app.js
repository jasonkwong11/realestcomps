(function() {

  'use strict';

  angular
      .module('app', ['ui.router', 'templates', 'angularUtils.directives.dirPagination', 'ngMessages'])
      .config([
        '$httpProvider',
        function ($httpProvider) {
          $httpProvider
            .defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
      }]);

}());