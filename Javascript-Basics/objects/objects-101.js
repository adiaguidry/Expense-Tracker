let myBook = {
    // properties piece of date stored on an object
    title: "Bible",
    author: "Jesus",
    pageCount: 500,
}

console.log(`${myBook.title} by ${myBook.author}`);

//change the object property

myBook.title = "Every day life"
console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area person, name, age, loction

let firstPerson = {
    name: "Adia",
    age: 35,
    location: "Colorado Springs",    
}

let secondPerson = {
    name: "Amaka",
    age: 30,
    location: "Murrieta", 
}


let getOlder = function (person) {
    person.age++;
    console.log(`you are now ${person.age}`);
}
console.log(firstPerson);

getOlder(firstPerson);

// functions that return a value

let getBio = function (person) {
    return {
        nameLoc: `You are ${person.name} and you love living in ${person.location}`,
        nameAge: `Hi I am ${person.name} and I am ${person.age} years old`
    }
}

let firstBio = getBio(firstPerson)
let secondBio = getBio(secondPerson)

console.log(firstBio.nameAge)

console.log(secondBio.nameLoc)