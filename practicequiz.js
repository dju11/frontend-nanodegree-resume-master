var countries = ['argentina', 'china', 'england']; 

// use a forEach loop


var countrys = {
	"country1": "Argentina",
	"country2": "China"

}; 

//use a for-in loop to iterate - be sure to wrap the content of the for-in loop in a conditional statement to test if the key is part of the object 
//can be used for just a regular array too however 

myObj = { 
	"country1": "Argentina",
	"country2": "China"
}; 

for (key in myObj) { 
	if (myObj.hasOwnProperty(key)){
		console.log(myObj[key]); 
	}
}