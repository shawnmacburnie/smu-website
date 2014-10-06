'use strict';

angular.module('smucsmApp')
.directive('dateFormat', [ 'dateFormatService', function (dateFormatService) {
    function link($scope, element, attrs) {

        var data = $scope.event.gd$when[0];
        var dateOnly = $scope.$eval(attrs.dateFormat);
        element.text(dateFormatService(data, dateOnly));

    }
    return {
        link: link
    };
}]);