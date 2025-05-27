
SECTION 1: Basic to Intermediate Promises(1–15)
Q.1) How does a Promise help avoid "callback hell" ? Show a before / after code snippet ?
  ans : Promises are the object which have 3 states named as pending, fulfilled, rejected.
      Promises remove the callback hell by implementing the clean and structured.then() chaining


#CALLBACK HELL

function getUser(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: "Anmol" });
  }, 1000);
}

function getOrders(user, callback) {
  setTimeout(() => {
    callback(null, { orderId: 101, user: user.name });
  }, 1000);
}

function sendEmail(order, callback) {
  setTimeout(() => {
    callback(null, `Email sent to user ${order.user} for order ${order.orderId}`);
  }, 1000);
}

// Nested callback hell
getUser(1, (err, user) => {
  if (err) return console.error(err);
  getOrders(user, (err, order) => {
    if (err) return console.error(err);
    sendEmail(order, (err, result) => {
      if (err) return console.error(err);
      console.log(result);
    });
  });
});

#PROMISES

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Anmol" });
    }, 1000);
  });
}

function getOrders(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ orderId: 101, user: user.name });
    }, 1000);
  });
}

function sendEmail(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Email sent to user ${order.user} for order ${order.orderId}`);
    }, 1000);
  });
}

// Promise chaining
getUser(1)
  .then(user => getOrders(user))
  .then(order => sendEmail(order))
  .then(result => console.log(result))
  .catch(err => console.error("Error:", err));



    # ASYNC / AWAIT

async function processOrderFlow() {
  try {
    const user = await getUser(1);
    const order = await getOrders(user);
    const result = await sendEmail(order);
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}

processOrderFlow();



Q.2)Explain the internal states of a Promise. Can a Promise change state more than once ?
ans : Promise states are pending, fulfilled, rejected
      1- Pending is a state till the promise is not settled
      2- Fulfilled is a state when the promise is resolved
      3- rejected is a state when the promise is rejected

Q.3)What happens if you resolve a Promise after it has already been rejected ?
ans : It will return us undefined

Q.4)Can a .then() chain return a new value ? What if it returns another Promise ?
ans : then use should use .then again to resolve this promise

Q.5)What does .catch() do? Where should you place it in a promise chain ?
ans : .catch helps to consume the rejected promise
      if you not use this and the promise rejected then an unhandle exception error occured
      we can place it at the end of the promise chain

 Q.6)How do you handle errors in chained promises ?
 ans : use .catch()

Q.7)What is the difference between Promise.resolve() and new Promise() ?
ans : Promise.resolve() return the resolved promise
      new Promise() creates the constructor of a promise that can be resolved or reject

 Q.8)What happens if you forget to return a Promise in .then() ?
 ans : then the promise chain breaks the execution

Q.9)Can you have multiple. then() calls on the same Promise ? What happens ?
ans : in this case we get the same output

Q.10)How would you implement a delay using a Promise?
ans : function delay(){
       return new Promise((res,rej)=>{
           setTimeout(()=>{
            res(1);
           },1000)
       })
}

delay().then(data => console.log(data));

 Q.11) What’s the difference between Promise.all() and Promise.race() ?
 ans : Promise.all() returns all the resolved promises if all the promise resolved else return rejected promise if found short circuit
      Promise.race() returns immediately after any promise settled.

Q.12)When should you use Promise.allSettled() over Promise.all() ?
ans : use Promise.allSettled() when you need to execute all the promises
     use Promise.all() when you know that all the promises returns resolved.

Q.13) What’s the output of:

Promise.resolve().then(() => {
  console.log("then1");
  return Promise.resolve("inner");
}).then(console.log);

What’s the output and why ?
ans : "inner" because the first .then() also return a new promise that is resolved.

  Q.14) const p = new Promise((res, rej) => {
    res(1);
    rej(2);
  });
p.then(console.log).catch(console.log);
Can you create a cancellable promise ?
ans : function cancellablePromise(timeout = 1000) {
  let cancelled = false;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cancelled) {
        reject("Cancelled");
      } else {
        resolve("Completed");
      }
    }, timeout);
  });

  return {
    promise,
    cancel: () => {
      cancelled = true;
    }
  };
}

// Usage
const { promise, cancel } = cancellablePromise(2000);

promise
  .then(res => console.log("✅", res))
  .catch(err => console.log("❌", err));

// Cancel after 1 second
setTimeout(cancel, 1000);


⚙️ SECTION 2: async / await Practical Scenarios(16–30)
Q.15)What happens if you use await on a non - Promise value ?
ans : await converts non-Promise values into a resolved Promise.
    const result = await 42;
    console.log(result); // 42


  Q.16)Why does async function always return a Promise ?
  ans : Because async functions wrap the return value in Promise.resolve(), ensuring consistency when using await.

    Q.17)Can you use await inside a normal function?
    ans : no

Q.18)What is the output ?

  async function test() {
    return 5;
  }
test().then(console.log);

ans : //5
How do you handle errors with async / await ?
ans : using try()catch()

  Q.20)Rewrite a nested.then() promise chain into async / await style?
  ans : async function call(){
       try{
         let user = await getUser(1);
         let order = await getOrders(user);
         console.log(order);
       }catch(err){
         console.log(err);
       }
  }

    Q.21) What’s the output and why ?

      async function f() {
        throw "error!";
      }
f().catch(console.log);
ans : "error!"
      because the exception is caught using .catch() from the returned Promise.
Q.22)Why should you avoid using await in a loop like forEach() ?  unique
ans : Because forEach does not handle asynchronous operations correctly. It doesn't wait for the await to finish and doesn't return a Promise.

  Q.23) What’s a better pattern for sequential async operations ?
  ans : async await

    Q.24)How do you run multiple await operations in parallel ?
    ans : Use Promise.all()
    const [a, b] = await Promise.all([asyncA(), asyncB()]);

      Q.25)Can you use await in the top - level script ? How would you workaround it ?
      ans : Yes, only in ES2022 modules (type="module" in HTML or .mjs in Node.js).

        Q.26)What happens if you await a rejected promise without try/catch?
        ans : it will throughs the unhandled exception error.

Q.27)Why is this code incorrect ? How to fix it ?
 const result = await fetch(url);
console.log(result);
ans : because you are not using await inside the async function.
Q) When would you prefer async / await over.then() ?
ans : Cleaner syntax for sequential async logic.

Better readability in complex flows.

Easier error handling with try...catch.

  Q.29)What are the trade - offs of using async/await in terms of readability and performance?
  ans : the main thread is blocked till the promise is not settled
        the exection of the tasks parallely is difficult
        the readability is increases
        await is critical in scenarios like i want to fetch the data from db or do other I/O task
         and wait for the response.




🌀 SECTION 3: Callbacks and Callback Hell(31–40)
Q.31) What is callback hell ? How does it arise ?
ans : A callback hell is a situation in which the nested callbacks are created.
      It will arises when implementing an asynchronous execution.

Q.32)Convert a deeply nested callback pattern into Promises.
ans : already done

Q.33)How does error handling differ in callbacks vs promises ?
ans : we implements the custom if else error handling in callback
      In promises we used .catch to handle errors

      22/05/2025

Q.34)Why are callbacks sometimes preferred in low - level APIs ?
ans : Callbacks are preferred in low-level APIs because:

They provide more control over execution flow.

They are lightweight and do not require promise wrapping.

They allow for performance optimizations and fine-grained resource management.

They avoid the overhead of Promises in performance-critical sections.

Q.35)How do you ensure callback is not called multiple times accidentally ?
ans : Wrap the callback in a function that tracks whether it's been called.

Example:
     
     function once(callback) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      callback(...args);
    }
  };
}

const cb = once((msg) => console.log(msg));
cb("Hi"); // Hi
cb("Hello"); // Ignored

Q.36)What’s the problem in this pattern ?

        fs.readFile('file.txt', callback);
         callback(null, data);
Answer:

fs.readFile('file.txt', callback);
callback(null, data);

You are calling the callback twice: once by fs.readFile, and then manually.

This leads to unexpected behavior or crashes.

Fix: Don't call the callback manually if it's passed to an async function that already invokes it.

Q.37)How would you write a generic function that accepts both a callback and returns a Promise if none is passed ?
ans : function fetchData(callback) {
  const data = { name: "anmol", age: 25 };
  if (callback) {
    callback(null, data);
  } else {
    return Promise.resolve(data);
  }
}

// With callback
fetchData((err, data) => console.log(data));

// With promise
fetchData().then(data => console.log(data));

Q.38)How do you handle asynchronous operations inside a callback - based for-loop ?
ans : const files = ['a.txt', 'b.txt'];
let i = 0;
(function readNext() {
  if (i < files.length) {
    fs.readFile(files[i++], (err, data) => {
      console.log(data);
      
    });
  }
  readNext();
})();

Q.39)How would you turn a Node.js - style callback API into a Promise ?
ans : using promisify

     const fs = require("fs");
     const {promisify} = require("util");

     const readFileAsync = promisify(fs.readFile);

     readFileAsync('a.txt', utf8)
          .then(data => console.log(data))
          .catch(err => console.log(err));

Q.40)explain how setTimeout and callbacks interact with the event loop.
ans : setTimeout callbacks are placed inside the microtask queue and wait for the callstack to empty and event loop moves them into the callstack for execution.


🧪 SECTION 4: Mixed Behavior, Tricky Scenarios & Debugging(41–50)
Q.41)What’s the output ?

  async function a() {
    await b();
    console.log("A");
  }
   function b() {
  console.log("B");
    }
   a();
console.log("C");

ans : BCA  

Let's go step-by-step:
a() is called. It’s an async function, so it returns a Promise.
Inside a(), it does await b(). But what is b()?
b() is a normal synchronous function, and it just logs "B" immediately.
So:
✅ "B" gets printed right away.
Then await sees that b() returned undefined (not a Promise), so it wraps it in Promise.resolve(undefined) and waits for the next microtask cycle.
Meanwhile, JavaScript moves on to the next line outside of a(), which is:
console.log("C");
✅ "C" is printed before the .then() (or the continuation) of the await.
Now the current synchronous call stack is empty, so the microtask queue runs, and the console.log("A") (from inside a()) finally executes.
✅ "A" is printed last.


Q.42)What’s the order of logs ?

  setTimeout(() => console.log("timeout"), 0);
  Promise.resolve().then(() => console.log("promise"));
   console.log("sync");
ans : sync , promise, timeout;


Q) Why does this code fail to catch the error ?

  async function f() {
    await Promise.reject("Oops");
  }
f();

ans : unhandled exception because of no try catch block

Q.43)How to retry an async function N times with delay ?
ans : 

 async function call(count,delay){
     try{
         let data = await Promise.reject(new Error("error occurred"));
         console.log(data);
     }catch(err){
         if(count>0){
             setTimeout(()=>{
                 call(count-1,delay);
             },delay);
         }else{
             console.log("all retries are failed!")
         }
     }
 };
 
 call(5,1000);
 
 

Q.44) What is the problem here ? How to fix it ?

    async function load() {
      let data = await getData();
      return data.json();
    }

ans : The problem is of error handling using try{}catch(){}

Q.45)What does await block and what doesn’t it block ?
ans : await block the execution inside the async function in which they declared but it doesn't block the exection of the outer code .

Q.46)How do you handle multiple errors in a Promise.all() call ?
ans : Promise.allSettled([fetch('a'), fetch('b')])
  .then(results => console.log(results));

Q.47)How do you throttle a function using Promises ?
ans : 

Q.48)Create a timeout wrapper that rejects a Promise if it takes too long?
ans : function rejectLong(){
      return new Promise(()=>{
          setTimout(()=>{
                reject(new Error(`Time out`))
          },1000);
      })
}

Q.49)How would you polyfill Promise.all() ?
ans : // create 2 promises
// create promise.all() polifil
// return new Promise
// use forEach
// if promise resolved using .then()
// till the length of the promises
// when the promises completes resolve the result
// push the value on the correct index
// if promise rejected
// use .catch() to reject


function myPromiseAll(promises){
    return new Promise((res,rej)=>{
        let result = [];
        let count = 0;
        
        promises.forEach((p,i)=>{
            Promise.resolve(p)
                   .then(val=>{
                       result[i] = val;
                       count++;
                       if(count === promises.length) res(result);
                   })
                   .catch(rej);
        })
    })
}


function promise1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(1);
        },1000)
    })
}

function promise2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(2)
        },1000)
    })
}


myPromiseAll([promise1(), promise2()]).then(data => console.log(data)).catch(err => console.log(err));

Q.50) Polyfil for Promise.any() ?
 // create polyfil for promise.any()
 // short circuit is any resolve found
 // if not then reject with an collection of errors
 
 
 function myPromiseAny(promises){
     let result = [];
     let count = 0;
     return new Promise((res,rej)=>{
         
         promises.forEach((p,i)=>{
             Promise.resolve(p)
                    .then(val =>{
                        res(val);
                    })
                    .catch(val =>{
                        result[i] = val;
                        count++;
                        if(count === promises.length){
                            rej(new AggregateError(result,`No promise resolved!`))
                        }
                    })
         })
     })
 }
 
 
 
 function promise1(){
     return new Promise((res,rej)=>{
         setTimeout(()=>{
             rej(1);
         },1000)
     })
 }
 
 
 function promise2(){
     return new Promise((res,rej)=>{
         setTimeout(()=>{
             res(2)
         },1000)
     })
 }
 
 
 myPromiseAny([promise1(),promise2()]).then(data => console.log(data)).catch(err => console.log(err));
 

Q.51) polyfil for promise.race();

 
 function myPromiseRace(promises){
     return new Promise((res,rej)=>{
         promises.forEach((p,i)=>{
             Promise.resolve(p)
                    .then(val =>{
                        res(val)
                    })
                    .catch(val =>{
                        rej(val)
                    })
         })
     })
 }
 
 
 
 
 function promise1(){
     return new Promise((res,rej)=>{
         setTimeout(()=>{
             rej(1);
         },2000)
     })
 }
 
 
 function promise2(){
     return new Promise((res,rej)=>{
         setTimeout(()=>{
             res(2)
         },1000)
     })
 }
 
 
 myPromiseRace([promise1(),promise2()]).then(data => console.log(data)).catch(err => console.log(err));


Q.52) Polyfil for Promise.allSettled() ?


 
 function myPromiseAllSettled(promises){
     let result = [];
     let count = 0;
     return new Promise((res,rej)=>{
         promises.forEach((p,i)=>{
             Promise.resolve(p)
                    .then(val =>{
                        result[i] = {status : "fulfilled" , value : val};
                        count++;
                        if(count === promises.length) res(result);
                    })
                    .catch(val =>{
                        result[i] = {status : "rejected", reason : val};
                        count++;
                        if(count === promises.length) res(result);
                    })
         })
     })
 }
 
 
 
 
 function promise1(){
     return new Promise((res,rej)=>{
         setTimeout(()=>{
             rej(new Error(`Promise is rejected!`));
         },2000)
     })
 }
 
 
 function promise2(){
     return new Promise((res,rej)=>{
         setTimeout(()=>{
             res(2)
         },1000)
     })
 }
 
 
 myPromiseAllSettled([promise1(),promise2()]).then(data => console.log(data)).catch(err => console.log(err));
 

  Real - World Scenario - Based Promise / Async - Await Questions(1–50)
Q.53) Async / Await for fetching data from 3 different APIs in parallel.


function result1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`Api 1 result!`);
        },1000)
        
    })
};

function result2(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(`Api 2 result!`);
        },2000)
        
    })
};

function result3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`Api 3 result!`);
        },3000)
        
    })
}


async function fetchResult(){
    try{
       const [api1_response,api2_response, api3_response]= await Promise.all([result1(),result2(),result3()]);
        
        console.log(api1_response, api2_response, api3_response);
    }catch(err){
        console.log(err);
    }
}

fetchResult();


  Q.54) Fetch 3 APIs sequentially using async/await ?
  ans : 

function result1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`Api 1 result!`);
        },1000)
        
    })
};

function result2(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(`Api 2 result!`);
        },2000)
        
    })
};

function result3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`Api 3 result!`);
        },3000)
        
    })
}


async function fetchResult(){
    try{
         const api1_response = await result1();
         console.log(api1_response);
         const api2_response = await result2();
         console.log(api2_response);
         const api3_response = await result3();
        
        
        console.log(api3_response);
    }catch(err){
        console.log(err);
    }
}

fetchResult();


Q.55) Fetch 3 APIs in parallel, but return result of the fastest one(Promise.race) ?
ans :  use Promise.race();

       async function fasterstResult(){
              try{
                 const res = await Promise.race([promise1,promise2,promise3]);
                 console.log(res);
              }catch(err){
                 console.log(err);
              }
       }

  Q.56) Retry failed API request up to 3 times using Promises?
  ans :  function api() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Rejected after 1 second");
    }, 1000);
  });
}

function retryApi(count) {
  return new Promise((resolve, reject) => {
    function attempt(remaining) {
      api()
        .then(resolve)
        .catch((err) => {
          console.log(`Attempt failed. Remaining retries: ${remaining - 1}`);
          if (remaining > 1) {
            attempt(remaining - 1);
          } else {
            reject("Retry count exceeded!");
          }
        });
    }
    attempt(count);
  });
}

// Usage
retryApi(3)
  .then((val) => console.log("Success:", val))
  .catch((err) => console.log("Failed:", err));


    Q.57) Add a timeout for a fetch request using Promise.race()?
    ans : just reject a new Promise in timeout before the original api response.

function api(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`VAlid Response`);
        },3000)
    })
}


function timeout(time){
     return new Promise((res,rej)=>{
         setTimeout(()=>{
            rej('Time reached!')
         },time)
     })
};

let result = Promise.race([api(),timeout(2000)]);
result.then(val => console.log(val))
      .catch(val => console.log(val));
 

      Q.58) Limit concurrent API calls to 2 at a time using async/await?
      ans : function api1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('first api')
        },1000);
    })
}

function api2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('Second api')
        },2000)
    })
}

function api3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('Third api');
        },3000)
    })
}


// only two concurrent requests

async function call(arr){
     for(let i = 0; i<arr.length; i+=2){
         try{
         let result = await Promise.all([arr[i](),arr[i+1] ? arr[i+1]() : 'No api']);
          console.log(result);
         }catch(err){
             console.log(err);
         }
     }
}

call([api1,api2,api3]);
       

Q.59) Convert a Node.js - style callback API to a Promise - based one(promisify)?
ans : const {promisify} = require('util');


function api(callback){
    setTimeout(()=>{
        callback(null, {name : "anmol"});
    },1000)
};



let result = promisify(api);

result().then(val => console.log(val)).catch(err => console.log(err));


  Q.60) Execute 5 promises with delay between each(Promise chaining)?
  ans : function p1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(1)
        },1000)
    })
}

function p2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(2)
        },2000)
    })
}

function p3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(3)
        },3000)
    })
}

function p4(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(4)
        },4000)
    })
}

function p5(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(5)
        },5000)
    })
}



p1()
  .then((res)=>{
      console.log(res);
      return p2()
  }).then((res)=>{
      console.log(res);
      return p3()
  }).then((res)=>{
      console.log(res);
      return p4()
  }).then((res)=>{
      console.log(res);
      return p5();
  }).then((res)=>{
      console.log(res);
  }).catch((err)=>{
      console.log(err);
  })

    Q.61) Create a sleep(ms) utility using Promises.
    ans : 
         function sleep(ms){
    return new Promise(res=> setTimeout(()=>
    ),ms);
}
    Q.62) Fetch paginated data until all pages are retrieved using async/await?
    ans : 

async function fetchAllPages(){
     let page = 1;
     const allData = [];
     let hasNext = true;
     
     while(hasNext){
         
         const res = await fetch(`fake/api${page}`);
         const data = res.json();
         
         allData.push(...data.items);
         
         hasNext = data.hashNextPage;
         page++;
     }
     
     return allData;
}

fetchAllPages().then(allItems => {
  console.log("Total items fetched:", allItems.length);
});

Q.63) Load data from cache if available, else fetch via API(fallback strategy).
ans : async function loadData() {
  // Try loading from cache
  const dataFromCache = await getFromCache();
  
  if (dataFromCache) {
    return dataFromCache; // ✅ Return if cache hit
  }

  // Fallback: Fetch from API
  const response = await fetch('https://api.example.com/data');
  const apiData = await response.json();

  // Optionally store in cache for future use
  await saveToCache(apiData);

  return apiData;
}


  Q.64) Gracefully handle rejection in Promise.all().
  ans : // handle rejections using Promise.all()


function api1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('resolve 1')
        },1000)
    })
};

function api2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej('rejected 2')
        },1000)
    })
};

function api3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('resolve 3')
        },1000)
    })
};




function safe(promise){
    return promise.then(data=> ({status: "fulfilled", value : data})).catch(err => ({status : "rejected", reason : err}))
};



async function handleRejection(){
    const tasks = [
           safe(api1()),
           safe(api2()),
           safe(api3())
        ];
        
    
    return await Promise.all(tasks);
    
    
};

handleRejection().then(result => console.log(result))
                 .catch(err => console.log(err));


    Q.65) Get the results of all APIs regardless of success or failure(Promise.allSettled)?
    ans : done

      Q.66) Execute multiple async DB operations and rollback if one fails?
      ans : const mongoose = require('mongoose');

async function executeWithRollbackMongo() {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await User.create([{ name: 'Anmol' }], { session });
    await Order.create([{ userId: 'someId', amount: 100 }], { session });

    await session.commitTransaction();
    console.log('Transaction committed successfully');
  } catch (error) {
    await session.abortTransaction();
    console.error('Transaction failed, rolled back:', error.message);
  } finally {
    session.endSession();
  }
}


        Q.67) Cancel a fetch request if it exceeds a timeout using AbortController?
        ans : async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Fetch aborted due to timeout');
    } else {
      console.error('Fetch failed:', error);
    }
  }
}

          Q.68) Create a simple task queue using Promises?
          ans : 

          Q.69) Process an array of items sequentially with async function.

            Q.70) Convert a synchronous function to return a Promise.

              Q.71) Delay each iteration of a loop using async/await and setTimeout.

Q.72) Use async / await inside a for...of loop correctly.

  Q.73) Debounce an async search function using Promises.

    Q.74) Show a loading spinner while 3 async requests complete, hide after all finish.

      Q.75) Execute an async function with retry and exponential backoff.

        Q.76) Explain behavior when awaiting a non - Promise value.

          Q.77) Compare Promise.all, Promise.race, Promise.any, and Promise.allSettled with examples.

            Q.78) Create a generic retryAsync(fn, retries, delay) utility.

              Q.79) Fetch user info, then fetch orders using user ID – chained async calls.

                Q.80) How to handle multiple async dependencies before starting main task.

                Q.81) Avoid callback hell in nested file read / write operations.

                  Q.82) Error handling using try/catch with multiple await statements.

Q.83) Wrap a callback - based event listener into a Promise(like once()).

  Q.84) Load multiple images concurrently and notify when all are loaded.

    Q.85) Write a Promise that resolves after N milliseconds.

      Q.86) Wrap setTimeout in a Promise to pause execution.

        Q.87) Fetch and cache data; serve from cache on subsequent requests.

          Q.88) How to detect unhandled promise rejections in Node.js ?

            Q.89) Create a custom promise wrapper to add logging to every async call.

              Q.90) How to chain async / await functions for transactional flow ?

                Q.91) Use await inside Array.prototype.reduce for sequential reduction.

                  Q.92) Why doesn’t async / await work with Array.prototype.forEach ?

                    Q.93) Delay each API call in a list of 5 using for...of + await.

                      Q.94) Gracefully fallback to backup API if primary fails using async/await.

Q.95) Return early from an async function on error.

  Q.96) Batch process a large array of requests in chunks of 10.

Q.97) Pause / resume an async data stream using Promises.

  Q.98) Convert multiple nested callbacks (callback hell) into Promises.

    Q.99) Implement a promise - based lock / mutex mechanism.

      Q.100) Chain multiple.then() with condition - based logic inside.

        Q.101) Catch and handle errors from multiple nested await calls.

          Q.102) Write a wrapper around fetch to include retry, timeout, and error handling.

