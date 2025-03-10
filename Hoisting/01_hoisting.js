

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
    let b = 10;
    var a = 10;
}

temporalDeadzone()