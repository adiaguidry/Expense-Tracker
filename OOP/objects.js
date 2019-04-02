//Creating literal objects
var userOne = {
//properties and methods
	email: "Jerrod@gmail.com",
	name: "Jayman",
	login(){
		console.log(this.email)
	}
};

// Class

class User{
	constructor(email, name){
		this.email = email;
		this.name = name;
		this.score = 0;
	}
	login(){
		console.log(this.name + " just logged in");
		return this;
	}
	logout(){
		console.log(this.name + " just logged out");
		return this;
	}
	updateScore(){
		this.score++;
		console.log(this.email, "score is now " + this.score);
		return this;
	}
}

// class inheritance

class Admin extends User {
	deleteUser(user){
		users = users.filter(u => {
			return u.email != user.email
		})
	}
}

console.log(userOne);

var userTwo = new User("adia@gmail.com", "Adia");
var userThree = new User("noah@yahoo.com", "Noah");

userThree.login().updateScore().updateScore().logout();


var adminOne = new Admin("admin@gmail", "Conny");

console.log(adminOne);

var users = [userOne, userTwo, userThree, adminOne];

adminOne.deleteUser(userThree);

console.log(users);


// Prototype Objects

function Body(height, weight, size) {
	 this.height = height;
	 this.weight = weight;
	 this.size = size;
}


// the methods are added through prototypes

Body.prototype.weightLoss = function(){
	this.weight --;
	console.log(this.weight);
}

var bodyOne = new Body ("5'8", "137", "size 2");

console.log(bodyOne);

bodyOne.weightLoss();

// prototype inheritance , adds onto the Body object ...args turns it into an array

function Diet(...args){
	Body.apply(this, args);
	this.food = ["fats","protien","carbs"];
}


var newBody = new Diet("5'7", "145", "size 4");


console.log(newBody.height);

if (newBody.height !== "5'7"){
	alert("yes");
} else{
	alert("nope");
}




var kiddos =["Noah", "Gavin", "Levi", "Julian", "Adrian"];

kiddos.forEach(function(kid){
	var x = kid; 
	console.log(x)
});




























