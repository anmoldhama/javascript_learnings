# 25-06-2025
1) primathon second round
Q)   setImmediate(() => console.log('this is set immediate 1')); 6
setImmediate(() => console.log('this is set immediate 2')); 7
setImmediate(() => console.log('this is set immediate 3')); - 8

setTimeout(() => console.log('this is set timeout 1'), 0); - 9
setTimeout(() => {
    console.log('this is set timeout 2'); 
    process.nextTick(() => console.log('this is process.nextTick added inside setTimeout')); }, 0); -  10
setTimeout(() => console.log('this is set timeout 3'), 0); - 11
setTimeout(() => console.log('this is set timeout 4'), 0); - 12
setTimeout(() => console.log('this is set timeout 5'), 0); 13

process.nextTick(() => console.log('this is process.nextTick 1')); -    1
process.nextTick(() => {
    process.nextTick(console.log.bind(console, 'this is the inner next tick inside next tick')); 2
});
process.nextTick(() => console.log('this is process.nextTick 2')); -  3
process.nextTick(() => console.log('this is process.nextTick 3')); - 4
process.nextTick(() => console.log('this is process.nextTick 4')); - 5


Q) nth occurence of non repeating character in a string
 not very well optimized

 function occurences(pattern, n){
    let frequency = {};
    
    for(let i = 0; i<pattern.length; i++){
        if(frequency[pattern[i]]){
            frequency[pattern[i]] += 1;
        }else{
            frequency[pattern[i]] = 1;
        }
    }
    
    //   return frequency;
    let result = [];
    for(let i = 0; i<pattern.length; i++){
        if(frequency[pattern[i]] == 1){
            result.push(pattern[i]);
        }
    }
    
    for(let i = 0; i<result.length; i++){
        if(i == n-1){
            return result[i];
        }
    }
    
    // return -1;
}


let pattern = “aaabbbbbbcuhjhjjjfllkklm”;
let n = 1;

console.log(occurences(pattern,n));


