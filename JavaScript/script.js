

var header = document.header;
const m = moment();
var m2 = m.format("dddd[,] MMM Do");
var m3 = m.format("YYYY");
$(currentDay).text(m2);

$(".info").each(function () {
  //get current hour and set it to a numbner
  var currentTimes = moment().hours();
  var currentTime = Number(currentTimes);

  //get id of paragraph and set it to a number
  var pId = $(this).children("div").children("p").attr("id");
  var numberId = Number(pId);

  //compare numberId to current time and set the background of the <textarea> depending on the current time

  if (numberId < currentTime) {
    //past
    $(this).children("textarea").addClass("past");
  } else if (numberId === currentTime) {
    //present
    $(this).children("textarea").addClass("present");
  } else {
    //future
    $(this).children("textarea").addClass("future");
  }
});

