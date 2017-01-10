//1. add two variables and output to console
var num1 = 10;
var num2 = 20;
console.log(num1+num2);

//1. add two strings and output to console
var string1 = "Hello";
var string2 = "Hi";
console.log(string1+string2);

//2. multidimensional array created and prints two items to console
var dogs = ["beagle", "boxer", "pitbull", "yorkie"];
var insects = ["fly", "butterfly", "ladybug", "grasshopper" ];
var things = [dogs, insects];
console.log(things[0][0]);
console.log(things[1][0]);

//3. user enters a number and it alerts the user if it is greater or less than 100
var number = prompt("Enter a number: ");
if(number<100){
	alert("Your variable is less than 100.");
}
else if(number>100){
	alert(number + " is greater than 100");
}

//5. users inputed string is compared to another string and they are alerted if they are the same or not
var string3 = prompt("Enter a string: ");
var string4 = "Hello World";
if (string3 === string4){
	alert("Strings are equal");
}
else{
	alert(string3 + " is not equal to " + string4);
}

//6. user enters a name and functions returns the name that was entered 
function func1(name) {
	return console.log("You entered:" + name);
}

var username = prompt("Enter a name: ")
func1(username);

//7. function prints to console without arguments
function func2(){
	return console.log("Printing something")
}

func2();

//8. user is prompted to choose a door, function returns an alert to
//user saying what door was chosen and what prize they won 
function func3(door){
	if(door=="1"){
		return alert("You have chosen door #1 and won a puppy.")
	}

	if(door=="2"){
		return alert("You have chosen door #2 and won a new car.")
	}

	if(door=="3"){
		return alert("You have chosen door #3 and won $5.")
	}
}

var chosendoor = prompt("Choose door 1, 2, or 3: ");
func3(chosendoor);