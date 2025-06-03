// const fs = require('fs');
// const path = require('path');

// File path
// const filePath = path.join(__dirname, 'feedback.txt');

// Async write
// fs.writeFile(filePath, 'User: Anmol\nFeedback: Great app!', (err) => {
//   if (err) console.error('Error writing file:', err);
//   else console.log('Feedback saved.');
// });

// // Sync write
// fs.writeFileSync(filePath, 'Overwritten feedback text!');


// Async read
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) console.error('Error reading file:', err);
//     else console.log('File content:\n', data);
//   });
  
//   // Sync read
//   const content = fs.readFileSync(filePath, 'utf-8');
//   console.log('Sync Read:\n', content);

// async write

//    fs.writeFile(filePath, 'User: Anmol\nFeedback: Greet app!', (err)=>{
//            if(err) console.log('Error: writing file: ',err);
//            else console.log(data);
//    });

// sync write

//    fs.writeFileSync(filePath, 'User: content loaded!');


// async read

// fs.readFile(filePath,'utf-8', (err,data)=>{
//     if(err) return console.log(err);
//     console.log(data);
// } )

// sync read

// const data = fs.readFileSync(filePath, 'utf-8');

// console.log(data);



// Streams


// const logPath = path.join(__dirname, 'server.log');
// const writePath = path.join(__dirname, 'copy-server.log');
// const readStream = fs.createReadStream(logPath, { encoding: 'utf-8', highWaterMark: 16 });

// const writeStream = fs.createWriteStream(writePath);

// readStream.on('data', (chunk) => {
//   console.log('Reading chunk:\n', chunk);
// });

// readStream.pipe(writeStream);

// readStream.on('end', () => {
//   console.log('✅ Finished reading file.');
// });


// read the large datasets using streams


// const readline = require('readline');
// const file_path = path.join(__dirname, 'config.json');

// const file = fs.createReadStream(file_path);

// const r1 = readline.createInterface({input : file});

// r1.on('line',(line)=>{
//     const data = line.split(',');
//     console.log(`port: ${data[0]}`);
// })


// r1.on('close', ()=>{
//     console.log('finished processing file.')
// });



// Clustering :


// Run multiple instances of your Express server using all CPU cores to handle more concurrent requests.



// const cluster = require('cluster');
// const os = require('os');
// const http = require('http');


// const numCPUs = os.cpus().length;

// if(cluster.isMaster){
//     console.log(`Master ${process.pid} id running`);


//     for(let i = 0; i<numCPUs; i++){
//         cluster.fork();
//     }

//     cluster.on('exit', (worker)=>{
//         console.log(`Worker ${worker.process.pid} died`);
//         cluster.fork();
//     })
// }else {
//     http.createServer((req,res)=>{
//         res.writeHead(200);
//         res.end(`Handled by worker: ${process.pid}`);
//     }).listen(7000);

//     console.log(`Worker ${process.pid} started`);
// }


// const express = require('express');


// const app = express();

// app.get('/',(req,res)=>{
//     res.send('server working fine!');
//     })

// app.listen(7000, ()=>{
//     console.log('server running!')
// });




//-------------------------Async hooks--------------------------------------



// const async_hooks = require('async_hooks');
// const fs = require('fs');
// const crypto = require('crypto');

// // To log into a file (console logging inside async_hooks can cause infinite loops)
// const logFile = fs.createWriteStream('./async_hooks.log', { flags: 'a' });

// function log(...args) {
//   logFile.write(args.join(' ') + '\n');
// }

// // Create the async hook instance
// const asyncHook = async_hooks.createHook({
//   init(asyncId, type, triggerAsyncId, resource) {
//     log(`[init] asyncId: ${asyncId}, type: ${type}, triggerAsyncId: ${triggerAsyncId}`);
//   },
//   before(asyncId) {
//     log(`[before] asyncId: ${asyncId}`);
//   },
//   after(asyncId) {
//     log(`[after] asyncId: ${asyncId}`);
//   },
//   destroy(asyncId) {
//     log(`[destroy] asyncId: ${asyncId}`);
//   },
//   promiseResolve(asyncId) {
//     log(`[promiseResolve] asyncId: ${asyncId}`);
//   }
// });

// // Enable the hook
// asyncHook.enable();

// // Example async operations
// setTimeout(() => {
//   log('🕒 Timeout completed');
// }, 100);

// crypto.randomBytes(64, (err, buf) => {
//   log('🔐 Random bytes generated');
// });

// (async () => {
//   await new Promise(resolve => setTimeout(resolve, 50));
//   log('✅ Async/Await complete');
// })();



// clinic.js -----------------------------------------


// server.js
const express = require('express');
const app = express();

let leaks = [];

app.get('/', (req, res) => {
  leaks.push(Buffer.alloc(1000000)); // Simulate memory leak
  res.send('Hello World');
});

app.listen(3000, () => console.log('Server running on port 3000'));





