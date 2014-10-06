'use strict';

angular.module('smucsmApp')
.controller('nextEventController', function ($scope, $timeout,dateFormatService) {
    $scope.event = '';
    $scope.showNextEvent = false;

    function setCalenderEvent() {
        var calenderEvent = window.calenderEvents;
        if(calenderEvent) {
            var currentDate = new Date();
            for(var i=0; i< calenderEvent.length;i++ ){

                var dateString = calenderEvent[i].gd$when[0];
                var nextEventDate = dateFormatService(dateString, true, true);
                if(currentDate.getTime() <= nextEventDate.getTime()) {
                    $scope.event = calenderEvent[i].title.$t + ' ( ' +
                        nextEventDate.toDateString() + ' )';
                    $scope.showNextEvent = true;
                    break;
                }
            }
        }
    }

    $timeout(setCalenderEvent,400);
});