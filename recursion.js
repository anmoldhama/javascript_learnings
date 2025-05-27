// find factorial of 5

// function factorial(n){
//     let result;
//     if(n == 1){
//         return 1;
//     }

//     result = n * factorial(n-1);
//     return result;
// }


// console.log(factorial(5));



// fibonacci

// function fib(n){
    
//     if(n == 0){
//         return 0;
//     }

//     let result = fib(n) + fib(n-1);

//     return result;
// }

// console.log(fib(5));



// print all natural numbers in ascending order


//  function order(n){
    
//     if(n == 0){
//         return ;
//     }
    
//     console.log(n);
//     order(n-1);

//  }

// order(5);


// count the number of binary without consecutive ones

// function count(n){
//     if(n == 0){
//         return 1;
//     }

//     if(n == 1){
//         return 2;
//     }

//     let result = count(n-1) + count(n-2);
//      return result;
// }

// console.log(count(3));


// count(5)

//    count(5) + count(4)
//    9           8
//    count(4) + count(3)
//    7          6
//    count(3) + count(2)
//    //5        //4
//    count(2) + count(1)
//     //3          //2


// setTimeout(() => console.log("2"), 0);
// setImmediate(() => console.log("1"));
// Promise.resolve().then(() => console.log("3"));
// console.log("4");  // 4 3 1 2

const fs = require("fs");

setTimeout(() => console.log("2"), 0);
fs.readFile(__filename, () => console.log("1"));
setImmediate(() => console.log("3")); 
fs.readFile(__filename, () => console.log("4"));

