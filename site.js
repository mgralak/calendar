

$(document).ready(function(){

  $('#calendar').fullCalendar({
    events: event.eventsData,
    eventClick: function(event, element) {
        let newTitle;

        event.title = "CLICKED!";

        $('#calendar').fullCalendar('updateEvent', event);

    }
  });

});


function Events() {
  this.eventsData = [
        {
            title  : 'event1',
            start  : '2017-09-10'
        },
        {
            title  : 'event2',
            start  : '2017-10-05',
            end    : '2017-10-11'
        },
        {
            title  : 'event3',
            start  : '2017-10-09T12:30:00',
            allDay : false // will make the time show
        }
    ]

}

var event = new Events();
