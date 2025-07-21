Arrays (40 Questions)

contains duplicates

var containsDuplicate = function(nums) {
    
    let obj = {};

    for(let i = 0; i<nums.length; i++){
      
      if(obj[nums[i]]){
          return true;
      }
      
       obj[nums[i]] = true;

    }

    return false;

};


1 - Two Sum (Find pairs that add to target) ⭐
  function two_sum(nums,target){
       
       let obj = {};
       for(let i = 0; i< nums.length; i++){
          let compliment = target- nums[i];
          if(obj[compliment]){
             return [obj[compliment],i];
          }

          obj[nums[i]] = i;
       }

       return -1;
  }


2 - Remove Duplicates from sorted array ⭐
ans : 

var removeDuplicates = function(nums) {
    let left = 0;
    let current = nums[0];
    let result = []; 
    
    while(left<nums.length){
        if(current == nums[left]){
            left++;
        }else{
            result.push(current);
            current = nums[left];
            left++;
        }
    }
    
    result.push(current);
    return result.length;
    
};


3 - Rotate Array by K steps ⭐⭐

var rotate = function(nums, k) {
     k = k % nums.length;

     reverse(nums,0,nums.length-1);
     reverse(nums,0,k-1);
     reverse(nums,k,nums.length-1);

};

var reverse = function(arr,left,right){
       
       while(left<=right){
          let temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
       }

       return arr;
}

4 - Find Missing Number (1 to n) ⭐

var missingNumber = function(nums) {
      let max = -Infinity;

      for(let i = 0; i<nums.length; i++){
          if(nums[i] > max){
            max = nums[i];
          }
      }

      for(let i = 1; i<=max; i++){
          if(!nums.includes(i)){
            return i;
          }
      }

};

var missingNumber = function(nums) {
   // need to find expected sum

    let n = nums.length;
    let expected = n * (n+1)/2;

   // subtract it with actual sum and return 
    let actual = nums.reduce((a,b)=>{
       return a+b;   
    },0);

    return expected - actual;

};

5 - Merge Two Sorted Arrays ⭐
  done
  var merge = function(nums1, m, nums2, n) {
     let i = m -1;
     let j = n - 1;
     let k = m+n-1;

     while(j>= 0){
          if(i>=0 && nums1[i] >nums2[j] ){
               nums1[k] = nums1[i];
               i--;
          }else{
            nums1[k] = nums2[j];
            j--;
          }

          k--;
           

     }
};

6 - Maximum Subarray Sum (Kadane’s) ⭐⭐
var maxSubArray = function(nums) {
    let left = 0;
    let max = -Infinity;
    let current = nums[0];
    for(let i = 1; i<nums.length; i++){
         current += nums[i];
         if(current > max){
            max = current;
         }

         if(current <= 0){
            current = 0;
         }

         
    }
    return max;
};

7 - Find All Duplicates in array ⭐⭐
var duplicates = function(nums) {
   let obj = {};
    let result = [];
   for(let i = 0; i<nums.length; i++){
       if(obj[nums[i]]){
           obj[nums[i]] += 1;
       }else{
           obj[nums[i]] = 1;
       }
   }
   for(key in obj){
      if(obj[key] > 1){
          result.push(Number(key));
      }
   }
   
   return result;
};

var findDuplicates = function(nums) {
    let obj = {};

    let count = 0;

    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]]){
            nums[count++] = nums[i];
        }else{
            obj[nums[i]] = true;
        }
    }

    return nums.slice(0,count);
};


8 - Move Zeroes to end ⭐
var move = function(nums) {
   let j = 0;
   
   for(let i = 0; i<nums.length; i++){
       if(nums[i] != 0){
           nums[j++] = nums[i];
       }
   }

   while(j<nums.length){
       nums[j++] = 0;
   }
   
   return nums;
};

9 - Product of Array Except Self ⭐⭐
function product_array(arr){
     
     let left = 1;
     let output = [];
     for(let i = 0; i<arr.length; i++){
         output[i] = left;
         left *= arr[i];
     }
     
     let right = 1;
     for(let i = arr.length-1; i>=0; i--){
         output[i] *= right;
         right *= arr[i];
     }
     
     return output;
}

10 - First Unique Character in array ⭐
var first_unique = function(nums) {
      let obj = {};
      
      for(let i = 0; i<nums.length; i++){
          if(obj[nums[i]]){
              obj[nums[i]] += 1;
          }else{
              obj[nums[i]] = 1
          }
      }
       for(let i = 0; i<nums.length; i++){
           if(obj[nums[i]] == 1){
               return nums[i];
           }
       }
      return -1;
};

11 - Chunk Array (Split into subarrays) ⭐
var chunk = function(arr, size) {
      
      let result = [];
     for(let i = 0; i<arr.length; i+=size){
         result.push(arr.slice(i,i+size));
     };

     return result;
   
};

12 - Flatten Nested Arrays ⭐⭐
var flatten_nested_arrays = function(nums) {
      let result = [];
      
      for(let i = 0; i<nums.length; i++){
           if(Array.isArray(nums[i])){
               
              result.push(...flatten_nested_arrays(nums[i]));
           }else{
               result.push(nums[i]);
           }
      }
      return result;
};

13 - Intersection of Two Arrays ⭐
function intersection(arr,arr2){
     let max = arr.length >= arr2.length ? arr : arr2;  // arr
     let min = arr.length < arr2.length ? arr : arr2;  // arr2
     
     let result = [];
     for(let i = 0; i<max.length; i++){
         if(min.includes(max[i])){
             result.push(max[i]);
         }
     }
     
     return result;
}

14 - Find Peak Element ⭐⭐
function peak(arr){
   let left = 0;
   let right = arr.length-1;
   
   while(left<right){
       let mid = Math.floor((left+right)/2);
       if(arr[mid]>arr[mid+1]){
           right = mid;
       }else{
           left = mid+1;
       }
   }
   
   return left;
}

var findPeakElement = function(nums) {

     if(nums.length <= 1) return 0;
     
      for(let i = 1; i<nums.length; i++){
         if(nums[i] > nums[i-1]){
              if(i == nums.length - 1) return i;
         }else{
            return i-1;
         }
      }

      return -1;
};


var findPeakElement = function(nums) {

    if(nums.length <= 1) return 0;
     
     for(let i = 1; i<nums.length; i++){
         
         if(nums[i] < nums[i-1]){
              return i-1;
         }
     }
      
      return nums.length -1;

};


15 - Binary Search Implementation ⭐
function binarySearch(arr,target){
   let left = 0;
   let right = arr.length - 1;
   
   while(left<right){
       let mid = Math.floor((left+right)/2);
       
       if(arr[mid] == target) return mid;
       
       if(arr[mid] > target){
           right = mid;
       }else{
           left = mid+1;
       }
   }
}


16 - Count Element Occurrences ⭐
function countOccurences(arr){
     let count = {};
     
     for(let i = 0; i<arr.length; i++){
         if(count[arr[i]]){
             count[arr[i]] += 1;
         }else{
             count[arr[i]] = 1;
         }
     }
     
     return count;
}


17 - Shuffle Array (Fisher-Yates) ⭐⭐

18 - Find Min/Max without built-ins ⭐
function min_max(arr){
    let min = +Infinity;
    let max = -Infinity;
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        
        if(arr[i] < min){
            min = arr[i];
        }
    }
    
    return {min,max};
}


19 - Reverse Array In-Place ⭐
function reverse(arr){
     let left = 0;
     let right = arr.length - 1;
     
     while(left<right){
         let temp = arr[left];
         arr[left] = arr[right];
         arr[right] = temp;
         left++;
         right--;
     }
     return arr;
}

20 - Custom Array.map() ⭐⭐

21 - Find Pivot Index (Equal left/right sums) ⭐⭐

// calculate total first by sum of all the elements
// calculate the rightSum at every index i (total - leftSum - nums[i])
// if the rightSum equals to the leftSum return that index
// calculate the leftSum continuously
/// if leftSum not matched with rightSum return -1; 

var pivotIndex = function(nums) {

     let total = 0;
    for(let i = 0; i<nums.length; i++){
         total += nums[i];
    }

    let leftSum = 0;

    for(let i = 0; i<nums.length; i++){ // 3
        let rightSum = total - leftSum - nums[i]; // 28 - 11 - 6

        if(leftSum == rightSum){ 11 == 11
            return i;
        }

        leftSum += nums[i]; // 11
    }

    return -1;
};



22 - Majority Element (Count > n/2) ⭐
var majorityElement = function(nums) {
   let obj = {};

   for(let i = 0; i<nums.length; i++){
      if(obj[nums[i]]){
         obj[nums[i]] += 1;
      }else{
        obj[nums[i]] = 1;
      }
   }
   console.log(obj);
   
   let max;
   let max_value = -Infinity;
   for(let key in obj){
      if(obj[key] > max_value){
        max = key;
        max_value = obj[key];
      }
   }

   return Number(max);
};


var majorityElement = function(nums) {
   let curr_element = -1;
   let count = 0;

   for(let i = 0; i<nums.length; i++){
        if(count == 0){
            curr_element = nums[i];
        }
        if(curr_element == nums[i]){
            count++;
        }else{
            count--;
        }
   }

   return curr_element;
};

23 - Squares of Sorted Array ⭐

function square_sort(arr){
     for(let i = 0; i<arr.length; i++){
         arr[i] *= arr[i];
     }
     mergeSort(arr,0,arr.length-1);
     
     return arr;
}

function mergeSort(arr,left,right){
    if(left>=right) return;
    
    let mid = Math.floor((left+right)/2);
    
    mergeSort(arr,left,mid);
    mergeSort(arr,mid+1,right);
    
    merge(arr,left,right,mid);
}

function merge(arr,left,right,mid){
     let result = [];
     let i = left;
     let j = mid+1;
     
     while(i<=mid && j<=right){
         if(arr[i]<= arr[j]){
             result.push(arr[i]);
             i++;
         }else{
             result.push(arr[j]);
             j++;
         }
     }
     
     while(i<=mid){
         result.push(arr[i]);
         i++;
     }
     
     while(j<=right){
         result.push(arr[j]);
         j++;
     }
     
     for(let k = 0; k<result.length; k++){
         arr[left+k] = result[k];
     }
}

24  - Maximum Average Subarray (Sliding Window) ⭐⭐   not remembered
var findMaxAverage = function(nums, k) {
    let maxWindow = 0;
    for(let i = 0; i<k; i++){
        maxWindow += nums[i];
    }

    let maxSum = maxWindow;
    let left = 0;
    let right = k;

    while(right<nums.length){
        maxWindow = maxWindow - nums[left++] + nums[right++];
        maxSum = Math.max(maxSum,maxWindow);
    }

    return maxSum/k;


};


25 - Longest Consecutive Sequence ⭐⭐⭐   not remembered

var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxLength = 0;

    for(let num of set){
        if(!set.has(num-1)){
            let current = num;
            let streak = 1;

            while(set.has(current+1)){
                current += 1;
                streak += 1;
            }

            maxLength = Math.max(maxLength, streak);
        }
    }

    return maxLength;
};



var longestConsecutive = function(nums) {
    
    let set = new Set();
    
    for(let i = 0; i<nums.length; i++){
        set.add(nums[i]);
    };

    let left = 0;

    let result = [];
    
    while(set.has(nums[left] - 1)){
         let current = [nums[left]];
        if(left < nums.length){
      
       current.push(nums[left]);
        }

        if(current.length > result.length){
            result = current;
        }

        left++;
    }

    return left;
};


my understanding


var longestConsecutive = function(nums) {

    if(nums.length == 0) return 0;

    if(nums.length === 1) return 1;
    
    let longest = 0;

    nums.sort((a,b)=> a-b);

    let current = 1;

    for(let i = 1; i< nums.length; i++){

        if(nums[i-1] == nums[i]){
            continue;
        }
        let match = nums[i-1] + 1;

        if(match == nums[i]){
            current += 1;
        }else{
            if(current > longest){
                longest = current;
            }

            current = 1;
        }
    }

    if(current > longest){
        longest = current;
    }

    return longest;
};


var longestConsecutive = function(nums) {

    if(nums.length == 1) return 1;

    if(nums.length < 1) return 0;

    nums.sort((a,b)=> a-b);

    // [0,1,1,2]

    let current = 1;
    let max = 0;

    for(let i = 1; i<nums.length; i++){
        if(nums[i-1] + 1 == nums[i]){
            current++; // 3

            if(current > max){
               max = current; // 2
            }
        }else if(nums[i-1] + 1 != nums[i] && nums[i-1] !== nums[i]){
            current = 1;
        }

    }
    if(current > max){
        max = current;
    }

    return max;

};

26 - Container With Most Water ⭐⭐

var maxArea = function(height) {
    
    let left = 0;
     let right = height.length - 1;

     let max = 0;

     while(left<right){
        let area = Math.min(height[left],height[right]) * (right-left);
        max = Math.max(area,max);

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
     }

     return max;

}


27 - 3Sum (Triplets adding to 0) ⭐⭐   not cleared perfectly
var threeSum = function(nums) {
  
  nums.sort((a,b)=> a-b);

  let result = [];

   for(let i = 0; i < nums.length - 2; i++){

    if(i> 0 && nums[i] == nums[i-1]) continue;
       let left = i + 1;
       let right = nums.length - 1;

       while(left < right){
           let sum = nums[i] + nums[left] + nums[right];

            if(sum == 0){
                result.push([nums[i],nums[left],nums[right]]);
                left++;
                right--;

                while(left < right && nums[left] == nums[left-1]) left++;
                while(left < right && nums[right] == nums[right + 1]) right--;
            }else if(sum < 0){
                left++;
            }else {
                right--;
            }
                  }
   }

   return result;

};

28 - Insert Interval ⭐⭐  needs to clear the indexes of overlapping

var insert = function(intervals, newInterval) {
    let result = [];

    let i = 0;
    let n = intervals.length;
     
     // add before the overlapping

    while(i<n && intervals[i][1] < newInterval[0]){
         result.push(intervals[i]);
         i++;
    }


     // add overlapping
     while(i<n && intervals[i][0] <= newInterval[1]){
         newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
         newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
         i++;
     }
     result.push(newInterval);


     // add after the overlapping

     while(i<n){
        result.push(intervals[i]);
        i++;
     }

     return result;

};

29 - Non-overlapping Intervals ⭐⭐

30 - Spiral Matrix Traversal ⭐⭐

31 - Jump Game (Can reach end?) ⭐⭐

32 - Merge Intervals ⭐⭐

var merge = function(intervals) {
   // sort the intervals array
   // create a new array merged and pushed the first array of intervals into it
   // loop over the intervals array
   // get the last array from merged using merged[merged.length - 1];
   // get the current using intervals[i];
   // check if (current first element <= last second element);
   // then last second element will be max between current second element or last second element;
   // else  push the current into the merged array because there is no over lap
   // return the merged at the end


   if(intervals.length <= 0) return intervals;

   intervals.sort((a,b)=> a[0]-b[0]);

   let merged = [intervals[0]];

   for(let i = 0 ; i < intervals.length; i++){
      let last = merged[merged.length-1];
      let current = intervals[i];

      if(current[0] <= last[1]){
         last[1] = Math.max(current[1], last[1]);
      }else{
         merged.push(current);
      }
   }

   return merged;

};


33 - Find Duplicate Number (Modify array) ⭐⭐
var findDuplicate = function(nums) {
    let obj = {};

    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]]){ // {}
            return nums[i];
        }
         obj[nums[i]] = true;
    }

};

34 - H-Index (Research papers) ⭐⭐

var hIndex = function(citations) {
    // create an array with citations.length +1;
    // iterate over the citations and increase the count of the matching value on     the index at new array
    // create a count initialize with zero
    // iterate over over a new array from the end
    // count += arr[i]
    // if count >= i 
    // return i
     // else return 0;


     let arr = new Array(citations.length + 1).fill(0);

     let left = 0;

     for(let i = 0; i<citations.length; i++){
        left = citations[i];
        if(citations[i] >= arr.length){
            arr[arr.length-1]++;
        }else{
              arr[left]++;
        }

       
     } 

     let count = 0;
     for(let i = arr.length - 1; i >= 0; i--){
         count += arr[i];
         if(count >= i){
            return i;
         }
     }

     return 0;

};

35 - Gas Station Problem ⭐⭐   need more focus to understand

var canCompleteCircuit = function(gas, cost) {
     let totalDiff = 0;
     let fuel = 0;
     let index = 0;
     
     for(let i = 0; i< gas.length; i++){
        let diff = gas[i] - cost[i];
        totalDiff += diff;  // why
        fuel += diff;  

        if(fuel < 0){
            index = i + 1;
            fuel = 0;
        }
     }

     if(totalDiff < 0){
         return -1
     }

     return index;

};


36 - Candy Distribution ⭐⭐⭐

37 - Trapping Rain Water ⭐⭐⭐

38 - Maximum Product Subarray ⭐⭐

var maxProduct = function(nums) {

    if(nums.length == 1) return nums[0];
    let left = 0;
    let current = 1;

    let max = -Infinity;


    while(left < nums.length){  1 < 4
         current *= nums[left];  // 6


         if(current > max){  6 > 0
           max = current; // 6
         }

         if(current == 0){
            current = 1;
         }

        left++;
    }

    left = 0;
    let right = nums.length - 1;
    current = 1;

    while(right > left){
        current *= nums[right];

        if(current > max){
            max = current;
        }

        if(current == 0){
            current = 1;
        }

        right--;
    }

    return max;

};

39 - Find Minimum in Rotated Sorted Array ⭐⭐
var findMin = function(nums) {
     let min = +Infinity;

     for(let i = 0; i<nums.length; i++){
        if(nums[i] < min){
            min = nums[i];
        }
     }

     return min;
};

40 - Search in Rotated Sorted Array ⭐⭐
var search = function(nums, target) {
   
   for(let i = 0; i<nums.length; i++){
      if(nums[i] == target) return i;
   }
   return -1;
};


Q ) contains duplicates with near by k

var containsNearbyDuplicate = function(nums, k) {
     
     let obj = {};

     for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]] != undefined && (i - obj[nums[i]]) <= k){
            return true;
        }

        obj[nums[i]] = i;
     }
     return false;
};



Q)   summary range 
  var summaryRanges = function(nums) {

  if(nums.length <= 0) return nums;
  
  let left = 0;
  let right = 1;
  let start = 0;
  let result = [];

  while(right < nums.length){
      if(nums[left] + 1 == nums[right]){
        left++;
        right++;
      }else{
        if(left==start){
            result.push(`${nums[start]}`);
        }else{
            result.push(`${nums[start]}->${nums[left]}`);
        }

        start = right;
        left++;
        right++;
      }
  }

  if(left == start){
     result.push(`${nums[start]}`);
  }else{
    result.push(`${nums[start]}->${nums[left]}`);
  }


  return result;

};


Q) intersection two array with duplicate elements

var intersect = function(nums1, nums2) {
     
    let max =  nums1.length > nums2.length ? nums1 : nums2;
    let min = nums1.length > nums2.length ? nums2 : nums1;

    let result = [];

    for(let i = 0; i<min.length; i++){
        if(max.includes(min[i])){
             result.push(min[i]);
             let skip = max.indexOf(min[i]);
             max[skip] = false;
        }
    }

    return result;

};






Strings (30 Questions)
41 - Reverse String In-Place ⭐
var reverseString = function(s) {
      let left = 0;
      let right = s.length-1;

      while(left < right){
          let temp = s[left];
          s[left] = s[right];
          s[right] = temp;
          left++;
          right--;
      }

      return s;
};

42 - Valid Palindrome (Ignore non-alphanumeric) ⭐
var isPalindrome = function(s) {
     
      let filtered = '';
      for(let i = 0; i<s.length; i++){
         let code = s.charCodeAt(i);
         if((code > 47 && code < 58)||
             (code > 64 && code < 91)||
             (code > 96 && code <123 )){
                filtered += s[i].toLowerCase();
             }
      }
     
       let left = 0;
       let right = filtered.length-1;
      for(let i = 0; i<filtered.length; i++){
          if(filtered[left++] !== filtered[right--]){
            return false
          }
      }

      return true;
};

43 - Longest Substring Without Repeats ⭐⭐   not understand
  function longest(s){
    let max = 0;
    let left = 0;
    let set = new Set();

    for(let i = 0; i<s.length; i++){
        while(set.has(s[i])){
            set.delete(s[left]);
            left++;
        }

        set.add(s[i]);
        max = Math.max(max,i-left+1);
    }

    return max;
  }

44 - Valid Anagrams ⭐

var isAnagram = function(s, t) {
    let s1 = s.split('').sort();
    let s2 = t.split('').sort();
    if(s1.length != s2.length) return false;
    for(let i = 0; i<s1.length; i++){
        if(s1[i] !== s2[i]){
            return false;
        }
    }

    return true;
};

45 - String Compression (aaabbbcc → a3b3c2) ⭐⭐  know this but not able to do the leet code problem
var compress = function(chars) { 
    let current = chars[0];
    let result = '';
    let count = 0;

    for(let i = 0; i<chars.length; i++){
        if(current == chars[i]){
             count++;
        }else{
            result += `${current}${count}`;
            count = 1;
            current = chars[i];
        }
    }

    result += `${current}${count}`;
    return result;
};

46 - First Unique Character ⭐

function firs_uni(str){
    let obj = {};
    for(let i = 0; i<str.length; i++){
        if(obj[str[i]]){
            obj[str[i]] += 1;
        }else{
            obj[str[i]] = 1;
        }
    }
    
    for(let i = 0; i<str.length; i++){
        if(obj[str[i]] == 1){
            return str[i];
        }
    }
    
    return -1;
};

let str = "anmola";
console.log(firs_uni(str));


47 - Implement _.trim() ⭐
function trim(str){
    
    let start = 0;
    let end = str.length - 1;
    
    while(str[start] == ' ' && start < str.length){
        start++;
    }
    
    while(str[end] == ' ' && end > 0){
        end--;
    }
    
    return str.substring(start,end+1);
};

let str = "   anmola   ";
console.log(trim(str));


48 - Count Vowels/Consonants ⭐
function vowel_consonant(str){
     let vowel_count = 0;
     let consonant_count = 0;
     
     for(let i = 0; i<str.length; i++){
         if(/[a-z]/.test(str[i])){
              if(str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'e' || 
                str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' || 
                str[i].toLowerCase() == 'u'){
                 vowel_count++;
     }else{
         consonant_count++;
     }
     }
     }
     
     return {vowel_count,consonant_count};

}

let str = 'anmol dhama';
console.log(vowel_consonant(str));


49 - Longest Common Prefix ⭐   ---- prefix smaller approach
function largest_common_prefix(arr){
   let prefix = arr[0]; // flower
   
   for(let i = 0; i<arr.length; i++){ // 2
       while(!arr[i].startsWith(prefix)){ //  
            prefix = prefix.slice(0,-1);  // fl
       }
       if(prefix == ' ') return '';
   }
   return prefix; // fl
}

let str = ["flower", "flow", "flight"];
console.log(largest_common_prefix(str));


50 - String to Integer (atoi) ⭐⭐ 
ans : 


51 - Group Anagrams ⭐⭐
var groupAnagrams = function(strs) {
     let result = {};
      
      for(let i = 0; i<strs.length; i++){
         let sorted = strs[i].split('').sort().join();
         if(result[sorted]){
             result[sorted].push(strs[i]);
         }else{
            result[sorted] = [strs[i]];
         }
      }

      return Object.values(result);
};

52 - Valid Parentheses (Balanced brackets) ⭐   need to dry run again
ans :
  var isValid = function(s) {
    if(s.length <=1) return false;
    let result = [];
    let map = {'(': ')', '{': '}', '[': ']'};
     for(let i = 0; i<s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            result.push(s[i]);
        }else{
            let compare = result.pop(s[i]);
             if(map[compare] != s[i]){
                 return false;
             }
        }
    
     }
     if(result.length > 0) return false;

     return true;
};

53 - Implement String.split() ⭐⭐
ans : 

String.prototype.mySplit = function (breaker){
    if(this.length <= 1) return this;
    let result = [];
    let current = this[0];
    for(let i = 1; i<this.length; i++){
        if(breaker == ''){
            result.push(current);
            current = this[i]; 
            
        }else{
            if(this[i] != breaker){
            current += this[i];
        }else{
            result.push(current);
            i++;
            current = this[i];
        }
        }
        
        
    }
    result.push(current);
    
    return result;
}


console.log("ab".mySplit(''));



54 - Capitalize Words ⭐
var capitalizeTitle = function(title) {
    let arr = title.split(' ');
     let new_str = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length >2){
            new_str.push(`${arr[i][0].toUpperCase()}${arr[i].slice(1).toLowerCase()} `);
        }else{
            new_str.push(`${arr[i].toLowerCase()} `);
        }
            
    }

    return new_str.join('').trim();
    
};

55 - Find All Substrings ⭐
var findAllSubstrings = function(str) {
    let left = 0;
    let right = 0;
    let result = [];
    while(left<str.length){
        
        if(right<str.length){
            result.push(str.slice(left,right+1));
            right++;
        }else{
            left++;
            right = left;
        }
         
    }
    
    return result;
    
};

56 - Longest Palindromic Substring ⭐⭐   need to dry run

var longestPalindrome = function(s) {
    if (s.length <= 1) return s;

    let lps = '';

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let palindrome = s.substring(left, right + 1);
            if (palindrome.length > lps.length) {
                lps = palindrome;
            }
            left--;
            right++;
        }

        // Even-length palindrome
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let palindrome = s.substring(left, right + 1);
            if (palindrome.length > lps.length) {
                lps = palindrome;
            }
            left--;
            right++;
        }
    }

    return lps;
};

57 - Zigzag Conversion ⭐⭐

var convert = function(s, numRows) {

    if(numRows == 1) return s;
    if(s.length <= numRows) return s;
       
       let result = '';

       for(let i = 0; i<numRows; i++){
        let idx = i;
        let deltaSouth = 2 *(numRows - 1 - i);
        let deltaNorth = 2 * i;
        let goingSouth = true;

        while(idx < s.length){
            result += s[idx];
            console.log(result);
            if(i == 0){
                idx += deltaSouth;
            }else if(i == numRows - 1){
                idx += deltaNorth;
            }else{
                if(goingSouth){
                    idx += deltaSouth;
                }else{
                    idx += deltaNorth;
                }

                goingSouth = !goingSouth;
            }
        }
       }

       return result;
};



  #  This is more preferable
var convert = function(s, numRows) {
     
     if(numRows <= 1) return s;

    let result = new Array(numRows).fill('');

    let counter = false;
    let prefix = 0;

    for(let i = 0; i<s.length; i++){

        result[prefix] += s[i];

        if(prefix === 0 || prefix === numRows-1){
            counter = !counter;
        }

        if(counter){
            prefix++;
        }else{
            prefix--;
        }
    }

    return result.join('');
};



58 - Letter Combinations of Phone Number ⭐⭐

59 - Generate Valid Parentheses ⭐⭐

60 - Minimum Window Substring ⭐⭐⭐

61 - Word Break ⭐⭐

62 - Reverse Words in String ⭐
var reverseWords = function(s) {
       let arr = s.trim().split(' ');
          
           let left = 0;
           let right = arr.length-1;
          while(left < right){
              let temp = arr[left];
              arr[left] = arr[right];
              arr[right] = temp;
              left++;
              right--;
          };
          console.log(arr);

          let new_arr = arr.filter(Boolean);
          console.log(new_arr);

      return new_arr.join(' ');
};

63 - Integer to Roman ⭐⭐

64 - Roman to Integer ⭐

65 - Count and Say ⭐⭐

66 - Implement strStr() (Needle in haystack) ⭐

67 - Add Binary Strings ⭐

68 - Multiply Strings ⭐⭐

69 - Decode Ways ⭐⭐

70 - Valid IP Addresses ⭐⭐

Linked Lists (20 Questions)
71 - Reverse Linked List ⭐

72 - Detect Cycle (Floyd’s Algorithm) ⭐

73 - Merge Two Sorted Lists ⭐

74 - Remove Nth Node from End ⭐⭐

75 - Find Middle Node ⭐

76 - Remove Duplicates from Sorted List ⭐

77 - Palindrome Linked List ⭐⭐

78 - Intersection of Two Lists ⭐

79 - Convert Array to Linked List ⭐

80 - Implement LinkedList Class ⭐

81 - Add Two Numbers (Stored as LL) ⭐⭐

82 - Swap Nodes in Pairs ⭐⭐

83 - Rotate List ⭐⭐

84 - Reverse Nodes in k-Group ⭐⭐⭐

85 - Copy List with Random Pointer ⭐⭐

86 - LRU Cache Implementation ⭐⭐⭐

87 - Flatten Multilevel List ⭐⭐

88 - Odd Even Linked List ⭐⭐

89 - Sort List (Merge sort) ⭐⭐⭐

90 - Partition List ⭐⭐

Objects (10 Questions)
91 - Deep Clone Object (Circular refs) ⭐⭐

92 - Flatten Nested Object ⭐⭐

93 - Count Key Frequencies ⭐

94 - Implement _.get(obj, path) ⭐⭐

js
_.get({ a: { b: 2 } }, 'a.b') // 2
95 - Deep Merge Two Objects ⭐⭐

96 - Implement Object.keyBy() ⭐

97 - Filter Object by Value ⭐

98 - Map Object Keys/Values ⭐

99 - Invert Object Keys/Values ⭐

100 - Serialize/Deserialize Object ⭐⭐







 # 15-06-2025


 Q) multiply strings


 var multiply = function(num1, num2) {

    if(num1 === '0' || num2 === '0') return '0';
    // create res array of length num1 + num2 filled with zeroes

     let res = new Array(num1.length + num2.length).fill(0);
   // traverse using two nested arrays
     for(let i = num1.length -1; i>=0; i--){
         let n1 = num1.charCodeAt(i) - '0'.charCodeAt(0);

         for(let j = num2.length -1; j>=0; j--){
            let n2 = num2.charCodeAt(j) - '0'.charCodeAt(0);


            let sum = n1 * n2 + res[i+j+1];

            res[i+j+1] = sum % 10;
            res[i+j] += Math.floor(sum/10);
         }
     }
   // traverse from the end
   // get the last character of both the strings as number n1 and n2;
   //  get the sum as n1 * n2 + res[i+j+1];
   // insert at the correct position
   //  res[i +j +1] = sum % 10;
   // res[i +j] += Math.floor(sum/10);
   // remove the zeroes
   // join to string

    while(res[0] === 0){
            res.shift();
         }


         return res.join('');
};







# Simple problems

Q)  sum of first n numbers

// mathematics progression

function sum(n){
    let sum = n * (n+1)/2;
    return sum;
}

console.log(sum(5));






#  21-06-2025


Q 1752)  Check if Array Is Sorted and Rotated ?

var check = function(nums) {
    let count = 0;
    for(let i = 1; i<nums.length; i++){

        // if previous index value is larger then the current so it is not sorted then increase the count 
       if(nums[i] < nums[i-1]){
          count++; // 1
       }
    }

    // if an sorted array rotated then the start index value can not be smaller then the last index value
    if(nums[nums.length-1] > nums[0]){
        count++;
    }
    
    // if the counter is greater then 1 so return false else return true
    if(count > 1){
        return false;
    }
    return true;
};


Q.485) Max Consecutive Ones ?

var findMaxConsecutiveOnes = function(nums) {
    let left = 0;
    let current = 0;
    let max = 0;
     while(left<nums.length){
        if(nums[left] == 1){
           current++;
        }else{
            current = 0;
        }

        if(current > max){
           max = current;
        }

        left++;
     }

     return max;
};



Q.136) var singleNumber = function(nums) {
    let obj = {};

    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]]++;
        }else{
            obj[nums[i]] = 1;
        }
    }

    for(let key in obj){
        if(obj[key] == 1){
            return Number(key);
        }
    }
    
    return -1;
};


# 22-06-2025

1) Longest subarray sum equals to k without having negative values(use the sliding window)   needs to do one more time  

function longestSubarray(arr, k){
    let right = 0;
    let sum = 0;
    let max = 0;
    let left = 0;
    
    
    while(right < arr.length){
       // add every element into the sum
       sum += arr[right];
       
       // contnuously check if sum > k if true then remove the left element from the sum
       while(sum > k){
           sum -= arr[left];
       }
       // check if sum == k if true then check the length with the max;
       if(sum == k){
           if(right - left + 1 > max){
               max = right - left + 1;
           }
       }
       right ++;
    }
    
    return max;
}
console.log(longestSubarray([1,2,1,0,1,1],4));


2) Longest subarray sum equals to k also include the negative numbers     needs to do one more time

function longestSubarray(arr, k){
  let max = 0;
  let sum = 0;
   // create a Object
   let obj = new Map();
   
   // add the element to the sum each time
   for(let i = 0; i<arr.length; i++){
     
     sum += arr[i];
     
     // if sum == k then maxLen is i+1
     if(sum == k){
       max = i+1;
     }
   
   // check if obj has the sum - k then compare the maxLen with i- obj[sum-k]
   if(obj.has(sum-k)){
     if(i-obj.get(sum-k) > max){
       max = i-obj.get(sum-k);
     }
   }
   
   // check if !obj[sum] add the obj[sum] = i;
    if(!obj.has(sum)){
      obj.set(sum,i);
    }
    
   }
   
   // return max
   return max;
}
console.log(longestSubarray([-1, 0, 1, 1, -1, -1, 0],2));


3) 2 sum

var twoSum = function(nums, target) {
 // create an obj which stores each element
 let obj = {};

for(let i = 0; i<nums.length; i++){

 // calculate the compliment at every stage
 let compliment = target - nums[i];

 // if obj[compliment] true then simpley return the index of the compliment and current index as an array
 if(obj.hasOwnProperty(compliment)){
    return [obj[compliment],i];
 }

 // else store the element with the index
 obj[nums[i]] = i;
}
    
};

4) Sort an array of 0's 1's and 2's ?


var sortColors = function(nums) {
    let count = 0;
    let result = []

    for(let i = 0; i<nums.length; i++){
        if(nums[i] == 0){
            result[count++] = 0;
        }
    }

    for(let i = 0; i<nums.length; i++){
        if(nums[i] == 1){
            result[count++] = 1;
        }
    }

    for(let i = 0; i<nums.length; i++){
        if(nums[i] == 2){
            result[count++] = 2;
        }
    }

    for(let i = 0; i<nums.length; i++){
        nums[i] = result[i];
    }
};


5) Majority element without using object

var majorityElement = function(nums) {
   let count = 0;
    let current = -1;

for(let i = 0; i<nums.length; i++){
   if(count == 0){
      current = nums[i];
   }

   if(current == nums[i]){
        count++;
    }else{
        count--;
    }
  
}
 return current;

};


6) Kadane's Algorithm, maximum subarray sum ?

var maxSubArray = function(nums) {

if(nums.length <= 1) return nums[0]; 

   let current = 0;
   let max = -Infinity;

   for(let i = 0; i<nums.length; i++){
        current += nums[i];

        if(current > max){
            max = current;
        }

        if(current < 0){
            current = 0;
        }



   }

   return max;
};


# 23-06-2025
1) Print subarray with maximum subarray sum (extended version of above problem) ?


function print subArray(){
let result = [];
     let current = 0;
     let max = -Infinity;
     for(let i = 0; i < n; i++){
          current += arr[i];
          result.push(arr[i]);

          if (current < 0) {
               current = 0;
               result = [];
          }

          if (current > max) {
              max = current;
          }

     }

     return result;

}

2) 121. Best Time to Buy and Sell Stock (calculate the smallest and current profit for every i)

var maxProfit = function(prices) {
    let smallest = +Infinity;
    let max = -Infinity;
    let profit;

    for(let i = 0; i<prices.length; i++){
        if(smallest > prices[i]){
            smallest = prices[i];
        }
        profit = prices[i] - smallest;

        if(profit > max){
            max = profit;
        }

    }

    return max;
};


3) Rearrange Array Elements

var rearrangeArray = function(nums) {
  
  let pos = 0;
  let neg = 1;
  
  let result = [];

  for(let i = 0; i<nums.length; i++){
    if(nums[i] < 0){
        result[neg] = nums[i];
        neg+=2;
    }else{
        result[pos] = nums[i];// [3,-2,1,-5,2,-4] 
        pos+=2;
    }
  }

  return result;

};

4) 128. Longest Consecutive Sequence  

var longestConsecutive = function(nums) {

    if(nums.length == 1) return 1;

    if(nums.length < 1) return 0;

    nums.sort((a,b)=> a-b);

    // [0,1,1,2]

    let current = 1;
    let max = 0;

    for(let i = 1; i<nums.length; i++){
        if(nums[i-1] + 1 == nums[i]){
            current++; // 3

            if(current > max){
               max = current; // 2
            }
        }else if(nums[i-1] + 1 != nums[i] && nums[i-1] !== nums[i]){
            current = 1;
        }

    }
    if(current > max){
        max = current;
    }

    return max;

};


# 24-06-2025

1) 560. Subarray Sum Equals K (prefix sum + hashmap approach)  do after three days

 1) A current variable to store the prefix sum as we iterate.

2) A map (map) to store how many times a specific prefix sum has occurred.

3) We know that if current - k has been seen before, it means the subarray between the previous sum and current adds up to k.


var subarraySum = function(nums, k) {
   //[1,2,3]
  let count = 0;
  let current = 0;
  let map = {};

  map[0] = 1;

  // {"0": 1, "1": 1, "3": 1, "6": 1}

  for(let i = 0; i<nums.length; i++){
     current += nums[i]; // 6

     let remove = current - k; // 3

     if(map.hasOwnProperty(remove)){
         count += map[remove]; // 2
     }

     map[current] = (map[current] || 0) + 1; // map[6] = (map[6] || 0) +  1 // 1
  }

  return count; // 2

};

# 25-06-2025
 
1) 118. Pascal's Triangle (using the factor formula ((i-j)/(j+1)))

var generate = function(numRows) {
      let result = [];
      for(let i = 0; i<numRows; i++){
         let val = 1;
         let current = [val];
         for(let j = 0; j <i; j++){
            val *= (i-j)/(j+1);
            current.push(Math.round(val));
         }
         result.push(current);
      }

      return result;
};

2) 119. Pascal's Triangle II

var getRow = function(rowIndex) {
    let val = 1;
    let result = [val];
    for(j = 0;j <rowIndex; j++){
       val *= ((rowIndex-j)/(j+1));
       result.push(Math.round(val));
    }

    return result;
};

3) 229. Majority Element II

var majorityElement = function(nums) {
    let obj = {};
    let target = Math.floor(nums.length / 3);

    let result = [];

    for(let i = 0;i <nums.length; i++){
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]] += 1;
            // if(obj[nums[i]] > target){
            //     result.push(nums[i]);
            // }
        }else{
            obj[nums[i]] = 1;
            // if(obj[nums[i]] > target){
            //     result.push(nums[i]);
            // }
        }
    }
    
     for(let key in obj){
          if(obj[key] > target){
             result.push(Number(key))
          }
     }
     return result;
};


4) 



# 03-07-2025

1. Q) 3Sum     must do after 2 days

ar threeSum = function(nums) {
  
 nums.sort((a,b)=> a-b);

 let result = [];

 for(let i = 0; i <nums.length; i++){

    if(i > 0 && nums[i] == nums[i-1]) continue;

   let j = i+1;
   let k = nums.length-1;
    
 while(j<k){
    let sum = nums[i] + nums[j] + nums[k];

    if(sum < 0){
        j++;
    }else if(sum > 0){
        k--;
    }else{

        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        
        while(j < k && nums[j] == nums[j-1]){
            j++;
        }
        while(j < k && nums[k] == nums[k+1]){
            k--;
        }
    }
   }
 }

 return result;


};


2. Maximum subarray product

var maxProduct = function(nums) {
    // forward product
    let left = 0;
    let current = 1;
    let max = -Infinity;
    while(left <nums.length){
        current *= nums[left];

        if(current > max){
            max = current;
        }
     
        if(current == 0){
            current = 1;
        }

        left++;
    };

    left = 0;
    let right = nums.length - 1;

    current = 1;

    while(right > left){
       current *= nums[right];

        if(max < current){
        max = current;
    }

       if(current == 0){
        current = 1;
    }

    right--;
    }

    
    // backward product
    return max;

};

3. function largestSubarraySumZero(arr){
   let max = 0;
   let sum = 0;
   let obj = {};
   
   for(let i = 0; i<arr.length; i++){
      sum += arr[i];
      if(sum == 0){
         max = i + 1;
      }else{
         if(obj.hasOwnProperty(sum)){
            if(max < i-obj[sum]){
              max = i-obj[sum];
            }
         }else{
            obj[sum] = i;
         }
      }
   }
   return max;
}

let arr = [15, -2, 2, -8, 1, 7, 10, 23];
console.log(largestSubarrayZero(arr));  // 5


4. 56. Merge Intervals

var merge = function(intervals) {

    intervals.sort((a,b)=> a[0]-b[0]);

    let merged = [intervals[0]];

    for(let i = 0; i<intervals.length; i++){
        let last = merged[merged.length-1];
        let current = intervals[i];
        
        if(current[0] <= last[1]){
             last[1] = Math.max(current[1],last[1]);
        }else{
             merged.push(current);
        }
    }

    return merged;

};

5. 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
   let i = m-1;
   let j = n-1;
   let k = m+n-1;
   
   while(j>=0){
       if(i>=0 && nums1[i] > nums2[j]){
           nums1[k--] = nums1[i--];
       }else{
           nums1[k--] = nums2[j--];
       }
   }
};


# 06-07-2025

1. 485. Max Consecutive Ones

var findMaxConsecutiveOnes = function(nums) {
    let current = 0;
    let max = 0;
    let left = 0;

    while(left < nums.length){
        if(nums[left] == 1){
            current += 1;
        }else{
            current = 0;
        }

        if(current > max){
            max = current;
        }

        left++;
    }

    return max;

};

2. 1004. Max Consecutive Ones III

var longestOnes = function(nums, k) {
   // invest k correctly at right position
   // if k less then 0 then increment the left and if zero at previous stage then give back the k

   let left = 0;
   let max = 0;

   for(let i = 0; i<nums.length; i++){
     if(nums[i] == 0){
        k--;
     }

     while(k<0){
        if(nums[left] == 0){
            k++;
        }

        left++;
     }

     max = Math.max(max, i-left+1);
   }

   return max;
};

# 07-07-2025

1. 424. Longest Repeating Character Replacement


var characterReplacement = function(s, k) {
   let left = 0;
   let maxCount = 0;
   let freq = new Array(26).fill(0);
   let maxLength = 0;

   for(let right = 0; right < s.length; right++){
      let index = s.charCodeAt(right)-65;
      freq[index]++;
      
      maxCount = Math.max(maxCount, freq[index]);
     
     // this is the main trick 
      while((right-left+1) - maxCount > k){
        freq[s.charCodeAt(left)-65]--;
        left++;
      };
      maxLength = Math.max(maxLength, right-left+1);
   }

   return maxLength;
};


# 08-07-2025

1. 930. Binary Subarrays With Sum

var numSubarraysWithSum = function(nums, k) {
  let prefixSum = 0;
  let count = 0;
  let map = {0:1};

  for(let i = 0; i<nums.length; i++){
     prefixSum += nums[i];

     if(map[prefixSum -k] !== undefined){
        count += map[prefixSum-k];
     }

     map[prefixSum] = (map[prefixSum] || 0) + 1;
  }

  return count;
};


2. 1248. Count Number of Nice Subarrays

var numberOfSubarrays = function(nums,k){
    let count = 0;
    let prefixOdd = 0;
    let map = {0:1};

    for(let i = 0; i<nums.length; i++){
        if(nums[i] % 2 != 0){
            prefixOdd++;
        }

        if(map[prefixOdd - k] !== undefined){
            count += map[prefixOdd-k];
        }

        map[prefixOdd] = (map[prefixOdd] || 0) + 1;
    }

    return count;
};

# 09-07-2025

1. 1358. Number of Substrings Containing All Three Characters

var numberOfSubstrings = function(s) {
   let count = {a:0,b:0,c:0};
   let res = 0;
   let left = 0;

   for(let i = 0; i<s.length; i++){
      // increse the frequency of every element
      count[s[i]]++;

      // check while all the element are greater than 0
      while(count['a']>0 && count['b']>0 && count['c']>0){
        // calculate the current window occurences of all three elements
        res += s.length-i;
        // decrease the count[left] because want to shrink the window
        count[s[left]]--;
        // increase the left
        left++;
      }
   }

   return res;
};

2. 1423. Maximum Points You Can Obtain from Cards

var maxScore = function(cardPoints, k) {
   let leftSum = 0;
   let rightSum = 0;
   let n = cardPoints.length;


   for(let i = 0; i<k; i++){
     leftSum += cardPoints[i];
   }

   let max = leftSum;

   for(let i = 0; i<k; i++){
     rightSum += cardPoints[n-1-i];
     leftSum -= cardPoints[k-1-i];

     max = Math.max(max, rightSum + leftSum);
   }

   return max;
};


# 10-07-2025

1.  1021. Remove Outermost Parentheses 


var removeOuterParentheses = function(s) {
    let ans = "";
    let counter = 0;
    for(let i = 0; i<s.length; i++){ // 2
       if(s[i] == ')') counter --; // 1
       if(counter != 0){
          ans += s[i]; // ()
       }
       if(s[i] == '(') counter ++; //2
    }

    return ans;
};

2. 151. Reverse Words in a String


var reverseWords = function(s) {
    let arr = s.trim().split(' ');

    let left = 0;
    let right = arr.length-1;

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    let new_arr = arr.filter(Boolean);
    return new_arr.join(' ');

};

3. 1903. Largest Odd Number in String

var largestOddNumber = function(num) {
   
   for(let i = num.length -1 ; i >= 0; i--){
    if(Number(num[i]) % 2 != 0){
        return num.slice(0,i+1);
    }
   }

   return "";
};

4. 14. Longest Common Prefix

var longestCommonPrefix = function(strs) {
    
   let prefix = strs[0];

   for(let i = 0; i<strs.length; i++){
    while(!strs[i].startsWith(prefix)){
        prefix = prefix.slice(0,-1);
    }
     if(prefix.length == 0) return "";
   }

   return prefix;

};


# 13-07-2025

1. 7. Reverse Integer

var reverse = function(x) {
 let result = 0;
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  while (x > 0) {
    let last = x % 10;
    result = result * 10 + last;
    x = Math.floor(x / 10);
  }

  result = result * sign;

  if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
    return 0;
  }

  return result;
};

2. 9. Palindrome Number

var isPalindrome = function(x) {
    
    let result = 0;
    let original = x;

    while(x > 0){

        let last = x % 10;
        result = result * 10 + last;
        x = Math.floor(x/10);
    }

    if (result == original) return true;
    return false;

};

3. 1838. Frequency of the Most Frequent Element

var maxFrequency = function(nums, k) {
   nums.sort((a,b)=> a-b);

   let left = 0;
   let maxFreq = 0;
   let total = 0;

   for(let i = 0; i<nums.length; i++){
      total += nums[i];

      while((i-left+1) * nums[i] - total > k){
        total -= nums[left];
        left++;
      }

      maxFreq = Math.max(maxFreq, i-left+1);
      
   }

   return maxFreq;
};

# Recursion
 1. Print name N times using recursion

 function printNtimes(n){
    if(n == 0) return;
    console.log('name');
    printNtimes(n-1);
}

printNtimes(5);

2. Print 1 to N using recursion

  function printtoN(n){
    if(n == 0) return;
    printtoN(n-1);
    console.log(n);
  }

3. Print N to 1 using recursion

   function printtoN(n){
    if(n == 0) return;
    console.log(n);
    printtoN(n-1);
  }

4. Sum of first N numbers using recursion

  function sum(n){
     if(n == 1) return 1;
     let result = n + sum(n-1);
     return result;
  }

console.log(sum(5));

5 + sum(4) // 15
      4 + sum(3) // 10
            3 + sum(2) // 6
                 2 + sum(1) // 3
                       1


5. Factorial of N numbers
  
  function fac(n){
    if(n == 1) return 1;

    let result = n * fac(n-1);
    return result;
  }

6. Reverse an array using recursion

    function rev(arr,left,right){

    if(left >= right) return arr;

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    
    return rev(arr,left+1,right-1);
    
  }

console.log(rev([1,2,3,4,5],0,[1,2,3,4,5].length-1));

7. fibonacci number

var fib = function(n) {
    
   if(n == 0 || n == 1) return n;

   let result = fib(n-1) + fib(n-2);
   return result; 

};


# What is stack ?

A Stack is a linear data structure that follows the LIFO principle:

LIFO = Last In, First Out
Think: a stack of plates — you remove the topmost plate first.

# 2. Stack Operations

| Operation   | Description                       | JS Implementation       |
| ----------- | --------------------------------- | ----------------------- |
| `push()`    | Add element to the top            | `stack.push(item)`      |
| `pop()`     | Remove and return top element     | `stack.pop()`           |
| `peek()`    | View top element without removing | `stack[stack.length-1]` |
| `isEmpty()` | Check if stack is empty           | `stack.length === 0`    |
| `size()`    | Number of elements                | `stack.length`          |


# 3. Using Arrays as Stacks

let stack = [];

// Push
stack.push(10);
stack.push(20);

// Peek
console.log(stack[stack.length - 1]); // 20

// Pop
console.log(stack.pop()); // 20

// Check empty
console.log(stack.length === 0); // false


# 4. Custom Stack Class (ES6)

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" "));
  }
}


# Problems

1. 20. Valid Parentheses

var isValid = function(s) {
    
   let map = {')':'(', '}':'{', ']': '['};

   let stack = [];

   for(let i = 0; i<s.length; i++){
       if(s[i] == '(' || s[i] == '{' || s[i] == '['){
        stack.push(s[i]);
       }else{
           let compare = stack.pop();

           if(map[s[i]] != compare){
               return false;
           }
       }
   }

   if(stack.length != 0) return false;

   return true;

};



# 14-07-2025

1. 155. Min Stack


var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
     this.stack.push(val);

     if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length-1]){
        this.minStack.push(val);
     }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   let removed =  this.stack.pop();

   if(removed == this.minStack[this.minStack.length-1]){
    this.minStack.pop();
   }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


 2. 496. Next Greater Element I

 var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let i = 0; i<nums1.length; i++){
        let j = nums2.length-1;
        let max = -1;
        while(nums1[i] != nums2[j]){
            if(nums2[j] > nums1[i]){
               max = nums2[j];
            }
            j--;
        }
        result.push(max);
    }
    return result;
};

3. Next Greater Element I


# 15-07-2025

- Stack

* Infix to Postfix

function infixToPostfix(exp) {
  let stack = [];
  let result = "";
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };

  for (let ch of exp) {
    if (/[a-zA-Z0-9]/.test(ch)) {
      result += ch;
    } else if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        result += stack.pop();
      }
      stack.pop(); // pop '('
    } else {
      while (
        stack.length &&
        precedence[ch] <= precedence[stack[stack.length - 1]]
      ) {
        result += stack.pop();
      }
      stack.push(ch);
    }
  }

  while (stack.length) result += stack.pop();
  return result;
}


let infix = "(A+B)*C";
console.log("Infix to Postfix:", infixToPostfix(infix));


2. 503. Next Greater Element II

var nextGreaterElements = function(nums) {
     // use the stack compare the highest at the top of stack

     // [1,2,1]
     let stack = [];  // [1,2,]
     let result = new Array(nums.length).fill(-1);  // [2,-1,-1]

     for(let i = 0; i < 2 * nums.length; i++){  // 3
        let index = i % nums.length; // 0
        while(stack.length && nums[index] > nums[stack[stack.length-1]]){ // 
            let prevIndex = stack.pop();  // 0
            result[prevIndex] = nums[index];
        }

        if (i < nums.length) stack.push(i); 
     }

     return result;
};


# 16-07-2025

1. Trapping rain water problem 




2. function nextSmallerElements(arr) {
        let stack = [];
        let result = new Array(arr.length).fill(-1);

        for(let i = 0; i< 2 * arr.length; i++){
            let index = i % arr.length;
            while(stack.length && arr[index] < arr[stack[stack.length-1]] ){
               let prevIndex = stack.pop();
               result[prevIndex] = arr[index];
            }

            if(i < arr.length) stack.push(index);
        }

        return result;
  }
  
console.log(nextSmallerElements([10, 9, 8, 7]));


# 17-07-2025

1. 907. Sum of Subarray Minimums

function sumSubarrayMins(arr) {

    const n = arr.length;
    const MOD = 1e9 + 7;

    const prevLess = Array(n).fill(-1);
    const nextLess = Array(n).fill(n);
    let stack = [];

    // Previous Less Element (strictly greater)
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        prevLess[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    console.log(prevLess);

    stack = [];

    // Next Less Element (greater or equal)
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        nextLess[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }
    console.log(nextLess);

    // Compute result
    let result = 0;
    for (let i = 0; i < n; i++) {
        const left = i - prevLess[i];
        const right = nextLess[i] - i;
        result = (result + arr[i] * left * right) % MOD;
    }

    return result;
}

# 18-07-2025

1. 735. Asteroid Collision

var asteroidCollision = function(asteroids) {
    let stack = [];
    let result = [];

    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] < 0) {
            while (
                stack.length &&
                asteroids[stack[stack.length - 1]] > 0 && 
                asteroids[stack[stack.length - 1]] < Math.abs(asteroids[i])
            ) {
                stack.pop();
            }

            if (
                stack.length === 0 || asteroids[stack[stack.length - 1]] < 0
            ) {

                result.push(asteroids[i]);
            } else if (asteroids[stack[stack.length - 1]] === Math.abs(asteroids[i])) {

                stack.pop();
            }

        } else {
            stack.push(i);
        }
    }

    for (let i = 0; i < stack.length; i++) {
        result.push(asteroids[stack[i]]);
    }

    return result;
};




2. 205. Isomorphic Strings

var isIsomorphic = function(s, t) {   // not optimized code
    
    let map = {};
    let arr = [];
    for(let i = 0; i<s.length; i++){
        if(!map.hasOwnProperty(s[i]) && !arr.includes(t[i])){
           map[s[i]] = t[i];
           arr.push(t[i]);
        }else{
           if(map[s[i]] != t[i]) return false;
        }
    }

    return true;
    


};


var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const mapST = {};
    const mapTS = {};

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i];
        const c2 = t[i];

        if ((mapST[c1] && mapST[c1] !== c2) || 
            (mapTS[c2] && mapTS[c2] !== c1)) {
            return false;
        }

        mapST[c1] = c2;
        mapTS[c2] = c1;
    }

    return true;
};


# 20-07-2025

1. 2104. Sum of Subarray Ranges

var subArrayRanges = function(nums) {
    const n = nums.length;

    const getContribution = (isMin) => {
        let prev = Array(n).fill(-1);
        let next = Array(n).fill(n);
        let stack = [];

        // Previous
        for (let i = 0; i < n; i++) {
            while (
                stack.length &&
                (isMin ? nums[stack[stack.length - 1]] > nums[i] : nums[stack[stack.length - 1]] < nums[i])
            ) {
                stack.pop();
            }
            prev[i] = stack.length ? stack[stack.length - 1] : -1;
            stack.push(i);
        }

        stack = [];

        // Next
        for (let i = n - 1; i >= 0; i--) {
            while (
                stack.length &&
                (isMin ? nums[stack[stack.length - 1]] >= nums[i] : nums[stack[stack.length - 1]] <= nums[i])
            ) {
                stack.pop();
            }
            next[i] = stack.length ? stack[stack.length - 1] : n;
            stack.push(i);
        }

        let sum = 0;
        for (let i = 0; i < n; i++) {
            let left = i - prev[i];
            let right = next[i] - i;
            sum += nums[i] * left * right;
        }

        return sum;
    };

    const minSum = getContribution(true);
    const maxSum = getContribution(false);

    return maxSum - minSum;
};


# 21-07-2025

1. 402. Remove K Digits

var removeKdigits = function(num, k) {
    let stack = [];

    // Step 1: Build a monotonic increasing stack
    for (let i = 0; i < num.length; i++) {
        while (stack.length && stack[stack.length - 1] > num[i] && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }

    // Step 2: If k > 0, remove from end
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Step 3: Build result string
    let result = "";
    while (stack.length) {
        result += stack.shift();
    }

    // Step 4: Remove leading zeros
    while (result.length > 1 && result[0] === '0') {
        result = result.slice(1);
    }

    return result.length ? result : "0";
};








