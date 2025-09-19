🔰 Basics of JavaScript Objects
What is an object in JavaScript? How is it different from an array?

How do you create an object in JavaScript?

Using object literal, new Object(), constructor functions, or classes.

How do you access and update object properties?

Dot notation vs bracket notation: obj.name vs obj["name"]

What is the difference between in operator and hasOwnProperty()?

How do you iterate over all properties of an object?

for...in, Object.keys(), Object.entries(), Object.values()

🧠 Deep Concepts & Scenarios
What is the difference between Object.create() and a constructor function?

How does object reference work in JavaScript?

What happens when you assign an object to another variable?

What is shallow copy vs deep copy in objects?

How to create each? (e.g., spread operator vs structuredClone() or recursion)

How do you freeze an object so its properties can't be changed?

Object.freeze(), Object.seal()

What is object destructuring and how does it work with nested objects?

🔍 Prototype & Inheritance
What is the prototype chain in JavaScript?

How does it help with inheritance?

How is prototypal inheritance different from classical inheritance?

What is __proto__ vs prototype vs Object.getPrototypeOf()?

What happens when you access a non-existent property in an object?

💡 Advanced and Real-World
How do you merge two objects in JavaScript?

Using Object.assign(), spread operator, or deep merge strategies.

What are getter and setter functions in objects?

Explain with examples using Object.defineProperty() or class syntax.

What is a computed property name in object literals?

E.g., { [key]: value }

What is the difference between enumerable and non-enumerable properties?

What are symbols and how are they used as object keys?

How do you handle circular references in objects (e.g., during JSON.stringify)?




 # Coding Problems

 🔰 Basic Object Manipulation
1. Create a function that returns the number of properties in an object.


function numberOfProperties(obj){
  let sum = 0;
  
  for(let key in obj){
     sum++;
  }
  return sum;
}

let obj = {
   name: "anmol",
   age: 25
};

console.log(numberOfProperties(obj));


2. Write a function to check if a given key exists in an object.
ans : // given key exist in a object

function ifExist(obj,k){
    if(obj.hasOwnProperty(k)){
        return true;
    }else{
        return false;
    }
};

let obj = {name : "anmol", age: 26};
console.log(ifExist(obj,"name"));


3. Write a function to clone an object (shallow copy)?
ans : // clone an object

function shallow(obj){
    const obj2 = {...obj};
    return obj2;
}


console.log(shallow({name : "anmol", age: 26}));

4. Convert an object into an array of [key, value] pairs?
ans : // convert obj to array

function convert(obj){
    const result = [];
    for(let key in obj){
        result.push([key,obj[key]]);
    }
    
    return result;
}


const obj = {name : "anmol", age : 26};
console.log(convert(obj));

5. Create a function that inverts the keys and values of an object?
ans : // convert obj to array

function invert(obj){
   
   let result = {};
   
   for(let key in obj){
       console.log(obj[key]);
       if(obj.hasOwnProperty(key)){
           result[obj[key]] = key;
       }
   }
   return result;
}


const obj = {name : "anmol", age : 26};
console.log(invert(obj));

🧠 Intermediate Challenges
6. Merge two objects without using Object.assign or spread operator?
ans : // merge two object 


function merge(obj1,obj2){
    
    let result = {};
    
    for(let key in obj1){
        result[key] = obj1[key];
    }
    
    for(let key in obj2){
        result[key] = obj2[key];
    }
    
    return result;
}



const obj1 = {name1: "anmol", age: 26};
const obj2 = {name2: "dhama", age2:27};

console.log(merge(obj1,obj2));

7. Create a deep copy function for nested objects?
ans : // deep copy for nested objects


function deepCopy(obj){
    
    let result = {};
    
    for(let key in obj){
        if(typeof obj[key] == 'object'){
            result[key] = deepCopy(obj[key]);
        }
        result[key] = obj[key];
    }
    
    return result;
}

const obj = {name: "anmol", nest : {age: 26}, occ: "soft"};

console.log(deepCopy(obj));

8. Create a function that filters out properties based on value type?
ans : // create a function that filter the properties on the basis of type


function filter(obj,type){
    
    let result = {};
    
    for(let key in obj){
        if(typeof obj[key] == type){
            result[key] = obj[key];
        }
    }
    return result;
}

const obj = {name : "anmol", age: 26};

console.log(filter(obj,'number'));

9. Write a function that compares two objects for deep equality?
ans : function compare(obj, obj2) {
    for (let key in obj) {
        if (obj[key] != obj2[key]) {
            return false;
        }
    }
    return true;
}


10. Implement a function to flatten a nested object into dot notation.   not understand

function flattenMap(map,primary_key = ""){
  
  let obj = {};
  
  for(let key in map){
    
    let complete_key = primary_key ? `${primary_key}.${key}` : `${key}`;
    console.log(complete_key);
     
    if(typeof map[key] != 'object'){
       obj[complete_key] = map[key];
    }else{
      let nested = flattenMap(map[key],complete_key);
      Object.assign(obj,nested);
    }
    
  }
  
  return obj;
  
};

const input = {
  "name": "John",
  "address": {
    "city": "New York",
    "coordinates": {
      "lat": 40.7128,
      "lng": -74.006
    }
  },
  "skills": {
    "frontend": {
      "html": true,
      "css": true
    },
    "backend": {
      "node": true
    }
  }
};

console.log(flattenMap(input));


// Input: { a: { b: 1, c: 2 }, d: 3 }
// Output: { "a.b": 1, "a.c": 2, "d": 3 }

ans : 


💡 Object + Arrays
11. Group an array of objects by a property?
ans : 


let users = [
  { name: "Anmol", city: "Delhi" },
  { name: "Rahul", city: "Mumbai" },
  { name: "Sneha", city: "Delhi" },
  { name: "Priya", city: "Bangalore" },
  { name: "Amit", city: "Mumbai" }
];

function groupBy(arr){
  let result = {};
  
  for(let i = 0; i<arr.length; i++){
    if(!result[arr[i].city]){
       result[arr[i].city] = [arr[i]];
    }else{
       result[arr[i].city].push(arr[i]);
    }
  }
  
  return result;
}

let users = [
  { name: "Anmol", city: "Delhi" },
  { name: "Rahul", city: "Mumbai" },
  { name: "Sneha", city: "Delhi" },
  { name: "Priya", city: "Bangalore" },
  { name: "Amit", city: "Mumbai" }
];

console.log(groupBy(users));


// Input: [{type: 'fruit'}, {type: 'vegetable'}, {type: 'fruit'}]
// Output: { fruit: [...], vegetable: [...] }


12. Count occurrences of values in an array using an object. done

13. Write a function to remove duplicate objects in an array by a specific key.

let users = [
  { id: 1, name: "Anmol" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Anmol Duplicate" },
  { id: 3, name: "Sneha" },
  { id: 2, name: "Rahul Duplicate" }
];


function removeDuplicates(arr){
  let result = [];
  let seen = {};
  
  for(let i = 0; i<arr.length; i++){
     
     if(!seen.hasOwnProperty([arr[i].id])){
         result.push(arr[i]);
         seen[arr[i].id] = true;

     }
  }
  
  return result;
}

let users = [
  { id: 1, name: "Anmol" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Anmol Duplicate" },
  { id: 3, name: "Sneha" },
  { id: 2, name: "Rahul Duplicate" }
];

console.log(removeDuplicates(users));


14. Convert an array of [key, value] pairs into an object?
ans : function convert(arr){
    
    let result = {};
    
    for(let i = 0; i<arr.length; i++){
        result[arr[i][0]] = arr[i][1];
    }
    
    return result;
}

console.log(convert([['name', 'anmol'], ['age', 26], ['role', 'developer']]));

15. Map over an object and transform each value?
ans : 

function transform(obj, fn){
  let result = {};
  
  for(key in obj){
    result[key] = fn(obj[key]);
  }
  
  return result;
  
}

let userAges = {
  Anmol: 25,
  Rahul: 30,
  Sneha: 28
};


console.log(transform(userAges, (age)=> age * 2));

🔍 Advanced & Real-World
16. Implement a get(obj, path) function (like lodash's _.get).


get({ a: { b: { c: 10 } } }, "a.b.c") // Output: 10

17. Write a function to set a deep property in an object by path.


set(obj, "a.b.c", 42);

18. Implement a custom Object.assign function.

19. Track property access using Proxy.

20. Detect circular references in an object.






Accessing safely
What’s the best way to safely access deeply nested properties without throwing an error? (e.g., obj.a.b.c.d)

Optional chaining vs. manual checks

const obj = { a: { b: null } };
console.log(obj?.a?.b?.c);


Dynamic key access
Write a function get(obj, "a.b.c") that returns the value of a nested property safely.

ans : 

function get(obj,path){
   let keys = path.split("."); // ["a","b","c"]
   let current = obj; // 
   
   for(let i = 0; i<keys.length; i++){
     
     if(typeof current !== "object"){
       return undefined;
     }
     
     if(current == null || !(keys[i] in current)){ // 
       return undefined;
     }
     
     current = current[keys[i]]; 
   }
   
   return current;
   
}

const obj = { a: { b: { c: 42 } } };

console.log(get(obj, "a.b.c"));   // 42
console.log(get(obj, "a.b"));     // { c: 42 }
console.log(get(obj, "a.x.c"));   // undefined
console.log(get(obj, "a.b.c.d")); // undefined

Dynamic setter
Write a function set(obj, "a.b.c", 42) that sets a nested property, creating missing objects if needed.

function set(obj,path,value){
  
   let keys = path.split(".");
   
   let current = obj;
   
   keys.forEach((k,index)=>{
      if(index == keys.length - 1){
         current[k] = value;
      }else{
         if(!current[k]) current[k] = {};
         current = current[k];
      }
   });
   
   return obj;
   
}

const obj = {};

set(obj, "a.b.c", 42);
console.log(obj); 
// { a: { b: { c: 42 } } }

set(obj, "a.b.d", 100);
console.log(obj); 
// { a: { b: { c: 42, d: 100 } } }

set(obj, "x.y.z", "hello");
console.log(obj); 
// { a: { b: { c: 42, d: 100 } }, x: { y: { z: "hello" } } }


Flatten object
Convert a nested object into a flat object:

{ a: { b: { c: 1 } } } → { "a.b.c": 1 }


function flat(obj,primaryKey = ""){
   
   
   let result = obj;
   
   for(key in obj){
     let complete_key = primaryKey ? `${primaryKey}.${key}`: `${key}`;
     
     if(typeof obj[key] != 'object'){
         result[complete_key] = obj[key];
     }else{
       let nested = flat(obj[complete_key],key);
       Object.assign(obj,nested);
     }
     
   }
   
   return result;
   
   
}

// Convert a nested object into a flat object:

let obj = { a: { b: { c: 1 } } };
// → { "a.b.c": 1 }

console.log(flat(obj));



Unflatten object
Convert { "a.b.c": 1 } back into { a: { b: { c: 1 } } }.

Deep merge
Merge two nested objects recursively without losing inner values.
ans:

function DeepMerge(obj1,obj2){
  // iterate over obj2
  // if obj2[key] is object and key is also present in obj1
  // recursive call
  // else simply assign the value of obj2 to obj1
  
  for(key in obj2){
    if(typeof obj2[key] == 'object' && obj1.hasOwnProperty(key)){
      obj1[key] = DeepMerge(obj1[key],obj2[key]);
      
    }else{
      obj1[key] = obj2[key];
    }
  }
  
  return obj1;
   
}

// Convert a nested object into a flat object:
const obj1 = {
  a: {
    b: 1,
    c: {
      d: 2
    }
  },
  x: 10
};

const obj2 = {
  a: {
    c: {
      e: 3
    },
    f: 4
  },
  y: 20
};
//{
//   a: {
//     b: 1,
//     c: {
//       d: 2,
//       e: 3
//     },
//     f: 4
//   },
//   x: 10,
//   y: 20
// }


console.log(DeepMerge(obj1,obj2));



Deep clone
Clone a deeply nested object without reference sharing.

ans :

function structuredClone(obj){
  
  let result = {};
  
  for(key in obj){
    if(typeof obj[key] == 'object'){
       result[key] = structuredClone(obj[key]);
    }else{
       result[key] = obj[key];
    }
  }
  
  return result;
  
}

const obj = {
  a: 1,
  b: { c: 2 },
  d: [3, 4, { e: 5 }]
};

const copy = structuredClone(obj);

copy.b.c = 99;
copy.d[2].e = 100;

console.log(obj.b.c); // 2 (unaffected)
console.log(obj.d[2].e); // 5 (unaffected)


Deep freeze
Implement deepFreeze(obj) that makes all nested objects immutable.

ans :

function deepFreeze(obj){
  
  Object.freeze(obj);
  
  for(key in obj){
    
    if(typeof obj[key] == 'object' && !Object.isFrozen(obj[key])){
       
       deepFreeze(obj[key]);
    }
  }
  
  return obj;
};



const person = {
  name: "Anmol",
  address: {
    city: "Delhi",
    zip: 110001
  }
};

deepFreeze(person);

// Try modifying
person.name = "Rahul";         // ❌ ignored
person.address.city = "Noida"; // ❌ ignored

console.log(person);
// { name: "Anmol", address: { city: "Delhi", zip: 110001 } }


Property existence
Check if a nested property exists (without throwing an error).

ans : using optional chaining

Count properties
Count total properties including all nested levels.

ans:  

function countProps(obj){
  
  let count = 0;
  
  for(key in obj){
    
    if(obj.hasOwnProperty(key)){
      
    if(typeof obj[key] != 'object'){
        count++;
    }
      
    if(typeof obj[key] == 'object' && obj[key] != null){
      count += countProps(obj[key]);
    }
    }
  }
  
  return count;
   
};



const obj = {
  a: 1,
  b: { x: 10, y: { m: 100, n: 200 } },
  c: { p: 5 }
};

// properties: a, b.x, b.y.m, b.y.n, c.p → total 5
console.log(countProps(obj)); // 5


Find paths
Write a function that returns all paths of keys in a nested object.
Example: { a: { b: 1 } } → ["a.b"].

Nested key removal
Delete a deeply nested key safely (e.g., "a.b.c").

Circular reference
What happens if you deep clone an object with circular references using JSON.stringify?

Compare deeply
Write a function to check deep equality of two nested objects.

Deep update with condition
Given a nested object, update all values that match a certain condition (e.g., change all numbers < 0 to 0).

Array inside nested object
Write a function to update a value inside a nested array in an object.

Deep copy vs shallow copy
Show an example where shallow copying a nested object breaks the expected behavior.

Nested object destructuring

const obj = { a: { b: { c: 5 } } };
const { a: { b: { c } } } = obj;
console.log(c);


Query string with nested objects
Convert { a: { b: 1, c: 2 } } into "a[b]=1&a[c]=2".