console.log("script.js connected");


function userPrompt (){
	var firstName = prompt("Enter Your First Name","John Doe");
	if (firstName!=null){
		alert("Name length is " +firstName.length);
		printName(firstName);
		checkForA(firstName);
	}
	else{
		alert("Enter Valid Name");
	}
};

function printName (normalName){
	document.getElementById("nameTextBox").value = "Uppercase Name: "+normalName.toUpperCase();
	document.getElementById("nameTextBox").value += "\n";
	document.getElementById("nameTextBox").value += "Lowercase Name: "+normalName.toLowerCase();


}

function checkForA(firstName){
	if (firstName.lastIndexOf('a')!==-1)
		{
			alert("a found");
		}
	else{
			alert("a not found");
		}
}