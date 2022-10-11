//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

//We will use moment(); to trigger the Date time
//First we use the name of the variable that is storing the id we want to target, then we use the .text() - is .text a property or method?
//and in the argument for Text ('we put the name of the variable that is triggering the moment method')

//Variable for the id we want to target

console.log(moment().hour())

var dayDisplay = $('#currentDay');

var currentDateTime = moment();


//But now we need to print it it the following format: Month (MMM), day of the Month(Do),year(YYY).
//We modify the body of the function
dayDisplay.text(currentDateTime.format("dddd, MMMM Do"));


//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future


var firstRow = document.getElementById("9");

if (9 < moment().hour()) {
    //add the class past and remove class future and class present
    firstRow.classList.add("past");
    firstRow.classList.remove("present");
    firstRow.classList.remove("future");
}
//We are grabbing each text area and finding the id
$("textarea").each(function () {
    console.log("here is the id")
    //Using jQuery to change the background color of the elements of the list

    console.log($(this).attr('id'));
    if ($(this).attr('id') < moment().hour()) {
        this.classList.add("past");
        this.classList.remove("present");
        this.classList.remove("future");
    }

    if ($(this).attr('id') == moment().hour()) {
        this.classList.add("present");
        this.classList.remove("past");
        this.classList.remove("future");
    }
    if ($(this).attr('id') > moment().hour()) {
        this.classList.add("future");
        this.classList.remove("past");
        this.classList.remove("present");
    }
})



//Function to make sure everything loads properly on the document

$(document).ready(function () {

    //Target the id that will store the event /Get values of description in jQuery
    $('.saveBtn').on('click', function () {
        //console.log("Hello World!");

  
        var textArea = $(this).siblings(".description")
        var time = textArea.attr("id");
        var text = textArea.val();

        //This is where he have to save the text to LocalStorage using "setItem"    
        localStorage.setItem(time, text);

        console.log(time)
    })

    $("#9 ").val(localStorage.getItem("9"));
    $("#10 ").val(localStorage.getItem("10"));
    $("#11 ").val(localStorage.getItem("11"));
    $("#12 ").val(localStorage.getItem("12"));
    $("#13 ").val(localStorage.getItem("13"));
    $("#14 ").val(localStorage.getItem("14"));
    $("#15 ").val(localStorage.getItem("15"));
    $("#16 ").val(localStorage.getItem("16"));
    $("#17 ").val(localStorage.getItem("17"));

});



