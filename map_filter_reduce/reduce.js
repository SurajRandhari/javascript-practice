const nums = [1, 2, 3, 4]

// const reduceArray = nums.reduce((acc, cur) => acc + cur)
const reduceArray = nums.reduce((acc, cur) => {
    return acc + cur
}, 0) // 0 is initials values
console.log(reduceArray);


