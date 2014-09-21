define(['app/app'], function(app){
    'use strict';

    return app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/js/app/pages/home/views/page.html',
            controller:'HomeController'
        })
    });
});