define(['app/app', 'i18n!app/nls/i18n'], function(app, i18n){

	app.filter('i18n', function() {
		return function(input) {
			return i18n[input];
		};
	});

	console.groupEnd();
});