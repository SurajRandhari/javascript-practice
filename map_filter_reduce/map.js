const nums = [1,2,3,4]

const mapArray = nums.map((num) => num + 2)
console.log(mapArray);


//!----------- Polyfill for map ---------------

// Array.map((num, i , arr) => {})

Array.prototype.myMap = function (cb) {
    temp = []
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i]))
    }
    return temp
}

const myMapArray = nums.myMap((num) => num + 2)
console.log(myMapArray);
