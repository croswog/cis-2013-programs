//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intNumber = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intNumber is a number and intCount is not less than 2 or intNumber not greater than 100
	
    if (isNaN(intNumber) || intNumber<2 || intNumber>100) // test validity of input
    {
		alert("Invalid input. You must enter a number between 2 and 100."); //alert user if input is invalid
        $("total_fib").value = ""; //blanks out html DOM input box
	}
    else
    {
        var i=0;  // sets the first number in the Fibonacci series to 0
        var j=1;  //sets the second number in the Fibonacci series to 1
        var k;    //k is calculated by adding i+j and represents the next Fibonacci number
        var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers

        // write whatever kind of loop you want, given the above info, to generate the appropriate
        // number of fibonacci numbers and then post it to the html DOM 
        var intCount; //declaring loop counter
    
        for (intCount = 2; intCount < intNumber; intCount++)
        {
            k = i + j; //find next number in the sequence
            stringOutput = stringOutput + k + " "; //add next number in the sequence to the stringOutput
            i = j; //set i value as the current j value
            j = k; //set j value as the current k value
        }
    
        // Push solution back to Output through DOM
    
        $("output").value = stringOutput;
    }
};

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};