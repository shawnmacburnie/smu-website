define(['app/app'], function(app){

    app.directive('mainView', function (){
        function link($scope, element, attrs) {
            element.addClass("jumbotron");
        }
        return {
            link: link
        };
    });
});