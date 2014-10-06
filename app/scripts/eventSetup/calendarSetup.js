'use strict';

var calenderEvents;
var myService;
var google = document.google || window.google;
var feedUrl = 'http://www.google.com/calendar/feeds/smu.csm%40gmail.com/public/full?' +
        'orderby=starttime&singleevents=true&sortorder=ascending';

function handleMyFeed(data) {
    calenderEvents = data.feed.entry;
}

function handleError(e) {
    console.log('There was an error!');
    console.log(e.cause ? e.cause.statusText : e.message);
}

function setupMyService() {
    myService = new google.gdata.calendar.CalendarService('smucsm');
}
function getMyFeed() {
    setupMyService();

    myService.getEventsFeed(feedUrl, handleMyFeed, handleError);
}
google.load('gdata', '1');
google.setOnLoadCallback(getMyFeed);