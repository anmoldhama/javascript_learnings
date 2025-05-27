Set of 100 Advanced Unary Operator Output Questions
🔹 typeof, void, +, -
js
Copy
Edit
typeof void 0

cpp
Copy
Edit

2. ```js
void 1
js
Copy
Edit
typeof +undefined

csharp
Copy
Edit

4. ```js
typeof -undefined
js
Copy
Edit
+null

csharp
Copy
Edit

6. ```js
-null
js
Copy
Edit
+true

arduino
Copy
Edit

8. ```js
-false
js
Copy
Edit
+[]

css
Copy
Edit

10. ```js
-[]
js
Copy
Edit
+{}

diff
Copy
Edit

12. ```js
-{}
js
Copy
Edit
+NaN

diff
Copy
Edit

14. ```js
-NaN
js
Copy
Edit
+Infinity

diff
Copy
Edit

16. ```js
-Infinity
js
Copy
Edit
+Symbol("id")

scss
Copy
Edit

18. ```js
- Symbol("id")
js
Copy
Edit
typeof (void typeof void 0)

csharp
Copy
Edit

20. ```js
typeof (typeof void typeof null)
🔹 !, !!, logical negation
js
Copy
Edit
!undefined

diff
Copy
Edit

22. ```js
!!undefined
js
Copy
Edit
!null

csharp
Copy
Edit

24. ```js
!!null
js
Copy
Edit
!NaN

diff
Copy
Edit

26. ```js
!!NaN
js
Copy
Edit
!0

diff
Copy
Edit

28. ```js
!1
js
Copy
Edit
![]

css
Copy
Edit

30. ```js
!![]
js
Copy
Edit
!{}

diff
Copy
Edit

32. ```js
!!{}
js
Copy
Edit
!Symbol("x")

scss
Copy
Edit

34. ```js
!!Symbol("x")
js
Copy
Edit
!!""

arduino
Copy
Edit

36. ```js
!!"false"
js
Copy
Edit
!"0"

sql
Copy
Edit

38. ```js
!new Boolean(false)
js
Copy
Edit
!!new Boolean(false)

scss
Copy
Edit

40. ```js
!new Number(0)
🔹 Bitwise NOT ~
js
Copy
Edit
~1

go
Copy
Edit

42. ```js
~0
js
Copy
Edit
~-1

go
Copy
Edit

44. ```js
~NaN
js
Copy
Edit
~undefined

csharp
Copy
Edit

46. ```js
~null
js
Copy
Edit
~"5"

arduino
Copy
Edit

48. ```js
~"abc"
js
Copy
Edit
~true

arduino
Copy
Edit

50. ```js
~false
🔹 Increment / Decrement: ++, --
js
Copy
Edit
let x = 5; ++x;

bash
Copy
Edit

52. ```js
let x = 5; x++;
js
Copy
Edit
let x = 5; --x;

bash
Copy
Edit

54. ```js
let x = 5; x--;
js
Copy
Edit
let x = "5"; ++x;

bash
Copy
Edit

56. ```js
let x = "5a"; ++x;
js
Copy
Edit
let x = undefined; ++x;

csharp
Copy
Edit

58. ```js
let x = null; ++x;
js
Copy
Edit
let x = true; ++x;

bash
Copy
Edit

60. ```js
let x = false; ++x;
js
Copy
Edit
let x = NaN; ++x;

bash
Copy
Edit

62. ```js
let x = {}; ++x;
js
Copy
Edit
let x = []; ++x;

bash
Copy
Edit

64. ```js
let x = [1]; ++x;
js
Copy
Edit
let x = [1, 2]; ++x;

bash
Copy
Edit

66. ```js
let x = ""; ++x;
js
Copy
Edit
let x = " "; ++x;

swift
Copy
Edit

68. ```js
let x = "\n"; ++x;
js
Copy
Edit
++(5)

arduino
Copy
Edit

70. ```js
++true
🔹 Delete Operator
js
Copy
Edit
let a = { b: 2 }; delete a.b;

arduino
Copy
Edit

72. ```js
let arr = [1, 2, 3]; delete arr[1];
js
Copy
Edit
delete "string"[0]

pgsql
Copy
Edit

74. ```js
delete NaN
js
Copy
Edit
delete Infinity

cpp
Copy
Edit

76. ```js
delete undefined
js
Copy
Edit
delete null

cpp
Copy
Edit

78. ```js
delete globalThis
js
Copy
Edit
(function(x) { delete x; return x; })(5)

kotlin
Copy
Edit

80. ```js
(function() { var x = 10; delete x; return x; })()
🔹 Nested Unary Operators
js
Copy
Edit
!!+[]

css
Copy
Edit

82. ```js
+!![]
js
Copy
Edit
~+[]

css
Copy
Edit

84. ```js
!+[]
js
Copy
Edit
+![]

lua
Copy
Edit

86. ```js
++[[]][+[]]
js
Copy
Edit
++[[]][[]]

css
Copy
Edit

88. ```js
[+[]] + []
js
Copy
Edit
!new Date()

scss
Copy
Edit

90. ```js
~new Date()
🔹 Edge Case Unary Expressions
js
Copy
Edit
void typeof undefined

cpp
Copy
Edit

92. ```js
+void 0
js
Copy
Edit
-void 0

csharp
Copy
Edit

94. ```js
+null === -null
js
Copy
Edit
++!0

diff
Copy
Edit

96. ```js
--!1
js
Copy
Edit
let a = 10; a++ + ++a;

bash
Copy
Edit

98. ```js
let a = 10; ++a + a++;
js
Copy
Edit
let a = 10; a-- + --a;

bash
Copy
Edit

100. ```js
let a = 10; --a + a--;