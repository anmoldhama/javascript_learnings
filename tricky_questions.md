Q.1) What are the different data types in JavaScript?
ans:  In javascript datatypes are categorised into 2 category
     a) Primitive
     
 1) string : When we want to use a string value.
 2) number : when we want to use numeric value.
3) undefined : when we dont initialize any value to a variable
 4) boolean : when we want to use true or false
 5) null : when we assign a null value to a variable
 6) symbol : when we want to create unique identifiers, create unique property keys in objects, It is enumerable and immutable. const sym1 = Symbol('description');
 7) bigint : When we store a large integer value;

     b) Non- primitive
     1) Array: It is a collection of same or different types of values.
     2) Object : It is a collection of keys and values, where keys are strings or symbols and values could be of any data type
     3) Functions :  Functions in js are called as first class objects, which could be assign to a variable, passed as argument, returned from another function. 
     4) Dates : Dates are used to work with date and time.
Q.2) Explain == vs === ?
ans: == operator is used to compare the only the values not data types
     === operator is used to compare the values as well as data types

Q.3) What is hoisting in JavaScript?
ans: Hoisting is concept in which the variables and functions declaration moves to the top of the block automatically, but not initialization.

Q.4) Explain closures with an example?
ans: Closures are the functions that remembers the variables of outer function even the outer function complete its execution.
  example : function closure(){
          let count = 0;
             return function increment(){
                 count++;
                 return count;
             }
          }
          
          let counter1 = new closure();
          console.log(counter1());
          console.log(counter1());
          console.log(counter1());
          
          let counter2 = new closure();
          console.log(counter2());

Q.5) What is the difference between var, let, and const?
ans: let and const are block scoped which means the variables declared using these are only accessible within the block,on other hand var is functional scoped which meand the variables declared using var are accessible within function

Q.6) What are JavaScript truthy and falsy values?
ans: "",NaN, 0,false,undefined,null are the falsy values rest all are truthy values.

Q.7) How does the event loop work in JavaScript?
ans: event loop handles all the asynchronous tasks of javascript
     - It has the responsibility to continuously check the callback queues and callstack
     - If any task pending in callback queues(microtask(high priority),macrotask(low priority)) and the callstack is empty then event loop give this task to the callstack
     - event loop has mainly four phases named as timers,poll,check,close
     - Timers - Inside this the timers callbacks are executed
       Poll - Inside this all the I/O operations are executed
       Check - Inside this setImmediate callbacks are executed
       Close - Inside this if any socket is opened is closed 
    - Promises and Process.nextTick() - These callbacks are executed before every phase 

Q.8) What is the difference between null and undefined?
ans: null is the assigned value to any variable
     undefined: If the variable is declared but not assigned with any value then js automatically assign it with undefined.

Q.9) Explain lexical scoping?
ans: lexical scope is a scope of a variable in which it is accessible.

Q.10) What is a callback function?
ans: callback functions are the functions which are passed as an arguments to another function.
     When the promises, async/await are not introduced callbacks are the only way to handle asynchronous tasks

🔹 Functions & Scope
Q.11) What is a higher-order function?
ans: Higher order functions are the functions which takes another function as a argument or return a function or both.

Q.12) What is the difference between call, apply, and bind?
ans: call: call is method which is used to set the context of this, call accepts the arguments seperately,     
           called immediately.
           function.call(object,argument);
     apply : apply is a method which is used to set the context of this, apply accepts the arguments as array,   
           called immediately.
           function.apply(object,arguemntsArray);
     bind : bind is a method which is used to set the context of this, bind accepts the arguements seperately,t  
           the main benefit is that it stores the value in a variable and used later
           let value = function.bind(object,arguement);

Q.13) What is the purpose of arrow functions?
ans: 1) arrow function is introduced in ES6
     2) arrow function are used for shorter syntax.
     3) arrow function don't have their own this, arguments, super, or new.target, they borrow it from the outer which makes them useful in callbacks and closures. 
     4) They cannot be used a constructors.

Q.14) Explain IIFE (Immediately Invoked Function Expression)?
ans: 1) IIFE is immediately called after the definition.
     2) It is used to create private variables.
     3) Useful for reduce memory leak.
     4)  Used for data privacy and encapsulation.

Q.15) What is the difference between function declaration and expression?
ans: Function declaration : When the function is defined using function keyword, don't assign it to a variable.
                            It is hoisted
     Function expression : When the function is defined using arrow function and assign it to a variable, It is not hoised.
     
🔹 Objects & Arrays

Q.16) What are object prototypes?
ans:  


Q.17) What is prototypal inheritance?
ans: 

Q.18) What is the difference between Object.create() and class-based inheritance?
ans: Object.create() is used to create any object

Q.19) How does destructuring work in objects and arrays?
ans: Destructuring is a syntax that allows you to unpack values from arrays or properties from objects, 
       assigning them to variables in a more concise way.
     objects -  const {name,age} = {name: "anmol",age:26};
     array  - const [name,age] = ["anmol",26]

Q.20) Explain spread and rest operators?
ans: Spread operator is used to spread the values of an array and properties of an object
     Rest operator is used to collect the remaining values of an array and properties of an object

🔹 Asynchronous JavaScript

Q.21) Difference between synchronous and asynchronous code.
ans: 1)synchronous code is executed line by line blocked the remaining code execution whenever any line not 
       executed completely.
     2) Asynchronous code is not line by line and not blocked the remaining code execution it is executing parallely.

Q.22) What is a promise?
ans: Promise is object which return the result in two ways resolve or reject, it is used to handle the 
     asynchronous tasks in js.
        new Promise((res,rej)=>{
          res("resolved");
        });
       It has three states
       pending : Whenever the promise is not complete its execution.
       fulfilled : Whenever the promise is return resolved
       rejected : wheneve the promise is return reject. 

Q.23) Difference between async/await and .then()/.catch()?
ans: 1) async/await is just a cleaner syntax over the promise to handle the asynchronous tasks
     2) the main benefit to use async/await is that the code written out of the async function executed synchronously.
     3) whenever you want to wait till the output is not returned by a statement then we use await at the start of the line.

Q.24) What is the use of Promise.all, Promise.race, Promise.allSettled?
ans: They all are used to executed the promises parallely
     promise.all is used in the scenario whenever you want to check all the promises should resolve
     because if any promise is rejected then it will short circuit and returned with rejected promise
     promise.race is used in the scenario whenever you want to get the fastest promise resolved or reject.
     promise.allSettled is used in the scenario whenever you want to check all the promises resolve and reject
     return us response like
     [
          {status :"fulfilled",value: 2},
          {status : "rejected", reason : ""}
     ]

Q.25) Explain microtask and macrotask queues?
ans : microtask queue is has the higher priority then macrotask queue.
      microtask queue holds the callback of promises
      macrotask queue holds the callback of timers,fs module etc

🔹 DOM & Events
Q.26) How does event delegation work?
ans : Event delegation : 

Q.27) What is the event bubbling and capturing?
ans : Event bubbling is a concept of bubbling up the events from child to parents
      Event capturing is a concept of events goes down from parent to child.

Q.28) What is the difference between addEventListener and onclick?
ans : onclick is a DOM property that assigns a single event handler, and assigning a new one will overwrite the 
      previous one.
      addEventListener is a method that allows attaching multiple handlers for the same event, offers more flexibility, and supports additional options like event phase and removing listeners.

Q.29) How to prevent default behavior in event handling?
ans : by using event.preventDefault();

Q.30) How do you manipulate the DOM in JavaScript?
ans : 

🔹 ES6+ Features

Q.31) What are template literals?
ans: Template literals are introduced in ES6 version
     template literals are the way to convert Multi-line strings, String interpolation, Embedded expressions.

Q.32) What are default, named, and dynamic imports/exports?
ans : default imports is to import any variable or function and exports with any name in some other file.
      named imports is a way to import any variable or function and exports with the same name in some other file.
      dynamic imports is a way to asynchronously importing any variable or function and need to export it.
      Used to load modules asynchronously (code splitting or lazy loading),Returns a Promise, Useful in situations like loading a module only when needed

Q.33) Explain optional chaining and nullish coalescing operator?
ans: optional chaining is a concept of chain multiple comparison operators and get the result
     nullish coalescing operator is used output according to the condition if condition true give the first output else second output

Q.34) What are symbols in JavaScript?
ans : 1) Symbol is a data type in javascript
      2) used to assign a unique identifier.
      3) Symbol is also used as a key of object.
      4) Symbol is also used to create a private variables.
      5) Two Symbol type values are never equal.
      6) Syntax : let sym = new Symbol('anmol');   

🔹 Advanced Concepts

Q.35) What is memory leak and how to prevent it?
ans : 1) memory leak is a problem when the memory that is allocated to the variables,functions,arrays,objects,etc. is wasted never be used by these data inside the code.
      2) memory leak is prevented by not using global variables because it is hard for garbage collector to release the memory that is assigned to global variables.
      3) Used IIFE for private variables.
      4) must remove the event listeners.
      5) use the closures correctly.

Q.36) What are service workers?
ans: Service workers are used to load a script before the html being start to rendered.
     Service workers are the browsers feature.
     If you want to execute any script seperate to the dom then service workers are very helpful.

Q.37) What is currying in JavaScript?
ans: Currying is a concept of closure, in which the argument is distributed in nested functions.

     function curry(a){
        return function (b){
          return function (c){
            return function (d){
              return a + b + c +d;
            }
          }
        }
     }
     
     console.log(curry(1)(2)(3)(4));


Q.38) What is debouncing and throttling?
ans: 1) debouncing is a concept in which the request is limited by using timers apis implements to
     limit a user for a specific time interval, if the user try to call the debouncer again in a specific time interval then the timer starts from beginning.

     2) throttling is a concept in which the request is limited by using timers apis implements to 
     limit a user for a specific time interval, if the user try to call the throttler again within a time 
     the interval not start again but there is no response.

Q.39) Explain module pattern in JavaScript.
ans: module pattern is a pattern in which the javascript uses the latest ESModule
     1) we use import/exports for the data transfers between the files.
     2) It is asynchronous.
     3) Helped in lazy loading,code splitting
     4) 

🔹 Interview Problem-Solving

Q.40) Reverse a string or number? // strings are immutable
ans: 
     let str = "anmol";
let newStr = str.split("");

let left = 0;
let right = newStr.length - 1;

while(left < right){
    let temp = newStr[left];
    newStr[left] = newStr[right];
    newStr[right] = temp;
    left++;
    right--;
}

console.log(newStr.join(''));

let str = "anmol";//lomna
let newStr = "";

let right = str.length - 1;

while(right >= 0){
    newStr += str[right];
    right--;
}

console.log(newStr);

Q.41) Check if a string is a palindrome?

function isPalindrome(str){
let left = 0;
let right = str.length-1;

while(left <= right){
    if(str[left] != str[right]){
        return false;
    }
    
    left++;
    right--;
}

return true;

}

let str = "anmol";
console.log(isPalindrome(str));


// check if number is palindrome or not



function isPalindrome(num){
let oldNum = num;
let newNum = "";
let last;
while(num > 0){
last = num % 10;
newNum += last;
num = Math.floor(num/10);
}


return newNum == oldNum;

}

let num = 12321;
console.log(isPalindrome(num));


Q.42) Implement Array.prototype.map from scratch?
ans: 
   Array.prototype.myMap = function(callback, thisArg) {
    // 1. Create an empty array to store the results
    const result = [];
    // 2. Iterate through the array using a for loop
    for (let i = 0; i < this.length; i++) {
        // 3. Check if the element is not undefined (to skip holes in sparse arrays)
        if (i in this) {
            // 4. Call the callback function with the current element, index, and the original array
            const value = callback.call(thisArg, this[i], i, this);
            result.push(value); // Push the result to the new array

        }
    }

    // 5. Return the new array
    return result;
};


const arr = [1, 2, 3, 4];

const newArr = arr.myMap(function(num) {
    return num * 2;
});

console.log(newArr);

Q.43) Deep clone an object?
ans: 
     function deepClone(obj){
    if(obj == null || typeof obj != "object"){
        return obj;
    }
    let clonedObj = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

const original = { name: 'Anmol', age: 26, address: { city: 'Delhi', pin: 110001 } }

const clone = deepClone(original);
console.log(clone);

Q.44) Flatten a nested array?
ans:
    function flattenArray(arr){
    if(arr.length == 0 || typeof arr != "object"){
        return arr;
    }
    
    let newArray = [];
    
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            newArray.push(...flattenArray(arr[i]));
        }else{
            newArray.push(arr[i]);
        }
    }
    
    return newArray;
}


const arr = [[1,2,3],[4,5,6],7878];

const flatten = flattenArray(arr);
console.log(flatten);

🔹 Miscellaneous
Q.45) How do JavaScript timers (setTimeout, setInterval) work?
ans: setTimeout is used to set a delay to execute a callback, it accepts a callback and a timer in miliseconds as its arguments.
      setInterval is used to set a interval to execute a callback, the callback is executed after every interval,it also accets a callback and a timer in miliseconds as its arguments.

Q.46) What are weak maps and weak sets?
ans: 

Q.47) Difference between Map and Object.
ans: object 1) The keys are of only string or symbol types.
            2) 
     Map   1) The keys are of any data types.
           2) 

Q.48) What is the Temporal Dead Zone (TDZ)?
ans: It is a zone when the variable is assigned with a value undefined.
     whenever we tried to access a variable that is defined using let or const but dont initialize with a value
     it is given the reference error. this is because of temperal dead zone.

Q.49) What are the new features in the latest JavaScript version (ES2022/ES2023)?
ans:

Q.51) How does JavaScript handle asynchronous operations?
ans: Javascript is single threaded by nature but it has the event loop and libuv to handle asynchronous operations.First the synchronous code is executed in callstack and the asyn code is waiting in callback queues
event loop continuously watching the callstack and callback queues whenever the callstack is empty the event loop
pushed the async task to callstack for execution.

Q.52) What is a prototype chain?
ans:

Q.53) Explain scope and lexical scoping?
ans: lexical scoping is an area in which the variable is accessible to use
     scope is an area

🔹 Functions and Objects

Q.54) What are arrow functions and how do they differ from traditional functions?
ans: Arrow functions are the function expressions
     Arrow functions are not hoisted
     Arrow functions has the shorter syntax
     Arrow functions dont have their own this.
     Arrow functions are introduced in ES6 version.

     Traditional functions are the function declarations
     Traditional functions are hoisted
     Traditional functions have their own this.

Q.55) What is the this keyword in JavaScript?
ans: this keyword refers to the parent object in which it is used.
     arrow functions doesn't have their own this they refers this to their parent. 

Q.56) How does JavaScript support OOP (Object-Oriented Programming)?
ans : javascript support oops but it doesn't have the concept of interfaces.

Q.57) What are getter and setter methods in JS?
ans : getters are used to fetch any value of the class.
      setters are used to set the values to the class structure.

Q.58) What is method chaining?
ans : 

Q.59) How do you clone an object?
ans : We have two ways to clone an one is shallow clone and another is deep clone.
      1) shallow clone is just to clone the reference by obj1 = obj2;
        In this if any one object is change the change is reflected in both the objects.
      2) Deep clone is just to clone the complete object into another object.
        In this another object is stored inside the memory.
         example: 
               use JSON.parse(JSON.stringify(obj1));
               use recursice approach to clone all the properites.(recommended)

Q.60) What is the difference between shallow and deep copy?
ans : In shallow copy all the variables are references to same memory location.
      In Deep copy all the variables are create their seperate memory location.

🔹 Arrays and Iteration
Q.61) How do map(), filter(), and reduce() work?
ans: map is used for the transforamtion in array but the length is same.
     filter is used to filter the element from array based on the given condition.
     reduce is used to get the output in a single value. for example : sum of all element in array.

Q.62) What is the difference between forEach and map?
ans : forEach is used to iterate over the array you can implement any logic for the element of array
          didn't return a new array.
      map is used to transformed the element of array and also return a new array

Q.63) How do you remove duplicates from an array?
ans : use can implement the set or implement the logic of frequency.

function duplicates(arr){
  
  let result = [];
  
  for(let i = 0; i< arr.length; i++){
     if(!result.includes(arr[i])){
         result.push(arr[i]);
     }
  }
  return result;
}

console.log(duplicates([1,2,2,3,1]));

Q.64) How do you merge two arrays?
ans : 
     function mergeTwoArray(arr1,arr2){
  
  return [...arr1,...arr2];
}

console.log(mergeTwoArray([1,2,2,3,1],[1,2,3,4,5]));


or 

function mergeTwoArray(arr1,arr2){
  
  let len = arr1.length + arr2.length;
  let result = [];
       let count = 0;
       while(count < arr1.length){
           result.push(arr1[count]);
           count++;
       }
      
       count = 0;
       while(count < arr2.length){
           result.push(arr2[count]);
           count++;
       }
       
       return result
  }


console.log(mergeTwoArray([1,2,2,3,1],[1,2,3,4,5]));


🔹 ES6+ and Modern JavaScript
Q.65) What are default parameters?
ans: Default parameters are introduced in ES6, It is helpful if you have any scenario where you dont want to send any argument at the time of function invocation the default values are defined at the time of function definition.

Q.66) What is destructuring assignment?
ans : Destructing is a concept to assign the properties of objects and values of the array to the variables.

Q.67) What are modules in JavaScript and how do you export/import them?
ans : modules are the just files in javascript and you can export/ import them by using default, named.

🔹 Promises and Async/Await

Q.68) What is the difference between Promise.all, Promise.any, Promise.allSettled, and Promise.race?
ans : Promise.all accepting the promises as an array executes them parallely if all promises are resolved then return a resolve result, but if any promise reject then immediately circuit breaks and return the rejected result.
Promise.any accepting the promises as an array executes them parallely short circuits immediately if any promise resolved else if anyone promise not resolved till the end then return with error. 

Promise.allSettled accepting the promises as an array executes them parallely till the end not metter if resolve or rejects gives the output as an array of fulfilled values, rejected values.

Promise.race accepting the promises as an array executes them parallely short circuit immediately if any promise settled doesn't matter if resolve or rejects

Q.69) How does async/await work internally?
ans : async/await is used to handle asynchronous tasks
      if you want to wait for any response then use await at the start of the statement.
      this will wait on that line and the remaining code is not executes within the async function.


Q.71) How do you handle errors in async/await?
ans : we can use try catch block for the handling of errors.

🔹 DOM and Browser
Q.72) What is the DOM and how do you manipulate it?
ans : 

Q.73) How do you add an event listener in JavaScript?

Q.74) What are the different types of web storage?

Q.75) What is the difference between sessionStorage and localStorage?

Q.76) How does debounce and throttle work?

🔹 Advanced Topics

Q.77) What is tail call optimization?
ans: 

Q.78) How do you handle race conditions?
ans : we should implement a cleaner code to debug.

🔹 Miscellaneous

Q.79) What are JavaScript generators?
ans : generators are used to create the private variables
      every statement in generators are used yield keyword
      generators are executes their next statement on demand.

Q.80) What is the difference between mutable and immutable data?
ans : mutable data is the data which you can change after initialization like numbers,boolean
     immutable data is the data which you can change after initialization like strings

Q.81) How does garbage collection work in JS?
ans : In js the garbage collection worked on the algorithm of mark and sweep
      Js uses the automatic garbage collection.
     It will mark all the used variables and function and release the memory of unmarked.
     It is very helpful in reducing the memory leaks.
     common cases to help garbage collector are not use global variables
                                                use the closure correctly
                                                remove the event listeners

Q.82) How do you ensure code quality in large-scale JavaScript applications?
ans : not use global variables
      use the closure correctly
      use let and const instead of var
      remove the event listeners
      use the eslint for rules
      use ES modules over commonjs

Core JavaScript (Concepts & Syntax)

Q.83) How does this behave inside an arrow function vs a regular function?
ans : arrow function does not have their own this they refer from their parents.
      regular function have their own this they refer within a function

Q.84) What are the different ways to create objects in JavaScript?
ans : 1) Object.create({});
      2) Object.assign({});
      3) let obj = new Object();
      4) let obj = {};

Q.85) How does JavaScript handle floating point precision issues?
ans : 

Q.86) What is the difference between undefined and not defined?
ans : undefined is a data type in javascript whenever a variable declared but not initialized with any value then js automatically assigned it with undefined.
      not defined is an error in javascript if a variable is not accessible within a scope js will gives us a not defined error.

🔀 Functions and Scope

Q.87) What is memoization in JavaScript?
ans : memoization is a technique in javascript in which you cache an heavy calculation and if you want then 
     first check the memoized cache if not present then calculate again this will reduce the response time.

Q.88) How would you implement a function throttle and debounce?
ans : throttle function is used to restrict the user to not hit the server within a time interval
       debounce is used to restrict the user to not hit the server within a time interval but if user hits the
       trigger within the time interval then the timer will restart from the beginning.

🧵 Asynchronous JavaScript

Q.89) What’s the difference between setImmediate and setTimeout?
ans : setImmediate is used to executes the callback after all the I/O operation are executes completely.
      this will executes in event loop check phase
      setTimeout is used to executes the callback after a specific delay of time in miliseconds.



Q.90) How do Promises work under the hood?
ans : promises are the objects which are used to handle the asynchronous tasks in javascript,promises has the three states fulfilled, pending and rejected
     fulfilled is the state in which the promise returned resolved
     pending is the state till the promise not settled
     rejected is the state in which the promise returned rejected

     Internally, Promises queue .then() and .catch() callbacks. When resolved or rejected, the queued functions are pushed to the microtask queue, executed after the current call stack.

Q.91) What is the difference between async/await and Promises?
ans : async/await is just the cleaner version of promises
      if we want to use await we should create that function async
       if we want to await pauses execution until the Promise resolves or rejects. then we should write await in front of any statement.
      The code execution waits until the response comes.
      This will also remove the promises chaining of .then().then().
      async functions always return a Promise.

🧰 Arrays and Objects
Q.92) How does Array.prototype.reduce() work?
ans: This will gives us the output of the array in a single value eg. calculate the sum of all elements.
     reduce() takes a callback and an optional initial value. It iteratively applies the callback to each element, carrying forward an accumulator.

Q.93) What’s the difference between map(), forEach(), filter(), and reduce()?
ans : map transforms the elements of the array,also returned the new array with the same length as input.
      forEach() operator is used to iterate over the array it will not return a new array.
      forEach() returns undefined
      filter() gives us the filtered value according to the given condition.it will transform the length and returns a new array
      reduce() gives us the single value.

🧩 Object-Oriented Programming
Q.94) What is prototypal inheritance?
ans : This is the process in which we can inherit the parent prototype functionality inside the child prototype.

Q.95) How does the class keyword work in JavaScript?
ans : class keyword is used to create classes inside the javascript.
      It will help to create a blue of the objects
      class is syntactic sugar over JavaScript's prototype-based inheritance. It helps define constructors, methods, and static methods.

Q.96) What are static methods in classes?
ans : Static methods are methods called on the class itself, not on instances.

Q.97) Explain encapsulation in JavaScript?
ans : Encapsulation is the process in we should bind all the structure and behaviour inside the same class.
      JavaScript supports it using closures or with # for private fields in classes.

Q.98) What is the difference between composition and inheritance?
ans : inheritance is the process in which the child class extends the properties from the parent class.
      Behavior is composed by combining objects or functions.

🧪 Testing & Debugging
Q.99) How would you debug performance issues in JavaScript?
ans :  we should create functions according the single responsibility principle
       we check that unefficient global variables are created or not
       we check that the event listeners should be removed
       we check that the closures are created correctly
       we check that the let and const are used instead of var.
       Use Chrome DevTools → Performance tab
       Profile memory usage
       Look for long tasks, layout thrashing, memory leaks

Q.100) What are some techniques for unit testing JavaScript functions?
ans :  give the mock data to the functions and check the returned values.
       Use testing frameworks like Jest or Mocha.
       Use assertions to compare expected vs actual
       Test edge cases and invalid inputs
       

Q.101) Explain how mocking works in testing?
ans : mocking works like when we gives the same data as the functions gets from the production
      the function should behave correctly
      Mocking replaces real implementations (e.g., API calls, DB queries) with fake ones for controlled testing. This isolates units and makes tests deterministic.

📦 Modules & Bundling
Q.102) What is the difference between CommonJS and ES Modules?
ans: commonjs is the older way to import/export the variables and functions from one file to another.
     It will works synchronously and slow down the application
     If we want to import any function or package inside the file we should use require() and module.exports.
     ES Modules is the newer way to import/export the variables and functions from one file to another.
     It will works asynchnously and increase the performance of the application.
     If we want to import any function or package we should use import keyword
    Inside this we have default and named exports  

Q.103) How does tree shaking work?
ans : Tress shaking is the technique in which the bundler removes the unnecessary and dead code from the build to increase its performance

Q.104) Explain code splitting and why it's useful?
ans : code splitting is the technique in which the code is seperated into parts and executes asynchronously and on demand
     It will increase the performance of the application because not all code executes at the same time.

🌐 DOM & Events
Q.105) What is event bubbling and capturing?
ans : event bubbling is the technique in which the event are triggered from the child node to the parent nodes like bubble up.
      Event bubbling is the phase where events propagate from the target element up to the root (bottom-up).
    event capturing is the technique in which the events are triggered from the parent node to the child nodes
     like downward direction.
     Event capturing (also known as trickling) is the phase where events propagate from the root down to the target (top-down).

Q.106) How do you attach and remove event listeners?
ans : Use addEventListener() to attach and removeEventListener() to remove event listeners on DOM elements.
      function handleClick() {
      console.log('Clicked');
       }

      element.addEventListener('click', handleClick);      // Attach
      element.removeEventListener('click', handleClick);   // Remove

Q.107) What are custom events and how do you create them?
ans : Custom events let you define your own event types and dispatch them manually.
      const customEvent = new CustomEvent('myEvent', {
  detail: { name: 'Anmol' }
});

element.addEventListener('myEvent', (e) => {
  console.log(e.detail);
});

element.dispatchEvent(customEvent);

Q.108) How can you implement drag and drop using JavaScript?
ans : <div id="dragMe" draggable="true">Drag me</div>
<div id="dropHere">Drop here</div>

<script>
const dragItem = document.getElementById('dragMe');
const dropZone = document.getElementById('dropHere');

dragItem.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', 'This is a drag item');
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Required to allow drop
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  dropZone.textContent = data;
});
</script>


📍 Miscellaneous
Q.109) What is the difference between null and undefined?
ans : null is the value that is assigned to a variable when we check the type of null variable then it is object
      undefined is the value that is automatically assigned to a variable if we declare a variable but not initialize with any value

Q.110) What is the purpose of Symbol in JavaScript?
ans : symbol is used to create the unique identifier
      the symbol value is unique every time
      Symbol is used to Creating private object keys
      Symbol is also used to create the key of objects.

Q.111) What are WeakMap and WeakSet?
ans : 
     WeakMap and WeakSet are collections where the keys (in WeakMap) and values (in WeakSet) must be objects. They are weakly referenced, meaning they don’t prevent garbage collection.

const wm = new WeakMap();
let obj = {};
wm.set(obj, "data");

const ws = new WeakSet();
let user = {};
ws.add(user);
✅ Use Cases:

-Storing private data
-Caching
-Avoiding memory leaks

Q.112) Explain the concept of service workers.
ans: Service workers are the concept of browsers when we want to execute any script seperated from the dom 
   then we use service workers.
  Offline support
  Background sync
  Push notifications
  Caching for faster loads

Q.113) How do you detect memory leaks in a JS application?
ans : Use Chrome DevTools → Performance → Heap Snapshots
      Use tools like Lighthouse, Profiler, or Memory tab
      Look for:
      Detached DOM nodes
      Listeners not removed
      Accidental global variables
      Forgotten timers or intervals

🔐 Security & Performance
Q.114) What is Cross-Site Scripting (XSS) and how do you prevent it?  need to understand
ans : XSS is a security vulnerability where attackers inject malicious scripts into trusted websites.
       Prevention:
      Escape user input (<, >, ", etc.)
      Use libraries like DOMPurify for sanitization
     Use Content Security Policy (CSP)
     Avoid innerHTML when possible
     Encode dynamic HTML content

Q.115) How do you secure user input in a JavaScript app?
ans : Validate input on both client and server

Escape HTML tags (prevent XSS)

Sanitize inputs using libraries

Use regular expressions for allowed patterns

Never trust client-side input blindly

Q.116) What is lazy loading and how does it improve performance?
ans : lazy loading is a technique to split the code into parts and load on demand
      This will improve the performance because the complete code is not executed at the same time, code is executed in parts
      Initial bundle size
      Page load time
      Memory usage

Q.117) How can JavaScript performance be improved in a large app?
ans : By creating less global variable to reduce the memory leaks
      By creating the private variable using closures
      By using the concept of memoization
      By using throttling and debouncing
      By removing the event listener when they are not in use
      By using let and const instead of var.
      Lazy load resources
      Use Web Workers for heavy computation
      Code splitting with dynamic imports

Q.118) Explain Content Security Policy (CSP) in the context of JavaScript?
ans :  Content Security Policy (CSP) is a browser feature that prevents XSS and data injection attacks by 
       defining what sources of content are allowed to load.

       Content-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com

       CSP helps block:
       Inline <script> execution
       Unauthorized third-party scripts
       Dynamic code injection


 Advanced Concepts & Internals
Q.119) How does JavaScript manage memory?
ans : Javascript used only single thread of the operating system to executes.
      JS uses automatic garbage collection.
      Javascript stores the primitive types in stack and non primitive types in heap.
      When objects are no longer referenced, the GC reclaims that memory.
      Javascript Optimize and Deoptimize the HOT code at JIT compilation phase.

Q.120) What is a JavaScript engine and how does it work (e.g., V8)?
ans : A JavaScript engine is the program that executes JS code.
      Javascript has the V8 engine developed by google.
      v8 engine has multiple phases like first create the AST
       then interpret the code using Ignition interpreter and compile the HOT code using Turbofan compiler
             

Test 4  11:15 - 12: 00


Q.121) What are hidden classes in V8 and how do they affect performance?
ans : Hidden classes are internal data structures used by the V8 engine to optimize how it accesses properties on objects. When objects are created with the same structure, V8 assigns them the same hidden class, which makes property access faster. Changing the structure dynamically (e.g., adding/removing properties) can cause hidden class changes and de-optimization.

Q.122) Explain what happens when you delete a property from an object?
ans : When you use delete obj.prop, the property is removed from the object.

Q.123) What is the difference between shallow and deep copy? How to implement each?
ans : The shallow copy has copy the reference of data in the memory.
              copies the top-level structure; nested objects still share the same reference.
     The deep copy has copy the complete data and occupy a seperate space in memory.
              Deep copy creates a completely independent clone including nested objects.

Q.124) What’s the difference between Object.freeze() and Object.seal()?
ans : Object.freeze() :  prevents adding, deleting, or modifying properties.
      Object.seal() : prevents adding or deleting properties, but allows modifying existing ones.

Q.125) How does the garbage collector work in JavaScript?
ans : Js has a automatic garbage collection
      Js GC works on the mark and sweep algorithm
      In which first all the reachable variables and functions are marked and the remaining unmarked memory is released by the dc to reduce the memory leak.

Q.126) What are inline caches in JavaScript engines? needs to understand
ans : Inline caches store the result of property lookups directly in the machine code so future lookups are faster. This helps optimize repeated accesses to the same property shape

Q.127) How is lexical scoping different from dynamic scoping?
ans : Lexical scoping a block in which the variable is accessible to use.
      dynamic scoping : (not used in JS) resolves variable names by the call stack at runtime.

Q.128) What are the internals of a JavaScript closure?
ans : Closure are just functions which remembers the variables of its outer functions even if the outer function completes its execution.
      Closures are also used to creating private variables
      Use closure correctly due to the memory leak problems


⏱ Async & Timers
Q.129) What is the priority order of setTimeout, setImmediate, nextTick, and Promise?
ans : In Event loop the priotity order is
           nextTick
           Promise
           if I/O operations exist then setTimeout else setImmediate

Q.130) Can a setTimeout be throttled or delayed by heavy computation?
ans : setTimeout is the concept which is used to throttle any button or any other logic.
      setTimeout can be delayed by heavy computation.

Q.131) How do Web APIs fit into the Event Loop?
ans : Web APIs like Timers
      are fit into the event loop due to event loop has a seperate phase for timers in which callbacks are executed before poll phase.

Q.132) Why do Promises run before setTimeout, even with 0ms delay?
ans :  Because Promises and nextTick are executed before every phase of event loop execution cycle.

Q.133) How would you implement your own version of Promise.all()? need to understand
ans : function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p).then(res => {
        results[i] = res;
        completed++;
        if (completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}

🧬 Data Types & Edge Cases  Weak in these questions
Q.134) What is the result of typeof NaN, and why?
ans : typeof NaN === 'number', It's a special numeric value meaning "Not a Number".

Q.135) Why is 0.1 + 0.2 !== 0.3 in JavaScript?
ans : Because these are float values and after comparing floating values js return false.

Q.136) What is the output of [] + [] and [] + {} and why?
ans : [] + []    // "" (empty string) — both arrays are coerced to empty strings
      [] + {}    // "[object Object]" — array becomes "", object becomes "[object Object]"


Q.137) Why is null instanceof Object false?
ans : Because null is a primitive and has no prototype. instanceof checks the prototype chain, and null doesn't have one.

Q.138) What is undefined + 1 and why?
ans : undefined + 1 returns NaN, because undefined is not coerced to 0 like null

🧠 Function & Execution Behavior
Q.139) What are arrow functions missing that regular functions have?
ans : regular functions have their own this they dont take this from others
      They are also supports hoising.
      They also have the arguments object and super keywords.

Q.140) What is the use of the arguments object? Can you use it in arrow functions?
ans :  arguments object is used to collect all the arguments holding by the function.
       You cannot use it in arrow functions.

Q.150) How does tail call optimization work in JavaScript?
ans : In strict mode, if a function calls another function as its final action (tail position), JavaScript 
      engines (like V8) may reuse the current stack frame for the next function, avoiding stack overflows in recursion. However, it's not widely implemented in most engines yet.


Test 5  12:30 - 01:15

Q.151) What are first-class functions?
ans : In javascript we call functions as the first-class because 
         1) They can be assign to a varaible
         2) They can be passed as an argument to another function
         3) They can be return from a function

Q.152) How does JavaScript curry functions?
ans : currying a concept of closures in which the arguments are drilled down to the functions.
      function curry(a){
        return function (b){
          return function (c){
            return a+b+c;
          }
        }
      }

      curry(1)(2)(3);

🌐 Browser & APIs
Q.153) How does the history API work in browsers?
ans : he History API allows manipulation of the browser's session history. Methods include:

history.pushState() – adds a new entry to the history stack without reloading.

history.replaceState() – replaces the current history entry.

history.back(), forward(), go(n) – navigate the history stack.


Q.154) What is the difference between localStorage, sessionStorage, and cookies?
ans : localStorage persists even after browser is closed, until cleared manually.
      localStorage has 5 mb of data storage
      sessionStorage persists until the tab is closed, not just refresh.
      sessionStorage has also 5mb of data storage
      cookies can be set to expire at a custom time and are sent with every HTTP request (unlike local/session storage).
      cookies has 4kb of data storage

Q.155) What are WebSockets and how do they differ from AJAX?
ans : WebSockets are the two way communication technique called duplex connections
      Websockets create the persitence connection between the client and the server
      Their connections are keep alive
      Whenever any event triggers from the client they will recieve by the server and execute the callback
      and vise versa.

      unlike AJAX which creates a new HTTP request each time

Q.156) Explain the navigator object and common use-cases?
ans : The navigator object contains information about the browser:

navigator.userAgent – browser and OS info

navigator.onLine – check if user is online

navigator.geolocation.getCurrentPosition() – get location

navigator.mediaDevices.getUserMedia() – access camera/mic
Use-cases: feature detection, analytics, user info, permissions.

Q.157) What’s the use of the Page Visibility API?
ans : The Page Visibility API helps detect when a page becomes visible or hidden (e.g., when switching tabs).
Use-cases:

Pause/resume video/audio

Reduce polling/processing

Analytics for engagement

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseVideo();
  } else {
    playVideo();
  }
});


⚙️ ES6+ Features
Q.158) What are template literals and what benefits do they provide?
ans : Template literals are used to dynamically append data inside the string
      It will also helful for multi line strings.

Q.159) Explain destructuring with default values?
ans : desctructuring can be possible with default values in both for keys in objects and values in arrays.

Q.160) What are private class fields (#) and how are they enforced?
ans : Private class fields are declared with # and are only accessible within the class.
They are truly private — not accessible via this["#field"] or reflection.
  class Counter {
  #count = 0;

  increment() {
    this.#count++;
    console.log(this.#count);
  }
}

const c = new Counter();
c.increment(); // 1
console.log(c.#count); // ❌ SyntaxError


Test

Q.161) What’s the difference between for...in and for...of?
ans : forin loop is used to iterate over the object properties
      forof loop is used to iterate over the array elemtents

Q.162) What does Object.entries() return and how is it useful?
ans : Object.entries() returns the key and value pair of the object as an array
      it is useful when you wants to convert the object properties to array

🧱 Object & Prototypes
Q.163) How do you create a prototype chain manually?
ans : __proto__ is not recommended. Use Object.create() to create prototype chains.
      const parent = { name: "parent" };
      const child = Object.create(parent);
      console.log(child.name); // "parent"

      
Q.164) What does Object.create(null) do?
ans :  It creates an object with no prototype, meaning:
       No inherited properties like toString(), hasOwnProperty().

Q.165) Can you override the __proto__ property? What are the implications?
ans: Yes, you can override __proto__, but it is discouraged. Modifying prototype chains at runtime can lead to performance issues and unexpected bugs.

Q.166) How would you polyfill Object.assign()?  need to understand
ans : function assignPolyfill(target, ...sources) {
  sources.forEach(src => {
    for (let key in src) {
      if (src.hasOwnProperty(key)) {
        target[key] = src[key];
      }
    }
  });
  return target;
}


Q.167) What is duck typing and how does it apply in JS?
ans : In JS, if an object has the required properties or methods, it's treated as that type regardless of actual type.

🎯 DOM & Event System
Q.168) What is passive event listener and how does it improve performance?
ans : { passive: true } hints that the listener won't call preventDefault(), allowing the browser to optimize scrolling and improve performance:

Q.169) How do you prevent layout thrashing in DOM-heavy applications?
ans : Minimize reads & writes to DOM in separate phases.

Use requestAnimationFrame()

Cache DOM values before modifying layout.

Q.170) What is reflow vs repaint in the browser rendering process?
ans : Reflow: Calculates layout (changing DOM structure, size, position).

Repaint: Changes only appearance (color, visibility) without affecting layout.

Q.171) What’s the role of requestAnimationFrame()?
ans : Schedules a callback before the next repaint. Used for smooth animations:
      requestAnimationFrame(() => updateFrame());


Q.172) What happens when you use e.preventDefault() and e.stopPropagation() together?
ans : e.preventDefault() is used to remove all the default functionality of browser.
      stopPropagation() prevents the event from bubbling up to parent elements.
Using both is common in custom UI interactions.

💼 Practical & Debugging
Q.173) How would you debug a memory leak in a long-running JS app?
ans: Memory leak can be debug using
                           dev-tools
                           memory-Tab
                           Take heap snapshots
                           profiler

Q.174) What tools in Chrome DevTools help optimize JS performance?
ans : application tab in which the storages are found, network tab in which all the network calls are places
      Performance tab for JS function timings

Lighthouse for audits

JS Profiler

Q.175) What is a sourcemap and how is it useful in debugging?
ans : Sourcemaps map minified/transpiled code to original source. Useful for debugging in production while still using optimized code.

Q.176) How do you profile a slow function in production safely?
ans : Custom timing logs

Performance.mark/measure

Feature flags to limit profiling impact

Q.177) How would you structure a large-scale JavaScript codebase?
ans : use ES modules over commonjs
      modularaize the code
      Separate concerns (data, logic, UI)
      Linting, tests, documentation


 50 More Unique JavaScript Interview Questions
Q.178) What are Tagged Template Literals and how do they work?
ans :  function tag(strings, ...values) {
  return strings[0] + values[0].toUpperCase();
}
tag`hello ${"world"}`; // "hello WORLD"
Tagged templates let you customize string output:

Q.179)Explain the difference between .call(), .apply(), and .bind() methods.
ans : They are used to set the context of this to the given function
      call() : invokes immediately and accepting the arguments seperately
      apply() : Invokes immediately and accepting the arguments as an array.
      bind() : Not invokes immediately assign the output to a variable and used later.

Q.180) What is tail call optimization in JavaScript?
ans : tail call optimization is a technique in which when the function call another function at the end the function execution it will cache by the js and optimize the execution.Only in strict mode


Q.181) How does JavaScript handle memory management and garbage collection?
ans : memory management is handled by the automatic gc 
      gc works on the mark and sweep algorithm which marks the reachable variables and functions 
      and release the memory of the unmarked variables and functions to reduce the memory leaks

Q.182) What are WeakMap and WeakSet? When would you use them?
ans : Both weakMap accepts keys as object and weakSet accepts values as object, they are weakly referencing the   memory thats why they are very helpful for reducing memory leakage
     const weakMap = new WeakMap();
     const key = {}
     weakMap.set(key,"anmol");

     const weakSet = new WeakSet();
     const key = {};
     weakSet.add(key); it will accepts only one argument
 

Q.183) Explain Temporal Dead Zone with let and const.
ans : let and const declaration are hoisted but they are not initialized with the undefined
     due to when you are trying to access these they will throws the reference error not initialized
     and this is the Temporal Dead Zone for these variables.

Continuing from #7:
Q.184) What is a thunk function and how is it used in async programming?
ans : A thunk is a function that delays computation:
     const thunk = () => fetchData();
     Used in Redux middleware to delay or defer action dispatch.

Q.185) Explain the difference between declarative and imperative programming in JS?
ans : Declarative: What to do (e.g., React JSX, .map()).

      Imperative: How to do it (e.g., for loop, manual DOM).

Q.186)What is the event delegation pattern and when should it be used?
ans : Event delegation attaches a single event listener to a parent to handle events from children via event.   
      target. Improves performance and dynamic handling.

Q.187)What are service workers and how do they relate to Progressive Web Apps?
ans : Service workers are used to execute any scripts in the background away from the thread of browser
     this will useful in offline execution,push notifications, caching, and are part of PWA architecture.

Q.188)What is the purpose of Object.freeze() and how deep does it go?
ans : Object.freeze() : prevent the addition of new properties and also deletion and moditions.
     but it will not stop modification to nested properties.

Q.189)Explain Object.defineProperty() and give real-world use cases.
ans : Object.defineProperty() is used to create a property to any object with the addition behaviour like enumerability, immutability,etc

Q.190)How does event bubbling and capturing work in the DOM?
ans : event bubbling is the technique in which the events are triggered from the target to the root node (bottom-up)
     event capturing is the technique in which the events are triggered from the root to the target ndoe (top-down).


Test 6  06:00 - 06:40  

Q.191)How does JavaScript handle floating-point precision issues (e.g., 0.1 + 0.2)?
ans : JavaScript uses IEEE 754 double-precision floating-point numbers, which can lead to precision issues like 0.1 + 0.2 === 0.30000000000000004.
To handle it, you can use rounding techniques:
Number((0.1 + 0.2).toFixed(2)); // 0.3

Q.192)What is hoisting and what exactly gets hoisted?
ans : Hoisting is a process in which the variables and functions automatically declared at the top of the block.
      the varaibles declared with var are auto assigned with undefined.
      the variables declared with let or const are not auto assigned with undefined.

Q.193)How does Array.from() work and how is it different from spread syntax?
ans : Array.from() creates an array from array-like or iterable objects and can take a mapping function:
      Array.from('123'); // ['1','2','3']
      Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
      
      Spread ([...iterable]) only works on iterable objects and doesn't accept a mapping function.

Q.194)What are the differences between Array.prototype.forEach() and map()?
ans : forEach() - used to iterate over the elements of the array accepts two arguments element and index
                  return undefined.
      map() - used to transform the elements of the array. return a new array with the same length;

Q.195)What are decorators in JavaScript (experimental)?
ans : Decorators are experimental syntax in JS to annotate and modify classes/methods at design time:
      function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
class Example {
  @readonly
  name() {}
}


Q.196)Explain how JavaScript handles prototype chains and inheritance?
ans : Prototype chains could be handled by using the methods like
       Object.create().etc
       All objects in JavaScript inherit from a prototype. If a property is not found on an object, it's looked up on its prototype chain.
      Javascript has the prototypal inheritance in which the methods are iherited from the parent prototype like
         Array.prototype.map();

Q.197)What is a factory function and how is it different from a class?
ans : factory function is used to create factory structure and behaviour,Factory functions are plain functions that return new objects. whereas class is just a syntactic sugar over the prototype model.

Q.198)What’s the difference between private fields (#) and closure-based private variables?
ans : private fields is used to create private variables in a class and can be accessible within a class only.
      Closures are also used to create private variables it is only accessible within a closure.for example:
           function closure(){
              let count = 0;
              return function increment(){
                   count++;
              }
           }

           let counter1 = closure();
           console.log(counter1);
           let counter2 = closure(); this couter2 access the count privately
           console.log(counter2);

Q.199)What is memoization and how can you implement it?
ans : memoization is a technique in which the frequently accessed heavy calculation cache by the js and don't needs to recalculate at every time.

Q.200)What are Proxy and Reflect APIs and what are their use cases?
ans : A Proxy lets you intercept operations like reading/writing properties.
      Reflect is a built-in object with methods that mirror object operations.
      const obj = { name: 'Anmol' };
const proxy = new Proxy(obj, {
  get(target, prop) {
    return prop in target ? target[prop] : 'Not Found';
  }
});


Q.201)How would you polyfill Promise.all()?
ans : function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [], completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val;
        completed++;
        if (completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}


Q.202)What is a microtask vs macrotask in the event loop?
ans : microtask queues are the queues which holds the callbacks of the promises. it has more priority
      macrotask queues are the queues which holds the callbacks of the timers,fs modules,etc, it has less priority

Q.203)How does await affect the execution stack?
ans : whenever we use await in front of any statement it should wait until the promise is settled within an async function, but the outside code is executing synchronously

Q.204)What happens if you await a non-promise value?
ans : If you await a non-promise value then also the async function returned the promise.

Q.205)What is the Symbol type used for?
ans : symbol type is used create the symbol keys of objects
      symbol type is used to create the unique identifiers because no two symbol types are equal.
      symbol type is also used to create private variables.

Q.206)Explain the difference between Object.assign() and spread operator?
ans : Object.assign() is used to create objects
      spread operator is used to expand the values of the iterables.

Q.207)How can you deep clone an object in JavaScript?
ans : you can deep clone an objects using two approaches like :
     1) JSON.parse(JSON.stringify(object));
     2) use the recursive approach to clone all the properties

Q.208)How does this behave in arrow functions vs regular functions?
ans : arrow functions dont have their own this they refers this to their parent
      but regualr functions have their own this they refers this internally.

Q.209)What is function currying and why is it useful?
ans : currying is a concept of closure in which the arguments are seperated and drilled down to
      nested functions
         function curry(a){
          return function(b){
            return function (c){
              return a+b+c;
            }
          }
         }

         curry(1)(2)(3);
Q.210)What is the difference between shallow and deep equality checks in JS?
ans : shallow checks above structure not nested.
      deep also checks the nested structure.

Q.211)What is the module pattern in JavaScript and when should you use it?
ans : Module pattern uses IIFEs to create private and public members. ES6 modules provide better alternatives.
      const Module = (() => {
  let privateVar = 'secret';
  return {
    publicMethod: () => console.log(privateVar),
  };
})();


Q.212)How can you implement a custom iterator?
ans : you can implement a custom iterator using prototype chain create own iterator method and 
     assign it to the prototype and use it anywhere in the code.
      
      const customIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};


Q.213)How does instanceof work under the hood?
ans : x instanceof Y checks if Y.prototype exists in x's prototype chain.
      x instanceof Y → Y.prototype in x.__proto__.__proto__... chain


Q.214)What is structural typing and how is it different from nominal typing?
ans : Structural typing (JavaScript/TypeScript): Based on shape of data.
      Nominal typing (Java, C#): Based on explicit declarations/names.

Q.215)Explain how destructuring works for both arrays and objects?
ans : destructuring is used to assign value of the arrays and properties of the objects on the fly.

Q.216)What are async generators and how do they differ from sync generators?
ans : Async generators use async function* and for await...of to yield promises sequentially.
      async function* numbers() {
  yield await Promise.resolve(1);
}


Q.217)What are the risks of using eval() and how can they be mitigated?
ans : eval() executes arbitrary code — security risk (e.g., XSS), performance issues, scope confusion.
      Mitigation: Never use eval() with user input.

Q.218)How does the optional chaining operator ?. work internally?
ans : obj?.prop short-circuits if obj is null or undefined, avoiding runtime errors.
      let user = null;
console.log(user?.name); // undefined (not error)


Q.219)What is nullish coalescing (??) and how is it different from ||?
ans : ?? only checks for null or undefined.
|| checks for falsy values like 0, '', false, etc.
  0 || 42      // 42
0 ?? 42      // 0


Q.220)What are some edge cases where typeof behaves unexpectedly?
ans : typeof null      // "object" (legacy bug)
typeof NaN       // "number"
typeof []        // "object"
typeof function(){} // "function"


Test 7 07 : 40

Q.221)How does the new keyword work in JavaScript?
ans : the new keyword works to create new instance of class,functions,objects,array,etc.. in javascript

Q.222)How does Object.entries() and Object.values() differ from Object.keys()?
ans : Object.entries()- returns the complete properties as an array.
      Object.values() - returns all the values as an array.
      Object.keys() - returns all the keys as an array.

Q.223)How does lexical scoping work in nested functions?
ans : lexical scoping is a concept of the visibilty of any variable in a code.

Q.224)How can you implement a debounce and throttle function?
ans : You can implement these using the timers apis like setTimeout() and setInterval.

Q.225)What is the difference between setInterval and setTimeout in practice?
ans : setInterval is used to execute a callback after a every interval of time given in miliseconds.
      setTimeout is used to execute a callback after a specific delay of time given in miliseconds.

Q.226)Explain the internal behavior of the await queue in JavaScript async calls?
ans : await queue is used to handle the async operations in javascript.


 Behavior and Output Prediction

Q.227)console.log([] + []); // ?
ans : according to coersion it will be empty string "".

Q.228)console.log([] + {}); // ?
ans : according to coersion it will be "[object]"

Q.229)console.log({} + []); // ?
ans : "[object]";

Q.230)console.log([1,2] + [3,4]); // ?
ans : 1,2,3,4;

Q.231)console.log(true + false); // ?
ans : 1

Q.232)console.log(null + 1); // ?
ans : 1

Q.233)console.log(undefined + 1); // ?
ans : 1

Q.234)console.log(typeof NaN); // ?
ans : "number"

Q.235)console.log(typeof typeof 1); // ?
ans : NaN

Q.236)let a = [1, 2, 3];
a[10] = 99;
console.log(a.length); // ?
ans : 10
📚 Concepts and Quirks

Q.239)What is the output of [] == ![] and why?
ans : false because "" == !"" they are not equal

Q.240)Why is typeof null === 'object'?
ans : because typeof null also returns 'object';

Q.241) Can NaN === NaN ever be true?
ans : No

Q.242)Why does 0.1 + 0.2 !== 0.3?
ans : because these are floating point values

Q.243)Explain hoisting with var, let, and const?
ans : var is hoisted as well as initialized with undefined
      let and const are hoisted but not initialized with any value

Q.244)What is the Temporal Dead Zone?
ans : It is a zone in which you are trying to access the value that is not initialized with any value.

Q.245)What is the difference between undefined and not defined?
ans : undefined is a default value that is set by the js if you not initialize it with any value.
      not defined is an error which says that the variable is not visible inside this scope.

Q.246)Can you delete variables in JavaScript?
ans : No.

Q.247)What's the result of delete a.b where a = { b: 10 }?
ans : this will delete the property b from the object.

📦 Closures & Scope
Q.248)What is a closure? Give a use-case?
ans : closures are just the functions which remembers the variables of the outer function even after the outer function completes their execution.
     
     give counter use case


Q.249)for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output?
ans : it will print 3,3,3 after 100 miliseconds because the var is functional scoped not block scoped
Fix the above to print 0, 1, 2.

Q.250)What's the difference between function declaration and expression?
ans : function declaration are hoisted
       function declaration have their own this
       function expression are arrow functions
       function expressions are not hoisted
       function expressions doesn't have their own this







Test 8

What is an IIFE and when is it useful?

💥 Asynchronous JavaScript
Explain microtask vs macrotask queue.


console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// Output?
What does async/await syntax do under the hood?

Can we use await outside an async function?

What happens if you await a non-Promise value?

📌 Objects & Arrays
How does JavaScript compare objects?

Can keys in objects be anything other than strings?

What is object destructuring? Provide an example.

What happens when you spread an object with duplicate keys?

What's the difference between shallow copy and deep copy?

🔀 Functions & this
What is the value of this in a regular function? In an arrow function?

How do bind, call, and apply work?

Can we use new with arrow functions? Why/why not?

What's the difference between function overloading in Java vs JavaScript?

Explain function currying and partial application.

📐 Advanced Topics
What is event delegation and why is it useful?

What is prototype chaining?

How does Object.create() differ from using a constructor?

What's the difference between Object.seal() and Object.freeze()?

What are WeakMap and WeakSet and how are they useful?

🧪 Miscellaneous and Tricky
How do you clone an object deeply?

What is the difference between in and hasOwnProperty()?

Can you override toString() in an object? Why would you?

How can you make a property in an object immutable?

What is a polyfill? Provide an example (e.g., Array.prototype.includes).



 Behavior-Based and Output Questions
What is the output of NaN === NaN and why?

What does typeof null return and why?

What is the difference between let x = {} && false and let y = {} || false?

What is the output of [..."hello"]?

What happens if you run delete Object.prototype?

What is the result of [] + [] and why?

Explain the behavior of false == '0' and false === '0'.

What is the value of !!undefined and !![]?

What does new Boolean(false) evaluate to in an if condition?

What is the difference between parseInt('08') and parseInt('08', 10)?

🔍 Closures, Scoping, Hoisting
What is closure and how does JavaScript handle it?

What’s the output:


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
What’s the difference between let, const, and var in terms of hoisting?

Why can’t you access let and const variables before declaration?

What is temporal dead zone (TDZ)?

What is the scope of variables declared with var inside a block?

Does a function declared inside a block have block scope?

⚙️ Functions and Execution Context
What is the difference between function declaration and expression?

What is an Immediately Invoked Function Expression (IIFE)?

How does the arguments object work in an arrow function?

Can you give an example of a function returning another function using closures?

What’s the difference between call, apply, and bind?

How does this behave differently in an arrow function?

🕳️ Type Coercion and Equality
What is the result of [] == ![] and why?

Why is null >= 0 true and null > 0 false?

What is the output of true + false?

What is the result of '5' - 2 vs '5' + 2?

What’s the output of undefined + 1?

What’s the difference between Object.is() and ===?

📦 Objects and Prototypes
What is prototypal inheritance in JavaScript?

How does the __proto__ chain work?

What is the output of:


const obj = {};
console.log(obj.__proto__ === Object.prototype);
What’s the difference between a class and a constructor function?

How do you extend built-in types like Array or String?

🧠 Advanced Concepts
What is event delegation in the DOM?

What is the event loop and microtask queue?

What is the difference between microtasks and macrotasks in JavaScript?

How does Promise.resolve().then(...).catch(...) work under the hood?

What is a memory leak in JavaScript and how can you prevent it?

What are WeakMap and WeakSet and why would you use them?

🧰 Edge Cases and Pitfalls
What’s the issue with using for...in to loop over arrays?

Why does [].constructor === Array but ({}).constructor === Object?

Why is typeof function(){} === 'function' but typeof class A {} is also 'function'?

Why is it risky to use eval()?

What is the difference between Object.freeze() and Object.seal()?

📊 Data Structures and Patterns
How would you deep clone an object?

How do Map and Object differ?

How do Set and Array differ in performance and use-case?

How would you implement a debounce function in JavaScript?

What is throttling and how would you implement it?



Output and Behavior Questions
What will be the output of console.log([] == ![])?

What is the result of '0' == [] and why?

What is the output of console.log([] + {}); and why?

What’s the output of "10" + 1 - 1 and why?

What’s the output of Boolean(0) && Boolean([])?

What happens when you try to access a non-existent property of null or undefined?

What is the output of console.log("123" - "12")?

Why is "" + 1 + 0 equal to "10" and not 1?

What is the result of [2] == 2 and why?

What does false == '0' return, and why?

🔍 Hoisting, Scope, and Closures
What happens when you try to access a let variable before its declaration?

What is the difference between a closure and a regular function?

Explain the concept of "hoisting" with examples for var, let, and const.

What is the result of console.log(typeof undefined) and why?

What happens when you call a function before it is defined, in case of var and let?

How does JavaScript handle a variable declared with var inside a block-level scope (like if or for)?

How does the execution context change when a function is executed?

What happens when you try to access this inside an arrow function?

What will be the output of the following code:


function foo() {
  var x = 10;
  if (x) {
    let y = 20;
    console.log(x);
  }
  console.log(y); // What will this log?
}
foo();
Can you explain what the arguments object is in a JavaScript function?

🧠 this and Arrow Functions
How does the this keyword behave in regular functions and arrow functions?

How does the this context change when using bind(), call(), and apply()?

What is the difference between an arrow function and a regular function when using this?

How does this behave inside a class method?

What happens when you use new with a function? What’s returned?

What is the result of console.log(this) in a setTimeout function?

🧰 Promises and Asynchronous JavaScript
What is the difference between Promise.all() and Promise.allSettled()?

What will be the output of this code?


async function foo() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Hello");
}
foo();
console.log("World");
How would you implement a promise.all-like functionality for multiple promises?

What is the state of a promise after it is fulfilled?

What is the purpose of async and await in JavaScript? How do they work with promises?

What’s the difference between setTimeout() and setImmediate()?

What is the microtask queue and how is it different from the macrotask queue in JavaScript?

What does the following code output and why:


console.log(Promise.resolve('foo'));
console.log(Promise.resolve('bar'));
What happens if you call reject inside a then() handler in a promise chain?

What will be the output of:


async function test() {
  return 10;
}
test().then(console.log);
⚙️ Event Loop and Concurrency Model
Explain the difference between setTimeout() and setInterval().

What is the purpose of nextTick() and when should it be used?

What is the order of execution in the following code?


setTimeout(() => console.log("1"));
setImmediate(() => console.log("2"));
process.nextTick(() => console.log("3"));
Promise.resolve().then(() => console.log("4"));
What is the role of the event loop in handling asynchronous JavaScript operations?

Explain the difference between setImmediate() and setTimeout() with 0 ms delay.

How does the process.nextTick() method affect the event loop?

How does JavaScript handle the execution of synchronous and asynchronous code?

🧩 Objects, Arrays, and Prototypes
What’s the difference between a shallow copy and a deep copy of an object or array in JavaScript?

How do you merge two objects without overwriting properties in JavaScript?

How would you make an array unique by removing duplicates using JavaScript?

Explain the prototype chain in JavaScript with an example.

What’s the output of the following code:


let obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 3;
console.log(obj.a);
How do you create a new array from another array in JavaScript?

What will be the output of the following:


const obj = { x: 1, y: 2, z: 3 };
Object.defineProperty(obj, 'a', { value: 5, writable: false });
obj.a = 10;
console.log(obj.a);


 Data Types and Coercion
What happens when you compare an array to a string using == in JavaScript?

Explain the behavior of + operator when used with an array and an object in JavaScript.

What does null == undefined evaluate to and why?

How does JavaScript treat [] == ![] in terms of type coercion?

What will be the result of false + [] + {} in JavaScript?

What is the difference between === and == in JavaScript, and how is coercion involved?

How do NaN and undefined compare in JavaScript when using == and ===?

What is the behavior of 1 + "2" - "3" in JavaScript?

What happens when you use the == operator to compare two arrays in JavaScript?

What is the result of {} + [] and why?

🧠 Hoisting and Execution Context
What will the following code log and why?


console.log(foo);
var foo = 'Hello';
How does hoisting affect variables declared with let, const, and var?

What will be logged by this code and why?


function foo() {
  console.log(x);
  var x = 10;
}
foo();
How does hoisting differ between functions and variables?

What happens if a function is called before its declaration using var and let?

What is the difference between undefined and not defined in JavaScript?

How would you describe the concept of closure in JavaScript, and why is it important?

How does hoisting work with class declarations in JavaScript?

How would you explain JavaScript's execution context and call stack?

What happens when you have multiple variables declared with let in a block scope?

🧩 Functions and Scope
What is the result of the following code and why?


function foo(a, a, a) {
  console.log(a);
}
foo(1, 2, 3);
How can you preserve the arguments passed into a function in JavaScript?

What does the following code output, and why?


function bar() {
  var a = 10;
  function foo() {
    console.log(a);
  }
  return foo;
}
var func = bar();
func();
What is the significance of the arguments object in JavaScript functions?

How would you handle variable shadowing in JavaScript?

Explain how closures capture variables.

How do you define a function that does not have access to the arguments object in ES6?

What is the behavior of this in a regular function and in an arrow function?

How do you make an object function as a class constructor in JavaScript?

What is the difference between a function expression and a function declaration in JavaScript?

🚀 Asynchronous JavaScript
What’s the difference between setTimeout() and setInterval() in terms of execution behavior?

What is the purpose of Promise.all() and when should it be used over Promise.allSettled()?

What is the output of the following code and why?


async function foo() {
  return 10;
}
console.log(foo());
How does JavaScript's async and await work with try/catch for error handling?

What happens when resolve() is called multiple times in a promise?

How would you implement a Promise.all-like function without using built-in functions?

What’s the difference between nextTick() and setTimeout() in JavaScript?

How does the JavaScript event loop handle synchronous and asynchronous code execution?

What is the concept of a microtask queue, and how does it interact with the event loop?

What happens when you use await with a non-promise value?

🧳 Objects and Arrays
What happens when you add a property to an array using an object key in JavaScript?

How would you merge two objects in JavaScript, ensuring no properties are overwritten?

How would you convert an object to an array in JavaScript?

How do you create a shallow copy of an object or array in JavaScript?

What will be the output of the following code and why?


let arr = [1, 2, 3];
arr[10] = 100;
console.log(arr.length);
What is the significance of Object.freeze() in JavaScript, and what does it prevent?

How does the spread operator work with objects and arrays in JavaScript?

How do you remove duplicate elements from an array in JavaScript?

What is the result of console.log([] instanceof Array) in JavaScript?

What will be the output of the following code and why?


var obj = Object.create(null);
console.log(obj instanceof Object);



Advanced Concepts & Behavior
What will be logged by the following code and why?


let x = 10;
let y = 20;
(function() {
  console.log(x + y);
})();
What is the result of the following code?


console.log('5' - 3);
How do you prevent a function from being called again in JavaScript after it's been executed once?

Explain what happens when a function is invoked in the context of an asynchronous call.

What happens when you modify an array using push() in a for...of loop?

How does JavaScript's garbage collection work, and when is an object considered eligible for garbage collection?

What happens when null is used as an object in JavaScript?

Why does [] == ![] evaluate to true in JavaScript?

How does JavaScript handle inheritance when using Object.create() vs new?

Can you modify a frozen object in JavaScript? Explain why or why not.

🧠 Closures and Scopes
How does a closure differ from a lexical scope in JavaScript?

What is the effect of using let vs var inside a closure?

Explain the use of the bind() method in JavaScript, and give an example.

What happens when you return a function from another function in JavaScript? Give an example.

What is a "self-invoking function" in JavaScript, and why would you use it?

How would you solve the issue of multiple callbacks referencing the same variable in closures?

Explain the concept of function currying in JavaScript with an example.

How does setTimeout() handle closures in terms of execution context?

How can you create a private variable in JavaScript using closures?

What is the difference between a function expression and a function declaration, especially with respect to closures?

🧩 Event Loop, Promises, and Async Programming
How does the event loop differ from the callback queue in JavaScript?

What is the difference between Promise.all() and Promise.race() in JavaScript?

Can a rejected promise be caught by Promise.all()?

How would you handle multiple async operations in parallel and ensure they all complete before proceeding?

How does JavaScript handle nested promises in terms of execution order?

What does it mean to "chaining promises," and how does it work?

How do you implement retry logic for failed promises in JavaScript?

Explain the concept of the microtask queue and macrotask queue in the event loop.

What happens if you call setTimeout() with a delay of 0 milliseconds?

How does async/await improve asynchronous code compared to traditional callback functions?

🧳 Objects and Arrays
How does JavaScript handle object cloning using Object.assign() vs spread operator?

What is the difference between shallow copy and deep copy in JavaScript objects?

What is the difference between for...in and for...of loops in JavaScript?

How would you sort an array of objects in JavaScript based on a specific property?

How would you check whether an object is an array in JavaScript?

What will the following code output and why?


let obj1 = { a: 1, b: 2 };
let obj2 = obj1;
obj2.a = 3;
console.log(obj1.a);
What does the map() function return in JavaScript, and how is it different from forEach()?

What is the output of the following code and why?


var arr = [1, 2, 3, 4, 5];
var result = arr.splice(1, 2, 6, 7);
console.log(result);
How would you merge two arrays in JavaScript while eliminating duplicates?

What does Object.is() do in JavaScript, and how is it different from ===?

⚡ ES6 and Beyond
What is the difference between let, const, and var in terms of scoping and hoisting?

How would you create a new instance of a class in JavaScript, and what happens behind the scenes?

How does JavaScript handle destructuring assignments in objects and arrays?

What is the for...of loop and how is it different from for...in in JavaScript?

How would you use the reduce() function to sum the values in an array of numbers?

Explain how default function parameters work in JavaScript.

What is the purpose of the spread operator and how does it differ from the rest operator?

How would you implement an object method that modifies this using an arrow function vs a regular function?

What happens when you spread an array or object in a for loop?

How do arrow functions handle the this keyword, and how does it differ from regular functions?



🔍 Advanced Topics & Use Cases
What happens if you attempt to use delete on a non-configurable property in JavaScript?

Explain how JavaScript’s event delegation works, and give an example.

How does JavaScript handle floating-point precision errors, and what are common workarounds?

How can you use WeakMap to avoid memory leaks in JavaScript?

What is the difference between null and undefined in JavaScript, and when should you use each?

How does JSON.parse() behave when parsing a malformed JSON string?

Explain the get and set methods of JavaScript’s Object and give an example of each.

What is the behavior of console.log() when logging objects or arrays with complex references?

How would you implement a custom bind() function in JavaScript?

What is the significance of the this keyword in an arrow function, and how is it different from traditional functions?

🧑‍💻 Async Handling & Event Loop
How does JavaScript handle async/await under the hood, and what happens if an error is thrown inside an async function?

Explain how you can make an async function return a promise even if no await is used inside the function.

What is the difference between the setTimeout() and setImmediate() functions in Node.js?

How does the finally block work with try/catch in JavaScript?

What are microtasks and macrotasks in JavaScript, and how are they handled in the event loop?

What will the following code output and why?


setTimeout(() => console.log('Hello'), 0);
console.log('World');
How can you avoid the "callback hell" problem in JavaScript, and what tools do you use?

Explain how promises work in a chained Promise.all() scenario, and how errors are handled.

What is the difference between async/await and .then() in handling promises?

How can you simulate the behavior of Promise.race() using Promise.all()?

🛠️ Objects & Prototypes
How would you create an immutable object in JavaScript?

Explain the concept of prototype inheritance in JavaScript.

What is the __proto__ property in JavaScript, and what is its significance?

How would you define a getter and setter on an object in JavaScript? Provide an example.

Explain the difference between Object.create() and new Object() in JavaScript.

What happens when you add a property to a frozen object in JavaScript?

How can you implement a deep cloning function for objects in JavaScript?

How would you use Object.getPrototypeOf() and Object.setPrototypeOf() in JavaScript?

How can you use Object.defineProperty() to define a read-only property on an object?

What is the purpose of Object.isFrozen() and Object.freeze() in JavaScript?

💻 Array Handling & Higher-Order Functions
What is the difference between map() and filter() when iterating over arrays?

How would you flatten an array of arrays in JavaScript?

What is the output of the following code, and why?


const arr = [1, [2, 3], 4];
const flattened = arr.flat();
console.log(flattened);
How do you implement pagination using arrays in JavaScript?

Explain how the reduce() function works in JavaScript and provide an example of its usage.

How can you remove duplicate elements from an array in JavaScript?

What is the difference between slice() and splice() in JavaScript arrays?

How would you check if all the elements of an array meet a condition in JavaScript?

Explain the concept of array destructuring and give an example of its use.

How would you use some() and every() methods on arrays in JavaScript?

🧑‍🔧 ES6+ Features & Syntax
What are template literals in JavaScript, and how do they differ from regular strings?

How do you declare a constant object in JavaScript, and is it possible to modify its properties?

Explain the difference between const, let, and var in JavaScript in terms of scoping and hoisting.

What is the purpose of Symbol() in JavaScript, and how is it used?

How does destructuring work with nested objects in JavaScript? Provide an example.

What is the significance of the spread operator in JavaScript, and how does it differ from the rest operator?

How would you use Object.assign() to merge two objects in JavaScript?

Explain how you can handle default function parameters in JavaScript.

How do you create a generator function in JavaScript, and when would you use one?

What is the purpose of the finally block in JavaScript’s try/catch/finally?



 JavaScript Behavior Questions
What will be the output of the following code and why?


console.log(1 + '1' - 1);
What happens when you try to access a variable before it's declared with let or const?

Why does [] == [] return false in JavaScript?

What is the output of this code?


var x = 1;
function foo() {
  var x = 2;
  return function() {
    console.log(x);
  }
}
var bar = foo();
bar();
How does JavaScript handle the following comparison: 0 == false and 0 === false?

What happens when a setTimeout() function is passed a negative delay in JavaScript?

What is the result of running NaN === NaN in JavaScript and why?

How does the typeof operator behave with null?

Why is this code producing undefined instead of 5?


var a = { x: 1 };
function updateObj(a) {
  a = { x: 5 };
}
updateObj(a);
console.log(a.x);
What does the following code output and why?


console.log([] + []);
console.log({} + {});
🔄 Scope and Closures
What will the output be when the following code runs?


function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn();
fn();
What is the difference between function declarations and function expressions in terms of hoisting behavior?

Why does the following code throw an error when executed?


function test() {
  console.log(a);
  let a = 1;
}
test();
Explain why this code behaves the way it does:


var a = 10;
(function() {
  console.log(a);
  var a = 20;
  console.log(a);
})();
How do closures work in JavaScript, and what problem can they solve?

Why does this code output undefined instead of the expected value?


function foo() {
  console.log(a);
  let a = 5;
}
foo();
How does JavaScript handle variable shadowing and what effect does it have?

What will the following code output?


function counter() {
  var count = 0;
  return {
    increment: function() { count++; },
    getCount: function() { return count; }
  };
}
var myCounter = counter();
myCounter.increment();
console.log(myCounter.getCount());
How do you handle circular references in closures or objects?

What is a "lexical scope," and how does it relate to closures in JavaScript?

🏗️ Object Behavior and Inheritance
What does this code output, and why?


var a = { name: 'Alice' };
var b = Object.create(a);
b.name = 'Bob';
console.log(a.name);
What will be the output of the following?


var obj = { x: 1 };
Object.freeze(obj);
obj.x = 2;
console.log(obj.x);
Why does [] === [] return false, but [] == [] still returns false in JavaScript?

What is the difference between Object.getPrototypeOf() and __proto__?

Why does the following code output false?


let a = { name: 'Alice' };
let b = { name: 'Alice' };
console.log(a == b);
What happens when you attempt to access properties of an object after calling Object.freeze()?

Explain the behavior of Object.is() and give examples of when you would use it.

What happens when you call Object.defineProperty() with the configurable: false option on a property?

Why does the following code print undefined?


var obj = { name: 'Alice' };
Object.defineProperty(obj, 'name', { writable: false });
obj.name = 'Bob';
console.log(obj.name);
Explain what happens when you call Object.keys() on an object with non-enumerable properties.

🧳 Async Behavior and Timing
What happens if you call clearTimeout() immediately after setting a timeout in JavaScript?

Why does the following code log 1, then 2, then 0?


console.log(1);
setTimeout(() => console.log(2), 0);
console.log(0);
What is the difference between setTimeout and setImmediate in Node.js?

What will be logged in the following code and why?


const promise1 = new Promise((resolve, reject) => {
  resolve(1);
});
promise1.then(() => {
  console.log(2);
});
console.log(3);
How does JavaScript handle errors in asynchronous code with try/catch and async/await?

What happens when you call Promise.resolve() inside a setTimeout?

Explain how JavaScript handles the call stack and event loop when executing asynchronous code.

Why does Promise.all() return the results in the order of the input promises, and not the order in which they resolve?

What is the difference between Promise.all() and Promise.race()?

What happens when you resolve or reject a promise inside an already resolved promise in JavaScript?

🧩 Advanced Topics & Quirks
Why does 0.1 + 0.2 !== 0.3 in JavaScript? Explain the underlying reason.

How does JavaScript handle JSON.parse() with non-standard JSON formats or invalid data?

Explain the difference between NaN and undefined in JavaScript, and how to check for NaN.

What is the behavior of Math.max() when passed a non-numeric argument?

Why does the following code output false?


console.log(0 == []);
What happens when you use delete on an array element in JavaScript?

What will this code output and why?


const foo = {
  bar: 'bar',
  get bar() {
    return this._bar;
  },
  set bar(value) {
    this._bar = value;
  }
};
foo.bar = 'baz';
console.log(foo.bar);
How would you handle deep equality checks between objects in JavaScript?

What does the following code output and why?


let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 2;
console.log(obj1.a);



JavaScript Behavior Questions
What is the output of the following code and why?


console.log(1 + '1' + 1);
What happens if you use ++ on a string value? Explain the result.

What happens when you try to compare an empty array ([]) with an object ({}) using == or ===?

Why does this code log undefined?


console.log(foo());
var foo = function() {
  return 5;
};
What happens when you try to assign undefined to a variable that is const?

What will happen if you call NaN == NaN in JavaScript?

What will be the output of this code?


let obj = { name: 'Alice' };
obj = null;
console.log(obj.name);
What will the following code output and why?


var a = {};
console.log(a instanceof Object);
What happens when you try to call a non-function type (e.g., a string or number) as a function?

What happens when you use null as an object and attempt to call its properties?


var obj = null;
console.log(obj.someProperty);
🔄 Scope and Closures
What is the value of x after this code runs?


var x = 5;
(function() {
  var x = 10;
})();
console.log(x);
What happens when you use let inside a block scope? Can you access the variable from outside?

How does JavaScript handle variable declarations within a function, and why is this important when it comes to closure behavior?

Why does the following code return undefined?


function foo() {
  console.log(x);
  var x = 10;
}
foo();
What happens when you create a closure inside a loop that references the loop variable?

What is the result of executing the following code?


var func = (function() {
  var a = 1;
  return function() {
    console.log(a);
  };
})();
func();
What will be logged when you execute this code?


var x = 2;
function outer() {
  var x = 3;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
Explain the behavior of var, let, and const in terms of hoisting within a function.

Why is the following code problematic in terms of scope?


function test() {
  for (var i = 0; i < 5; i++) {}
  console.log(i);
}
test();
Why does const not allow reassignment while let does?

🏗️ Object Behavior and Inheritance
What will the following code output?


var obj = { a: 1 };
var obj2 = Object.create(obj);
obj2.b = 2;
console.log(obj2.a);
What happens when you assign an object property to undefined?

What is the output of the following code?


var a = { name: 'John' };
var b = Object.assign({}, a);
b.name = 'Alice';
console.log(a.name);
Why does the following code throw a TypeError?


const obj = { name: 'Alice' };
obj.name = 'Bob';
Object.freeze(obj);
obj.name = 'Charlie';
What happens when you add new properties to a frozen object in JavaScript?

Explain the difference between Object.getPrototypeOf() and Object.prototype.

How does the delete operator behave when applied to an array index?

What will happen when you attempt to assign a property to an object that is defined with Object.defineProperty() and writable: false?

Why does this code print false?


var obj1 = { a: 1 };
var obj2 = { a: 1 };
console.log(obj1 === obj2);
What happens if you modify an object’s prototype after creating an instance of it?

🧳 Async Behavior and Timing
What is the output of the following code and why?


console.log(1);
setTimeout(function() {
  console.log(2);
}, 0);
console.log(3);
What happens when you use Promise.resolve() with a setTimeout() callback?

How does the event loop process synchronous and asynchronous tasks in JavaScript?

What happens if you call clearInterval() immediately after setInterval() is called?

How does Promise.all() behave when one of the promises is rejected?

What is the output of the following code?


let p1 = new Promise(resolve => resolve(10));
let p2 = new Promise(resolve => resolve(20));
Promise.race([p1, p2]).then(console.log);
What is the difference between setTimeout() and setInterval()?

What happens when you use async/await to handle a promise rejection inside a try/catch block?

Why does setTimeout with a delay of 0 still wait before executing the callback?

What happens when you call async function without using await?

🧩 Advanced Topics & Quirks
What is the behavior of 0 == '0' and 0 === '0' in JavaScript?

What happens when you compare an object to null using the == operator?

How does JavaScript treat false when used as a number?

What is the result of calling typeof null?

What happens when you execute the following code?


var arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
What happens when you call Object.getOwnPropertyNames() on an array?

Why does 0.1 + 0.2 !== 0.3 in JavaScript?

How does JavaScript handle large numbers (e.g., Number.MAX_VALUE) and precision?

What happens when you call String(null) or String(undefined)?

What is the result of the following expression?


console.log([1] == true);



 JavaScript Behavior Questions (Part 3)
What happens when you assign null to a variable declared with let?

What will the following code output and why?


var a = { name: 'John' };
var b = a;
b.name = 'Alice';
console.log(a.name);
What happens when you call a function with missing arguments? How does JavaScript handle it?

What will be logged when you run this code?


var foo = { a: 1 };
var bar = foo;
bar = { b: 2 };
console.log(foo);
What is the result of '' == 0 and '' === 0 in JavaScript?

What happens when you pass an array to a function expecting an object and modify the array inside the function?

How does JavaScript handle type coercion when performing the following comparison?


'false' == false
What happens when you try to call a function that is declared after it is invoked (due to hoisting)?

Why does the following code result in undefined?


var x = {};
console.log(x.a.b);
What will this code output and why?


var arr = [];
arr[10] = 5;
console.log(arr.length);
🔄 Scope and Closures (Part 2)
What happens when you declare a variable inside a for loop and access it outside the loop?

What will the output be if the following code is executed?


var x = 1;
function test() {
  var x = 2;
  function inner() {
    var x = 3;
    console.log(x);
  }
  inner();
}
test();
What happens when you return a function from another function and call it later?

Explain what happens when a closure "remembers" its lexical scope.

What will be logged when you run this code?


var x = 5;
(function() {
  console.log(x);
  var x = 10;
})();
What happens when you try to access a variable before its declaration inside a function using let or const?

Why does the following code log undefined?


function foo() {
  console.log(a);
  var a = 10;
}
foo();
How does JavaScript handle the this keyword in a function declared inside an object?

What is the value of x after the following code executes?


var x = 5;
function foo() {
  var x = 10;
}
foo();
console.log(x);
Why does the following code print 10 and undefined?


var x = 10;
function outer() {
  var x = 5;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
🧳 Async Behavior and Timing (Part 2)
What happens when you call setInterval() without calling clearInterval()?

How does the event loop handle setTimeout with a delay of 0 milliseconds?

What will happen if you call Promise.reject() in the following code?


Promise.reject('Error').catch(console.log);
What happens if you invoke async functions inside a Promise chain?

What will be the output of the following code?


let p1 = new Promise(resolve => resolve(5));
let p2 = new Promise(resolve => resolve(10));
Promise.all([p1, p2]).then(console.log);
How does JavaScript handle the await keyword when used inside a non-async function?

What happens when a Promise is resolved after a catch handler is added?

How does JavaScript handle the timing of synchronous vs asynchronous code in a Promise chain?

What happens when you call setTimeout() with an invalid argument, like null?

How does JavaScript handle the execution order between a synchronous function and a promise callback?

🧩 Advanced Topics & Quirks (Part 2)
What is the behavior of typeof NaN?

How does JavaScript handle object comparisons using the == and === operators?

What happens when you call Array.prototype.map() on an object?

What is the result of running the following code?


console.log('0' == false);
console.log('0' === false);
What happens when you apply the delete operator on a variable declared with let?

What happens when you use the + operator on two null values?

What is the result of the following expression?


console.log([] == false);
console.log([] === false);
Why does 0.1 + 0.2 !== 0.3 in JavaScript?

What happens if you call Number() on an empty string ""?

Why does typeof null return object in JavaScript?

🔧 Objects and Arrays (Part 2)
What happens when you try to change the length of an array in JavaScript?

What will the following code output?


var a = [1, 2, 3];
var b = a;
b[0] = 99;
console.log(a[0]);
What happens when you try to access an index that is out of range in an array?

How does the Object.assign() method behave when copying objects with methods?

What happens when you try to add properties to an object defined with Object.freeze()?

What will be the result of this code?


let arr = [1, 2, 3];
arr.length = 2;
console.log(arr);
What happens when you use Object.keys() on an array in JavaScript?

Why does this code log undefined?


var obj = { name: 'John' };
Object.freeze(obj);
obj.name = 'Alice';
console.log(obj.name);
What happens when you modify an array element while looping over it using forEach?

What happens if you call Array.prototype.push() on a frozen array?


JavaScript Behavior Questions (Part 4)
What is the result of false == [] and false === [] in JavaScript?

Why does this code return false?


[] == ![]
What happens when you use typeof on a function in JavaScript?

What is the output of typeof [] and typeof {}?

Why does this code output false?


[] == ![]
What happens when you return a function from another function that has access to its own scope?

What will be logged by this code?


function test() {
  console.log(typeof null);
}
test();
What will the following code output?


var x = { a: 1 };
var y = { a: 1 };
console.log(x == y);
What will be the result of typeof NaN in JavaScript?

What happens when you add an object to an array using push()?

🔄 Scope and Closures (Part 3)
What will the following code log?


var x = 10;
function test() {
  console.log(x);
  var x = 20;
}
test();
How does JavaScript handle closures in an asynchronous environment like setTimeout()?

What happens when you have a function that uses the same variable in an outer scope and in the inner scope?

What happens when you try to reassign let variables inside a block scope?

Why does this code print undefined?


var x;
console.log(x);
x = 10;
What happens when you use the this keyword inside a function defined inside an object method?

How does the this keyword behave when calling a method on an object?

What happens when a closure retains access to variables from its parent scope?

Why does this code result in an error?


let x = 10;
let x = 20;
What will be logged when you execute the following code?


var counter = 0;
function increment() {
  counter++;
  console.log(counter);
}
increment();
increment();
🧳 Async Behavior and Timing (Part 3)
What happens when you call Promise.resolve() inside setTimeout()?

What will be logged when you run the following code?


setTimeout(() => console.log(1), 0);
console.log(2);
What is the result when you chain multiple .then() calls with asynchronous operations?

How does JavaScript handle multiple setTimeout() calls with 0 delay?

What is the output of the following code?


let p = new Promise(resolve => setTimeout(() => resolve('Hello'), 100));
p.then(data => console.log(data));
console.log('World');
What will happen if you mix synchronous and asynchronous code in a loop?

What happens when you return a promise inside a .then() callback?

What will be the output when you run the following code?


async function fetchData() {
  return 'Data';
}
console.log(fetchData());
What happens when you call Promise.all() with an array containing mixed promise and non-promise values?

How does the event loop handle a setTimeout with a delay of 0 milliseconds?

🧩 Advanced Topics & Quirks (Part 3)
What happens when you try to access a non-existent property of a frozen object?

What will happen when you use the delete operator on an array element?

What happens when you declare a variable using var inside a block, but access it outside the block?

What is the result of applying the delete operator to a function in JavaScript?

Why does 0.1 + 0.2 !== 0.3 in JavaScript?

What happens when you use the map() function on an object?

Why does the expression typeof [] == 'object' return true in JavaScript?

What happens if you try to pass a non-iterable object to a function expecting an array?

What will happen if you use Object.freeze() on an object and then attempt to modify its properties?

What is the result of null + 1 in JavaScript?

🔧 Objects and Arrays (Part 3)
What happens when you use Object.defineProperty() on an existing object property?

What will happen if you add a non-enumerable property to an object?

What will the following code output?


var obj = { a: 1 };
Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
console.log(Object.keys(obj));
What happens when you use JSON.stringify() on an object with circular references?

What will happen when you try to modify an object property inside a forEach() loop?

Why does Object.getOwnPropertyNames() return more properties than Object.keys()?

What will the following code output?


var arr = [1, 2, 3];
arr[10] = 5;
console.log(arr.length);
How does JavaScript treat object properties with special characters like __proto__ or constructor?

What happens when you use Object.assign() on two objects with properties of the same name?

Why is it important to use Object.freeze() in JavaScript?

