/*Program Name: Recipe Display Application 

Author: Kelly Koeppel 

Date: 11/12/15

Filename: script.js
*/
/**
* Created with LIS2360_Lesson8_jQuery.
* User: Kellyk1995
* Date: 2015-11-12
* Time: 05:32 PM
* To change this template use Tools | Templates.
*/

function display(event){
    $(event.currentTarget).next().fadeIn("slow");
}//end of display()

/*
$("h3").click(display);
*/ 

function display2(event) {
    $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
}

/*
$("h3").click(display2);
*/
$("h3").hover(display2);
$("h3").hover(function(){
    $(this).css("background-color", "yellow");
}, function(){
    $(this).css("background-color", "pink");
});