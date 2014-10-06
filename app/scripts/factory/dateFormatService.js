'use strict';

angular.module('smucsmApp')
.factory('dateFormatService', function() {
    function parseHours(time) {
        time = time.split(':');
        if(time[0] > 12) {
            return (time[0] -12) + ':' + time[1] + 'pm';
        } else {
            return time[0] + ':' + time[1] + 'am';
        }
    }

  return function (dateTime, dateOnly, dateObject) {
        var startTime = dateTime.startTime;
        var date = startTime.split('T');
        var time = date[1].split('.');
        time = parseHours(time[0]);
        var extendedDate = date[0].split('-');

        var endTime = dateTime.endTime;

        var dateEnd = endTime.split('T');
        var timeEnd = dateEnd[1].split('.');
        var extendedEndDate = dateEnd[0].split('-');

        if(extendedEndDate[1] !== extendedDate[1]) {
            timeEnd = new Date(extendedEndDate[0],(extendedEndDate[1] -1),
                extendedEndDate[2]).toDateString() +
                parseHours(timeEnd[0]);
        } else {
            timeEnd = parseHours(timeEnd[0]);
        }


        var finalDateTime = new Date(extendedDate[0],(extendedDate[1] -1),
            extendedDate[2]);

        if(dateOnly) {
            if(dateObject) {
                return finalDateTime;
            }
            return finalDateTime.toDateString();
        }
        return finalDateTime.toDateString() + ' At ' + time + ' till ' + timeEnd;
    };
});