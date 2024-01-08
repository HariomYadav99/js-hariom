// Immediately Invoked Fuction Expressions (IIFE)

(function chai(){ // named iife
    console.log(`DB CONNECTED`);
})();

((name) => {  // simple Iife
    console.log(`DB CONNECTED TWO ${name}`)
})("Hariom");
