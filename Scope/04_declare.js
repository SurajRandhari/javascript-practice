// ------------------------var-------------------------------------------
// var can re-declare
var a;
var a;

console.log(a);

// ------------------------let-------------------------------------------
// let cannot re-declare
let b;
// let b; //Cannot redeclare block-scoped variable 'b'

console.log(b);


let ba; 
{
    let ba;    // it is correct because variable shadow
}

// ------------------------const-------------------------------------------
//const also canont re-declare

// const c; //also 'const' declarations must be initialized

const c= 10;
// const c= 10;

console.log(c);


