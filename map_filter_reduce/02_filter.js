const nums = [1,2,3,4]

const filterArray = nums.filter((num) => num > 2)
console.log(filterArray);


//!----------- Polyfill for filter ---------------

Array.prototype.myFilter = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) (temp.push(this[i]))
    }
 return temp
}

const myFilterArray = nums.myFilter((num) => num > 2)
console.log(myFilterArray);
