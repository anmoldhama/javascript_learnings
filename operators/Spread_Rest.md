1
javascript
Copy
Edit
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);
2
javascript
Copy
Edit
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
3
javascript
Copy
Edit
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);
4
javascript
Copy
Edit
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);
5
javascript
Copy
Edit
const [first, ...rest] = [10, 20, 30, 40];
console.log(first);
console.log(rest);
6
javascript
Copy
Edit
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a);
console.log(rest);
7
javascript
Copy
Edit
function greet(greeting, ...names) {
  return `${greeting}, ${names.join(' and ')}`;
}
console.log(greet("Hello", "Alice", "Bob", "Charlie"));
8
javascript
Copy
Edit
const arr = [1, 2, 3];
const clone = [...arr];
console.log(clone);
9
javascript
Copy
Edit
const str = "Hello";
const chars = [...str];
console.log(chars);
10
javascript
Copy
Edit
function multiply(factor, ...nums) {
  return nums.map(num => num * factor);
}
console.log(multiply(2, 1, 2, 3));
11
javascript
Copy
Edit
const arr = [1, 2, 3];
const [a, ...b] = arr;
console.log(a);
console.log(b);
12
javascript
Copy
Edit
const obj = { a: 1, b: 2, c: 3 };
const { b, ...rest } = obj;
console.log(b);
console.log(rest);
13
javascript
Copy
Edit
const arr = [1, 2, 3];
const newArr = [...arr, ...[4, 5]];
console.log(newArr);
14
javascript
Copy
Edit
function logArgs(...args) {
  console.log(args.length);
}
logArgs(1, 2, 3, 4, 5);
15
javascript
Copy
Edit
const arr = [1, 2, 3];
const [,, ...rest] = arr;
console.log(rest);
16
javascript
Copy
Edit
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };
console.log(newObj);
17
javascript
Copy
Edit
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged);
18
javascript
Copy
Edit
const arr = [1, 2, 3];
const copy = [...arr];
copy.push(4);
console.log(arr);
console.log(copy);
19
javascript
Copy
Edit
function combine(...args) {
  return args;
}
console.log(combine(1, 2, 3));
20
javascript
Copy
Edit
const arr = [1, 2, 3];
const [first, ...rest] = arr;
console.log(first);
console.log(rest);
21
javascript
Copy
Edit
const obj = { a: 1, b: 2, c: 3 };
const { a, ...others } = obj;
console.log(a);
console.log(others);
22
javascript
Copy
Edit
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);
23
javascript
Copy
Edit
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(5, 10, 15));
24
javascript
Copy
Edit
const str = "Spread";
const chars = [...str];
console.log(chars);
25
javascript
Copy
Edit
const arr = [1, 2, 3];
const clone = [...arr];
console.log(clone);
26
javascript
Copy
Edit
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged);
27
javascript
Copy
Edit
function log(...args) {
  console.log(args);
}
log("a", "b", "c");
28
javascript
Copy
Edit
const arr = [1, 2, 3];
const [a, b, ...rest] = arr;
console.log(a, b, rest);
29
javascript
Copy
Edit
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(a, rest);
30
javascript
Copy
Edit
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);
31
javascript
Copy
Edit
function total(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}
console.log(total(1, 2, 3, 4));
32
javascript
Copy
Edit
const str = "Rest";
const chars = [...str];
console.log(chars);
33
javascript
Copy
Edit
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy);
34
javascript
Copy
Edit
const obj1 = { x: 1 };
const obj2 = { y: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged);
35
javascript
Copy
Edit
function printArgs(...args) {
  console.log(args);
}
printArgs(1, 2, 3);
36
javascript
Copy
Edit
const arr = [1, 2, 3];
const [first, ...rest] = arr;
console.log(first, rest);
37
javascript
Copy
Edit
const obj = { a: 1, b: 2, c: 3 };
const { b, ...others } = obj;
console.log(b, others);
38
javascript
Copy
Edit
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);
39
javascript
Copy
Edit
function add(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(add(10, 20, 30));
40
javascript
Copy
Edit
const str = "Operator";
const chars = [...str];
console.log(chars);
41
javascript
Copy
Edit
const arr = [1, 2, 3];
const clone = [...arr];
console.log(clone);
42
javascript
Copy
Edit
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged);
43
javascript
Copy
Edit
function argsLength(...args) {
  return args.length;
}
console.log(argsLength(1, 2, 3, 4));
44
javascript
Copy
Edit
const arr = [1, 2, 3];
const [a, b, ...rest] = arr;
console.log(a, b, rest);
45
javascript
Copy
Edit
const obj = { a: 1, b: 2, c: 3 };
const { c, ...rest } = obj;
console.log(c, rest);
46
javascript
Copy
Edit
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);
47
javascript
Copy
Edit
function sumAll(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}
console.log(sumAll(5, 10, 15));
48
javascript
Copy
Edit
const str = "Spread";
const chars = [...str];
console.log(chars);
49
javascript
Copy
Edit
const arr = [1, 2, 3];
const clone = [...arr];
console.log(clone);
50
javascript
Copy
Edit
const obj1 = { x: 1 };
const obj2 = { y: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged);


51
javascript
Copy
Edit
const arr = [10, 20, 30];
const [a, ...b] = [...arr];
console.log(a, b);
52
javascript
Copy
Edit
const obj = { x: 1, y: 2, z: 3 };
const spread = { ...obj, y: 10 };
console.log(spread);
53
javascript
Copy
Edit
const obj = { a: 1, b: 2 };
const extended = { c: 3, ...obj };
console.log(extended);
54
javascript
Copy
Edit
function joinArgs(...args) {
  return args.join("-");
}
console.log(joinArgs("a", "b", "c"));
55
javascript
Copy
Edit
const nums = [1, 2, 3];
const more = [...nums, 4, 5, ...[6, 7]];
console.log(more);
56
javascript
Copy
Edit
const { length, ...rest } = { name: "JS", length: 10, year: 1995 };
console.log(rest);
57
javascript
Copy
Edit
const chars = [..."ABC"];
console.log(chars[1]);
58
javascript
Copy
Edit
function restFirst(...args) {
  const [first, ...rest] = args;
  return { first, rest };
}
console.log(restFirst(9, 8, 7));
59
javascript
Copy
Edit
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: 3 };
const merged = { ...obj1, ...obj2, a: 10 };
console.log(merged);
60
javascript
Copy
Edit
const arr = [1, 2, 3];
const spread = [...arr.slice(1)];
console.log(spread);
61
javascript
Copy
Edit
function withDefaults(a = 1, b = 2, ...rest) {
  return rest;
}
console.log(withDefaults(undefined, undefined, 3, 4, 5));
62
javascript
Copy
Edit
const input = [1, 2, 3];
const result = [...input].reverse();
console.log(result);
63
javascript
Copy
Edit
function nestedSpread(a, ...[b, c]) {
  return a + b + c;
}
console.log(nestedSpread(1, 2, 3));
64
javascript
Copy
Edit
const arr = [1, 2];
const func = (x, y) => x + y;
console.log(func(...arr));
65
javascript
Copy
Edit
const obj = { a: 1, b: 2 };
const copy = { ...obj };
copy.a = 100;
console.log(obj.a, copy.a);
66
javascript
Copy
Edit
const letters = ['a', 'b', 'c'];
const clone = [...letters];
clone[1] = 'z';
console.log(letters[1]);
67
javascript
Copy
Edit
function restLength(...args) {
  return args.length;
}
console.log(restLength());
68
javascript
Copy
Edit
const arr = [1, 2, 3];
const spread = [...arr, ...[4], 5];
console.log(spread.length);
69
javascript
Copy
Edit
const nested = [[1], [2, 3]];
const flat = [...nested];
console.log(flat.length);
70
javascript
Copy
Edit
const obj = { x: 1 };
const copy = { ...obj };
copy.x++;
console.log(obj.x);
71
javascript
Copy
Edit
const arr = [1, 2, 3];
const [a, , ...b] = arr;
console.log(b);
72
javascript
Copy
Edit
function restInsideSpread(...args) {
  const spread = [...args];
  return spread.pop();
}
console.log(restInsideSpread(10, 20, 30));
73
javascript
Copy
Edit
const str = "rest";
console.log([...str].reverse().join(""));
74
javascript
Copy
Edit
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(Object.keys(rest).length);
75
javascript
Copy
Edit
function pickFirst(...args) {
  return args[0];
}
console.log(pickFirst(...[5, 6, 7]));
76
javascript
Copy
Edit
const merged = { ...{ a: 1 }, ...{ a: 2 } };
console.log(merged);
77
javascript
Copy
Edit
const arr = [1, [2, 3], 4];
const clone = [...arr];
console.log(clone[1]);
78
javascript
Copy
Edit
const obj = { a: 1 };
const spread = { ...obj, b: 2 };
console.log('b' in spread);
79
javascript
Copy
Edit
function skipFirst(...[, ...rest]) {
  return rest;
}
console.log(skipFirst(1, 2, 3));
80
javascript
Copy
Edit
const arr = [1, 2, 3];
const [a, ...b] = [...arr];
b.push(4);
console.log(arr.length);
81
javascript
Copy
Edit
const data = { a: 1, b: 2, c: 3 };
const { a: alpha, ...others } = data;
console.log(others);

82

const fn = (...args) => args.map(x => x * 2);
console.log(fn(1, 2, 3));

83

const result = [...[...[1, 2]], ...[3]];
console.log(result);

84

const obj = { ...[1, 2, 3] };
console.log(Object.keys(obj));

85

const arr = [1, 2];
console.log({ ...arr });

86

const nested = [...[...'ab']];
console.log(nested);

87

function print(...args) {
  console.log(args[args.length - 1]);
}
print(10, 20, 30);

88

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, b: 3 };
console.log(obj2.b);

89

const input = { a: 1, b: 2, c: 3 };
const { c, ...others } = input;
console.log(others.a + others.b);

90

function argsToObj(...args) {
  return { ...args };
}
console.log(argsToObj(1, 2, 3));

91

const arr = [[1], [2]];
const copied = [...arr];
copied[0][0] = 100;
console.log(arr[0][0]);

92

const data = { a: 1, b: 2 };
const extra = { ...data, c: 3 };
console.log(extra);

93

const [a, , ...b] = [1, 2, 3, 4];
console.log(b);

94

function allExceptLast(...args) {
  return args.slice(0, -1);
}
console.log(allExceptLast(5, 6, 7, 8));

95

const values = [...Array(3).keys()];
console.log(values);

96

const obj = { x: 1 };
const spread = { ...obj, x: obj.x + 1 };
console.log(spread);

97

const base = { a: 1 };
const derived = { ...base, b: 2 };
console.log(Object.keys(derived).length);

98

function drop(...[, , ...rest]) {
  return rest;
}
console.log(drop(1, 2, 3, 4));

99

const reversed = [...[...'abc']].reverse();
console.log(reversed.join(""));

100
const arr = [1, 2, 3];
const spread = { ...arr };
console.log(spread['0']);