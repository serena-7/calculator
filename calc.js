const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	console.log("mathSymbol: ", mathSymbol);
	console.log("num1: ", num1);
	console.log("num2: ", num2);
	console.log("num3: ", num3);

	if (mathSymbol === '+'){
		if(isNaN(num3)){
			answer = num1 + num2;
		} else {
			answer = num1 + num2 + num3;
		}
	} else if (mathSymbol === '-'){
		if(isNaN(num3)){
			answer = num1 - num2;
		} else {
		answer = num1 - num2 - num3;
		}
	} else if (mathSymbol === '*'){
		if(isNaN(num3)){
			answer = num1 * num2;
		} else {
		answer = num1 * num2 * num3;
		}
	} else if (mathSymbol === '/'){
		if(nisNaN(num3)){
			answer = num1 / num2;
		} else {
		answer = num1 / num2 / num3;
		}
	} else if (mathSymbol === 'sqrt'){
		answer = Math.sqrt(num1);
	} else if (mathSymbol === 'sq'){
		answer = Math.pow(num1, 2);
	} else if (mathSymbol === 'cu'){
		answer = Math.pow(num1, 3);
	} else if (mathSymbol === 'pow'){
		answer = Math.pow(num1, num2);
	} else if (mathSymbol === '%'){
		answer = num1 % num2;
	}
	else{
		answer = "invalid";
	}

	console.log("answer: ", answer);
	// This line closes the connection to the command line interface.
	reader.close()

});