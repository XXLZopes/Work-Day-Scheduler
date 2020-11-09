//array to hold locally stored textarea content
var savedTextAreaContent = {};

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

//save to local storage
function saveToLocalStorage() {
  localStorage.setItem("textArea", JSON.stringify(savedTextAreaContent));
}

//retreave from local storage
function getFromLocalStorage() {
  if (localStorage.getItem("textArea")) {
    savedTextAreaContent = JSON.parse(localStorage.getItem("textArea"));
  }
}

//set text array value to text area 
function setTextContent() {
  for (const [key, value] of Object.entries(savedTextAreaContent)) {
    $("#" + key).val(value);
  }
}

//function to add textarea content to savedTextAreaContent array
$(".info").on("click", ".saveBtn", function () {
  //target the textarea tag that is asociated with the clicked save button
  var targetTextArea = $(this).parent(".info").children("textarea");
  console.log(targetTextArea.attr("id"));
  savedTextAreaContent[targetTextArea.attr("id")] = targetTextArea.val();
  console.log(savedTextAreaContent);
  saveToLocalStorage();
});

$(document).ready(function () {
  getFromLocalStorage();
  setTextContent();
});
