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
function majority(arr){
     let obj = {};
     
     for(let i = 0; i<arr.length; i++){
         if(obj[arr[i]]){
             obj[arr[i]] += 1;
         }else{
             obj[arr[i]] = 1;
         }
     }
     let max = -Infinity;
     for(key in obj){
         if(obj[key] > max){
             max = obj[key];
         }
     }
     
     return max;
}

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

28 - Insert Interval ⭐⭐

29 - Non-overlapping Intervals ⭐⭐

30 - Spiral Matrix Traversal ⭐⭐

31 - Jump Game (Can reach end?) ⭐⭐

32 - Merge Intervals ⭐⭐

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

35 - Gas Station Problem ⭐⭐

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