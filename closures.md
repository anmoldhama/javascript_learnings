
# Fluent Interface / Method Chaining Pattern

function generic(number) {
    return {
        multiply(n) {
            number = number * n;
            return this; // ✅ return object to allow chaining
        },
        mod(n) {
            number = number % n;
            return this; // ✅
        },
        value() {
            return number; // ✅ return the final result
        }
    };
}



# For Immutability

function generic(number) {
  return {
    multiply(n) {
      return generic(number * n);
    },
    mod(n) {
      return generic(number % n);
    },
    value() {
      return number;
    }
  };
}

let result = generic(5).multiply(2).mod(3).value(); // Output: 1

#  currying



function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }else{
            return function (...nextArgs){
                return curried(...args,...nextArgs);
            }
        }
    }
};

function sum(a, b, c) {
  return a + b + c;
};


const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)(4));      // 6
console.log(curriedSum(1, 2)(3));      // 6
console.log(curriedSum(1)(2, 3));      // 6
console.log(curriedSum(1, 2, 3));

// console.log(sum(2)(4)(6));
// sum(2,3,4,5)(2,3,4)(4)



more generic version


function superCurry(fn) {
  let allArgs = [];

  function curried(...args) {
    if (args.length === 0) {
      return fn(...allArgs); // 👈 Final call: return computed result
    }

    allArgs.push(...args); // Collect arguments
    return curried;        // Return self for chaining
  }

  return curried;
}


function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

const total = superCurry(sum);

console.log(total(2, 3)(4)(5, 6)(7)());  // 27
console.log(total(10)(20, 30)(40)());   // 100

 



# Basic Closure Questions
Q.1) Write a function counter() that returns a function which increments and returns a count.

function closure(){
    
    let count = 0;
    
    return function increment(){
        count++;
        return count;
    }
}

let counter1 = closure();
console.log(counter1());

let counter2 = closure();
console.log(counter2());

Q.1) Implement a function once(fn) that allows the passed function to be called only once.

function once(fn){
    let called = false;
    let result;
    return function(...args){
        if(!called){
            result = fn.apply(this,args);
            called = true;
        }
        return result;
    }
}


function sum(a,b){
    return a+b;
}

let result = once(sum);

console.log(result(1,2));
console.log(result(6,7));


Q.1) Create a function addBy(x) that returns a new function which adds x to its input.
ans : 
function addBy(x){
    return function(y){
        return x+y;
    }
}

let result = addBy(2);
console.log(result(3));

Q.1) Implement a logger(message) that logs the message with a timestamp when called later.
function logger(message){
     console.log(message);
};

function calledLater(fn,time){
   return setTimeout(()=>{
        fn('this is a message!');
    },time);
   
}

let result = calledLater(logger,1000);

Q.1) What will be the output of this code?

function foo() {
  let x = 10;
  return function() {
    console.log(x);
  }
}

let a = foo();
x = 20;
a(); // ?    --->  10


🧪 Closure with State
Q.1) Create a bankAccount() function that returns an object with deposit, withdraw, and balance.
ans : 
function bankAccount(number){
    return{
        deposit(n){
            number = number + n;
            return this;
        },
        withdraw(n){
            number = number - n;
            return this;
        },
        balance(){
            return number;
        }
    }
}

let result = bankAccount(2000).deposit(200).withdraw(100).balance();
console.log(result);

Q.1) Create a function createPasswordValidator(minLength) that returns a function to validate a password based on that length.
ans :
function createPasswordValidator(minLength){
    
    return function(password){
        if(password.length >= minLength){
            return true;
        }
        return false;
    }
};


let result = createPasswordValidator(5);

console.log(result('anmol'));

Q.1) Write a memoize(fn) function that caches the results of the function based on inputs.
ans : 
function memoize(fn){
    let cache = {};
    
    return function (...args){
        let key = JSON.stringify(...args);
        if(cache[key]){
            console.log('from cache');
            return cache[key];
        }
        console.log('Calculating');
        let result = fn(...args);
        cache[key] = result;
        return result;
    }
}

function sum(a,b){
    return a+b;
}

let result = memoize(sum);
console.log(result(1,2));
console.log(result(1,2));
console.log(result(3,5));
console.log(result(1,2));


Q.1) Implement a timer() function that counts seconds and can pause() or reset() using closures.
ans : 
function timer(){
    
    let seconds = 0;
    let timerId = null
    
    return{
        start(){
            timerId = setInterval(()=>{
             seconds++;
             console.log(seconds);
            },1000);
        },
        pause(){
            clearInterval(timerId);
            timerId = null;
            console.log('paused');
        },
        reset(){
            seconds = 0;
            timerId = null;
            console.log('Timer reset');
        },
        get(){
            console.log(seconds);
            return seconds;
        }
    }
};


let result = timer();

result.start();

setTimeout(()=>{
    result.pause();
    result.get();
},5000);

setTimeout(()=>{
    result.reset();
},6000);


Q.1) Create a function createRangeChecker(min, max) that returns a function to check if a number is in range.

🔄 Closures in Loops
Q.1) Fix this code to log 0 to 4 instead of 5 five times:

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

Q.1) What will this output?

const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs[0](); funcs[1](); funcs[2](); // ? 3 , 3 , 3


Q.1) Create a function repeatMessage(msg, times) that returns a function which logs the message times times using a closure.

function repeatMessage(msg,times){
    return function(){
        for(let i = 0; i<times; i++){
            console.log(msg);
        };
        
    }
};

let result = repeatMessage('hello',5);
result();

⚙️ Function Factory Patterns
Q.1) Create a makeMultiplier(factor) function that returns a multiplier function.
ans : 

function makeMultiplier(factor){
    return function(number){
        return number * factor;
    }
};


let result = makeMultiplier(2);

console.log(result(5));
console.log(result(6));


Q.1) Write a createCalculator(initialValue) that allows chaining of .add(n), .subtract(n), and .value() like your generic() example.
ans :
function createCalculator(number){
    
    return{
        add(n){
            number = number + n;
            return this;
        },
        subtract(n){
            number = number - n;
            return this;
        },
        value(){
            return number;
        }
    }
}

let initialValue = 5;

let result = createCalculator(initialValue).add(3).subtract(2).value();
console.log(result);

Q.1) Implement a onceAsync(fn) that ensures an async function is only executed once.
ans :
  function onceAsync(fn){
        let called = false;
        let result;
        return function (...args){
            if(!called){
               result =  fn(...args);
               called = true;
               console.log('called once');
               return result;
            }else {
                console.log('already called');
                return result;
            }
        }
    };
    
    async function sum(a,b){
        return a +b;
    }
    
    let result = onceAsync(sum);
    result(1,2).then(data=> console.log(data));
    result(1,2).then(data=> console.log(data));


Q.1) Build a createTaskQueue() that lets you add tasks with .add(fn) and execute them in order with .run().
function createTaskQueue(){
    
    let tasks = [];
    
    return {
        add(fn){
            tasks.push(fn);
            return this;
        },
        run(){
            while(tasks.length> 0){
                let task = tasks.shift();
                task();
            }
        }
    }
}


let result = createTaskQueue();

result.add(()=> console.log('first task'));
result.add(()=> console.log('second task'));
result.add(()=> console.log('third task'));
result.add(()=> console.log('fourth task'));

result.run();

Q.2) Make a closure that toggles between two values: 'ON' and 'OFF'.
ans : 
function toggle(){
    let value = 'OFF';
    
    return function(){
        if(value == 'OFF'){
            value = 'ON';
            return value;
        }else{
            value = 'OFF';
            return value;
        }
    }
    
}

let result = toggle();
console.log(result());
console.log(result());

💡 Advanced Closure Use Cases
Q.3) Create a function createSecret(secret) that returns a getter and a setter to update the secret value, but keeps it private.
function createSecret(secret){
    let private = secret;
   return{
       setter(value){
           private = value;
       },
       getter(){
           return private;
       }
   } 
 
}

let result = createSecret(5);
result.setter(3);
console.log(result.getter());

Q.4) Build a createDebouncedLogger(delay) that only logs if the last call was more than delay ms ago.

Q.5) Implement a function chain(initialValue) with .add(), .multiply(), .mod(), .value() chainable pattern (like you did).

Q.6) Write a createStack() function that returns push, pop, and peek without exposing the internal array.

function createStack(){
    let stack = [];
    
    return{
        push(element){
            stack.push(element);
        },
        pop(){
            stack.pop();
        },
        peek(){
            return stack[stack.length-1];
        }
    }
}

let result = createStack();

result.push(2);
console.log(result.peek());

Q.7) Create a withLock(callback) function that ensures only one instance of the callback runs at a time.

Q.8) Design a function retry(fn, attempts) that retries a function n times on failure.

Q.9) Implement createUUIDGenerator() that returns a unique ID each time it's called, using a closure.



Closure-based Challenges
Q.10) Implement a counter() that supports .increment(), .decrement(), .reset(), and .value() chaining.


let count = counter(10).increment().increment().decrement().value(); // 11

Q.11) Create secureAccess(password) that returns a function. The inner function can only be executed if the password matches.

Q.12) Build a createThrottle(delay) that returns a function which can only be called once every delay ms.

Q.13) Create a privateStorage() function that allows setting and getting key-value pairs, but no direct access to the store.

Q.14) Design a locker(code) function that returns lock() and unlock() methods. Only the correct code can unlock it.

🧠 Currying Deep Dives
Q.15) Create a generic curry(fn) that works with any number of arguments and supports partial application.

Q.16) Create sum(a)(b)(c)...(n) infinite chaining which only returns result on .value() or .toString().


sum(1)(2)(3).value(); // 6
Implement multiply(2)(3)(4)() → 24. Stop when final () is called.

Q.17) Build a curried logger: logger("info")("User created")("2025-06-07")() → logs: [info] User created @ 2025-06-07

Q.18) Create a curried function pipe(a)(b)(c)...(fn) which runs all values through the final fn.


pipe(2)(3)(4)(x => x * 10); // (2+3+4) => 9 * 10 = 90
🧠 Closure + Loop Combo
Q.19) Fix this loop to log 0–4 properly using closures (interview classic):


for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
Q.20) Create a function that returns 5 closures. Each should return their index when called.

🧠 Chaining APIs
Q.21) Create a fluent-style API like:


calc(5).add(3).subtract(2).multiply(4).value(); // (5+3-2)*4 = 24


Q.22) Create a stringBuilder() which lets you .add(str) and .print() a full sentence.

Q.23) Implement a chainable queryBuilder() for SQL:


query().select("*").from("users").where("id=5").build();

🧠 Advanced Closure Use
Q.24) Create memoize(fn) which caches expensive calls using closures.

Q.25) Create a retry(fn, attempts) function which retries a failing function n times.

Q.26) Create a rateLimiter(limitPerSecond) function that returns a closure which ensures no more than X calls per second.

Q.27) Design secureCounter(pin) which only allows incrementing/decrementing if the correct PIN is provided.

Q.28) Implement a chain(fn) like lodash's _.chain() that lets you pass values through multiple methods before calling .value()










