Questions 1–20: Basic Edge Case Outputs
js
Copy
Edit
console.log(5 & 3); // ?

cpp
Copy
Edit

2. ```js
console.log(5 | 3); // ?
js
Copy
Edit
console.log(5 ^ 3); // ?

cpp
Copy
Edit

4. ```js
console.log(~5); // ?
js
Copy
Edit
console.log(1 << 2); // ?

cpp
Copy
Edit

6. ```js
console.log(-1 >> 1); // ?
js
Copy
Edit
console.log(8 >> 2); // ?

cpp
Copy
Edit

8. ```js
console.log(-8 >> 2); // ?
js
Copy
Edit
console.log(-8 >>> 2); // ?

cpp
Copy
Edit

10. ```js
console.log(0b101010 & 0b111100); // ?
js
Copy
Edit
console.log((5 & 3) | 2); // ?

cpp
Copy
Edit

12. ```js
console.log((5 | 3) & 2); // ?
js
Copy
Edit
console.log((~5) & 3); // ?

cpp
Copy
Edit

14. ```js
console.log(~(5 & 3)); // ?
js
Copy
Edit
console.log((1 << 30) << 1); // ?

cpp
Copy
Edit

16. ```js
console.log((1 << 30) << 2); // ?
js
Copy
Edit
console.log((1 << 31) >>> 0); // ?

cpp
Copy
Edit

18. ```js
console.log((1 << 31) >> 0); // ?
js
Copy
Edit
console.log((-1 >>> 0).toString(2)); // ?

scss
Copy
Edit

20. ```js
console.log((-1 >>> 1).toString(2)); // ?
🧠 Questions 21–40: Type Coercion & Boolean Behavior
js
Copy
Edit
console.log(true | 0); // ?

cpp
Copy
Edit

22. ```js
console.log(false & 1); // ?
js
Copy
Edit
console.log(!!(5 & 1)); // ?

cpp
Copy
Edit

24. ```js
console.log(!!(5 & 0)); // ?
js
Copy
Edit
console.log("5" & 1); // ?

cpp
Copy
Edit

26. ```js
console.log(null | 1); // ?
js
Copy
Edit
console.log(undefined ^ 1); // ?

cpp
Copy
Edit

28. ```js
console.log("0b101" & 3); // ?
js
Copy
Edit
console.log("5" >>> 1); // ?

cpp
Copy
Edit

30. ```js
console.log("abc" | 0); // ?
js
Copy
Edit
console.log({} & 1); // ?

cpp
Copy
Edit

32. ```js
console.log([1] | 0); // ?
js
Copy
Edit
console.log(["5"] & 3); // ?

cpp
Copy
Edit

34. ```js
console.log("5" & "3"); // ?
js
Copy
Edit
console.log(true & true); // ?

cpp
Copy
Edit

36. ```js
console.log(true ^ false); // ?
js
Copy
Edit
console.log("true" & 1); // ?

cpp
Copy
Edit

38. ```js
console.log(null >>> 1); // ?
js
Copy
Edit
console.log(undefined >>> 1); // ?

cpp
Copy
Edit

40. ```js
console.log("0b1001" | 1); // ?
🏴‍☠️ Questions 41–60: Flags and Bit Masks
js
Copy
Edit
const READ = 0b0001, WRITE = 0b0010;
console.log((READ | WRITE) & WRITE); // ?

cpp
Copy
Edit

42. ```js
const PERMISSION = 0b0110;
console.log((PERMISSION & 0b0001) ? "READ" : "NO_READ"); // ?
js
Copy
Edit
let flags = 0b1010;
console.log((flags ^ 0b0010).toString(2)); // ?

cpp
Copy
Edit

44. ```js
let x = 0b1001;
x |= 0b0010;
console.log(x.toString(2)); // ?
js
Copy
Edit
let x = 0b1111;
x &= ~0b0100;
console.log(x.toString(2)); // ?

cpp
Copy
Edit

46. ```js
const mask = 1 << 3;
console.log(0b0000 | mask); // ?
js
Copy
Edit
let x = 0b1010;
console.log(Boolean(x & (1 << 1))); // ?

scss
Copy
Edit

48. ```js
console.log((0b1101 & 0b1010).toString(2)); // ?
js
Copy
Edit
let flags = 0b1111;
flags &= ~(1 << 2);
console.log(flags.toString(2)); // ?

cpp
Copy
Edit

50. ```js
let f = 0b101;
f ^= 0b001;
console.log(f.toString(2)); // ?
⏩ Questions 61–80: Signed & Unsigned Shifts
js
Copy
Edit
console.log(-1 >>> 0); // ?

cpp
Copy
Edit

52. ```js
console.log(-1 >> 1); // ?
js
Copy
Edit
console.log(-1 >>> 1); // ?

cpp
Copy
Edit

54. ```js
console.log(2147483647 << 1); // ?
js
Copy
Edit
console.log(2147483648 >>> 0); // ?

cpp
Copy
Edit

56. ```js
console.log(2147483648 >> 1); // ?
js
Copy
Edit
console.log(-2147483648 >>> 0); // ?

cpp
Copy
Edit

58. ```js
console.log(1 << 31); // ?
js
Copy
Edit
console.log((1 << 31) >>> 0); // ?

cpp
Copy
Edit

60. ```js
console.log((1 << 31) >> 0); // ?
🌀 Questions 81–100: Complex Expressions & Tricks
js
Copy
Edit
console.log((5 & 3) ^ (7 | 2)); // ?

cpp
Copy
Edit

62. ```js
console.log((4 << 1) & 7); // ?
js
Copy
Edit
console.log((~(4 >> 1)) >>> 0); // ?

scss
Copy
Edit

64. ```js
console.log(((~5) >>> 0).toString(2)); // ?
js
Copy
Edit
console.log(((~0) >>> 1) & 1); // ?

cpp
Copy
Edit

66. ```js
console.log((0b1010 ^ 0b1111) << 2); // ?
js
Copy
Edit
console.log((1 << 5) - 1); // ?

cpp
Copy
Edit

68. ```js
console.log((1 << 4) | (1 << 1)); // ?
js
Copy
Edit
console.log((7 ^ (1 << 1)).toString(2)); // ?

cpp
Copy
Edit

70. ```js
console.log((5 << 2) | (3 & 1)); // ?
js
Copy
Edit
console.log(0xffffffff >> 1); // ?

cpp
Copy
Edit

72. ```js
console.log(0xffffffff >>> 1); // ?
js
Copy
Edit
console.log(0b10000000000000000000000000000000 >>> 0); // ?

cpp
Copy
Edit

74. ```js
console.log(1 << 31); // ?
js
Copy
Edit
console.log((1 << 31) >>> 0); // ?

cpp
Copy
Edit

76. ```js
console.log((1 << 32) >>> 0); // ?
js
Copy
Edit
console.log((1 << 33) >>> 0); // ?

cpp
Copy
Edit

78. ```js
console.log(3 & ~1); // ?
js
Copy
Edit
console.log(0b1100 ^ 0b1010); // ?

cpp
Copy
Edit

80. ```js
console.log((0b1111 & 0b1010) | 0b0001); // ?
js
Copy
Edit
console.log(1 << (2 + 1)); // ?

cpp
Copy
Edit

82. ```js
console.log((1 << 4) >> 2); // ?
js
Copy
Edit
console.log(1 << (1 << 1)); // ?

cpp
Copy
Edit

84. ```js
console.log((1 << 2) << 2); // ?
js
Copy
Edit
console.log((255 ^ 0xFF)); // ?

cpp
Copy
Edit

86. ```js
console.log((~0x0F) & 0xFF); // ?
js
Copy
Edit
console.log((0xAB & 0xF0) >> 4); // ?

scss
Copy
Edit

88. ```js
console.log(((0x55 ^ 0xFF) & 0xAA).toString(16)); // ?
js
Copy
Edit
console.log((0x1234 >> 8).toString(16)); // ?

scss
Copy
Edit

90. ```js
console.log(((0x1234 & 0x00FF) << 8).toString(16)); // ?
js
Copy
Edit
console.log((0b1010 | 0b0101) === 0b1111); // ?

scss
Copy
Edit

92. ```js
console.log((~0b1010 & 0b1111).toString(2)); // ?
js
Copy
Edit
console.log((0b1111 >> 1) & 0b0011); // ?

cpp
Copy
Edit

94. ```js
console.log((1 << 4) & 0xFF); // ?
js
Copy
Edit
console.log(((1 << 3) | (1 << 1)).toString(2)); // ?

scss
Copy
Edit

96. ```js
console.log((1 << (1 << 2)).toString(2)); // ?
js
Copy
Edit
console.log((~(1 << 4)) & 0xFF); // ?

scss
Copy
Edit

98. ```js
console.log(((0b10101010 ^ 0b11111111) >>> 0).toString(2)); // ?
js
Copy
Edit
console.log((0b10101010 & 0b11110000) >>> 4); // ?

scss
Copy
Edit

100. ```js
console.log((0b00001111 << 4).toString(2)); // ?