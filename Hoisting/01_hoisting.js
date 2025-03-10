

console.log(count);
var count = 1;

// console.log(count2); // Cannot access 'count2' before initialization
// let count2 = 2;


//Temporal Dead Zone - time between the declaration and initialisation of let and const

function abc() {
    console.log(a);

    var a = 10;
}

abc()



function temporalDeadzone(){
    console.log(a,b,c);

    const c = 10;
    let b = 10;  //Cannot access 'b' before initialization
    var a = 10;  //Cannot access 'b' before initialization
}

temporalDeadzone()

// Note: here  b & c (let & const) are not hoisted like a (var) but they are hoisted on Temporal Dead Zone
//Temporal Dead Zone -  where variables are in the scops but they have been not declares yet. 