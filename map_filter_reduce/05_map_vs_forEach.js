const arr = [2,4,6,8,5,3]

// map
const mapOutput = arr.map((num) => num + 2)
console.log(mapOutput);

// const mapOutput = arr.map((num) => num + 2).filter   ====> it is support 'chianing'





// filter
const forEachOutput =  arr.forEach((num) => num + 2 )
console.log(forEachOutput);  //it is not return anything

// const forEachOutput =  arr.forEach((num) => num + 2 ).filter  ====> it doesn't support 'chianing'


const forEachOutput2 =  arr.forEach((ar, i) => {
    arr[i] = ar + 3        //it is modifying main array
} )

console.log(arr);
