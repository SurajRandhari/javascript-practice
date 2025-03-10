const nums = [1, 2, 3, 4]

// const reduceArray = nums.reduce((acc, cur) => acc + cur)
const reduceArray = nums.reduce((acc, cur) => {
    return acc + cur
}, 0) // 0 is initials values
console.log(reduceArray);

//!----------- Polyfill for Reduce ---------------

// nums.reduce((acc, cur, i, arr) => {}, initialValue)

Array.prototype.MyReduce = function (cb, initialValue) {
    var accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this):this[i];
    }
    return accumulator;

}

const myReduceArray = nums.MyReduce((acc, cur) => {
    return acc + cur
}, 0) // 0 is initials values
console.log(myReduceArray);

