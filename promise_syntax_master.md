Beginner - Understand Basic Promises
1) Create a basic promise that resolves with a value after 1 second.
ans :
 <!-- function getValue(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
             res(1)
        },1000)
    })
}

getValue().then(data => console.log(data)); -->

2) Write a promise that rejects with an error message if a condition is false?
ans : function getValue(value){
    return new Promise((res,rej)=>{
        if(!value){
            rej(`condition is false!`)
        }
    })
}

getValue(0).then(data => console.log(data))
           .catch(err => console.error(err));

3) Explain what each of the three states of a Promise mean: pending, fulfilled, rejected?
ans : pending means the promise is not settled yet.
      fulfilled means the promise resolved with a value
      rejected means the promise rejected with a value

4) What happens if you call .then() on a promise that has already been resolved?
ans : .then() on resolved promise still works and gets the value.

5) Chain .then() methods to transform a value multiple times?
ans :  .then(x => x+1).then(x => x*2)

🔁 Chaining & Nested Promises
6) Write three promise-returning functions and chain them to pass data through?
ans : function getUser(userId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({id : userId , name : "anmol"})
        },1000)
    })
}

function getOrders(user){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({orderId : 101, user :user.name})
        },1000)
    })
}

function sendEmail(order){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`Email has been sent to ${order.user} from order id ${order.orderId}`)
        },1000)
    })
}



getUser(1)
    .then(user => getOrders(user))
    .then(order => sendEmail(order))
    .then(result => console.log(result))
    .catch(err => console.error(err));

7) Convert a nested callback example (callback hell) into a promise chain?
ans : same as above

8) Demonstrate how you can return a new promise inside a .then() chain?
ans : getUser().then(user => getOrders(user))
               .then(order => sendEmail(order))
               .then(result => console.log(result))
               .catch(err => console.error(err));

9) How do you handle errors in a .then() chain using .catch()? Show with example?
ans : etUser().then(user => getOrders(user))
               .then(order => sendEmail(order))
               .then(result => console.log(result))
               .catch(err => console.error(err));

10) What happens if you forget to return a promise in one of the .then() callbacks?
ans :  it won’t wait or chain properly—execution breaks.

⚙️ Async/Await Basics
11) Rewrite a chained promise using async/await?
ans : async function call(){
    try{
        let user = await getUser(1);
        let order = await getOrders(user);
        let result = await sendEmail(order);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

call();

12) Create an async function that uses await to handle 3 asynchronous calls in sequence?
ans : async function call(){
    try{
        let user = await getUser(1);
        let order = await getOrders(user);
        let result = await sendEmail(order);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

call();

13) What happens if you forget to use await inside an async function?
ans : It will return a pending promise.

14) How do you handle errors in async/await using try...catch?
ans : async function call(){
    try{
        let user = await getUser(1);
        let order = await getOrders(user);
        let result = await sendEmail(order);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

call();

15) Explain the difference between await Promise.all() and running await sequentially?
ans : Promise.all() : execute all the promises parallely return resolved if all the promises are resolved else
                      return rejected if any promise rejected and also short circuit

      await execute the code sequentially because it will wait till the promise is settled.

🧠 Advanced Promise Patterns
16) Use Promise.all() to run 3 promises in parallel and log all their results?
ans : 

function promise1(){
    return new Promise((res,rej)=>{
        res(1);
    })
}

function promise2(){
    return new Promise((res,rej)=>{
        res(2)
    })
}

function promise3(){
    return new Promise((res,rej)=>{
        res(3);
    })
}


let result = Promise.all([promise1(),promise2(),promise3()]);

  result.then(data => console.log(data))
        .catch(err => console.log(err));

17) Use Promise.race() to run 3 promises and return whichever finishes first?
ans : Promise.race() returns the first settled promise no matter resolved or rejected.
   


function promise1(){
    return new Promise((res,rej)=>{
        res(1);
    })
}

function promise2(){
    return new Promise((res,rej)=>{
        res(2)
    })
}

function promise3(){
    return new Promise((res,rej)=>{
        res(3);
    })
}


let result = Promise.race([promise1(),promise2(),promise3()]);

  result.then(data => console.log(data))
        .catch(err => console.log(err));

18) Use Promise.allSettled() to get the result of multiple promises even if some fail?
ans : 

function promise1(){
    return new Promise((res,rej)=>{
        res(1);
    })
}

function promise2(){
    return new Promise((res,rej)=>{
        rej(2)
    })
}

function promise3(){
    return new Promise((res,rej)=>{
        res(3);
    })
}


let result = Promise.allSettled([promise1(),promise2(),promise3()]);

  result.then(data => console.log(data))
        .catch(err => console.log(err));   

        //[
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 2 },
  { status: 'fulfilled', value: 3 }
]

19) Create a delay function delay(ms) that returns a promise and use it with await?
ans : 

function delay(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(1)
        },1000)
    })
}


async function useDelay(){
    try{
        let result = await delay();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

useDelay();

20) Implement a retry logic using promises for an API that might fail randomly?
ans : function unreliableAPI() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; // 50% chance to fail
        setTimeout(() => {
            if (success) {
                resolve("✅ Success");
            } else {
                reject("❌ Failed");
            }
        }, 500);
    });
}

function retry(fn, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        function attempt(count) {
            fn()
                .then(resolve)
                .catch((err) => {
                    if (count === 0) {
                        reject(`All retries failed: ${err}`);
                    } else {
                        console.log(`Retrying... attempts left: ${count}`);
                        setTimeout(() => attempt(count - 1), delay);
                    }
                });
        }
        attempt(retries);
    });
}

// Use the retry wrapper
retry(unreliableAPI, 5, 1000)
    .then(result => console.log(result))
    .catch(err => console.error(err));
