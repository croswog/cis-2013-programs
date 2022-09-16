     var intMiles, floatGallons, floatMpg; //declaring variables
     intMiles = parseInt(prompt("Enter miles driven"));
     floatGallons = prompt("Enter gallons of gas used");
     floatGallons = parseFloat(floatGallons);
     floatMpg = parseFloat(intMiles/floatGallons); //Calculating mpg
     alert("Miles per gallon = " + floatMpg);