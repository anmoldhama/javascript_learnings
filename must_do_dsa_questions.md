Arrays (40 Questions)
1 - Two Sum (Find pairs that add to target) ⭐

2 - Remove Duplicates from sorted array ⭐

3 - Rotate Array by K steps ⭐⭐

4 - Find Missing Number (1 to n) ⭐

5 - Merge Two Sorted Arrays ⭐

6 - Maximum Subarray Sum (Kadane’s) ⭐⭐

7 - Find All Duplicates in array ⭐⭐

8 - Move Zeroes to end ⭐

9 - Product of Array Except Self ⭐⭐

10 - First Unique Character in array ⭐

11 - Chunk Array (Split into subarrays) ⭐

12 - Flatten Nested Arrays ⭐⭐

13 - Intersection of Two Arrays ⭐

14 - Find Peak Element ⭐⭐

15 - Binary Search Implementation ⭐

16 - Count Element Occurrences ⭐

17 - Shuffle Array (Fisher-Yates) ⭐⭐

18 - Find Min/Max without built-ins ⭐

19 - Reverse Array In-Place ⭐

20 - Custom Array.map() ⭐⭐

21 - Find Pivot Index (Equal left/right sums) ⭐⭐

22 - Majority Element (Count > n/2) ⭐

23 - Squares of Sorted Array ⭐

24  - Maximum Average Subarray (Sliding Window) ⭐⭐

25 - Longest Consecutive Sequence ⭐⭐⭐

26 - Container With Most Water ⭐⭐

27 - 3Sum (Triplets adding to 0) ⭐⭐

28 - Insert Interval ⭐⭐

29 - Non-overlapping Intervals ⭐⭐

30 - Spiral Matrix Traversal ⭐⭐

31 - Jump Game (Can reach end?) ⭐⭐

32 - Merge Intervals ⭐⭐

33 - Find Duplicate Number (Modify array) ⭐⭐

34 - H-Index (Research papers) ⭐⭐

35 - Gas Station Problem ⭐⭐

36 - Candy Distribution ⭐⭐⭐

37 - Trapping Rain Water ⭐⭐⭐

38 - Maximum Product Subarray ⭐⭐

39 - Find Minimum in Rotated Sorted Array ⭐⭐

40 - Search in Rotated Sorted Array ⭐⭐

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

43 - Longest Substring Without Repeats ⭐⭐
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

45 - String Compression (aaabbbcc → a3b3c2) ⭐⭐
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

52 - Valid Parentheses (Balanced brackets) ⭐
ans :
  morning

53 - Implement String.split() ⭐⭐

54 - Capitalize Words ⭐

55 - Find All Substrings ⭐

56 - Longest Palindromic Substring ⭐⭐

57 - Zigzag Conversion ⭐⭐

58 - Letter Combinations of Phone Number ⭐⭐

59 - Generate Valid Parentheses ⭐⭐

60 - Minimum Window Substring ⭐⭐⭐

61 - Word Break ⭐⭐

62 - Reverse Words in String ⭐

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