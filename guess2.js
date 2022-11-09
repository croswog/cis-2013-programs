/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intLoopCount, intEnterProgram;
const SENTINEL = -9999; //set sentinel value to end program loop

intEnterProgram = parseInt(prompt("Type any number to enter the program or type -9999 to exit"));

/* This loop will continue looping until the user enters the sentinel value to end the program
 * The loop increments the loop counter intLoopCount in order to track the number of repetitions to output in the final alert message
 * The entire loop counter program is nested in this loop
 */

for (intLoopCount = 1; intEnterProgram !== SENTINEL; intLoopCount++) //set loop counter, set condition, increment loop counter
{
	
	var intMax, intMin, intRandom, intGuess, intCount, intPoints, intMaxPoints;


	/* the following section prompts the user to enter the low number of their guessing range
	* and then validates that the user entered an actual number and make sure that the
	* number is at least 0.
	*/

	intMin = parseInt(prompt("Choose the lower number for the guessing game"));

	while (isNaN(intMin) || intMin < 0) //validates the input given is a number and greater than zero
	{
		intMin = parseInt(prompt("Oops! You need to enter a number greater than 0. Please try again!"));
	}


	/* the following section prompts the user to enter the high number of their guessing range
	* and then validates that the user entered an actual number and make sure that the
	* number is at least 2 more than the minimum (so that there is some guessing involved).
	*/

	intMax = parseInt(prompt("Choose the higher number for the guessing game"));

	while (isNaN(intMax) || intMax < (intMin + 2)) //validates the input given is a number and at least 2 greater than intMin
	{
		intMax = parseInt(prompt("Oops! You need to enter a number at least 2 more than the minimum value of " + intMin + ". Please try again!"));
	}


	/*The following line of code generates the random number to be used in the guessing game.
	* Math.floor rounds the random number down to the nearest integer
	* Math.random() generates a random number between 0 and 1
	* the portion of (intMax-intMin +1) provides the range of random values
	* the addition of + intMin provides the floor for the random number 
	*/

	intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin); //determines the random number within the number range given


	/* the following section prompts the user to enter their guess
	* and then validates that the user entered an actual number and makes sure that the
	* number is between the allowed max and min number choices.
	*/

	intGuess = parseInt(prompt("Choose a number between " + intMin + " and " + intMax + " for your first guess!"));

	while (isNaN(intGuess) || ((intGuess < intMin) || (intGuess > intMax))) //validates that the input is a number and between intMin and intMax
	{
		intGuess = parseInt(prompt("Oops! You need to enter a number between " + intMin + " and " + intMax + ". Please try again!"));
	}


	/* The following section provides the main loop and logic for the program.
	* The user's guess is compared to the randomly generated number and feedback
	* is given based upon whether the guess is higher or lower. The loop exits when
	* the user chooses the correct number. Each time through the loop updates the loop counter.
	*/

	for (intCount = 1; intGuess !== intRandom; intCount++) //set loop counter, sets condition, increments loop counter
	{
		if (intGuess < intRandom)
		{
			alert("Guess is too low."); //give the user feedback that intGuess < intRandom
			intGuess = parseInt(prompt("Choose a number between " + intMin + " and " + intMax + " for guess number " + (intCount+1) + "!"));
			while (((intGuess < intMin) || (intGuess > intMax)) || isNaN(intGuess))
			{
				intGuess = parseInt(prompt("Oops! You need to enter a number between " + intMin + " and " + intMax + " for guess number " + (intCount+1) + ". Please try again!"));
			}
		}
		else
		{
			alert("Guess is too high."); //give the user the feedback that intGuess > intRandom
			intGuess = parseInt(prompt("Choose a number between " + intMin + " and " + intMax + " for guess number " + (intCount+1) + "!"));
			while (((intGuess < intMin) || (intGuess > intMax)) || isNaN(intGuess))
			{
				intGuess = parseInt(prompt("Oops! You need to enter a number between " + intMin + " and " + intMax + " for guess number " + (intCount+1) + ". Please try again!"));
			}
		}
	}


	/* The following section determines the points a user has earned.
	* The user's guess count is compared to the range of numbers choosen
	* including both the lower limit and upper limit. Adding 1 to intMax-intMin is necessary for this
	* If the number was correctly guessed after one guess, the user gets full points.
	* If the number was correctly guessed after all possibilities are exhausted, the user gets no points.
	* If the number was correctly guessed after more than one guess, but used less than the maximum number of guesses,
	* the number of guesses made is subtracted from ((intMax-intMin)+1).
	 */

	intMaxPoints = parseInt((intMax-intMin)+1);

	if (intCount === 1) //guessed in one try
	{
		intPoints = parseInt(intMaxPoints);
	}
	else if (intCount === intMaxPoints) //guessed correctly after all possibilities are exhausted
	{
		intPoints = parseInt(0);
	}
	else //guessed in more than one try but less than maximum guesses
	{
		intPoints = parseInt(intMaxPoints-intCount);
	}

	// provides final output upon successful guessing
	alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts! \n You have earned " + intPoints + " points out of " + intMaxPoints + " potential points!");
	
	intEnterProgram = parseInt(prompt("Type any number to play again or type -9999 to exit")); //determine whether or not the user wants to play again
}

var intGamesPlayed = parseInt(intLoopCount - 1); //how many times did the user repeat the game
alert("You have ended the game. You played the game " + intGamesPlayed + " times! Refresh your browser to play again."); //final output message after the sentinel value loop ends
