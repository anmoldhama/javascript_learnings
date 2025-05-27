// Advanced JavaScript Ternary Operator Code Output Questions (1-100)

// 1
console.log(5 > 3 ? 'yes' : 'no');

// 2
let x = 10;
console.log(x % 2 === 0 ? 'even' : 'odd');

// 3
let age = 18;
console.log(age >= 18 ? 'Adult' : 'Minor');

// 4
let isActive = false;
console.log(isActive ? 'Online' : 'Offline');

// 5
let score = 75;
console.log(score > 90 ? 'A' : score > 75 ? 'B' : score > 50 ? 'C' : 'F');

// 6
let a = 0;
console.log(a ? 'Truthy' : 'Falsy');

// 7
console.log(null ? 'Exists' : 'Null');

// 8
console.log(undefined ? 'Defined' : 'Undefined');

// 9
console.log(NaN ? 'Number' : 'Not a Number');

// 10
let val = '10';
console.log(val === 10 ? 'Strict' : val == 10 ? 'Loose' : 'No match');

// 11
console.log(true ? false ? 'A' : 'B' : 'C');

// 12
let status = 'success';
console.log(status === 'error' ? 'Error' : 'Success');

// 13
let num = 5;
console.log(num > 0 ? num < 10 ? 'Single Digit' : 'Double Digit' : 'Negative');

// 14
let arr = [];
console.log(arr.length ? 'Not Empty' : 'Empty');

// 15
let obj = {};
console.log(Object.keys(obj).length ? 'Has Keys' : 'No Keys');

// 16
console.log("" ? 'Non-empty' : 'Empty String');

// 17
let result = null;
console.log(result !== null ? 'Value' : 'Null');

// 18
let flag = 1;
console.log(flag ? (flag > 0 ? 'Positive' : 'Negative') : 'Zero');

// 19
let str = 'hello';
console.log(str.includes('e') ? 'Contains e' : 'No e');

// 20
let bool = !!'';
console.log(bool ? 'True' : 'False');

// 21
let nested = 10;
console.log(nested > 0 ? nested % 2 === 0 ? 'Positive Even' : 'Positive Odd' : 'Non-positive');

// 22
let condition = true;
console.log(condition ? (false ? 'X' : 'Y') : 'Z');

// 23
let temp = 100;
console.log(temp >= 100 ? (temp > 100 ? 'Hot' : 'Boiling') : 'Warm');

// 24
let c = 'apple';
console.log(c === 'apple' ? 'Fruit' : 'Unknown');

// 25
let login = false;
console.log(login ? 'Dashboard' : 'Login Page');

// 26
let t = 0;
console.log(t === 0 ? 'Zero' : 'Non-zero');

// 27
console.log(null == undefined ? 'Equal' : 'Not Equal');

// 28
console.log(1 === '1' ? 'Match' : 'No Match');

// 29
let msg = 'JS';
console.log(msg.length > 2 ? 'Long' : 'Short');

// 30
let ans = 42;
console.log(typeof ans === 'number' ? 'Numeric' : 'Non-numeric');

31.
javascript
Copy
Edit
let x = 10, y = 5;
console.log(x > y ? y > 3 ? "Nested True" : "Nested False" : "Outer False");
32.
javascript
Copy
Edit
let a = null;
console.log(a ? "Yes" : "No");
33.
javascript
Copy
Edit
let value = NaN;
console.log(value ? "Not NaN" : "It is NaN");
34.
javascript
Copy
Edit
let str = "";
console.log(str.length ? "Has Length" : "Empty String");
35.
javascript
Copy
Edit
let points = 75;
let grade = points > 90 ? "A" : points > 80 ? "B" : points > 70 ? "C" : "F";
console.log(grade);
36.
javascript
Copy
Edit
let input = "0";
console.log(input ? "Truthy" : "Falsy");
37.
javascript
Copy
Edit
let res = undefined;
console.log(res ? "Defined" : "Undefined");
38.
javascript
Copy
Edit
let a = 5;
console.log(a % 2 === 0 ? "Even" : "Odd");
39.
javascript
Copy
Edit
let age = 17;
console.log(age >= 18 ? "Adult" : "Minor");
40.
javascript
Copy
Edit
let temp = -5;
console.log(temp > 0 ? "Hot" : temp === 0 ? "Neutral" : "Cold");
41.
javascript
Copy
Edit
let n = null;
console.log(n === null ? "Null" : "Not Null");
42.
javascript
Copy
Edit
let check = true ? false ? "A" : "B" : "C";
console.log(check);
43.
javascript
Copy
Edit
let x = true;
let y = false;
console.log(x && y ? "Both True" : x || y ? "One True" : "None");
44.
javascript
Copy
Edit
let msg = "hello";
console.log(msg[0] === "h" ? msg.toUpperCase() : msg.toLowerCase());
45.
javascript
Copy
Edit
let a = [1,2,3];
console.log(a.length ? "Not Empty" : "Empty");
46.
javascript
Copy
Edit
let a = 0, b = 1;
console.log(a ? b : !b ? "Zero" : "One");
47.
javascript
Copy
Edit
let status = "active";
console.log(status === "inactive" ? "OFF" : "ON");
48.
javascript
Copy
Edit
let val = false;
console.log(val ? "True" : val === false ? "False Boolean" : "Other");
49.
javascript
Copy
Edit
let z = 10;
console.log(z === 10 ? z > 5 ? "OK" : "Not OK" : "Error");
50.
javascript
Copy
Edit
let isLoggedIn = 0;
console.log(isLoggedIn ? "Welcome" : "Please login");
51.
javascript
Copy
Edit
let n = undefined;
console.log(n ? "n exists" : "n does not exist");
52.
javascript
Copy
Edit
let n = [];
console.log(n.length === 0 ? "Empty" : "Not Empty");
53.
javascript
Copy
Edit
let result = 0 ? "Non-zero" : 1 ? "One" : "None";
console.log(result);
54.
javascript
Copy
Edit
let str = "false";
console.log(str ? "Truthy string" : "Falsy");
55.
javascript
Copy
Edit
let arr = [0, null, undefined, NaN];
console.log(arr.length > 0 ? "Array not empty" : "Array empty");
56.
javascript
Copy
Edit
let user = "";
console.log(user ? "User exists" : "Guest");
57.
javascript
Copy
Edit
let score = 0;
console.log(score ? "Scored" : score === 0 ? "Zero" : "No Score");
58.
javascript
Copy
Edit
let x = 3;
console.log(x > 5 ? x : x === 3 ? "Exactly Three" : "Less");
59.
javascript
Copy
Edit
let price = 500;
console.log(price > 1000 ? "Expensive" : "Affordable");
60.
javascript
Copy
Edit
let flag = !false;
console.log(flag ? "True" : "False");
61.
javascript
Copy
Edit
let data = null;
console.log(data ? "Available" : "Missing");
62.
javascript
Copy
Edit
let val = 1;
console.log(val === 1 ? true ? "Nested True" : "Nested False" : "Top False");
63.
javascript
Copy
Edit
let val = "0";
console.log(val === 0 ? "Strict 0" : "Loose");
64.
javascript
Copy
Edit
let a = 1, b = 2;
console.log(a === b ? "Equal" : a < b ? "a < b" : "a > b");
65.
javascript
Copy
Edit
let obj = {};
console.log(obj ? "Object exists" : "Null object");
66.
javascript
Copy
Edit
let isAvailable = null;
console.log(isAvailable ? "Available" : "Unavailable");
67.
javascript
Copy
Edit
let count = 0;
console.log(count ? "Counted" : "Zero count");
68.
javascript
Copy
Edit
let year = 2020;
console.log(year % 4 === 0 ? "Leap" : "Non-Leap");
69.
javascript
Copy
Edit
let input = undefined;
console.log(input ? "Input exists" : "Missing input");
70.
javascript
Copy
Edit
let result = false ? "Yes" : true ? "Maybe" : "No";
console.log(result);
71.
javascript
Copy
Edit
let number = -1;
console.log(number >= 0 ? "Positive" : "Negative");
72.
javascript
Copy
Edit
let val = 1;
console.log(val === "1" ? "String One" : "Not String");
73.
javascript
Copy
Edit
let num = 10;
console.log(num % 2 === 0 ? "Even" : "Odd");
74.
javascript
Copy
Edit
let message = "Hello";
console.log(message.length > 5 ? "Long" : "Short");
75.
javascript
Copy
Edit
let food = "pizza";
console.log(food === "burger" ? "Burger" : food === "pizza" ? "Pizza" : "Other");
76.
javascript
Copy
Edit
let total = 0;
console.log(total > 0 ? "Positive" : "Zero or Negative");
77.
javascript
Copy
Edit
let status = true;
console.log(status ? "Yes" : "No");
78.
javascript
Copy
Edit
let a = true ? false : true;
console.log(a);
79.
javascript
Copy
Edit
let amount = 0;
console.log(amount ? "Has Amount" : "No Amount");
80.
javascript
Copy
Edit
let x = 1, y = 2;
console.log(x + y > 3 ? "More" : "Less");
81.
javascript
Copy
Edit
let lang = "JS";
console.log(lang === "JS" ? "JavaScript" : "Other");
82.
javascript
Copy
Edit
let fruit = "apple";
console.log(fruit === "banana" ? "Banana" : "Not Banana");
83.
javascript
Copy
Edit
let day = "Monday";
console.log(day === "Sunday" ? "Weekend" : "Weekday");
84.
javascript
Copy
Edit
let res = 10;
console.log(res > 5 ? "GT 5" : res < 5 ? "LT 5" : "EQ 5");
85.
javascript
Copy
Edit
let x = "";
console.log(x ? "Something" : "Empty");
86.
javascript
Copy
Edit
let flag = true;
console.log(flag ? "YES" : "NO");
87.
javascript
Copy
Edit
let c = 10 > 20 ? "High" : 5 < 3 ? "Low" : "Medium";
console.log(c);
88.
javascript
Copy
Edit
let bool = !!0;
console.log(bool ? "True" : "False");
89.
javascript
Copy
Edit
let str = "Test";
console.log(str ? str.length > 2 ? "Long" : "Short" : "Empty");
90.
javascript
Copy
Edit
let val = 0;
console.log(val || 100 ? "Truthy" : "Falsy");
91.
javascript
Copy
Edit
let truth = true;
console.log(truth === true ? "Correct" : "Wrong");
92.
javascript
Copy
Edit
let ans = 3 + 2 === 5 ? "Correct" : "Incorrect";
console.log(ans);
93.
javascript
Copy
Edit
let status = "on";
console.log(status === "off" ? "Shutdown" : "Running");
94.
javascript
Copy
Edit
let isEmpty = [] ? true : false;
console.log(isEmpty);
95.
javascript
Copy
Edit
let pass = true;
console.log(pass === false ? "Failed" : "Passed");
96.
javascript
Copy
Edit
let height = 150;
console.log(height > 140 ? "Tall" : "Short");
97.
javascript
Copy
Edit
let width = 0;
console.log(width ? "Set" : "Unset");
98.
javascript
Copy
Edit
let x = null;
console.log(x === null ? "Null" : "Defined");
99.
javascript
Copy
Edit
let bool = false;
console.log(!bool ? "False" : "True");
100.
javascript
Copy
Edit
let result = true ? true ? false : true : false;
console.log(result);