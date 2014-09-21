define(['app/app'], function(app) {
    app.controller('EventController', function EventController($scope, $http) {
        $scope.calenderEvents = calenderEvents.feed.entry;
    });
});