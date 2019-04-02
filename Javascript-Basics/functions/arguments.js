let add = function (a, b) {
    return a + b;

}

let result = add(10,25);

console.log(result);

// Default agruments 
let getScoreText = function (name = 'Anonymous' , score = 0) {
    console.log(name);
    console.log(score);
    return 'Name: ' + name + '-Score: ' + score;

}

getScoreText(null, 100);

// chanllege area tip calculator function takes 2 arguments total bill, tip %
// could set a default tip % 

let tipCalculator = function (total, tip = .2) {
    let percent = tip * 100;
    let tipTotal = total * tip;
    return `the ${percent}% tip toal is $${tipTotal}`;
}

let tip = tipCalculator(54, .35);
console.log(tip);