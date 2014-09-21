define(['app/app', 'jquery'], function(app, $){

    app.directive('hrefAttribute', function (){
        function link($scope, element, attrs) {
            var id = $scope.event.title.$t.replace(/ /g, "");
            $scope.$parent.idElement = id;
            element.attr("href", "#" + id);
        }
        return {
            link: link
        };
    });

    app.directive('idAttribute', function (){
        function link($scope, element, attrs) {
            var id = $scope.event.title.$t.replace(/ /g, "");
            element.attr("id", id);
        }
        return {
            link: link
        };
    });
});