//conversion of the temp
let fahrenheit = 32;
let celsius = (fahrenheit-32) * 5 / 9;
let kelvin = (fahrenheit+ 459.67) * 5 / 9;



console.log(celsius + " " + kelvin);
let temp = 31;
//boolen === equality operator
// !== not equal operator
let isFreezing = temp === 31;

console.log(isFreezing);

//challenge area : under 7 or over 65 get discounts  

let age = 7;
let child = age <=7;
let senior = age >= 65;

if(child || senior){
    console.log("you get a discount!");
} else{
    console.log("regular price for you.");
}

//chalenge area
let isGuestOneVegan = true;
let isGuestTwoVegan = true;

//Are both vegan? Only offer vegan dish
//At least one vegan? Make sure to offer up some vegan options.
//Else, offer up anything on the menu

if(isGuestOneVegan && isGuestTwoVegan){
    console.log("would you both like some grass tonight?");
} else if(isGuestOneVegan || isGuestTwoVegan){
    console.log("We offer a full menu and some grass options");
} else{
    console.log("Here's our full menu, enjoy!");
}



























