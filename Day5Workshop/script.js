	function formcheck(e) {
		e.preventDefault();
		console.log(e);

		var password = document.querySelector("#password").value
		if(password!="12345678"){
			alert("Incorrect Password!")
		}
		
		var username = document.querySelector("#username").value
		//var re = /\d/;
		//if(/\d/.test(username)){
		//	alert("ok")
		}
		//else{
		//	alert("Must contain a number!")
		//}

		//else{
		//	
		//	document.querySelector("h1").innerText = "hi" + username;
		//	}

document.querySelector("form").addEventListener("submit", formcheck)



document.querySelector("body").addEventListener("keypress", function(e){
	e.preventDefault();
	var letter = e.key;
	document.querySelector("h1").innerText = letter;
})
	

