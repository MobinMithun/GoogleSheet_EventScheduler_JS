function oneDate(){
  // get Calendar ID
  let sheet = SpreadsheetApp.getActiveSheet()
  let id = SpreadsheetApp.getActive().getRangeByName("calendarID").getValue()
  
  // get Event data...the filter allows us to only get rows that contain data, and to exclude the checkbox in the filter

  let events = SpreadsheetApp.getActive().getRangeByName("EventList").getValues().filter(array => array.slice(0, -1).some(value => value !== ''));

  //single day event with just title and date
  events.forEach( function(e, index){
    if(!e[8]){
      CalendarApp.getCalendarById(id)
      .createAllDayEvent(
        e[0],
        e[1]);
      let newIndex = index+8;
      sheet.getRange("J"+ newIndex).setValue(true)
    }
  })
}
function twoDates(){
  // get Calendar ID
  let sheet = SpreadsheetApp.getActiveSheet()
  let id = SpreadsheetApp.getActive().getRangeByName("calendarID").getValue()
  
  // get Event data...the filter allows us to only get rows that contain data, and to exclude the checkbox in the filter
  let events = SpreadsheetApp.getActive().getRangeByName("EventList").getValues().filter(array => array.slice(0, -1).some(value => value !== ''));

  //single day event with just title and date
  events.forEach( function(e, index){
    if(!e[8]){
      CalendarApp.getCalendarById(id)
      .createAllDayEvent(
        e[0],
        e[1],
        e[2]);
      let newIndex = index+8;
      sheet.getRange("J"+ newIndex).setValue(true)
    }
  })
}

function withOptions(){
  // get Calendar ID
  let sheet = SpreadsheetApp.getActiveSheet()
  let id = SpreadsheetApp.getActive().getRangeByName("calendarID").getValue()
  
  // get Event data...the filter allows us to only get rows that contain data, and to exclude the checkbox in the filter
  let events = SpreadsheetApp.getActive().getRangeByName("EventList").getValues().filter(array => array.slice(0, -1).some(value => value !== ''));

  //single day event with just title and date
  events.forEach( function(e, index){
    if(!e[8]){
      CalendarApp.getCalendarById(id)
      .createAllDayEvent(
        e[0],
        e[1],
        e[2],
        {description: e[3],
        location:e[4],
        guests: e[5],
        sendInvites: e[6]})
      let newIndex = index+8;
      sheet.getRange("J"+ newIndex).setValue(true)
    }
  })
}

function recurrence(){
  // get Calendar ID
  let sheet = SpreadsheetApp.getActiveSheet()
  let id = SpreadsheetApp.getActive().getRangeByName("calendarID").getValue()
  
  // get Event data...the filter allows us to only get rows that contain data, and to exclude the checkbox in the filter
  let events = SpreadsheetApp.getActive().getRangeByName("EventList").getValues().filter(array => array.slice(0, -1).some(value => value !== ''));

  //single day event with just title and date
  events.forEach( function(e, index){
    if(!e[8]){
      let days = e[7]
      Logger.log(days)
      CalendarApp.getCalendarById(id)
      .createAllDayEventSeries(
        e[0],
        e[1],
        CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekday(CalendarApp.Weekday.THURSDAY)
        .until(e[2]));
      let newIndex = index+8;
      sheet.getRange("J"+ newIndex).setValue(true)
    }
  })
}

