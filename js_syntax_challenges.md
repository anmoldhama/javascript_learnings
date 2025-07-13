✅ 1–20: Functions & Scope
Q.1) Declare a function that adds two numbers.
function add(a,b){
    return a+b;
}

console.log(add(1,2));

Q.2) Write a function expression and call it.

let add = function (a,b){
    return a+b;
}
console.log(add(1,2));


Q.3) Create an arrow function with a single parameter.
let func = (a) =>{
    return a;
};
console.log(func(2));

Q.4) Create a function that returns another function (closure).
function outer(){
    return function inner(){
        return 'called';
    }
}

let result = outer();

console.log(result());

Q.5) Use an IIFE to print "Hello".
(function(){
     console.log('Hello');
})();

Q.6) Write a function that uses arguments object.
function useArgument(){
    let sum = 0;
    for(let i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(useArgument(1,2,3));

Q.7) Demonstrate default parameters in a function.
function useArgument(a = 5){
     return a;
}

console.log(useArgument());

Q.8) Create a recursive factorial function.
function factorial(n){
    if(n == 1) return 1;
    
    let result = n * factorial(n-1);
    return result;
}

console.log(factorial(5));


Q.9) Write a function using rest parameters.

function useRest(a,b,...rest){
     return rest;
}

console.log(useRest(1,2,3,4,5,6,7));

Q.10) Create a function that remembers state (closure-based counter).

function closure(){
    let value = 0;
    
    return {
        increment(){
        value++;
        return value;
        },
        decrement(){
            value--;
            return value;
        }
    }
    
}

let counter = closure();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

Q.11) Convert a normal function into an arrow function.

function normal(){
    
}

()=> {
    
}


Q.12) Write a curried function: add(2)(3)
function add(a){
    return function(b){
        return a+b;
    }
};

console.log(add(2)(3));


Q.12) Show the difference between var, let, and const inside a function.
function difference(){
    const a = 1;
{
    const a = 2;
    console.log(a);
}
  console.log(a);
}

difference();

Q.13) Create a function that logs its own name.
function log(){
    console.log(log.name);
}

log();

Q.14) Write a function that uses destructured object as argument.
function useDestructured({a,b}){
     
   return a + b;
}

let obj = {
    a: 1,
    b: 2
}

console.log(useDestructured(obj))

Q.15) Create a function that uses destructured array as argument.
function useDestructured([a,b]){
    return a + b;
}

let arr = [1,2];
console.log(useDestructured(arr));

Q.16) Write a function that uses early return pattern.

function earlyExit(age){
    if(age == 0) return 'not born';
    
    if(age <= 10) return 'under aged';
    
    if(age> 10) return 'perfect';
    
};

console.log(earlyExit(10));

Q.17) Demonstrate hoisting with var in a function.

function hoist(){
    
    a = 10;
    return a;
    var a;
}

console.log(hoist());

Q.18) Show how this behaves inside arrow vs normal function.

function normal(){
    return this;
}

console.log(normal());  // this refers to the global object

let arrow = ()=>{
    return this;
}

console.log(arrow());  // {}

Q.19) Create a memoized function.
function memoize(fn){
    let cache = {};
    
    return function (...args){
        let key = JSON.stringify(...args);
        if(cache[key]){
            console.log('come from cache')
            return cache[key];
        }else{
            cache[key] = fn(...args);
            console.log('calculating')
            return cache[key];
        }
    }
}


function sum(a,b){
    return a+b;
}

let result = memoize(sum);

console.log(result(1,2));
console.log(result(3,4));
console.log(result(1,2));


✅ 21–40: Arrays & Loops
Q.20) Use for loop to sum numbers 1–10.  done

Q.21) Loop over an array using forEach.  done
let arr = [1,2,3,4,5,6];

arr.forEach((element)=>{
    console.log(element);
})

Q.22) Use map to double all values in an array.
done

Q.23) Use filter to get even numbers.
done

Q.24) Use reduce to sum all values.
let arr = [1,2,3,4,5,6];

let result = arr.reduce((acc,curr)=>{
   return acc + curr;
},0);

Q.25) Use find to get first item matching condition.

let arr = [1,2,3,4,5,6];

let result = arr.find((element)=> {
    return element % 2 == 0;
});

console.log(result);


Q.26) Use some and every for array checks.

let arr = [1,2,3,4,5,6];

let result = arr.some((element)=>{
      return element % 2 == 0
});

console.log(result);

Q.27) Use flat() to flatten nested arrays.
let arr = [1,2,[3,4],5,6];

let result = arr.flat();
console.log(result);


Q.28) Use splice to remove items from an array.

let arr = [1,2,3,4,5,6];

let result = arr.splice(3,4); first is the string index, second is the number of elements
console.log(result);

Q.29) Write custom map using for loop.
Array.prototype.myMap = function(callback){
    
    let result = [];
    
    for(let i = 0; i<this.length; i++){
        result.push(callback(this[i]));
    }
    
    return result;
    
}

let arr = [1,2,3,4,5];

let result = arr.myMap((element)=>{
    return element * 2;
});

console.log(result);


Q.30) Reverse an array without using .reverse().
done

Q.31) Create a new array of squared numbers.
done

Q.32) Use Set to remove duplicates from array.

let arr = [1,2,1,3,4,2,3];

let result = new Set(arr);
console.log(result);

Q.33) Convert array of key-value pairs to object.

function convert(arr){
    let obj = {};
    
    for(let i = 0; i<arr.length; i++){
        Object.assign(obj,arr[i]);
    };
    
    return obj;
}

let arr = [{a:1},{b:2},{c:3},{d:4}];

let result = convert(arr);

console.log(result);


Q.34) Chunk an array into groups of n.

 function chunk(arr,size){
     
     let result = [];
     
     for(let i = 0; i<arr.length; i+=size){
         let chunk = arr.slice(i,i+size);
         result.push(chunk);
     }
     
     return result;
 }
 
 let arr = [1,2,3,4,5,6,7,8,9,10];
 
 console.log(chunk(arr,3));

Q.35) Flatten a deeply nested array manually.
done

Q.36) Zip two arrays into one.

function zip(arr1,arr2){
    
    let result = [];
    let length = Math.min(arr1.length, arr2.length);
    
    for(let i = 0; i<length; i++){
        result.push([arr1[i],arr2[i]]);
    }
    
    return result
}

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,1,5,1,2,3];

console.log(zip(arr1,arr2));


Q.37) Rotate an array to the right by k.
done

Q.38) Remove falsy values from an array.
done


Q.39) Write a function that merges multiple arrays.

function merge(...arrays){
    let result = [];
    
    for(let i = 0; i<arrays.length; i++){
        result.push(...arrays[i]);
    }
    
    return result;
}

console.log(merge([1,2,3,4],[2,3,4,5],[4,5,6,7],[4,5,6,7]));


✅ 41–60: Objects & Destructuring
Q.40) Create an object and access its properties.
done

Q.41) Add a method inside an object.
let obj = {
    a: function(){
        return 1;
    }
}

console.log(obj.a());


Q.42) Use object destructuring.
done

Q.43) Use nested destructuring.

let [a,[b,c],d] = [1,[2,3],4];

console.log(a,b,c,d);

Q.44) Use computed property names.

let key = 'dynamic'
let obj = {
    [key] : 1
};

console.log(obj);

Q.45) Clone an object using spread.

let obj = {a: 1};

let obj2 = {...obj};

console.log(obj2);

Q.46) Merge two objects using spread.

done

Q.47) Convert object to array using Object.entries.
done

Q.48) Iterate over object keys and values.
done   for in

Q.49) Write a function that swaps object keys and values.



Q.50) Deep clone a nested object.

function deepClone(obj){
  let result = {};
  
  for(let key in obj){
      if(typeof obj[key] == 'object'){
          result[key] = deepClone(obj[key]);
      }else{
          result[key] = obj[key];
      }
  }
  return result;
}

let obj = {name: "anmol",age: "24", occupations: {occ: "software"}};

console.log(deepClone(obj));

Q.51) Create a dynamic key-value pair from variables.

Q.52) Delete a property from an object.

Q.53) Use in and hasOwnProperty.

Q.54) Use Object.freeze() and demonstrate immutability.

Q.55) Implement a shallow equality checker.

Q.56) Write a function that flattens nested objects.

Q.57) Use optional chaining (?.) in an object.

Q.58) Use nullish coalescing (??) to set default.

Q.59) Write a function that merges default config with custom config.

✅ 61–80: Promises, Async/Await, and Callbacks
Q.60) Create a Promise that resolves after 1 second.

Q.61) Convert callback-based code into a Promise.

Q.62) Chain two .then() calls.

Q.63) Handle errors using .catch().

Q.64) Use Promise.all with multiple Promises.

Q.65) Use Promise.race.

Q.66) Convert .then() to async/await.

Q.67) Create an async function that fetches data.

Q.68) Use try/catch inside async function.

Q.69) Create a delay function using Promise.

Q.70) Retry logic using async/await.

Q.71) Call async function from another async function.

Q.72) Sequential vs parallel async execution.

Q.73) Write a custom promisify() utility.

Q.74) Simulate a race condition and resolve it.

Q.75) Combine await with array .map() correctly.

Write a fetch wrapper with retries.

Use setTimeout as a Promise-based delay.

Demonstrate callback hell and refactor with Promise.

Implement timeout for async operation.

✅ 81–100: Advanced Patterns & Features
Write a class and instantiate it.

Extend a class and override a method.

Use getter and setter in a class.

Use static methods in a class.

Use private properties (#) in class.

Demonstrate call, apply, and bind.

Write a debounce function.

Write a throttle function.

Create a custom event emitter.

Write a function that memoizes another function.

Use closures to create private variables.

Create a simple module pattern using IIFE.

Write your own once utility.

Use Symbol as a unique object key.

Use a Proxy to intercept object access.

Use Reflect.set and Reflect.get.

Write a function using tagged template literals.

Use Object.defineProperty to define custom behavior.

Use new.target inside a constructor.

Write your own groupBy function for arrays.
