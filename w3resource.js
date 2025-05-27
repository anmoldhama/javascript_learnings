// array

// 1. Write a JavaScript function to check whether an `input` is an array or not.

// Test Data :

// console.log(is_array('w3resource'));

// console.log(is_array([1, 2, 4, 0]));

// false

// true

// function is_array(arr){
//     return Array.isArray(arr);
// }

// console.log(is_array({}));


// function isArray(input) {
//     return input instanceof Array;
//   }


// Q.2) Write a JavaScript function to clone an array.

// Test Data :

// console.log(array_Clone([1, 2, 4, 0]));

// console.log(array_Clone([1, 2, [4, 0]]));

// [1, 2, 4, 0]

// [1, 2, [4, 0]]


// function array_clone(arr){
//     let result = [];
    
//     for(let i = 0; i<arr.length; i++){
//         if(Array.isArray(i)){
//             return array_clone(i);
//         }else{
//             result.push(arr[i]);
//         }
//     }
    
//     return result;
    
// }

// console.log(array_clone([1,2,3,[4,5,6]]));


// Q.3. First Elements of Array

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// Productivity tools
// Test Data :

// console.log(first([7, 9, 0, -2]));

// console.log(first([],3));

// console.log(first([7, 9, 0, -2],3));

// console.log(first([7, 9, 0, -2],6));

// console.log(first([7, 9, 0, -2],-3));

// Expected Output :

// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []



// function first_element(arr, count){
//       if(count == undefined) return arr[0];
       
//       let result = [];
//       if(arr.length < count) return arr;
      
//       for(let i = 0; i<count; i++){
//          result.push(arr[i]);
//       }

//       return result;
// }

// console.log(first_element([7, 9, 0, -2]));

// console.log(first_element([],3));

// console.log(first_element([7, 9, 0, -2],3));

// console.log(first_element([7, 9, 0, -2],6));

// console.log(first_element([7, 9, 0, -2],-3));



// Q. 4 Last Elements of Array

// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

// Test Data :

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]


// function last(arr,count){
//     if(count == undefined) return arr[arr.length-1];

//     if(arr.length < count) return arr;

//     let result = [];

//     for(let i = arr.length-count; i<arr.length; i++){
//         result.push(arr[i]);
//     }

//     return result;
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));




// Q 5 Join Array Elements

// Write a simple JavaScript program to join all elements of the following array into a string.

// Sample array : myColor = ["Red", "Green", "White", "Black"];

// Expected Output :

// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


// function joined(arr,sign){
//     return arr.join(sign);
// }


// console.log(joined(["Red", "Green", "White", "Black"], "+"));



// extra question : implement the myJoin working


// Array.prototype.myJoin = function(seperator = ','){
     
//     let result = "";
    
//     for(let i = 0; i<this.length; i++){
        
//         if(this[i] == null || this[i] == undefined){
//             result += '';
//         }else{
//             result += this[i];
//         }
        
//        if(i != this.length-1){
//            result += seperator;
//        }
        
//     }
    
//     return result;
// }

//  console.log(["right","left","up","down"].myJoin("+"));



// Q.6 6. Insert Dashes Between Evens

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.


// function dashes(num){

//     let str = num.toString();
//     let newStr = '';

//     for(let i = 0; i<str.length; i++){
//         if(str[i] % 2 == 0 && str[i+1] % 2 == 0){
//             newStr += `${str[i]}-`;
//         }else{
//             newStr += str[i];
//         }
//     }

//     return newStr;

// }


// console.log(dashes(225468));


//Q. 7  Sort Array

// Write a JavaScript program to sort the items of an array.

// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// Sample Output : -4,-3,1,2,3,5,6,7,8


// function mergeSort(arr,left,right){
     
//     if(left>=right) return;

//     let mid = Math.floor((left+right)/2);
//     mergeSort(arr,left,mid);
//     mergeSort(arr,mid+1,right);

//     merge(arr,left,right,mid);
// }

// function merge(arr,left,right,mid){

//     let i = left;
//     let j = mid+1;

//     let result = [];
//     while(i<= mid &&  j<=right){
//        if(arr[i]<=arr[j]){
//           result.push(arr[i]);
//           i++;
//        }else{
//         result.push(arr[j]);
//          j++;
//        }
//     }

//     while(i<=mid){
//         result.push(arr[i]);
//         i++;
//     }

//     while(j<=right){
//         result.push(arr[j]);
//         j++;
//     }

//     for(let k = 0; k<result.length; k++){
//         arr[left + k] = result[k];
//     }
// }

// let arr = [1, 4, 3, 2, 5];
// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);


//Q.8. Most Frequent Array Item

// Write a JavaScript program to find the most frequent item in an array.

// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Sample Output : a ( 5 times )



// function mostFrequent(arr){
//     let frequency = {};
//     for(let i = 0; i<arr.length; i++){
//          if(frequency[arr[i]]){
//                 frequency[arr[i]]++;
//          }else{
//             frequency[arr[i]] = 1;
//          }
//     }

//      let max = 0;
//      let value = "";
//     for(let key in frequency){
//         if(frequency[key] > max){
//             max = frequency[key];
//             value = key;
//         }
//     }

//     return `${value} (${max} times)`;
    
// }


// console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))



// 9. Swap Case in String

// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.



// function swap(str){

//     let newStr = "";

//     for(let i = 0; i<str.length; i++){
//          if(str[i] == str[i].toLowerCase()){
//            newStr += str[i].toUpperCase();
//          }else {
//             newStr += str[i].toLowerCase();
//          }
//     }
     
//     return newStr;
// }

// console.log(swap("The Quick Brown Fox"));


// Q. 11) Sum of Squares in Array

// Write a JavaScript program to find the sum of squares of a numerical vector.


// function sumOfSquares(arr){

//     return arr.reduce((acc,curr)=>{
//         return acc + (curr* curr);
//     });
// }

// console.log(sumOfSquares([0,1,2,3,4]));


// extra question : implement Array.prototype.myReduce


// 12. Sum and Product of Array

// Write a JavaScript program to compute the sum and product of an array of integers.


// function sum_prod(arr){
//     let sum = 0;
//     let prod = 1;

//     arr.forEach(element => {
//         sum += element;
//         prod *= element;
//     });

//     return {sum,prod};
// }

// console.log(sum_prod([1,2,3,4,5]));



// 14. Remove Duplicates

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).


// function remove(arr){
//     let result = [];

//     arr.forEach(element => {
//         if(!result.includes(element)){
//             result.push(element);
//         }
//     });
     
//    return result;
// }

// console.log(remove([1,2,3,4,4,5]))


// 16. Find Leap Years in Range

// Write a JavaScript program to find the leap years in a given range of years.



// function leap(start,end){
    
//     let result = [];

//      for(let element = start; element<= end; element++){
//        if(element % 4 == 0 || (element % 100 == 0 && element % 400 == 0)){
//            result.push(element);
//        }
//      };

//     return result;
// }

// console.log(leap(2000,2012));


// 18. Binary Search

// Write a JavaScript program to perform a binary search.

// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.

// Sample array :

// var items = [1, 2, 3, 4, 5, 7, 8, 9];

// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4



// function binary(arr,target){

//     arr.sort();

//     let left = 0;
//     let right = arr.length-1;

//     while(left<=right){
//         let mid = Math.floor((left + right) / 2);
//          if(target == arr[mid]) return mid;

//          if(arr[mid] > target){
//             right = mid;

//          }else{
//             left = mid+1;
//          }
//     }

// }

// console.log(binary([1, 2, 3, 4, 5, 7, 8, 9],8));



// 19. Sum of Arrays by Index

// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample array :

// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];

// Expected Output :

// [4, 5, 8, 10, 12, 13]


// function sum_by_index(arr1, arr2) {
//     const longer = arr1.length > arr2.length ? arr1 : arr2;
//     const shorter = arr1.length > arr2.length ? arr2 : arr1;

//     const result = [];

//     let i;
//     for (i = 0; i < shorter.length; i++) {
//         result[i] = arr1[i] + arr2[i];
//     }

//     for (let j = i; j < longer.length; j++) {
//         result.push(longer[j]);
//     }

//     return result;
// }

// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];

// console.log(sum_by_index(array1, array2));



// 20. Find Duplicate Values

// Write a JavaScript program to find duplicate values in a JavaScript array.


// function duplicates(arr){
//       let result = [];
//       let fre = {};
//       for(let i = 0; i<arr.length; i++){
//             if(fre[arr[i]]){
//                 fre[arr[i]] += 1;
//                 result.push(arr[i]);
//             }else{
//                 fre[arr[i]] = 1;
//             }
//       }

//       return result;
// }


// console.log(duplicates([1,2,3,4,5,2,3,4]));



// 21. Flatten Nested Array

// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.

// Sample Data :

// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]

// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]


// function flatten(arr){
     
//     let result = [];

//     for(let i = 0; i<arr.length; i++){
//            if(Array.isArray(arr[i])){
//               result.push(...flatten(arr[i]));
//            }else{
//               result.push(arr[i]);
//            }
//     }

//     return result;
// }


// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));



// 22. Union of Two Arrays

// Write a JavaScript program to compute the union of two arrays.

// Sample Data :

// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]


// union of two arrays

// function union(arr1,arr2){
    
//     const shorter = arr1.length < arr2.length ? arr1 : arr2;
//     const longer = arr1.length < arr2.length ?
//         arr2 : arr1;
        
//     const result = [];
    
    
//     for(let i = 0; i< shorter.length; i++){
//         if(!result.includes(shorter[i])){
//          result[i] = shorter[i];
//         }
//     }

//     let j = result.length;
//     for(let i = 0; i< longer.length; i++){
//         if(!result.includes(longer[i])){
//           result[j++] = longer[i];
//         }
//     }
    
//     return result;
        
// }


// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]


// 23. Difference Between Arrays

// Write a JavaScript function to find the difference between two arrays.

// Test Data :


// function difference(arr1,arr2){
//     arr1 = arr1.flat(Infinity);
//     arr2 = arr2.flat(Infinity);
    
//     let result = [];
//     let len = 0;
//     for(let i = 0; i<arr1.length; i++){
//          if(!arr2.includes(arr1[i]) && !result.includes(arr1[i])){
//               result[len++] = arr1[i];
//          }
//     }

//     for(let i = 0; i<arr2.length; i++){
//         if(!result.includes(arr2[i]) && !arr1.includes(arr2[i])){
//               result[len++] = arr2[i];
//         }
//     }

//     return result;
// }


// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// // ["3", "10", "100"]

// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]


// 24. Remove Falsy Values

// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]

// Expected result : [15, -22, 47]


// function removeFalsy(arr1){
//     const result = [];
//     for(let i = 0; i<arr1.length; i++){
//         if(arr1[i]){
//            result.push(arr1[i]);
//         }
//     }

//     return result;
// }

// console.log(removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]));


// 25. Sort Objects by Title    later

// Write a JavaScript function to sort the following array of objects by title value.

// Sample object :

// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];


// 26. Find Pair with Target Sum

// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50

// Output: 2, 3


// function twoSum(arr,target){
//     let set = new Set();
//      for(let i = 0; i<arr.length; i++){
//         let compliment = target-arr[i];
//          if(set.has(compliment)){
//             return [arr[i],compliment];
//          }
//          set.add(arr[i]);
//      }
// }

// console.log(twoSum([10,20,10,40,50,60,70],50));


// 27. Retrieve Property Values

// Write a JavaScript function to retrieve the value of a given property from all elements in an array.

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]

// Expected result : [15, -22, 47]



// 28. Longest Common Starting Substring

// Write a JavaScript function to find the longest common starting substring in a set of strings.

// Sample array : console.log(longest_common_starting_substring(['go', 'google']));

// Expected result : "go"

// function longest_common_starting_substring(arr) {
//     if (arr.length === 0) return "";

//     let prefix = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         while (!arr[i].startsWith(prefix)) {
//             console.log(prefix);
//             prefix = prefix.slice(0, -1);
//             if (prefix === "") return "";
//         }
//     }

//     return prefix;
// }


// console.log(longest_common_starting_substring(['goat', 'google']));



// 29. Fill Array with Values

// Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

// Test Data :

// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// function num_string_range(str1,str2,skip = 1){
//     let result = [];
//        let start = str1.charCodeAt(0);
//        let end = str2.charCodeAt(0);
//       for(let i = start; i<=end; i+=skip){
//              result.push(String.fromCharCode(i));
//       }

//       return result;
// }

// console.log(num_string_range("a","z",2));


// 30. Merge Arrays Without Duplicates

// Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :




// function merge_array(arr1,arr2){
//       const result = [];
      
//       const shorter = arr1.length < arr2.length ? arr1: arr2;
//       const longer = arr2.length < arr1.length ? arr2: arr1;
      
//       let j = 0;
//       for(let i = 0; i<shorter.length; i++){
//           if(!result.includes(shorter[i])){
//              result[j++] = shorter[i]; 
//           }
//       }

//       for(let i = 0; i<longer.length; i++){
//         if(!result.includes(longer[i])){
//             result[j++] = longer[i];
//         }
//       }

//       return result;

// };




// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];

// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]




// 31. Remove Specific Element

// Write a JavaScript function to remove a specific element from an array.

// Test data :


// function remove_array_element(arr,target){
      
//       let result = arr.filter((element)=>{
//           return element != target;
//       })

//       return result;
// }



// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]


// 32. Find Element in Array

// Write a JavaScript function to find an array containing a specific element.

// Test data :


// function contains(arr,target){
    
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == target){
//             return true
//         }
//     }

//     return false;
// }



// const arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]



// 34. Nth Largest Element

// Write a JavaScript function to get the nth largest element from an unsorted array.

// Test Data :

// function nthlargest(arr,n){
//      arr.sort((a, b) => b - a);

//      return arr[arr.length-n-1];
// }


// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89


// 36. Pre-filled Numeric Array

// Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

// Test Data :

// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]

// console.log(array_filled(4, 11));
// [11, 11, 11, 11]


// function array_filled(count,element){
//     const result = [];
//      for(let i = 0; i<count; i++){
//           result[i] = element;
//      }

//      return result;
// }

// console.log(array_filled(4, 11));



// 38. Move Array Element

// Write a JavaScript function to move an array element from one position to another.

// Test Data :

// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]

// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]


// function move(arr,start,end){
    
//     const len = arr.length;
//     start = ((start % len) + len) % len;
//     end = ((end % len) + len) % len;

//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     return arr;
// }

// console.log(move([10, 20, 30, 40, 50], -1, -2));


// 48. Check All Numbers Prime

// Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

// Test Data :

// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false

// Expected Output:

// Original array of integers: 2,3,5,7
// In the said array check every numbers are prime or not! true
// Original array of integers: 2,3,5,7,8
// In the said array check every numbers are prime or not! false



// function is_prime(n){
//     if(n<= 0) return false;

//     for(let i = 2; i * i<= n; i++){
//         if(n % i == 0) return false;
//     }

//     return true;
// }

// function check_prime(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(!is_prime(arr[i])){
//             return false
//         }
//     }

//     return true;
// }


// console.log(check_prime([2,3,5,7,8]));
// console.log(check_prime([2,3,5,7]));



// 53. Count Arrays Inside Array

// Write a JavaScript program to count the number of arrays inside a given array.

// Test Data :

// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

// Expected Output:

// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3


// function count_array(arr){
//     let count = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//           count++;
//         }
//     }

//     return count;
// }


// console.log(count_array([2,8,[6],3,3,5,3,4,[5,4]]));






//  --------------------------------Objects--------------------------------------------

// 1. List Object Properties

// Write a JavaScript program to list the properties of a JavaScript object.

// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno


// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


// console.log(Object.keys(student));

// 2. Delete Property

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// delete student.rollno;
// console.log(student);


// 3. Object Length

// Write a JavaScript program to get the length of a JavaScript object.

// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// let len = 0;

// for(key in student){
//     len++;
// }
// console.log(len);



// # Merge Sort 


// 🔁 Merge Sort Algorithm (Divide and Conquer)
// Function: mergeSort(arr, left, right)
// Purpose: Sort the subarray from index left to right (inclusive)

// Steps:
// 1. Base Case:
// If left >= right, return (this means the subarray has one or no elements, so it's already sorted).

// 2. Divide:
// Calculate the middle index:
// mid = floor((left + right) / 2)

// 3. Recursively Sort the Left Half:
// Call mergeSort(arr, left, mid)

// 4. Recursively Sort the Right Half:
// Call mergeSort(arr, mid + 1, right)

// 5. Merge the Two Halves:
// Call merge(arr, left, right, mid) to combine the two sorted halves

// 🔄 Merge Algorithm
// Function: merge(arr, left, right, mid)
// Purpose: Merge two sorted subarrays:

// Left part: arr[left .. mid]

// Right part: arr[mid+1 .. right]

// Steps:
// Initialize pointers:

// i = left (start of left half)

// j = mid + 1 (start of right half)

// result = [] (temporary array to hold merged values)

// While both halves have elements:

// Compare arr[i] and arr[j]

// Push the smaller one to result

// Increment the pointer (i or j) of the pushed element

// Copy any remaining elements from the left half:

// While i <= mid, push arr[i] to result, then increment i

// Copy any remaining elements from the right half:

// While j <= right, push arr[j] to result, then increment j

// Copy result back into the original array:

// For each k from 0 to result.length - 1:

// Set arr[left + k] = result[k]

// ✅ Time Complexity:
// Best, Average, Worst: O(n log n)
// Total Time = Work per level × Number of levels
//            = O(n) × O(log n)
//            = O(n log n)

// ✅ Space Complexity:
// O(n) due to use of temporary result array





// // merge sort

// function mergeSort(arr,left,right){
//     if(left>= right) return;
    
//     let mid = Math.floor((left+right)/2);
//     mergeSort(arr,left,mid);
//     mergeSort(arr,mid+1,right);
//     merge(arr,left,right,mid);
// }


// function merge(arr,left,right,mid){
//     let i = left;
//     let j = mid+1;
    
//     const result = [];
    
//     while(i<=mid && j<=right){
        
//         if(arr[i]<=arr[j]){
//             result.push(arr[i]);
//             i++;
//         }else{
//             result.push(arr[j]);
//             j++;
//         }
//     }
    
//     while(i<=mid){
//         result.push(arr[i]);
//         i++;
//     }
    
//     while(j<=right){
//         result.push(arr[j]);
//         j++;
//     }
    
//     for(let k = 0; k<result.length; k++){
//         arr[left+k] = result[k];
//     }
// }

// const arr = [1,2,6,7,3,4,5];
// mergeSort(arr,0,arr.length-1);
// console.log(arr);




// --------------------------------------STRING---------------------------------

// 1. Check String Input

// Write a JavaScript function to check whether an 'input' is a string or not.

// Test Data :

// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

// function is_string(str){
//      if(typeof str === 'string'){
//         return true
//      }
//      return false;
    
// }

// console.log(is_string('w3resource'));



// 2. Check Blank String

// Write a JavaScript function to check whether a string is blank or not.

// Test Data :

// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false



// 3. String to Array of Words

// Write a JavaScript function to split a string and convert it into an array of words.

// Test Data :

// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]


// function string_to_array(str){
//    return str.split(' ');
// }

// console.log(string_to_array("Robin Singh"));


// 4. Extract Characters

// Write a JavaScript function to extract a specified number of characters from a string.

// Test Data :

// console.log(truncate_string("Robin Singh",4));
// "Robi"


// function truncate_string(str,val){
//     return str.substring(0,val);
// }


// console.log(truncate_string("Robin Singh",4));


// 5. Abbreviate Name

// Write a JavaScript function to convert a string into abbreviated form.

// Test Data :

// console.log(abbrev_name("Robin Singh"));
// "Robin S."


// function abbrev_name(str){
//      let arr = str.split(' ');
//      return `${arr[0]} ${arr[1].substring(0,1)}.`
// }


// console.log(abbrev_name("Robin Singh"));


// 6. Hide Email Address

// Write a JavaScript function that hides email addresses to prevent unauthorized access.

// Test Data :

// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

// function protect_email(str){
//     let arr = str.split('@');
//     return `${arr[0].substring(0,5)}...@${arr[1]}`;
// }


// console.log(protect_email("robin_singh@example.com"));


// 7. Parameterize String

// Write a JavaScript function to parameterize a string.

// Test Data :

// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"


// function string_parameterize(str){
//     let arr = str.split(" ");
//     let new_str = arr.join('-');
//     return new_str.toLowerCase();
// }


// console.log(string_parameterize("Robin Singh from USA."));


// 8. Capitalize First Letter

// Write a JavaScript function to capitalize the first letter of a string.

// Test Data :

// console.log(capitalize('js string exercises'));
// "Js string exercises"



// function capitalize(str){

//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(capitalize('js string exercises'));



// 9. Capitalize Each Word

// Write a JavaScript function to capitalize the first letter of each word in a string.

// Test Data :

// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

// function capitalize_Words(str){
//      let arr = str.split(' ');
//      let new_str = '';
//      for(let i = 0; i<arr.length; i++){
//           arr[i]= arr[i][0].toUpperCase() + arr[i].slice(1);
//      }
//      return arr.join(' ');
// }

// console.log(capitalize_Words('js string exercises'));


// 10. Swap Case

// Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.

// Test Data :

// console.log(swapcase('AaBbc'));
// "aAbBC"

// function swapcase(str){
//     let new_str = '';
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == str[i].toUpperCase()){
//             new_str += str[i].toLowerCase();
//         }else{
//             new_str += str[i].toUpperCase();
//         }
//     }
//     return new_str;
// }


// console.log(swapcase('AaBbc'));



