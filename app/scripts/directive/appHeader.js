'use strict';

angular.module('smucsmApp')
.directive('appHeader', function (){
    return {
        restrict: 'A',
        templateUrl: '/views/header.html',
        controller: 'HeaderController',
        replace: true
    };
});