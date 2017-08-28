console.log("script.js connected");

function evaluateChoice(){
	
	console.log("evaluateChoice entered");
	var input = prompt("Enter a number less than 10","4");
	input = parseInt(input);

	if (input<1){
		alert("Error. Enter value more than 0");
		return null;	
	}

	if(document.getElementById("fact").checked==true)
	{
		alert("Factorial: "+doFactorial(input));

	}
	else
	{
		alert("Multiplication: "+doMultiplication(input));
	}

}

function doFactorial(input){

	var factorial = 1;
	while (input>1){
		factorial*=input;
		input--;
	}
	return factorial;
}

function doMultiplication(input){
	console.log("Inside Do multiplication function");
	return "Coming Soon";
}

console.log("script.js complete");