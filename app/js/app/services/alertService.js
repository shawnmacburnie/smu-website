define(['app/app'], function(app){

	app.factory('AlertService', function ($window){
		return {
			log: function(text){
				$window.alert(text + 188);
			}
		};
	});
});