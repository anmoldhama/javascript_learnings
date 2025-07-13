# Time Complexity

Time complexity is a way to measure how the runtime of an algorithm grows as the size of the input increases.

It describes the number of basic operations or steps an algorithm takes in relation to the size of the input, usually denoted as n.

# Space Complexity

Space complexity is a way to measure how much memory an algorithm uses as the input size grows.

It represents the amount of extra space or memory the algorithm needs to run, relative to input size n.


 #  Some important complexities are :

 ✅ 1. O(1): Constant Time / Space

🧠 Meaning: Doesn't grow with input size.
📦 Example: Accessing an array index, inserting into a hash map.
💡 Why it matters: Fastest possible — ideal for high-performance paths (e.g., API rate-limiter check).

✅ 2. O(log n): Logarithmic

🧠 Meaning: Grows slowly even as input grows large.
📦 Example: Binary search, height of balanced binary search tree, heap insert/delete.
💡 Why it matters: Very efficient for large-scale sorted data.

log₂(1) = 0 → 2⁰ = 1

log₂(2) = 1 → 2¹ = 2

log₂(4) = 2 → 2² = 4

log₂(8) = 3 → 2³ = 8

log₂(16) = 4

log₂(32) = 5

log₂(64) = 6

✅ 3. O(n): Linear

🧠 Meaning: Grows proportionally with input size.
📦 Example: Traversing an array or linked list, basic filter/map operations.
💡 Why it matters: Acceptable for most applications, but may become slow at scale.

✅ 4. O(n log n): Linearithmic

🧠 Meaning: Grows faster than linear but better than quadratic.
📦 Example: Efficient sorting algorithms like Merge Sort, QuickSort, Heap Sort.
💡 Why it matters: Often a sweet spot for algorithms like batch sorting, large query processing.

✅ 5. O(n²): Quadratic

🧠 Meaning: Growth is exponential with nested loops.
📦 Example: Brute-force comparisons (e.g., checking all pairs), naive matrix multiplication.
💡 Why it matters: Becomes slow very quickly — problematic after n > 10⁴.

✅ 6. O(n³): Cubic

🧠 Meaning: Triple nested loops; each added element massively increases processing.
📦 Example: Matrix chain multiplication (brute force), some dynamic programming problems.
💡 Why it matters: Only suitable for very small input sizes.

✅ 7. O(2ⁿ): Exponential

🧠 Meaning: Runtime doubles for every additional input element.
📦 Example: Recursive Fibonacci, subset problems without memoization.
💡 Why it matters: Unusable for n > 20 without optimization (use memoization/DP).

✅ 8. O(n!): Factorial

🧠 Meaning: Tries every possible ordering — extreme growth.
📦 Example: Permutations, brute-force traveling salesman problem.
💡 Why it matters: Impractical for input size > 10 unless pruned with backtracking.


| Big-O      | Name         | Notes / Examples                   |
| ---------- | ------------ | ---------------------------------- |
| O(1)       | Constant     | Access hash map, array index       |
| O(log n)   | Logarithmic  | Binary search, BST height          |
| O(n)       | Linear       | Single loop, array traversal       |
| O(n log n) | Linearithmic | Merge Sort, Heap Sort              |
| O(n²)      | Quadratic    | Nested loops, naive comparison     |
| O(n³)      | Cubic        | Triple nested loops, matrix ops    |
| O(2ⁿ)      | Exponential  | Subset generation, naive recursion |
| O(n!)      | Factorial    | All permutations                   |



 # O(1)

Q) // sum of first n numbers

// mathematics progression

function sum(n){
    let sum = n * (n+1)/2;
    return sum;
}

console.log(sum(5));

Time complexity is O(1) because it is not directly dependent on input size
and total operations are k


# O(n)

Q) N Factorial 

function fac(n){
    let result = 1;
for(let i = n; i>=1; i--){
      result *= i;
}
return result;
}

console.log(fac(5));


Q) Fibonacci

// Fibonacci

function fib(n){
    let result = [0,1];
    
    for(let i = 2; i<n;i++){
        result[i] = result[i-1] + result[i-2];
    }
    return result;
}

console.log(fib(5));


# It has the time complexity of O(n) bacause only single loop is exucuted with k operations


# O(logn)

Q) Binary Search

function binarySearch(arr,target){
    
    let left = 0;
    let right = arr.length;
    
    while(left<right){
        let mid = Math.floor((left+right)/2);
        
        if(arr[mid] == target) return mid;
        
        if(arr[mid] > target){
            right = mid;
        }else{
            left = mid+1;
        }
    }
    return -1;
}


console.log(binarySearch([1,2,3,4,5,6],2));


# Time complexity of binary search is O(log n) because it is divided the length into two parts each time


# O(n^2) and O(n^3)

Q) Bubble Sort

function bubbleSort(arr){
for(let i = 0; i<arr.length; i++){
    for(let j = 1; j<arr.length-i; j++){
        if(arr[j-1] > arr[j]){
            swap(arr,j-1,j);
        }
    }
}
return arr;
}

function swap(arr,left,right){
     
     let temp = arr[left];
     arr[left] = arr[right];
     arr[right] = temp;
     
}

console.log(bubbleSort([2,4,1,3,5,3,2]));


Q) Tripple nested loops  for O(n^3)



# O(root n )


q) prime numbers


function prime(n){
    for(let i = 2; i*i<=n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

console.log(prime(7));

i^2 = n
i = root n
O(root n)


# Recursion Time Complexity

Two ways to calculate the time complexity

1) Recurrence relation
2) TC = total no of rec calls * work in each calls
3) SC = height of call stack * memory in each call

Q)  factorial 

int factorial(n){
    if(n==0){
        return 1;
    }

    return n * factorial(n-1);
}

# tree

fn(4) * 6
fn(3) * 2
fn(2) * 1
fn(1) * 1
fn(0)


 # O(n)  time complexity

 # O(n) space complexity



# O(2^n) 


Q) fibonacci

function fib(n){
    if(n === 0 || n === 1) return n;
    
    return fib(n-1) + fib(n-2);
}

console.log(fib(5));


Q) Reverse a String Recursively ?

4. Sum of Digits ?

5. Check if Array Is Sorted Recursively ?

6. Print All Subsets of an Array (Power Set) ?

7. Generate All Permutations of a String/Array ?

8. Tower of Hanoi ?

9. Palindrome Check Using Recursion ?

10. Find nth Node from End of Linked List Recursively ?










