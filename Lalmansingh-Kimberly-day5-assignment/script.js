/*1. Two buttons are fighting with each other. When one is clicked, it says it is right
	when the other button is clicked, it says no that it is right*/
	document.getElementById("b1").addEventListener("click", function(e){
		document.getElementById('fight').innerText = "I'm right!";
	})

	document.getElementById("b2").addEventListener("click", function(e){
		document.getElementById('fight').innerText = "No, I'm right!";
	})


/*2. An element when hovered over sends the user an alert that says "hey i told you not to hover over me"*/
	document.getElementsByTagName('h1')[2].addEventListener("mouseover", function(e){
		alert("Hey, I told you not to hover over me!");
	})

/*3. When a key is pressed, the pressed key is displayed on the page*/
	document.querySelector("body").addEventListener("keypress", function(e){
	document.getElementsByTagName("h1")[1].innerText += e.key;
	})


/*4. user must ever a username that contains atleast 1 number, an email and a password. If there are any issues
	an alert will be displayed. If everything is good, the <h1> heading will change*/
	function formcheck(e) {
		e.preventDefault();
		var good = true;
		var password = document.querySelector("#password").value
		var username = document.querySelector("#username").value
		var re = /[0-9]/;

		if(password!="12345678"){
			alert("Incorrect Password!");
			good = false;
		}
		
		if(!username.match(re)){
			alert("Incorrect Username!");
			good = false;
		}
		if(good==true){
			document.getElementsByTagName("h1")[0].innerText = "All Good";
		}
	}
	document.querySelector("form").addEventListener("submit", formcheck)


