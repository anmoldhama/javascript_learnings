Arithmetic Operators
js
Copy
Edit
console.log(5 + "5"); // Output: ?

cpp
Copy
Edit
2. ```js
console.log("5" - 2); // Output: ?
js
Copy
Edit
console.log(3 * "2"); // Output: ?

cpp
Copy
Edit
4. ```js
console.log("10" / "2"); // Output: ?
js
Copy
Edit
console.log(10 % 3); // Output: ?

cpp
Copy
Edit
6. ```js
console.log(2 ** 3); // Output: ?
js
Copy
Edit
console.log(+"5"); // Output: ?

cpp
Copy
Edit
8. ```js
console.log(0.1 + 0.2 === 0.3); // Output: ?
js
Copy
Edit
console.log("2" + 3 + 4); // Output: ?

cpp
Copy
Edit
10. ```js
console.log(2 + 3 + "4"); // Output: ?
🟠 Assignment Operators
js
Copy
Edit
let x = 5;
x += 3;
console.log(x); // Output: ?

cpp
Copy
Edit
12. ```js
let x = 10;
x *= 2;
console.log(x); // Output: ?
js
Copy
Edit
let x = 9;
x %= 4;
console.log(x); // Output: ?

cpp
Copy
Edit
14. ```js
let x = 2;
x **= 3;
console.log(x); // Output: ?
js
Copy
Edit
let x = "Hello";
x += " World";
console.log(x); // Output: ?

yaml
Copy
Edit

---

### ⚖️ Comparison Operators

16. ```js
console.log(5 == "5"); // Output: ?
js
Copy
Edit
console.log(5 === "5"); // Output: ?

cpp
Copy
Edit
18. ```js
console.log(null == undefined); // Output: ?
js
Copy
Edit
console.log(null === undefined); // Output: ?

cpp
Copy
Edit
20. ```js
console.log([] == false); // Output: ?
js
Copy
Edit
console.log([] == ![]); // Output: ?

cpp
Copy
Edit
22. ```js
console.log("0" == 0); // Output: ?
js
Copy
Edit
console.log(false == 0); // Output: ?

cpp
Copy
Edit
24. ```js
console.log(true == 1); // Output: ?
js
Copy
Edit
console.log(true === 1); // Output: ?

yaml
Copy
Edit

---

### 🔘 Logical Operators

26. ```js
console.log(true && false); // Output: ?
js
Copy
Edit
console.log(false || true); // Output: ?

cpp
Copy
Edit
28. ```js
console.log(0 && "value"); // Output: ?
js
Copy
Edit
console.log("value" && 0); // Output: ?

cpp
Copy
Edit
30. ```js
console.log("Hello" || "World"); // Output: ?
js
Copy
Edit
console.log("" || "Default"); // Output: ?

cpp
Copy
Edit
32. ```js
console.log(null && "value"); // Output: ?
js
Copy
Edit
console.log(undefined || null); // Output: ?

cpp
Copy
Edit
34. ```js
console.log(NaN || false || 42); // Output: ?
js
Copy
Edit
console.log(1 && 2 && 3); // Output: ?

yaml
Copy
Edit

---

### 🔘 Bitwise Operators

36. ```js
console.log(5 & 1); // Output: ?
js
Copy
Edit
console.log(5 | 1); // Output: ?

cpp
Copy
Edit
38. ```js
console.log(~5); // Output: ?
js
Copy
Edit
console.log(5 ^ 3); // Output: ?

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
console.log(-1 >>> 1); // Output: ?
js
Copy
Edit
console.log(5 & 3 | 1); // Output: ?

cpp
Copy
Edit
44. ```js
console.log(2 ^ 2); // Output: ?
js
Copy
Edit
console.log(1 << 0); // Output: ?

yaml
Copy
Edit

---

### ❔ Ternary Operators

46. ```js
console.log(5 > 3 ? "yes" : "no"); // Output: ?
js
Copy
Edit
let age = 15;
console.log(age >= 18 ? "Adult" : "Minor"); // Output: ?

cpp
Copy
Edit
48. ```js
console.log(false ? "Yes" : true ? "Maybe" : "No"); // Output: ?
js
Copy
Edit
let a = null;
console.log(a ? "Defined" : "Null"); // Output: ?

sql
Copy
Edit
50. ```js
let result = (3 > 2) ? 1 : 2;
console.log(result); // Output: ?
🔄 Unary Operators
js
Copy
Edit
console.log(typeof null); // Output: ?

cpp
Copy
Edit
52. ```js
console.log(typeof NaN); // Output: ?
js
Copy
Edit
console.log(+true); // Output: ?

cpp
Copy
Edit
54. ```js
console.log(+false); // Output: ?
js
Copy
Edit
console.log(!1); // Output: ?

cpp
Copy
Edit
56. ```js
console.log(!!""); // Output: ?
js
Copy
Edit
console.log(-"5"); // Output: ?

cpp
Copy
Edit
58. ```js
console.log(typeof undefined); // Output: ?
js
Copy
Edit
console.log(void 0); // Output: ?

cpp
Copy
Edit
60. ```js
console.log(delete Math.PI); // Output: ?
🔼 Increment/Decrement
js
Copy
Edit
let a = 1;
console.log(a++); // Output: ?

cpp
Copy
Edit
62. ```js
let b = 1;
console.log(++b); // Output: ?
js
Copy
Edit
let c = 10;
c--;
console.log(c); // Output: ?

cpp
Copy
Edit
64. ```js
let d = 0;
console.log(d-- === 0); // Output: ?
js
Copy
Edit
let e = 2;
let f = e++ + ++e;
console.log(f); // Output: ?

yaml
Copy
Edit

---

### 🧹 Nullish Coalescing & Optional Chaining

66. ```js
let a = null ?? "default";
console.log(a); // Output: ?
js
Copy
Edit
let b = undefined ?? "fallback";
console.log(b); // Output: ?

cpp
Copy
Edit
68. ```js
let c = 0 ?? 42;
console.log(c); // Output: ?
js
Copy
Edit
let obj = null;
console.log(obj?.prop); // Output: ?

pgsql
Copy
Edit
70. ```js
let user = { name: "Alex" };
console.log(user?.address?.city); // Output: ?
✨ Destructuring, Spread, Rest
js
Copy
Edit
let [a, b] = [1, 2];
console.log(a + b); // Output: ?

yaml
Copy
Edit
72. ```js
let { x, y } = { x: 10, y: 20 };
console.log(x * y); // Output: ?
js
Copy
Edit
let arr = [1, 2, 3];
console.log(...arr); // Output: ?

bash
Copy
Edit
74. ```js
let obj = { a: 1, b: 2 };
let clone = { ...obj };
console.log(clone); // Output: ?
js
Copy
Edit
function sum(...nums) {
return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // Output: ?

yaml
Copy
Edit

---

### 🧪 Type Coercion Quirks

76. ```js
console.log([] + {}); // Output: ?
js
Copy
Edit
console.log({} + []); // Output: ?

cpp
Copy
Edit
78. ```js
console.log([] + []); // Output: ?
js
Copy
Edit
console.log(typeof (null + 1)); // Output: ?

cpp
Copy
Edit
80. ```js
console.log(typeof (undefined + 1)); // Output: ?
🧩 Mixing Types
js
Copy
Edit
console.log(1 + true); // Output: ?

cpp
Copy
Edit
82. ```js
console.log(1 + null); // Output: ?
js
Copy
Edit
console.log("5" - true); // Output: ?

cpp
Copy
Edit
84. ```js
console.log("5" * []); // Output: ?
js
Copy
Edit
console.log(true + true); // Output: ?

yaml
Copy
Edit

---

### 🧠 Operator Precedence

86. ```js
console.log(1 + 2 * 3); // Output: ?
js
Copy
Edit
console.log((1 + 2) * 3); // Output: ?

cpp
Copy
Edit
88. ```js
console.log(4 > 3 && 2 < 1); // Output: ?
js
Copy
Edit
console.log(2 > 1 || 3 < 1); // Output: ?

cpp
Copy
Edit
90. ```js
console.log((true && false) || true); // Output: ?
🧮 Special Values
js
Copy
Edit
console.log(NaN === NaN); // Output: ?

cpp
Copy
Edit
92. ```js
console.log(isNaN("abc")); // Output: ?
js
Copy
Edit
console.log(Number("")); // Output: ?

cpp
Copy
Edit
94. ```js
console.log(Number(" ")); // Output: ?
js
Copy
Edit
console.log(parseInt("10px")); // Output: ?

yaml
Copy
Edit

---

### 🧵 Weird Cases

96. ```js
console.log([] == ![]); // Output: ?
js
Copy
Edit
console.log([] + []); // Output: ?

cpp
Copy
Edit
98. ```js
console.log({} + []); // Output: ?
js
Copy
Edit
console.log(typeof NaN); // Output: ?

cpp
Copy
Edit
100. ```js
console.log(typeof []); // Output: ?





SET 2



Advanced Arithmetic & Coercion
js
Copy
Edit
console.log(+""); // Output: ?

cpp
Copy
Edit
2. ```js
console.log("5" - - "2"); // Output: ?
js
Copy
Edit
console.log("5" * []); // Output: ?

cpp
Copy
Edit
4. ```js
console.log("foo" - "bar"); // Output: ?
js
Copy
Edit
console.log("10" - true); // Output: ?

cpp
Copy
Edit
6. ```js
console.log("10" + true); // Output: ?
js
Copy
Edit
console.log("2" * "3" * "4"); // Output: ?

cpp
Copy
Edit
8. ```js
console.log(null + 1); // Output: ?
js
Copy
Edit
console.log(undefined + 1); // Output: ?

cpp
Copy
Edit
10. ```js
console.log([] + null + 1); // Output: ?
🔄 Pre/Post Increment & Complex Expressions
js
Copy
Edit
let x = 5;
console.log(x++ + ++x); // Output: ?

cpp
Copy
Edit
12. ```js
let a = 2;
console.log(a++ + a++); // Output: ?
js
Copy
Edit
let b = 1;
let c = b++ + ++b + b;
console.log(c); // Output: ?

cpp
Copy
Edit
14. ```js
let x = 3;
x = x++ + ++x;
console.log(x); // Output: ?
js
Copy
Edit
let y = 5;
let z = ++y + y++ + ++y;
console.log(z); // Output: ?

pgsql
Copy
Edit

---

### 🧪 Comparison, Type Conversion & Weird Equality

16. ```js
console.log(" " == 0); // Output: ?
js
Copy
Edit
console.log([] == ![]); // Output: ?

cpp
Copy
Edit
18. ```js
console.log(null == 0); // Output: ?
js
Copy
Edit
console.log([] == ""); // Output: ?

cpp
Copy
Edit
20. ```js
console.log([] == false); // Output: ?
js
Copy
Edit
console.log([] + {}); // Output: ?

cpp
Copy
Edit
22. ```js
console.log({} + []); // Output: ?
js
Copy
Edit
console.log(typeof ({} + [])); // Output: ?

cpp
Copy
Edit
24. ```js
console.log([] + {} - []); // Output: ?
js
Copy
Edit
console.log([] + [] + 'foo'.split('')); // Output: ?

yaml
Copy
Edit

---

### ⛓ Logical, Short-Circuit, Nullish, Optional Chaining

26. ```js
console.log(0 || 1 && 2 || 3); // Output: ?
js
Copy
Edit
console.log(null ?? false ?? "default"); // Output: ?

cpp
Copy
Edit
28. ```js
console.log(undefined ?? 0 || null); // Output: ?
js
Copy
Edit
console.log(0 && null || undefined); // Output: ?

cpp
Copy
Edit
30. ```js
console.log(0 ?? false); // Output: ?
js
Copy
Edit
console.log(false || undefined ?? "fallback"); // Output: ?

csharp
Copy
Edit
32. ```js
let obj = null;
console.log(obj?.a?.b ?? "safe"); // Output: ?
js
Copy
Edit
let user = { profile: null };
console.log(user?.profile?.email); // Output: ?

pgsql
Copy
Edit
34. ```js
let user = {};
console.log(user?.data?.length ?? 10); // Output: ?
js
Copy
Edit
console.log("A" && "B" || "C" && "D"); // Output: ?

yaml
Copy
Edit

---

### 📐 Operator Precedence

36. ```js
console.log(3 + 4 * 5 === 23); // Output: ?
js
Copy
Edit
console.log(1 + 2 << 1); // Output: ?

cpp
Copy
Edit
38. ```js
console.log(1 + (2 << 1)); // Output: ?
js
Copy
Edit
console.log(1 + 2 < 5); // Output: ?

cpp
Copy
Edit
40. ```js
console.log(1 + 2 < 2 + 2); // Output: ?
js
Copy
Edit
console.log("5" + 1 * 2); // Output: ?

cpp
Copy
Edit
42. ```js
console.log((5 < 6) < 7); // Output: ?
js
Copy
Edit
console.log(true + false < 2); // Output: ?

cpp
Copy
Edit
44. ```js
console.log("5" + 1 + 2); // Output: ?
js
Copy
Edit
console.log(1 + 2 + "5"); // Output: ?

yaml
Copy
Edit

---

### 🧵 Bitwise & Tricks

46. ```js
console.log(~-1); // Output: ?
js
Copy
Edit
console.log(~~5.5); // Output: ?

cpp
Copy
Edit
48. ```js
console.log(1 & 3); // Output: ?
js
Copy
Edit
console.log(4 | 1); // Output: ?

cpp
Copy
Edit
50. ```js
console.log(7 ^ 3); // Output: ?
js
Copy
Edit
console.log(1 << 2); // Output: ?

cpp
Copy
Edit
52. ```js
console.log(8 >> 1); // Output: ?
js
Copy
Edit
console.log(-1 >>> 1); // Output: ?

cpp
Copy
Edit
54. ```js
console.log(5 & 3 | 1); // Output: ?
js
Copy
Edit
console.log(5 ^ 5); // Output: ?

yaml
Copy
Edit

---

### 🎭 Typeof, Void, Delete, In

56. ```js
console.log(typeof NaN); // Output: ?
js
Copy
Edit
console.log(typeof typeof 1); // Output: ?

cpp
Copy
Edit
58. ```js
console.log(void 0); // Output: ?
js
Copy
Edit
console.log(delete Math.PI); // Output: ?

cpp
Copy
Edit
60. ```js
console.log("toString" in []); // Output: ?
js
Copy
Edit
let x = [1, 2, 3];
console.log(1 in x); // Output: ?

cpp
Copy
Edit
62. ```js
let obj = { a: 1 };
console.log("a" in obj); // Output: ?
js
Copy
Edit
let arr = [];
console.log(0 in arr); // Output: ?

csharp
Copy
Edit
64. ```js
console.log(typeof (null)); // Output: ?
js
Copy
Edit
console.log(delete [].length); // Output: ?

yaml
Copy
Edit

---

### 🧬 Destructuring, Spread, Rest

66. ```js
let [a, b] = [1, 2];
console.log(a, b); // Output: ?
js
Copy
Edit
let {x: y} = {x: 10};
console.log(y); // Output: ?

cpp
Copy
Edit
68. ```js
let [,, third] = [1, 2, 3];
console.log(third); // Output: ?
js
Copy
Edit
let [...rest] = "ABC";
console.log(rest); // Output: ?

yaml
Copy
Edit
70. ```js
let obj = { a: 1, b: 2, c: 3 };
let { a, ...rest } = obj;
console.log(rest); // Output: ?
js
Copy
Edit
let arr = [1, 2, 3];
console.log([...arr, ...[4, 5]]); // Output: ?

csharp
Copy
Edit
72. ```js
let a = { x: 1 };
let b = { y: 2 };
let c = { ...a, ...b };
console.log(c); // Output: ?
js
Copy
Edit
function fn(...args) {
return args.length;
}
console.log(fn(1, 2, 3)); // Output: ?

scss
Copy
Edit
74. ```js
function fn(a, ...rest) {
  return rest;
}
console.log(fn(1, 2, 3)); // Output: ?
js
Copy
Edit
let { length } = "Hello";
console.log(length); // Output: ?

yaml
Copy
Edit

---

### ⚙️ Function Expressions & Side Effects

76. ```js
let a = 1;
console.log(a += a = 2); // Output: ?
js
Copy
Edit
let a = 5;
let b = a++ + ++a;
console.log(b); // Output: ?

cpp
Copy
Edit
78. ```js
let a = 2;
a = a * a + a;
console.log(a); // Output: ?
js
Copy
Edit
let a = 3;
let b = 2;
let c = a++ + ++b + --a;
console.log(c); // Output: ?

csharp
Copy
Edit
80. ```js
let a = 1;
let b = a++ + a++ + a;
console.log(b); // Output: ?
🌀 Unary & Miscellaneous
js
Copy
Edit
console.log(+[]); // Output: ?

cpp
Copy
Edit
82. ```js
console.log(!![]); // Output: ?
js
Copy
Edit
console.log(+undefined); // Output: ?

cpp
Copy
Edit
84. ```js
console.log(-null); // Output: ?
js
Copy
Edit
console.log(+false); // Output: ?

cpp
Copy
Edit
86. ```js
console.log([] + 1); // Output: ?
js
Copy
Edit
console.log([] + {}); // Output: ?

cpp
Copy
Edit
88. ```js
console.log({} + []); // Output: ?
js
Copy
Edit
console.log({} + {}); // Output: ?

cpp
Copy
Edit
90. ```js
console.log([] + []); // Output: ?
🧪 Deep Coercion & Confusion
js
Copy
Edit
console.log([] == 0); // Output: ?

cpp
Copy
Edit
92. ```js
console.log([null] == 0); // Output: ?
js
Copy
Edit
console.log([undefined] == 0); // Output: ?

cpp
Copy
Edit
94. ```js
console.log([1] == true); // Output: ?
js
Copy
Edit
console.log([1,2] == "1,2"); // Output: ?

lua
Copy
Edit
96. ```js
console.log([[]] == ""); // Output: ?
js
Copy
Edit
console.log([[[]]] == ""); // Output: ?

cpp
Copy
Edit
98. ```js
console.log([10] + [1]); // Output: ?
js
Copy
Edit
console.log([] + null + 1); // Output: ?

cpp
Copy
Edit
100. ```js
console.log(typeof ([] + {})); // Output: ?




SET 3



Coercion & Arithmetic Traps
js
Copy
Edit
console.log(true + true + false); // Output: ?

csharp
Copy
Edit
2. ```js
console.log('10' - -'5'); // Output: ?
js
Copy
Edit
console.log(10 + '20' - 5); // Output: ?

cpp
Copy
Edit
4. ```js
console.log(('5' - 2) + '2'); // Output: ?
js
Copy
Edit
console.log(3 * '5' + 2); // Output: ?

cpp
Copy
Edit
6. ```js
console.log('5' * []); // Output: ?
js
Copy
Edit
console.log([] * {}); // Output: ?

cpp
Copy
Edit
8. ```js
console.log({} * []); // Output: ?
js
Copy
Edit
console.log("5" * null); // Output: ?
10. ```js
console.log(null + "5"); // Output: ?

🧮 Comparison Edge Cases
js
Copy
Edit
console.log(NaN === NaN); // Output: ?

cpp
Copy
Edit
12. ```js
console.log([] == false); // Output: ?
js
Copy
Edit
console.log([0] == false); // Output: ?

cpp
Copy
Edit
14. ```js
console.log([1] == true); // Output: ?
js
Copy
Edit
console.log([] == 0); // Output: ?

cpp
Copy
Edit
16. ```js
console.log("" == 0); // Output: ?
js
Copy
Edit
console.log("" === 0); // Output: ?

cpp
Copy
Edit
18. ```js
console.log([] === []); // Output: ?
js
Copy
Edit
console.log([1,2] == "1,2"); // Output: ?

yaml
Copy
Edit
20. ```js
console.log({} === {}); // Output: ?

---

#### 🧮 Operator Precedence

21. ```js
console.log(typeof 1 + 2); // Output: ?
js
Copy
Edit
console.log(typeof (1 + 2)); // Output: ?

cpp
Copy
Edit
23. ```js
console.log(typeof 1 < 2); // Output: ?
js
Copy
Edit
console.log(1 < typeof 2); // Output: ?

cpp
Copy
Edit
25. ```js
console.log(1 + 2 << 1); // Output: ?
js
Copy
Edit
console.log(1 << 2 + 1); // Output: ?

cpp
Copy
Edit
27. ```js
console.log(2 ** 3 ** 2); // Output: ?
js
Copy
Edit
console.log((2 ** 3) ** 2); // Output: ?

cpp
Copy
Edit
29. ```js
console.log(3 + 4 * 5 === 23); // Output: ?
js
Copy
Edit
console.log(3 + 4 * 5 == "23"); // Output: ?

🔁 Short-Circuiting + Logical Ops
js
Copy
Edit
console.log(null || undefined && "yes"); // Output: ?

cpp
Copy
Edit
32. ```js
console.log("hello" && 0 || 1); // Output: ?
js
Copy
Edit
console.log(0 || 1 && 2); // Output: ?

cpp
Copy
Edit
34. ```js
console.log("a" && "b" || "c"); // Output: ?
js
Copy
Edit
console.log("" && 42 || null); // Output: ?

cpp
Copy
Edit
36. ```js
console.log(false || null ?? "fallback"); // Output: ?
js
Copy
Edit
console.log((false || null) ?? "fallback"); // Output: ?

cpp
Copy
Edit
38. ```js
console.log(false ?? null || "fallback"); // Output: ?
js
Copy
Edit
console.log(false ?? (null || "fallback")); // Output: ?

yaml
Copy
Edit
40. ```js
console.log(null ?? undefined ?? 0); // Output: ?

---

#### 🧵 Bitwise Gotchas

41. ```js
console.log(5 & 1); // Output: ?
js
Copy
Edit
console.log(3 | 4); // Output: ?

cpp
Copy
Edit
43. ```js
console.log(3 ^ 5); // Output: ?
js
Copy
Edit
console.log(~4); // Output: ?

cpp
Copy
Edit
45. ```js
console.log(1 << 3); // Output: ?
js
Copy
Edit
console.log(16 >> 2); // Output: ?

cpp
Copy
Edit
47. ```js
console.log(8 >>> 1); // Output: ?
js
Copy
Edit
console.log(~-1); // Output: ?

csharp
Copy
Edit
49. ```js
console.log(~~'3.5'); // Output: ?
js
Copy
Edit
console.log(~true); // Output: ?

🔄 Pre/Post Increment Puzzles
js
Copy
Edit
let a = 1;
console.log(a++ + ++a); // Output: ?

csharp
Copy
Edit
52. ```js
let x = 2;
let y = x++ + x + ++x;
console.log(y); // Output: ?
js
Copy
Edit
let a = 5;
console.log(a++ + ++a + a); // Output: ?

cpp
Copy
Edit
54. ```js
let i = 3;
i = i++ + i++;
console.log(i); // Output: ?
js
Copy
Edit
let i = 1;
i = ++i + ++i;
console.log(i); // Output: ?

🔍 typeof, delete, in, void
js
Copy
Edit
console.log(typeof typeof 1); // Output: ?

cpp
Copy
Edit
57. ```js
console.log(void 1); // Output: ?
js
Copy
Edit
console.log(delete [].length); // Output: ?

cpp
Copy
Edit
59. ```js
console.log("toString" in []); // Output: ?
js
Copy
Edit
console.log(1 in [10, 20, 30]); // Output: ?

🎛 Spread + Destructuring Quirks
js
Copy
Edit
let [,, x] = [1,2,3];
console.log(x); // Output: ?

cpp
Copy
Edit
62. ```js
let [a = 1, b = a + 1] = [];
console.log(a, b); // Output: ?
js
Copy
Edit
let { x = 10 } = { x: undefined };
console.log(x); // Output: ?

csharp
Copy
Edit
64. ```js
let { x = 10 } = { x: null };
console.log(x); // Output: ?
js
Copy
Edit
let { length } = "test";
console.log(length); // Output: ?

cpp
Copy
Edit
66. ```js
let [...x] = "hi";
console.log(x); // Output: ?
js
Copy
Edit
let obj = { a: 1, b: 2 };
let { b, ...rest } = obj;
console.log(rest); // Output: ?

cpp
Copy
Edit
68. ```js
let [...x] = [];
console.log(x.length); // Output: ?
js
Copy
Edit
console.log([..."abc"].join("-")); // Output: ?

yaml
Copy
Edit
70. ```js
console.log({..."abc"}); // Output: ?

---

#### 🔂 Optional Chaining & Nullish Coalescing

71. ```js
let obj = null;
console.log(obj?.prop); // Output: ?
js
Copy
Edit
let obj = { x: undefined };
console.log(obj.x ?? 42); // Output: ?

cpp
Copy
Edit
73. ```js
let arr = [1,2];
console.log(arr?.[5] ?? "none"); // Output: ?
js
Copy
Edit
let user = { name: "Anmol" };
console.log(user.profile?.email ?? "N/A"); // Output: ?

yaml
Copy
Edit
75. ```js
console.log((null ?? 0) && 1); // Output: ?

---

#### ⛓ Mixing Strings, Arrays, Objects

76. ```js
console.log([] + {}); // Output: ?
js
Copy
Edit
console.log({} + []); // Output: ?

cpp
Copy
Edit
78. ```js
console.log([] + []); // Output: ?
js
Copy
Edit
console.log([1] + [2]); // Output: ?

yaml
Copy
Edit
80. ```js
console.log([10] + 1); // Output: ?

---

#### 📦 Array/Object Mutation with Operators

81. ```js
let arr = [1, 2];
arr[5] = 10;
console.log(arr.length); // Output: ?
js
Copy
Edit
let a = {};
a[true] = "x";
a[1] = "y";
console.log(a[true]); // Output: ?

cpp
Copy
Edit
83. ```js
let obj = {};
obj["__proto__"] = 123;
console.log(obj.toString); // Output: ?
js
Copy
Edit
console.log([].proto === Array.prototype); // Output: ?

yaml
Copy
Edit
85. ```js
let a = { val: 1 };
let b = a;
b.val = 2;
console.log(a.val); // Output: ?

---

#### 📍Function Calls in Operators

86. ```js
function f() { console.log("f"); return 1; }
console.log(f() + f()); // Output: ?
js
Copy
Edit
function f() { console.log("hi"); return true; }
console.log(f() && f()); // Output: ?

cpp
Copy
Edit
88. ```js
function f() { console.log("x"); return false; }
console.log(f() || f()); // Output: ?
js
Copy
Edit
function f() { return undefined; }
console.log(f() ?? "fallback"); // Output: ?

yaml
Copy
Edit
90. ```js
function f() { return null; }
console.log(f() ?? f()); // Output: ?

---

#### 🧠 Misc Edge-Case Outputs

91. ```js
console.log(typeof []); // Output: ?
js
Copy
Edit
console.log(typeof null); // Output: ?

cpp
Copy
Edit
93. ```js
console.log(typeof NaN); // Output: ?
js
Copy
Edit
console.log(Number("")); // Output: ?

cpp
Copy
Edit
95. ```js
console.log(Boolean(" ")); // Output: ?
js
Copy
Edit
console.log(Boolean([])); // Output: ?

cpp
Copy
Edit
97. ```js
console.log(+true); // Output: ?
js
Copy
Edit
console.log(+[]); // Output: ?

cpp
Copy
Edit
99. ```js
console.log(!!0); // Output: ?
js
Copy
Edit
console.log(!"false"); // Output: ?

