1
js
Copy
Edit
const [a, b] = [1, 2];
console.log(a, b);
✅ Output: 1 2

2
js
Copy
Edit
const [a, , b] = [1, 2, 3];
console.log(a, b);
✅ Output: 1 3

3
js
Copy
Edit
const [, , , d] = [1, 2, 3];
console.log(d);
✅ Output: undefined

4
js
Copy
Edit
const [a = 5, b = 10] = [undefined, 3];
console.log(a, b);
✅ Output: 5 3

5
js
Copy
Edit
const { a, b } = { a: 1, b: 2 };
console.log(a, b);
✅ Output: 1 2

6
js
Copy
Edit
const { a: x, b: y } = { a: 10, b: 20 };
console.log(x, y);
✅ Output: 10 20

7
js
Copy
Edit
const { a = 5 } = {};
console.log(a);
✅ Output: 5

8
js
Copy
Edit
const { a: x = 7 } = { a: undefined };
console.log(x);
✅ Output: 7

9
js
Copy
Edit
const [a, ...rest] = [1, 2, 3, 4];
console.log(rest);
✅ Output: [2, 3, 4]

10
js
Copy
Edit
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest);
✅ Output: { b: 2, c: 3 }

11
js
Copy
Edit
const [a, ...b] = [];
console.log(a, b);
✅ Output: undefined []

12
js
Copy
Edit
const { length } = "hello";
console.log(length);
✅ Output: 5

13
js
Copy
Edit
const { 0: first } = [100, 200, 300];
console.log(first);
✅ Output: 100

14
js
Copy
Edit
const { toString } = Object.prototype;
console.log(toString === {}.toString);
✅ Output: true

15
js
Copy
Edit
const [a, b = 5] = [undefined, undefined];
console.log(a, b);
✅ Output: undefined 5

16
js
Copy
Edit
const { a = 1, b = 2 } = { a: null };
console.log(a, b);
✅ Output: null 2

17
js
Copy
Edit
const { x = 1 } = { x: 0 };
console.log(x);
✅ Output: 0

18
js
Copy
Edit
const [a = 1, b = a + 1] = [2];
console.log(a, b);
✅ Output: 2 3

19
js
Copy
Edit
const [a = 1, b = a + 1] = [];
console.log(a, b);
✅ Output: 1 2

20
js
Copy
Edit
const [a = 1, b = a + 1, c = b + 1] = [undefined, undefined, undefined];
console.log(c);
✅ Output: 3

21
js
Copy
Edit
const { x: a, y: b } = { x: 10, y: 20 };
console.log(a + b);
✅ Output: 30

22
js
Copy
Edit
const [a, b, ...c] = [1];
console.log(c);
✅ Output: []

23
js
Copy
Edit
const [a, b = 2, c = 3] = [10, null];
console.log(a, b, c);
✅ Output: 10 null 3

24
js
Copy
Edit
const obj = { a: { b: 2 } };
const { a: { b } } = obj;
console.log(b);
✅ Output: 2

25
js
Copy
Edit
const [a, b, c = a + b] = [1, 2];
console.log(c);
✅ Output: 3

26
js
Copy
Edit
const user = { name: "Alice", address: { city: "NY" } };
const { address: { city } } = user;
console.log(city);
✅ Output: "NY"

27
js
Copy
Edit
const [[a], b] = [[1], 2];
console.log(a, b);
✅ Output: 1 2

28
js
Copy
Edit
let [x, y] = [1, 2];
[x, y] = [y, x];
console.log(x, y);
✅ Output: 2 1

29
js
Copy
Edit
const [, , third] = "abc";
console.log(third);
✅ Output: "c"

30
js
Copy
Edit
const [a, b, c] = "xyz";
console.log(a, b, c);
✅ Output: "x" "y" "z"

31
js
Copy
Edit
const { toString: str } = Object.prototype;
console.log(typeof str);
✅ Output: "function"

32
js
Copy
Edit
const { a: { b = 2 } = {} } = {};
console.log(b);
✅ Output: 2

33
js
Copy
Edit
const { a = { b: 2 } } = {};
console.log(a.b);
✅ Output: 2

34
js
Copy
Edit
const { a: { b } = { b: 10 } } = {};
console.log(b);
✅ Output: 10

35
js
Copy
Edit
const { a } = { a: undefined };
console.log(a ?? "default");
✅ Output: "default"

36
js
Copy
Edit
const [a = 10] = [null];
console.log(a);
✅ Output: null

37
js
Copy
Edit
const { length } = [1, 2, 3];
console.log(length);
✅ Output: 3

38
js
Copy
Edit
const [,, ...rest] = [1, 2, 3, 4];
console.log(rest);
✅ Output: [3, 4]

39
js
Copy
Edit
const { 0: a, 1: b } = "hi";
console.log(a, b);
✅ Output: "h" "i"

40
js
Copy
Edit
const [a, b, c] = new Set([10, 20, 30]);
console.log(c);
✅ Output: 30

41
js
Copy
Edit
const obj = { a: 1, b: 2 };
const { a, b, c = 3 } = obj;
console.log(c);
✅ Output: 3

42
js
Copy
Edit
const { a: x = 5 } = { a: undefined };
console.log(x);
✅ Output: 5

43
js
Copy
Edit
const [a = 1, b = 2, c = 3] = [undefined, , 5];
console.log(a, b, c);
✅ Output: 1 2 5

44
js
Copy
Edit
const { a: { b = 2 } = {} } = { a: undefined };
console.log(b);
✅ Throws TypeError: Cannot destructure property 'b' of 'a' as it is undefined

45
js
Copy
Edit
const user = { name: "John", age: 30 };
const { name, ...rest } = user;
console.log(rest);
✅ Output: { age: 30 }

46
js
Copy
Edit
const data = { a: 1 };
const { b = "default" } = data;
console.log(b);
✅ Output: "default"

47
js
Copy
Edit
const arr = [10];
const [a, b = 20, c = 30] = arr;
console.log(b, c);
✅ Output: 20 30

48
js
Copy
Edit
const obj = { a: 1, b: 2 };
const { a, b, c } = obj;
console.log(typeof c);
✅ Output: "undefined"

49
js
Copy
Edit
const { length } = { length: 10 };
console.log(length);
✅ Output: 10

50
js
Copy
Edit
const { 0: first, length } = [99, 88];
console.log(first, length);
✅ Output: 99 2

51
js
Copy
Edit
const [a, b = a * 2] = [3];
console.log(a, b);
✅ Output: 3 6

52
js
Copy
Edit
const [a = 1, b = a + 1, c = b + 1] = [];
console.log(a, b, c);
✅ Output: 1 2 3

53
js
Copy
Edit
const [a, b = 10] = [undefined];
console.log(a, b);
✅ Output: undefined 10

54
js
Copy
Edit
const { a = 5 } = { a: null };
console.log(a);
✅ Output: null

55
js
Copy
Edit
const [x, y = x] = [5];
console.log(y);
✅ Output: 5

56
js
Copy
Edit
const { a: a1 = 1, b: b1 = 2 } = { a: 0 };
console.log(a1, b1);
✅ Output: 0 2

57
js
Copy
Edit
const [a, , b] = [1, 2, 3];
console.log(a, b);
✅ Output: 1 3

58
js
Copy
Edit
const obj = { a: 10, b: 20 };
const { a, b, c = a + b } = obj;
console.log(c);
✅ Output: 30

59
js
Copy
Edit
const obj = { a: { b: { c: 42 } } };
const { a: { b: { c } } } = obj;
console.log(c);
✅ Output: 42

60
js
Copy
Edit
const input = [[1, 2], [3, 4]];
const [[a], [b]] = input;
console.log(a, b);
✅ Output: 1 3

61
js
Copy
Edit
const [a = 5, b = a + 2] = [];
console.log(b);
✅ Output: 7

62
js
Copy
Edit
const obj = { a: 1, b: undefined };
const { a = 10, b = 20 } = obj;
console.log(a, b);
✅ Output: 1 20

63
js
Copy
Edit
const [a = 1, b = 2] = [undefined, null];
console.log(a, b);
✅ Output: 1 null

64
js
Copy
Edit
const { a: { b = 5 } = {} } = { a: { b: undefined } };
console.log(b);
✅ Output: 5

65
js
Copy
Edit
const { a = 5 } = { a: NaN };
console.log(a);
✅ Output: NaN

66
js
Copy
Edit
const obj = {};
const { a: { b } = { b: 10 } } = obj;
console.log(b);
✅ Output: 10

67
js
Copy
Edit
const obj = { a: [1, 2, 3] };
const { a: [, second] } = obj;
console.log(second);
✅ Output: 2

68
js
Copy
Edit
const arr = [{ a: 1 }, { b: 2 }];
const [{ a }, { b }] = arr;
console.log(a, b);
✅ Output: 1 2

69
js
Copy
Edit
const [a = 1, b = 2, c = 3] = [undefined, undefined];
console.log(c);
✅ Output: 3

70
js
Copy
Edit
const str = "ok";
const [a, b] = str;
console.log(b);
✅ Output: "k"

71
js
Copy
Edit
const { constructor: c } = [];
console.log(c === Array);
✅ Output: true

72
js
Copy
Edit
const { prop: x = 42 } = { prop: null };
console.log(x);
✅ Output: null

73
js
Copy
Edit
const { prop: x = 42 } = {};
console.log(x);
✅ Output: 42

74
js
Copy
Edit
const [{ a }] = [{ a: 100 }];
console.log(a);
✅ Output: 100

75
js
Copy
Edit
const [a, b = a * 2] = [3];
console.log(b);
✅ Output: 6

76
js
Copy
Edit
const [a, b, c] = [,,];
console.log(a, b, c);
✅ Output: undefined undefined undefined

77
js
Copy
Edit
const [a, b] = "hi";
console.log(a + b);
✅ Output: "hi"

78
js
Copy
Edit
const { a: x = 10 } = { a: 0 };
console.log(x);
✅ Output: 0

79
js
Copy
Edit
const { toString } = {};
console.log(typeof toString);
✅ Output: "function"

80
js
Copy
Edit
const { a: x, b: y } = { b: 2 };
console.log(x, y);
✅ Output: undefined 2

81
js
Copy
Edit
const arr = [];
[arr[0], arr[1]] = [1, 2];
console.log(arr);
✅ Output: [1, 2]

82
js
Copy
Edit
const [a, b] = "hi there";
console.log(a, b);
✅ Output: "h" "i"

83
js
Copy
Edit
const [a = 1, b = 2, c = 3] = [null, undefined];
console.log(a, b, c);
✅ Output: null 2 3

84
js
Copy
Edit
const { a: [b, c] } = { a: [10, 20] };
console.log(b, c);
✅ Output: 10 20

85
js
Copy
Edit
const [a = 10, b = a + 5] = [,];
console.log(a, b);
✅ Output: 10 15

86
js
Copy
Edit
const { x = 1 } = { x: false };
console.log(x);
✅ Output: false

87
js
Copy
Edit
const [a = 1, b = 2] = [0, 0];
console.log(a, b);
✅ Output: 0 0

88
js
Copy
Edit
const [a, b, ...c] = [1, 2];
console.log(c.length);
✅ Output: 0

89
js
Copy
Edit
const { a: { b = 5 } = {} } = { a: null };
console.log(b);
✅ ❌ Throws TypeError

90
js
Copy
Edit
const { length } = "1234";
console.log(length);
✅ Output: 4

91
js
Copy
Edit
const [a, b, c = a + b] = [1, 2];
console.log(c);
✅ Output: 3

92
js
Copy
Edit
const obj = { x: { y: { z: 10 } } };
const { x: { y: { z } } } = obj;
console.log(z);
✅ Output: 10

93
js
Copy
Edit
const [a, b] = [1];
console.log(b);
✅ Output: undefined

94
js
Copy
Edit
const obj = { a: 1, b: 2 };
const { a, ...rest } = obj;
console.log(Object.keys(rest));
✅ Output: ["b"]

95
js
Copy
Edit
const obj = { a: 1, b: 2 };
const { a: renamed } = obj;
console.log(renamed);
✅ Output: 1

96
js
Copy
Edit
const [[a]] = [[42]];
console.log(a);
✅ Output: 42

97
js
Copy
Edit
const [, b, , d = 4] = [1, 2];
console.log(b, d);
✅ Output: 2 4

98
js
Copy
Edit
const { a = 1, b = a + 1 } = {};
console.log(b);
✅ Output: 2

99
js
Copy
Edit
const [a, b] = [,];
console.log(a, b);
✅ Output: undefined undefined

100
js
Copy
Edit
const user = { name: "Jane", age: 25 };
const { name: fullName = "Anonymous", country = "Unknown" } = user;
console.log(fullName, country);
✅ Output: "Jane" "Unknown"