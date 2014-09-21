define(['app/app'], function(app) {
    app.controller('EventController', function EventController($scope, $http) {
        $scope.calenderEvents = calenderEvents.feed.entry;

        $scope.parseDate = function (dateTime){
            startTime = dateTime.startTime;
            var date = startTime.split("T");
            var time = date[1].split(".");
            time = time[0].split(":");
            time = (time[0] > 12 ? time[0] -12: time[0]) + ":" + time[1];

            endTime = dateTime.endTime;

            var dateEnd = endTime.split("T");
            var timeEnd = dateEnd[1].split(".");
            timeEnd = timeEnd[0].split(":");
            timeEnd = timeEnd[0] + ":" + timeEnd[1]

            var extendedDate = date[0].split("-");

            return new Date(extendedDate[0],(extendedDate[1] -1), extendedDate[2]).toDateString() + " At " + time + " till " + timeEnd;
        };
    });
});