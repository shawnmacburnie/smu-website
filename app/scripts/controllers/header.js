'use strict';

angular.module('smucsmApp')
.controller('HeaderController', function ($scope, $rootScope) {
    $scope.currentState;
    $scope.pageTitle = 'SMUCSM';
    $scope.isActive = function(name) {
        return name === $scope.currentState ? 'active': '';
    };

    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.currentState = toState.name;
    });
});