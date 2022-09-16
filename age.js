var floatAge, floatDays, intWeeks, floatMonths, intFortnights; //declaring variables
floatAge = parseFloat(prompt("Enter your age")).toFixed(2);
floatDays = parseFloat(floatAge * 365.25).toFixed(2);
floatMonths = parseFloat(floatAge * 12).toFixed(2);
intWeeks = parseInt(floatDays / 7);
intFortnights = parseInt(floatDays / 14);
alert("your age in years: " + floatAge + "\n" +
	  "your age in days: " + floatDays + "\n" +
	  "your age in months: " + floatMonths + "\n" +
	  "your age in weeks: " + intWeeks + "\n" +
	  "your age in fortnights: " + intFortnights);