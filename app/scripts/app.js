'use strict';

var smucsmApp = angular
  .module('smucsmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
]);

smucsmApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('home');

    $stateProvider
    .state('home', {
        url: '/',
        controller: 'MainController',
        templateUrl: 'views/main.html'
    })
    .state('events', {
        url: '/events',
        controller: 'EventsController',
        templateUrl: 'views/events.html'
    });
  });
