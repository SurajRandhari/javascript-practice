var num1 = 20,
    num2 = 3,
    name = "Suraj Randhari"

function multiply() {
    console.log(num1 * num2);
}
multiply();

function getScore() {
    var num1 = 2,
        num2 = 3;

    function add() {
        return name + " scored " + (num1 + num2)
    }
    return add()
}

console.log(getScore());
 