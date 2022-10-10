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

//Code to get the id
//$('#').click(function(e){
//  alert(e.currentTarget.id);
//}); 



//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//The classes are ALREADY created with the background color .past .present .future

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






//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage



//$.fn.saveBtn=function(){
  //  console.log("Hello World")
//}

//10/Function to make sure everything loads properly on the document

$(document).ready(function(){


    //WHEN I click into a timeblock
//THEN I can enter an event
//Target the id that will store the event /Get values of description in jQuery

    $('.saveBtn').on('click', function () {
    //console.log("Hello World!");
 
    //MONDAY OCT 10
    
    var text = $(this).siblings(".description").val();
     var time = $(this).parent().attr("id");
//This is where he have to save the text to LocalStorage using "setItem"    
localStorage.setItem(time,text);

console.log(time)

})
//WHEN I refresh the page
//THEN the saved events persist
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));



}); 

