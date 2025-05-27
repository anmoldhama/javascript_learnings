Basic Arithmetic (With Twists)
js
Copy
Edit
console.log(2 + 3 * 4); // Output: ?

cpp
Copy
Edit
2. ```js
console.log((2 + 3) * 4); // Output: ?
js
Copy
Edit
console.log(10 / 2 * 5); // Output: ?

cpp
Copy
Edit
4. ```js
console.log(10 % 3 * 3); // Output: ?
js
Copy
Edit
console.log(1 + 2 + "3"); // Output: ?

cpp
Copy
Edit
6. ```js
console.log("3" + 1 + 2); // Output: ?
js
Copy
Edit
console.log("6" - 2); // Output: ?

cpp
Copy
Edit
8. ```js
console.log("6" / 2); // Output: ?
js
Copy
Edit
console.log("6" * "2"); // Output: ?

cpp
Copy
Edit
10. ```js
console.log("six" * 2); // Output: ?
🚫 NaN, Infinity, Undefined
js
Copy
Edit
console.log(0 / 0); // Output: ?

cpp
Copy
Edit
12. ```js
console.log(1 / 0); // Output: ?
js
Copy
Edit
console.log(-1 / 0); // Output: ?

cpp
Copy
Edit
14. ```js
console.log(undefined + 5); // Output: ?
js
Copy
Edit
console.log(null + 5); // Output: ?

cpp
Copy
Edit
16. ```js
console.log(NaN + 1); // Output: ?
js
Copy
Edit
console.log(NaN * 0); // Output: ?

pgsql
Copy
Edit
18. ```js
console.log(Infinity - Infinity); // Output: ?
js
Copy
Edit
console.log(Infinity / 0); // Output: ?

yaml
Copy
Edit
20. ```js
console.log(0 / Infinity); // Output: ?

---

#### 🧠 Unary & Prefix/Postfix Quirks

21. ```js
let a = 1; console.log(++a + a++); // Output: ?
js
Copy
Edit
let x = 2; x = x++ + ++x; console.log(x); // Output: ?

cpp
Copy
Edit
23. ```js
let y = 3; console.log(y++ + y++); // Output: ?
js
Copy
Edit
let b = 5; let c = b++ + ++b + b; console.log(c); // Output: ?

cpp
Copy
Edit
25. ```js
let i = 2; i = i++ + i++ + ++i; console.log(i); // Output: ?
🎭 Coercion with Types
js
Copy
Edit
console.log(true + false); // Output: ?

cpp
Copy
Edit
27. ```js
console.log(true + 2); // Output: ?
js
Copy
Edit
console.log(false + null); // Output: ?

cpp
Copy
Edit
29. ```js
console.log([] + 1); // Output: ?
js
Copy
Edit
console.log([] - 1); // Output: ?

cpp
Copy
Edit
31. ```js
console.log([1] + 1); // Output: ?
js
Copy
Edit
console.log([1,2] + [3,4]); // Output: ?

cpp
Copy
Edit
33. ```js
console.log({} + 1); // Output: ?
js
Copy
Edit
console.log(1 + {}); // Output: ?

yaml
Copy
Edit
35. ```js
console.log("5" - true); // Output: ?

---

#### 🔢 Bitwise Arithmetic

36. ```js
console.log(5 & 3); // Output: ?
js
Copy
Edit
console.log(5 | 3); // Output: ?

cpp
Copy
Edit
38. ```js
console.log(5 ^ 3); // Output: ?
js
Copy
Edit
console.log(~5); // Output: ?

cpp
Copy
Edit
40. ```js
console.log(1 << 2); // Output: ?
js
Copy
Edit
console.log(8 >> 2); // Output: ?

cpp
Copy
Edit
42. ```js
console.log(-8 >>> 2); // Output: ?
js
Copy
Edit
console.log(7 & 1); // Output: ?

cpp
Copy
Edit
44. ```js
console.log(10 | 4 & 1); // Output: ?
js
Copy
Edit
console.log((10 | 4) & 1); // Output: ?

💥 Exponentiation
js
Copy
Edit
console.log(2 ** 3); // Output: ?

cpp
Copy
Edit
47. ```js
console.log(2 ** 3 ** 2); // Output: ?
js
Copy
Edit
console.log((2 ** 3) ** 2); // Output: ?

cpp
Copy
Edit
49. ```js
console.log(-2 ** 2); // Output: ?
js
Copy
Edit
console.log((-2) ** 2); // Output: ?

🧮 Grouping/Precedence
js
Copy
Edit
console.log(10 + 5 * 2); // Output: ?

cpp
Copy
Edit
52. ```js
console.log((10 + 5) * 2); // Output: ?
js
Copy
Edit
console.log(100 / 10 / 2); // Output: ?

cpp
Copy
Edit
54. ```js
console.log(100 / (10 / 2)); // Output: ?
js
Copy
Edit
console.log(1 + 2 + 3 * 4 / 2); // Output: ?

cpp
Copy
Edit
56. ```js
console.log((1 + 2 + 3) * 4 / 2); // Output: ?
js
Copy
Edit
console.log(10 + 20 * 30 % 4); // Output: ?

scss
Copy
Edit
58. ```js
console.log((10 + 20) * (30 % 4)); // Output: ?
js
Copy
Edit
console.log(100 / 2 ** 2); // Output: ?
60. ```js
console.log(100 / (2 ** 2)); // Output: ?

🧩 Implicit Conversion with Objects/Arrays
js
Copy
Edit
console.log([10] * 2); // Output: ?

cpp
Copy
Edit
62. ```js
console.log([10,20] * 2); // Output: ?
js
Copy
Edit
console.log({ valueOf: () => 2 } * 3); // Output: ?

cpp
Copy
Edit
64. ```js
console.log({ toString: () => "5" } - 2); // Output: ?
js
Copy
Edit
console.log([].valueOf() + 5); // Output: ?

cpp
Copy
Edit
66. ```js
console.log([].toString() - 1); // Output: ?
js
Copy
Edit
console.log(+{}); // Output: ?

cpp
Copy
Edit
68. ```js
console.log(+[]); // Output: ?
js
Copy
Edit
console.log(+true); // Output: ?

yaml
Copy
Edit
70. ```js
console.log(+false); // Output: ?

---

#### 🌀 Special Numeric Cases

71. ```js
console.log(0.1 + 0.2); // Output: ?
js
Copy
Edit
console.log(0.1 + 0.2 === 0.3); // Output: ?

cpp
Copy
Edit
73. ```js
console.log(Math.floor(0.1 + 0.2)); // Output: ?
js
Copy
Edit
console.log(1e3 + 1); // Output: ?

cpp
Copy
Edit
75. ```js
console.log(1e-3 + 1); // Output: ?
js
Copy
Edit
console.log(9999999999999999); // Output: ?

cpp
Copy
Edit
77. ```js
console.log(0.1 + 0.2 + 0.3); // Output: ?
js
Copy
Edit
console.log(0.3 - 0.2); // Output: ?

cpp
Copy
Edit
79. ```js
console.log(Number.MAX_SAFE_INTEGER + 1); // Output: ?
js
Copy
Edit
console.log(Number.MIN_SAFE_INTEGER - 1); // Output: ?

🧱 Math & Rounding Integration
js
Copy
Edit
console.log(Math.round(4.5)); // Output: ?

cpp
Copy
Edit
82. ```js
console.log(Math.floor(4.9)); // Output: ?
js
Copy
Edit
console.log(Math.ceil(-4.1)); // Output: ?

cpp
Copy
Edit
84. ```js
console.log(Math.abs(-10)); // Output: ?
js
Copy
Edit
console.log(Math.pow(2, 4)); // Output: ?

cpp
Copy
Edit
86. ```js
console.log(Math.sqrt(16)); // Output: ?
js
Copy
Edit
console.log(Math.sign(-0)); // Output: ?
88. js console.log(Math.trunc(4.9)); // Output: ? 89. js
console.log(Math.round(0.499)); // Output: ?
90. ```js
console.log(Math.floor(-0.999)); // Output: ?

🔄 Modulo and Negative Numbers
js
Copy
Edit
console.log(-7 % 4); // Output: ?

cpp
Copy
Edit
92. ```js
console.log(7 % -4); // Output: ?
js
Copy
Edit
console.log(-7 % -4); // Output: ?

cpp
Copy
Edit
94. ```js
console.log(5.5 % 2); // Output: ?
js
Copy
Edit
console.log(5 % 2.5); // Output: ?

yaml
Copy
Edit

---

#### 🎯 Mixing Operators Unexpectedly

96. ```js
console.log(+"5" * -"2"); // Output: ?
js
Copy
Edit
console.log(+"5" + -"2"); // Output: ?

cpp
Copy
Edit
98. ```js
console.log(+"5" / -"2"); // Output: ?
js
Copy
Edit
console.log(+"5" % -"2"); // Output: ?

yaml
Copy
Edit
100. ```js
console.log("5" * "2" + "1"); // Output: ?
