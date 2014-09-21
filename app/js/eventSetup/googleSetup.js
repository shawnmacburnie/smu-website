(function(google){
    var myService;
    var feedUrl = "http://www.google.com/calendar/feeds/smu.csm%40gmail.com/public/full?" +
            "orderby=starttime&singleevents=true&sortorder=ascending&futureevents=true";

    google.load("gdata", "1");
    google.setOnLoadCallback(getMyFeed);

    function setupMyService() {
        myService = new google.gdata.calendar.CalendarService('exampleCo-exampleApp-1');
    }

    function getMyFeed() {
        setupMyService();

        myService.getEventsFeed(feedUrl, handleMyFeed, handleError);
    }
    function handleMyFeed(feed) {
        calenderEvents = feed;
    }

    function handleError(e) {
        console.log("There was an error!");
        console.log(e.cause ? e.cause.statusText : e.message);
    }
})(google);