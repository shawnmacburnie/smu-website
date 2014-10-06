'use strict';

angular.module('smucsmApp')
.directive('idFromTitle', function (){
    function link($scope, element) {
        var id = $scope.event.title.$t.replace(/ /g, '');
        element.attr('id', id);
    }
    return {
        link: link
    };
});

angular.module('smucsmApp')
.directive('hrefFromTitle', function (){
    function link($scope, element) {
        var id = $scope.event.title.$t.replace(/ /g, '');
        $scope.$parent.idElement = id;
        element.attr('href', '#' + id);
    }
    return {
        link: link
    };
});