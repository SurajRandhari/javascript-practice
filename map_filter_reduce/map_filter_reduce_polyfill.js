const nums = [1, 2, 3, 4]

// map

Array.prototype.myMapPoly = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++){
        temp.push(cb(this[i]))
    }
    return temp
}

const myMapPolyArray = nums.myMapPoly((num) => num + 2)
console.log(myMapPolyArray);

//filter

Array.prototype.myFilterPoly = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)) temp.push(this[i])
    }
    return temp
}

const myFilterPolyArray = nums.myFilterPoly((num) => num > 2)
console.log(myFilterPolyArray);

//Reduce

Array.prototype.myReducePoly = function (cb, initialValue) {
    accumulator = initialValue
    for (let i = 0; i < this.length; i++) {
       accumulator = accumulator ? cb(accumulator, this[i], i, this):this[i];
    }
    return accumulator
}

const myReducePolyArray = nums.myReducePoly((acc, cur) => acc + cur)
console.log(myReducePolyArray);
