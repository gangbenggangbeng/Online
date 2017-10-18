var interval = 1000; 
function ShowCountDown(year,month,day) 
{ 
var now = new Date(); 
var endDate = new Date(year, month-1, day); 
var leftTime=endDate.getTime()-now.getTime(); 
var leftsecond = parseInt(leftTime/1000); 
// console.log(leftsecond)
//var day1=parseInt(leftsecond/(24*60*60*6)); 
var day1=Math.floor(leftsecond/(60*60*24)); 
var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
// var cc = document.getElementById(divname); 
var days = document.getElementById("day"); 
var hours = document.getElementById("hour"); 
var min = document.getElementById("min"); 
var sec = document.getElementById("sec"); 
days.innerHTML = day1;
hours.innerHTML = hour;
min.innerHTML = minute;
sec.innerHTML = second;
} 
//调用
window.setInterval(
    function(){ShowCountDown(2017,10,24)
    ;}, interval); 