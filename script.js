// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
});

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
var time = dayjs().format('hh:mm:ss');
$('#currentTime').text(time);


$('.saveBtn').on('click', function () {
  var description = $(this).siblings('.description').val();
  var timeSlot = $(this).parent().attr('id');

  //local storage
  localStorage.setItem(timeSlot, description);
});

$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

$(".time-block").each(function () {
  var timeBlock = $(this).attr("id").split("-")[1];
  
  if (currentHour == timeBlock) {
    $(this).addClass("present");
    $(this).children(".description");
  } else if (currentHour < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentHour > timeDiv) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});
