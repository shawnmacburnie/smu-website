define(['app/app'], function(app){

	app.controller('HeaderController', function HeaderController($scope, $http, $rootScope) {
        $scope.currentState;
		$scope.headerTitle = 'SMUCSM';
        $scope.isActive = function(name) {
            return name === $scope.currentState ? 'active': '';
        };

        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            $scope.currentState = toState.name;
        });
	});
});