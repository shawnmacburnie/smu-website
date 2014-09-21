define(['app/app'], function(app){
    'use strict';

    return app.config(function ($stateProvider) {
        $stateProvider.state('event', {
            url: '/events',
            templateUrl: '/js/app/pages/events/views/event.html',
            controller:'EventController'
        })
    });
});