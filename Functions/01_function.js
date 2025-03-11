// ----------- function Declaration -----------

function addFn(num) {
    console.log(num * num);
}
// addFn(10)


//----------- Function Expression -----------
// When you store a function inside a variable it is a called function Expression

const expFn = (num) => {
    console.log(num * num);
}
// expFn(5)

//----------- first Class functions -----------
// function that are treated like a variable, like cases- functions can pass into another functions can be used , manupulated and return from those function , 
//like- whatever a variable can do funvtion can also do called first class function

function sqare(num) {
    return num * num
}

function displayFunction(fn) {
    console.log("Square is " + fn(5));
}

// displayFunction(sqare)

//----------- IIFE -----------

// function iifeFn(num) {
//     console.log(num * num);
// }
// iifeFn(2)

(function iife(num) {
    console.log(num * num);
})(5);

// -IIFE - O/P Questions

(function (x) {
    return (function (y) {
        console.log(x);    
    })(2)
})(1)
