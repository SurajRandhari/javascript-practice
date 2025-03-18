// VAR vs let
// VAR is function scoped
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
        
    }, i*1000);
    
}

// LET is block scoped

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
        
    }, i*1000);
    
}