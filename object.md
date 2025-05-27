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


// Input: { a: { b: 1, c: 2 }, d: 3 }
// Output: { "a.b": 1, "a.c": 2, "d": 3 }

ans : 


💡 Object + Arrays
11. Group an array of objects by a property?
ans : 


// Input: [{type: 'fruit'}, {type: 'vegetable'}, {type: 'fruit'}]
// Output: { fruit: [...], vegetable: [...] }


12. Count occurrences of values in an array using an object. done

13. Write a function to remove duplicate objects in an array by a specific key. 

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

🔍 Advanced & Real-World
16. Implement a get(obj, path) function (like lodash's _.get).


get({ a: { b: { c: 10 } } }, "a.b.c") // Output: 10

17. Write a function to set a deep property in an object by path.


set(obj, "a.b.c", 42);

18. Implement a custom Object.assign function.

19. Track property access using Proxy.

20. Detect circular references in an object.