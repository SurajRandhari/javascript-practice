
var x = 28; // global scope

var func = function() {
    console.log(x);
    var x = 55;  // local scope
    console.log(x);
}

func(); 
//OUTPUT: undefined, 55