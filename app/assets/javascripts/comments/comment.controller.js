(function () {
    angular.module('app')
    .controller('CommentsCtrl', function ($scope) {
        $scope.comments = [
            {
                name: 'asdf',
                text: 'hello world',
                approved: true
            },
            {
                name: 'xyz',
                text: 'lorem ipsum',
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