const d = new Date();
document.getElementById("this").innerHTML = 'milliseconds since Jan 1, 1970 is: '+d.getTime();
document.getElementById("year").innerHTML = 'year is: '+d.getFullYear();
document.getElementById("month").innerHTML = 'This is the number '+(d.getMonth()+1) +' month of the year';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];
document.getElementById("list").innerHTML = 'the month of: '+month;

document.getElementById("hours").innerHTML = 'the hour of the day of: '+d.getHours();
document.getElementById("seconds").innerHTML = 'the seconds of the day of: '+d.getSeconds();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("numDay").innerHTML = 'the day of the week as number: '+d.getDay();
let day = days[d.getDay()];
document.getElementById("day").innerHTML = 'the day of the week: '+day;
document.getElementById("date").innerHTML = "the day of month: "+d.getDate();
document.getElementById("UTCDate").innerHTML = "the UTC date: "+d.getUTCDate();
d.setFullYear(2020)
document.getElementById("year-set1").innerHTML = "the new date is: "+d;
document.getElementById("year-set2").innerHTML = 'new year is: '+d.getFullYear();
d.setFullYear(2022, 4, 5);
document.getElementById("year-set3").innerHTML = 'new year is: '+d.getFullYear();
document.getElementById("year-set4").innerHTML = 'new date is: '+d;
d.setFullYear(2012);
d.setMonth(4);
d.setDate(01);
d.setDate(d.getDate() + 4);
d.setHours(03);
d.setMinutes(37);
d.setSeconds(0);
document.getElementById("year-set5").innerHTML = d;
d.setFullYear(2009);
d.setMonth(2);
d.setDate(02);
d.setHours(22);
d.setMinutes(1);
d.setSeconds(0);
document.getElementById("year-set6").innerHTML = d;

let displayText;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  displayText = "Today is before January 14, 2100.";
} else if (someday < today) {
  displayText = "Today is after January 14, 2100.";
} else {
  displayText = "Today is January 14, 2100.";
}

document.getElementById("display").innerHTML = displayText;