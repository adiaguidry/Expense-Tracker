//students score, total possible score
// 15/20 --> you got a C (75%) and all the other grade ranges A, B, C, D, F
let gradedScore = function (total, studentTotal) {
    let result = (studentTotal / total) * 100;
    let Lettergrade = "";

    if(result >= 90){
       Lettergrade = "A";
    }else if(result >= 80){
        Lettergrade = "B";
    }else if(result >= 70){
        Lettergrade = "C";
    }else if( result >= 60){
        Lettergrade = "D";
    }else{
        Lettergrade = "F";
    }
    return `You got an ${Lettergrade} your score was ${result}`;

}

let grade = gradedScore(100, 43);
console.log(grade);