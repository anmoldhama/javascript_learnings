// aaabbccaaa =  aaabbccaaa

// function freq(str){
    
//    let result = '';
//      let current = str[0]; // a
//      let count = 0; // 0
//      let appended_str = '';
//      console.log(str.length);
//     for(let i = 0; i<str.length; i++){  // 4
//          if(current == str[i]){ // b == b
//              count += 1;  // 3
//          }else{
//              result += `${current}${count}`; // a3
//              current = str[i];  // b
//              count = 1;  // 0
//          }
         
//     }
    
//      result += `${current}${count}`;
//     return result;
// }

// let str = "aaabbcccaaa";
// console.log(freq(str));



// give the result as an array

// var compress = function(chars) {
//      const result = [];
//      let current = chars[0];
//      let count = 0;
//      for(let i = 0; i<chars.length; i++){
         
//          if(current == chars[i]){
//              count++;
//          }else{
//             result.push(current);
//             result.push(count);
//             count = 1;
//             current = chars[i];
//          }
//      }

//      result.push(current);
//      result.push(count);

//      return result;
// };


// let chars = ["a", "a", "b", "b", "c","c","c", "a"];
// console.log(compress(chars));



// ✅ 1. Compress Consecutive Digits
// Problem:
// Given a string of digits like "1112234444", compress it using frequency encoding.
// Output: "132234"

// Explanation:

// 1 occurs 3 times → 13

// 2 occurs 2 times → 22

// 3 occurs 1 time → 31

// 4 occurs 4 times → 44

// function compressStr(str){
//      let result = "";
//      let count = 0;
//      let current = str[0];

//      for(let i = 0; i<str.length; i++){
//          if(current == str[i]){
//             count++;
//          }else{
//              result += `${current}${count}`;
//              count = 1;
//              current = str[i];
//          }
//      }
//      result += `${current}${count}`;

//      return result;

// }

// let str = "1112234444";
// console.log(compressStr(str));


// ✅ 2. Remove Repeating Characters if Frequency < K
// Problem:
// Write a function that removes characters that appear consecutively less than K times.
// Input: "aaabbcccaaa", K = 3
// Output: "aaacccaaa"

// Explanation:

// b appears only 2 times, so remove it.

// Keep all groups with count >= 3.


// function removeLessK(str,k){
//    let result = "";
//    let count = 0;
//    let current = str[0];

//    for(let i = 0; i<str.length; i++){ // 4
//        if(current == str[i]){ // b == b
//         count++;  // 2
//        }else{
//             if(count >= k){  // 2 >= 3
//                for(let j = 0; j<count;j++){
//                  result += current;
//                }

//                 // "a3"
//                count = 1;
//                current = str[i];
//             }else{
//                  count = 1;
//                current = str[i];
//             }
//        }
//    }

//    if(count>=k){
//       for(let j = 0; j<count; j++){
//         result += current;
//       }
//    }

//    return result;


// }

// let str = "aaabbcccaaa";
// let k = 3;

// console.log(removeLessK(str,k));


// ✅ 3. Expand Frequency Encoded String
// Problem:
// Given a string like "a3b2c1", expand it to "aaabbc".

// Explanation:

// a3 → aaa, b2 → bb, c1 → c


// function expand(str){
   
//     let result = "";
//      let current = str[0]; // a
//     for(let i = 0; i<str.length; i++){ 
//         if(i%2 != 0){ 
//             for(let j = 0; j<str[i]; j++){
//                 result += current;
//             }
//         }else{
//            current = str[i];  // 
//                 }
//     }

//     return result;

// }

// let str = "a3b2c1";
// console.log(expand(str));



// ✅ 4. Count Character Frequencies (Non-Consecutive)
// Problem:
// Given a string like "aabbccaa", return total character frequencies regardless of order.
// Output: "a4b2c2" (order can vary)

// Hint: Use a hash map (object) to count.


// function countFreq(str){
//     let result = "";
//     const obj = {};

//     for(let i = 0; i<str.length; i++){
//         if(obj[str[i]]){
//             obj[str[i]] += 1;
//         }else{
//             obj[str[i]] = 1;
//         }
//     }

//     for(key in obj){
//         result += `${key}${obj[key]}`;
//     }

//     return result;
// }

// let obj = "aabbccaa";
// console.log(countFreq(obj));


// ✅ 5. Group Characters by Frequency (Sorted)
// Problem:
// Return characters grouped by frequency in descending order.
// Input: "aaabbcccc"
// Output: "c4a3b2"

// Explanation:

// c appears 4 times

// a appears 3 times

// b appears 2 times
// (Sorted by frequency)

// function sortedFreq(str){
    
//     let result = "";
//      const obj = {};
//     for(let i = 0; i<str.length; i++){
//         if(obj[str[i]]){
//             obj[str[i]] += 1;
//         }else{
//             obj[str[i]] = 1;
//         }
//     }

//     let sort = Object.entries(obj)
//     .sort((a, b) => b[1] - a[1]) 
//     .reduce((acc, [key, value]) => {
//         acc[key] = value;
//         return acc;
//     }, {});
     
//     for(key in sort){
//         result += `${key}${sort[key]}`
//     }

//     return result;
// }

// let str = "aaabbcccc";
// console.log(sortedFreq(str));


