// const fn = (a, ...numbers, x, y) => { //A rest parameter must be last in a parameter list
const fn = (a, x, y, ...numbers) => { 
    console.log(x,y, numbers);  
}

fn(1, 2, 3, 4, 5); // Error: Rest element must be last element in function parameters