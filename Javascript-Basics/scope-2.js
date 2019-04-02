// Global Scope (varOne)
// Local Scope (varTwo)
    // Local Scope (varFour)
// Local Scope (varThree)

let name = "Adia";

if (true) {
    let name ="Jerrod";
    if (true) {
        name="Gavin";
        console.log(name);    }
}

if (true) {
    console.log(name);
}

//be carful not create an accidental global.. leaving out the let 
//and declaring it in the if statment name = "";