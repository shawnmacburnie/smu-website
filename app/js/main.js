//On génère une config dédié à l'application pour pouvoir utiliser plusieurs APP sur une même page
appRequire = require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    angular: {
      exports: "angular"
    },

    bootstrap:{
      deps: ['jquery']
    },


    jquery: {
      exports: "$"
    },

    uiRouter: {
      deps: ['angular']
    }


  },

  paths: {
    // Librairies bower
    underscore:         '/js/vendor/underscore/underscore',
    angular:            '/js/vendor/angular/angular',
    uiRouter:           '/js/vendor/angular/angular-ui-router',

    bootstrap:          '/js/vendor/bootstrap/dist/js/bootstrap',


    jquery:             '/js/vendor/jquery/jquery',

    i18n :              '/js/vendor/requirejs-i18n/i18n',


  },

  config : {
    i18n : {
      locale: localStorage.getItem('locale') || 'fr-fr'
    }
  }

});

appRequire([
  'angular',

  'bootstrap',

  'app/filters/i18nFilter',
  'app/modules/header/HeaderModule',
  'app/pages/home/HomePage',
  'app/pages/events/EventPage',

  'app/directives/dateFormat'
], function(){
    angular.bootstrap(document.getElementById('app'),['app']);
});