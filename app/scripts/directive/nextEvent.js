'use strict';

angular.module('smucsmApp')
.directive('nextEvent', function (){
    return {
        restrict: 'A',
        templateUrl: '/views/nextEvent.html',
        controller: 'nextEventController',
        replace: true
    };
});