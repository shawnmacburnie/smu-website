define(['app/app'], function(app){

	app.directive('appHeader', function ($compile){
		return {
			restrict: 'A',
			templateUrl: '/js/app/modules/header/views/headerView.html',
			controller: 'HeaderController',
			replace: true
		};
	});
});