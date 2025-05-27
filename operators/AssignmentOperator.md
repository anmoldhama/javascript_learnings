Simple and Compound Assignments
js
Copy
Edit
let a = 5; a += 3; console.log(a); // Output: ?

cpp
Copy
Edit

2. ```js
let b = 10; b -= 4; console.log(b); // Output: ?
js
Copy
Edit
let c = 6; c *= 2; console.log(c); // Output: ?

cpp
Copy
Edit

4. ```js
let d = 15; d /= 3; console.log(d); // Output: ?
js
Copy
Edit
let e = 17; e %= 5; console.log(e); // Output: ?

cpp
Copy
Edit

6. ```js
let f = 4; f **= 3; console.log(f); // Output: ?
js
Copy
Edit
let x = 2; x = x + x * 2; console.log(x); // Output: ?

cpp
Copy
Edit

8. ```js
let y = 5; y += y += 2; console.log(y); // Output: ?
js
Copy
Edit
let z = 10; z = z *= 2; console.log(z); // Output: ?

cpp
Copy
Edit

10. ```js
let p = 8; p += (p *= 2); console.log(p); // Output: ?
🔹 Bitwise Assignment Operators
js
Copy
Edit
let a = 6; a &= 3; console.log(a); // Output: ?

cpp
Copy
Edit

12. ```js
let b = 6; b |= 3; console.log(b); // Output: ?
js
Copy
Edit
let c = 6; c ^= 3; console.log(c); // Output: ?

cpp
Copy
Edit

14. ```js
let d = 6; d <<= 1; console.log(d); // Output: ?
js
Copy
Edit
let e = 6; e >>= 1; console.log(e); // Output: ?

cpp
Copy
Edit

16. ```js
let f = -6; f >>>= 1; console.log(f); // Output: ?
js
Copy
Edit
let x = 1; x |= 2; x &= 3; console.log(x); // Output: ?

cpp
Copy
Edit

18. ```js
let y = 15; y ^= 7; y >>= 2; console.log(y); // Output: ?
js
Copy
Edit
let z = 4; z &= 1 | 2; console.log(z); // Output: ?

cpp
Copy
Edit

20. ```js
let p = 5; p |= 3 ^ 2; console.log(p); // Output: ?
🔹 Logical Assignment (&&=, ||=, ??=)
js
Copy
Edit
let a = true; a &&= false; console.log(a); // Output: ?

cpp
Copy
Edit

22. ```js
let b = false; b ||= true; console.log(b); // Output: ?
js
Copy
Edit
let c; c ??= 10; console.log(c); // Output: ?

csharp
Copy
Edit

24. ```js
let d = null; d ??= 20; console.log(d); // Output: ?
js
Copy
Edit
let e = 0; e ||= 5; console.log(e); // Output: ?

cpp
Copy
Edit

26. ```js
let f = ""; f ||= "default"; console.log(f); // Output: ?
js
Copy
Edit
let g = 0; g ??= 42; console.log(g); // Output: ?

cpp
Copy
Edit

28. ```js
let x = false; x &&= true; x ||= false; console.log(x); // Output: ?
js
Copy
Edit
let y = null; y ??= 10; y ||= 5; console.log(y); // Output: ?

cpp
Copy
Edit

30. ```js
let z = undefined; z ??= 0; z &&= 1; console.log(z); // Output: ?
🔹 Destructuring Assignments
js
Copy
Edit
let [a, b] = [1, 2]; [a, b] = [b, a]; console.log(a, b); // Output: ?

yaml
Copy
Edit

32. ```js
let { x, y } = { x: 10, y: 20 }; x += y; console.log(x); // Output: ?
js
Copy
Edit
let [a,,b] = [10, 20, 30]; console.log(a, b); // Output: ?

yaml
Copy
Edit

34. ```js
let { a: x, b: y } = { a: 1, b: 2 }; console.log(x + y); // Output: ?
js
Copy
Edit
let [a = 5, b = 6] = [1]; console.log(a, b); // Output: ?

cpp
Copy
Edit

36. ```js
let [a, b = a + 1] = [3]; console.log(a, b); // Output: ?
js
Copy
Edit
let obj = { a: 1, b: 2 }; ({ a, b } = obj); console.log(a, b); // Output: ?

cpp
Copy
Edit

38. ```js
let arr = [1, 2]; [arr[0], arr[1]] = [arr[1], arr[0]]; console.log(arr); // Output: ?
js
Copy
Edit
let [a, ...b] = [1, 2, 3]; console.log(b); // Output: ?

cpp
Copy
Edit

40. ```js
const { a = 1, b = 2 } = { b: 5 }; console.log(a, b); // Output: ?
🔹 Combined Operations
js
Copy
Edit
let a = 5; a += a *= 2; console.log(a); // Output: ?

cpp
Copy
Edit

42. ```js
let b = 3; b -= b += 2; console.log(b); // Output: ?
js
Copy
Edit
let c = 10; c *= c /= 2; console.log(c); // Output: ?

cpp
Copy
Edit

44. ```js
let d = 4; d %= d += 2; console.log(d); // Output: ?
js
Copy
Edit
let e = 2; e **= e **= 2; console.log(e); // Output: ?

cpp
Copy
Edit

46. ```js
let f = 1; f += f++ + ++f; console.log(f); // Output: ?
js
Copy
Edit
let x = 5; x += (x += 5); console.log(x); // Output: ?

cpp
Copy
Edit

48. ```js
let y = 4; y *= (y -= 2); console.log(y); // Output: ?
js
Copy
Edit
let z = 7; z %= (z += 3); console.log(z); // Output: ?

cpp
Copy
Edit

50. ```js
let p = 3; p += (p *= p); console.log(p); // Output: ?
🔹 Type Coercion in Assignment
js
Copy
Edit
let a = "5"; a *= 2; console.log(a); // Output: ?

cpp
Copy
Edit

52. ```js
let b = "5"; b += 1; console.log(b); // Output: ?
js
Copy
Edit
let c = true; c += 2; console.log(c); // Output: ?

csharp
Copy
Edit

54. ```js
let d = null; d += 1; console.log(d); // Output: ?
js
Copy
Edit
let e = undefined; e += 1; console.log(e); // Output: ?

cpp
Copy
Edit

56. ```js
let f = {}; f += 1; console.log(f); // Output: ?
js
Copy
Edit
let g = []; g += 1; console.log(g); // Output: ?

cpp
Copy
Edit

58. ```js
let h = NaN; h += 5; console.log(h); // Output: ?
js
Copy
Edit
let i = Infinity; i -= Infinity; console.log(i); // Output: ?

cpp
Copy
Edit

60. ```js
let j = "10"; j -= "2"; console.log(j); // Output: ?
🔹 Special Numeric Edge Cases
js
Copy
Edit
let a = 0.1; a += 0.2; console.log(a); // Output: ?

cpp
Copy
Edit

62. ```js
let b = 1e+21; b += 1; console.log(b); // Output: ?
js
Copy
Edit
let c = Number.MAX_SAFE_INTEGER; c += 1; console.log(c); // Output: ?

cpp
Copy
Edit

64. ```js
let d = -0; d += 0; console.log(1 / d); // Output: ?
js
Copy
Edit
let e = 0.3; e -= 0.2; console.log(e); // Output: ?

cpp
Copy
Edit

66. ```js
let f = 0.1; f += 0.2; console.log(f === 0.3); // Output: ?
js
Copy
Edit
let g = 0.1; g += 0.2; console.log(g.toFixed(1)); // Output: ?

cpp
Copy
Edit

68. ```js
let h = 1e308; h *= 10; console.log(h); // Output: ?
js
Copy
Edit
let i = Number.MIN_VALUE; i /= 2; console.log(i); // Output: ?

pgsql
Copy
Edit

70. ```js
let j = -Infinity; j += Infinity; console.log(j); // Output: ?
🔹 Assignment with Functions & Return Values
js
Copy
Edit
function get() { return 5; }
let a = 2; a += get(); console.log(a); // Output: ?

cpp
Copy
Edit

72. ```js
function inc(x) { return x + 1; }
let b = 1; b += inc(b); console.log(b); // Output: ?
js
Copy
Edit
function twice(x) { return x * 2; }
let c = 3; c *= twice(c); console.log(c); // Output: ?

cpp
Copy
Edit

74. ```js
let d = 4; d += (() => d * 2)(); console.log(d); // Output: ?
js
Copy
Edit
let e = 1; e = e + (() => ++e)(); console.log(e); // Output: ?

yaml
Copy
Edit

---

### 🔹 Others: Arrays, Chained, Lazy, etc.

76. ```js
let arr = [1]; arr[0] += 1; console.log(arr); // Output: ?
js
Copy
Edit
let a = 1, b = 2; a = b = 3; console.log(a, b); // Output: ?

cpp
Copy
Edit

78. ```js
let a = 1; a = a++ + ++a; console.log(a); // Output: ?
js
Copy
Edit
let obj = {}; obj.val = 10; obj.val += 5; console.log(obj.val); // Output: ?

cpp
Copy
Edit

80. ```js
let a = {}; (a.x = 10) += 5; console.log(a.x); // Output: ?
🔹 Spread, Rest, and Array Trickery
js
Copy
Edit
let [a, ...b] = [1, 2, 3]; b[0] += 1; console.log(b); // Output: ?

cpp
Copy
Edit

82. ```js
let a = [1, 2]; a = [...a, a[0] += 3]; console.log(a); // Output: ?
js
Copy
Edit
let a = [1]; a[1] = a[0] += 2; console.log(a); // Output: ?

cpp
Copy
Edit

84. ```js
let [a, b = a + 1] = [2]; console.log(b); // Output: ?
js
Copy
Edit
let obj = { x: 1 }; obj.x += (obj.x = 5); console.log(obj.x); // Output: ?

yaml
Copy
Edit

---

### 🔹 Bonus Challenges

86. ```js
let a = "2"; a *= "3"; console.log(a); // Output: ?
js
Copy
Edit
let b = true; b += "1"; console.log(b); // Output: ?

cpp
Copy
Edit

88. ```js
let c = 0; c &&= c += 5; console.log(c); // Output: ?
js
Copy
Edit
let d = 1; d ||= d += 5; console.log(d); // Output: ?

cpp
Copy
Edit

90. ```js
let e = 0; e ??= 4; console.log(e); // Output: ?
js
Copy
Edit
let a = 1; a = a++ + a; console.log(a); // Output: ?

cpp
Copy
Edit

92. ```js
let a = 3; a += (a++ + ++a); console.log(a); // Output: ?
js
Copy
Edit
let a = 0; a += 1 + (a += 2); console.log(a); // Output: ?

cpp
Copy
Edit

94. ```js
let a = 1; a = (a += 2) + (a += 3); console.log(a); // Output: ?
js
Copy
Edit
let a = 10; a *= (a -= 5); console.log(a); // Output: ?

yaml
Copy
Edit

---

### 🔹 Final Brain Twisters

96. ```js
let a = 5; a += a++ + ++a + a; console.log(a); // Output: ?
js
Copy
Edit
let b = 2; b *= b++ + ++b; console.log(b); // Output: ?

cpp
Copy
Edit

98. ```js
let c = 1; c = (c++ + c++) * c; console.log(c); // Output: ?
js
Copy
Edit
let d = 1; d += (d += (d += 1)); console.log(d); // Output: ?

cpp
Copy
Edit

100. ```js
let x = 2; x += (x *= (x += 2)); console.log(x); // Output: ?