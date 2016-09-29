//Thanks to Christian Fleschhut for help on this

(function () {
    angular.module('app')
    .controller('CommentsController', function ($scope, $window) {
        $scope.name = '';
        $scope.comments = [
            {
                name: 'naomi',
                text: 'Cap rates would be really helpful!!',
                approved: true
            }, 
            {
                name: 'brad',
                text: 'good work on this site, could use some css',
                approved: false
            }
        ];
        $scope.submit = function () {
         var anyInvalid = $scope.form.$invalid
            if (anyInvalid) {
               $window.alert("Please make sure there are no invalid fields.")
            } else { 
                $scope.comments.push({
                    name: $scope.name,
                    text: $scope.text,
                    approved: false
                });
                $scope.name = '';
                return $scope.text = '';
            } 
        };
        $scope.approve = function (comment) {
            return comment.approved = true;
        };
        return $scope.drop = function (comment) {
            return $scope.comments.splice($scope.comments.indexOf(comment), 1);
        };
    });
}.call(this));