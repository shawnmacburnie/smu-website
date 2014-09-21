define(['angular', 'uiRouter'], function(ng){

	var dependances = ['ui.router'];

	var app =  ng.module("app", dependances);
    app.config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }]);
    return app;
});