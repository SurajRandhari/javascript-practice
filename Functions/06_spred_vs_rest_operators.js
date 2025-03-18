function multiply(num1, num2) {
    console.log(num1 * num2);
}
multiply(4, 5); 


// --------Spred Operator--------
function multiplySpr(num1, num2) {
    console.log(num1 * num2);
}

var arr = [4, 5];
multiplySpr(...arr);   //--------> Spred Operator
// --------Spred Operator--------

// --------Rest Operator--------
function multiplyRes(...nums) { //--------> Rest Operator
    console.log(nums);
    console.log(nums[0] * nums[1]);
}

var arr = [4, 5];
multiplyRes(...arr);   
// --------Rest Operator--------