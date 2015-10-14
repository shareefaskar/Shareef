console.log("hello world")

var person = {
	alien:false,
	firstName:"Shareef",
	lastName:"Askar",
	age:27,
	hairColor:"black"
}

function MyInformation (ddd) {
	if (person.alien == true){
			console.log("Oh my God! He is an alien!");
			
	} else { 
			console.log(person);
			console.log ("He's a human.") 
	}
}


MyInformation ('ddd') 