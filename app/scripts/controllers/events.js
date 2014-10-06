'use strict';

angular.module('smucsmApp')
  .controller('EventsController', function ($scope, dateFormatService) {
    var calenderEvents = document.calenderEvents || window.calenderEvents;

    function setUpcommingEvent(){
        var tmpCalenderData = [];
        var currentDate = new Date();
        for(var i=0; i < calenderEvents.length;i++) {
            var dateString = calenderEvents[i].gd$when[0];
            if(currentDate.getTime() <= dateFormatService(dateString, true, true).getTime()) {
                tmpCalenderData.push(calenderEvents[i]);
            }
        }

        $scope.calenderEvents = tmpCalenderData;
        $scope.upCommingEvent = true;
        $scope.previousEvent = false;
    }

    function setPreviousEvent(){
        var tmpCalenderData = [];
        var currentDate = new Date();
        for(var i=0; i < calenderEvents.length;i++) {
            var dateString = calenderEvents[i].gd$when[0];
            if(currentDate.getTime() >= dateFormatService(dateString, true, true).getTime()) {
                tmpCalenderData.push(calenderEvents[i]);
            }
        }

        $scope.calenderEvents = tmpCalenderData;
        $scope.upCommingEvent = false;
        $scope.previousEvent = true;
    }

    setUpcommingEvent();
    $scope.setUpcommingEvent = setUpcommingEvent;
    $scope.setPreviousEvent = setPreviousEvent;

  });
