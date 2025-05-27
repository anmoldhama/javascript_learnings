Test 1 

 1–10: Basic Type Identification & Conversion
Q.1) What are the 8 fundamental data types in JavaScript?
 ans:      📌 Correct list of primitive types (stored in stack):

string

number (includes NaN, Infinity)

boolean

undefined

null

symbol

bigint

📌 Non-primitive types (stored in heap):

object (includes arrays, functions)


Q.2) What is the result of typeof null and why?
ans : it returns "object" because this is a behaviour of javascript.

Q.3) What is the output of typeof NaN and why?
ans : it ruturns "number" because this is a behaviour of js.

Q.4) What is the difference between undefined and null?
ans : undefined is a value which is automatically assigned by the js if you only declare a variable without initialization.
      null is a value which is assigned by the developers.

Q.5) What happens when you do true + false in JavaScript?
ans : 1 + 0
      1

Q.6) What is the output of "5" - 2 and "5" + 2?
ans : 3 and "52";

Q.7) How does JavaScript handle [] + [] and [] + {}?
ans : "" + ""  = ""   When you use + with non-numbers, JS calls .toString() on them.
      "" + [object] = "[object object]"  [] becomes "", {} becomes "[object Object]"

Q.8) What is the result of !![] and !!{} and why?
ans : !![] → true

!!{} → true

Reason:

Any non-null object (including arrays and objects) is truthy.

!! forces coercion to boolean.

Q.9) Why does 0.1 + 0.2 !== 0.3 in JavaScript?
ans : because these are the floating point values.
    these could be evaluated as 0.100001 + 0.200002 which is not equal to 0.30002

Q.10) What is type coercion? Give three examples?
ans : type coercion is a concept in you compare two different types of values in a single statment.
      '5' - 1     // 4
'5' + 1     // "51"
true + 1    // 2
null == undefined // true


🟨 11–20: Equality and Comparison Quirks
Q.11) What is the difference between == and ===?
ans : == operator only compares the values not data types
      === operator compares both the values and the data types

Q.12) Why is [] == ![] true?
ans : "" == !""  false == false which is true

Q.13) What is the result of null == undefined and null === undefined?
ans : null == undefined = true
      null === undefined = false

Q.14) What is the output of {} + [] and why?
ans : "[object Object]" + "" = "[object Object]"

Q.15) Why does [] == '' return true?
ans: becaue [] is also return '';

Q.16) Why does [] == 0 return true?
ans : because "" == 0 return true both are falsy values

Q.17) What does '' == 0 return and why?
ans : return true because they are falsy values.

Q.18)What is the result of NaN == NaN?
ans : return false.

Q.19) What’s the result of false == '0' and false === '0'?
ans : reutrn false and  false

Q.20) Why does '5' - 3 give a number but '5' + 3 give a string?
ans : this is due to the type coersion when adding string to number the number is converted to string
      and if subtracting number from string then the string converted to number

🟨 21–30: Primitive vs Reference Types
Q.21) What is the difference between primitive and reference types?
ans : primitive types are holding the seperate address in the memory
      but the reference types are holding the same memory just use the reference of the memory.

Q.22) How does assignment work for primitive values vs objects?
ans : Primitives are copied by value

Objects/arrays/functions are copied by reference

Q.23) What is the output of modifying an object assigned to two variables?
ans : the value of both the variables are changed.

Q.24) Are strings mutable or immutable in JavaScript?
ans : strings are immutable in javascript and you dont change the characters after initialization.

Q.25) How does JavaScript store arrays and objects in memory?
ans : both are stored in heap memory.

Q.26) Why is {} === {} false?
ans : both the object reference to the different address in memory and after comparing the address this returns false.

Q.27) Why is [] === [] false?
ans : both the arrays reference to the different address in memory and after comparing the addresses this returns false.

Q.28) Can you compare two objects for equality directly?
ans : yes you can compare but they always gives you false.
      Yes, but it compares references, not content.

      Use deep comparison for actual content equality.
Q.29) What are ways to deep compare two objects?
ans : JSON.stringify(obj1) === JSON.stringify(obj2)
or using recursive approach

Q.30Why is typeof function() {} equal to "function"?
ans : because function is data type in javascript.


Test 2

🟨 31–40: Special Data Types and Edge Cases
Q.31) What is the type of Symbol() and how is it unique?
ans : the type of symbol() is symbol and it is unique because the whenver you declare a variable with symbol it should be unique.

Q.32) What happens if you do BigInt(10) + 10?
ans :  It throws a TypeError: Cannot mix BigInt and other types without explicit conversion

Q.33) Why does typeof new Boolean(false) return "object"?
ans : new Boolean(false) creates a Boolean object, not a primitive.

typeof new Boolean(false) → "object"

Q.34) What is the value of typeof Infinity and why?
ans : it will return us "number" because the type of infinity is number.

Q.35) What happens when you do null instanceof Object?
ans : null instanceof Object → false

      null is a primitive and does not inherit from Object.

Q.36) What’s the output of Object.is(NaN, NaN) and how is it different from ===?
ans : Object.is(NaN, NaN) → true

NaN === NaN → false

Object.is handles NaN, -0 properly unlike ===.

Q.37) Why does typeof [] return "object"?
ans : because in js the type of array is object

Q.38) Is NaN of type number?
ans : yes

Q.39) What does parseInt('08') return and why?
ans : parseInt('08') → 8

In modern JS (ES5+), leading zero doesn't imply octal by default.

Earlier versions treated '08' as octal → 0.

Q.40) What is the type of arguments object inside a function?
ans : the type of arguments is object.

🟨 41–50: Destructuring, Type Casting, and Internal Handling
Q.41) How does JavaScript handle destructuring with undefined values?
ans : They will assign the undefined values.

Q.42) What is implicit vs explicit type coercion?
ans : Implicit: JS automatically converts types   '5' + 2 // "52"
      Explicit: You manually convert  Number('5') + 2 // 7

Q.43) What is the result of !!"false"?
ans : return true.

Q.44) What is the result of Boolean([]) and Boolean({})?
ans :  Boolean([]) → true

Boolean({}) → true

All non-null objects (including empty ones) are truthy.

Q.45) Why is typeof RegExp('abc') equal to "object"?
ans : Regular expressions are special objects.

typeof /abc/ → "object"

Q.46) How does spreading a string into an array work ([...'hello'])?
ans : [...'hello'] // ['h', 'e', 'l', 'l', 'o']

Q.47) What are wrapper objects in JavaScript (e.g., new String())?
ans : Primitives like string, number, and boolean have object wrappers (String, Number, Boolean) to temporarily provide methods.

new String("hi") creates a string object.

Q.48) How does JavaScript handle object to primitive conversion?
ans : JS tries valueOf() → then toString() "[object object]".

Q.49) What is the result of JSON.stringify(undefined)?
ans : JSON.stringify(undefined) → undefined

But in object properties or array it’s replaced:
JSON.stringify({a: undefined}) // '{}'
JSON.stringify([undefined]) // '[null]'

Q.50) What happens when you stringify a function using JSON.stringify()?
ans : Functions are omitted in objects:   JSON.stringify({a: () => {}}) // '{}'

