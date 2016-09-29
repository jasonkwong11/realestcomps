//Thanks to Christian Fleschhut for help on this

(function () {
    angular.module('app')
    .controller('CommentsController', function ($scope) {
        $scope.name = '';
        $scope.comments = [
            {
                name: 'naomi',
                text: 'Cap rates would be really helpful!!',
                approved: true
            },
            {
                name: 'xyz',
                text: 'good work on this site, could use some css',
                approved: false
            }
        ];
        $scope.submit = function () {
            $scope.comments.push({
                name: $scope.name,
                text: $scope.text,
                approved: false
            });
            $scope.name = '';
            return $scope.text = '';
        };
        $scope.approve = function (comment) {
            return comment.approved = true;
        };
        return $scope.drop = function (comment) {
            return $scope.comments.splice($scope.comments.indexOf(comment), 1);
        };
    });
}.call(this));