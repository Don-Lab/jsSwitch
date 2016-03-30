//switch.html Javascript file

//use switch to select code block to run (like a conditional)

/*switch(expression) {
	case n:
		code
		break;
	case n:
		code
		break;
	case n:
		code
		break;
}*/

/*this makes an undefined variable "day" and has the variable 
say the day of the week depending on the case. The case is defined 
by the condition which creates a new Date() and has it .getDay() 
so that the counting starts at 0*/
var day;
switch (new Date().getDay()) {
	case 0:
		day = "Sunday"
		break;
	case 1:
		day = "Monday"
		break;
	case 2:
		day = "Tuesday"
		break;
	case 3:
		day = "Wensday"
		break;
	case 4:
		day = "Thursday"
		break;
	case 5:
		day = "Friday"
		break;
	case 6:
		day = "Saturday"
		break;
	default:            //default runs when no other case fits
		text="a day";
}
document.getElementById("switchDay").innerHTML = "Today is " + day;

var mon;
switch (new Date().getMonth()) {
	case 0:
		mon = "January"
		break;
	case 1:
		mon = "Febuary"
		break;
	case 2:
		mon = "March"
		break;
	case 3:
		mon = "Apirl"
		break;
	case 4:
		mon = "May"
		break;
	case 5:
		mon = "June"
		break;
	case 6:
		mon = "July"
		break;
	case 7:
		mon = "August"
		break;
	case 8:
		mon = "September"
		break;
	case 9:
		mon = "October"
		break;
	case 10:
		mon = "November"
		break;
	case 11:
		mon = "December"
		break;
	default:
		text = "a month";
}
document.getElementById("switchMon").innerHTML = "This Month is " + mon;

var hour;

switch (new Date().getHours()) {
	case 0:
		hour = "Midnight";
		break;
	case 1:
		hour = "1 am";
		break;
	case 2:
		hour = "2 am";
		break;
	case 3:
		hour = "3 am"
		break;
	case 4:
		hour = "4 am"
		break;
	case 5:
		hour = "5 am"
		break;
	case 6:
		hour = "6 am"
		break;
	case 7:
		hour = "7 am"
		break;
	case 8:
		hour = "8 am"
		break;
	case 9:
		hour = "9 am"
		break;
	case 10:
		hour = "10 am"
		break;
	case 11:
		hour = "11 am"
		break;
	case 12:
		hour = "Noon"
		break;
	case 13:
		hour = "1 pm"
		break;
	case 14:
		hour = "2 pm"
		break;
	case 15:
		hour = "3 pm"
		break;
	case 16:
		hour = "4 pm"
		break;
	case 17:
		hour = "5 pm"
		break;
	case 18:
		hour = "6 pm"
		break;
	case 19:
		hour = "7 pm"
		break;
	case 20:
		hour = "8 pm"
		break;
	case 21:
		hour = "9 pm"
		break;
	case 22:
		hour = "10 pm"
		break;
	case 23:
		hour = "11 pm"
		break;
}
document.getElementById("hours").innerHTML = "It is " + hour;

//Array and Date() practice
var week = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"];

var weekNum = new Date().getDay();

document.getElementById("week").innerHTML = week[weekNum];