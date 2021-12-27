
document.addEventListener('DOMContentLoaded', function() {
      var Calendar = FullCalendar.Calendar;
      var Draggable = FullCalendarInteraction.Draggable



      $(".add-event").on("click",function(){
            if($("input.eventname").val() !== ""){
                  var eventname = $(this).parents("form").find("input.eventname").val();
                  $("#external-events-list").append("<div class='fc-event'>" + eventname + "</div>");
            }
            return false;
      });



      /* initialize the external events
      -----------------------------------------------------------------*/
      var containerEl = document.getElementById('external-events-list');
      new Draggable(containerEl, {
            itemSelector: '.fc-event',
            eventData: function(eventEl) {
                  return {
                        title: eventEl.innerText.trim()
                  }
            }
      });

      //// the individual way to do it
      // var containerEl = document.getElementById('external-events-list');
      // var eventEls = Array.prototype.slice.call(
      //   containerEl.querySelectorAll('.fc-event')
      // );
      // eventEls.forEach(function(eventEl) {
      //   new Draggable(eventEl, {
      //     eventData: {
      //       title: eventEl.innerText.trim(),
      //     }
      //   });
      // });

      /* initialize the calendar
      -----------------------------------------------------------------*/

      var calendarEl = document.getElementById('calendar');
      var calendar = new Calendar(calendarEl, {
            plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
            height: 'parent',
            header: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            editable: true,


            droppable: true, // this allows things to be dropped onto the calendar
            drop: function(arg) {
                  // is the "remove after drop" checkbox checked?
                  if (document.getElementById('drop-remove').checked) {
                        // if so, remove the element from the "Draggable Events" list
                        arg.draggedEl.parentNode.removeChild(arg.draggedEl);
                  }
            }
      });
      calendar.render();

});
