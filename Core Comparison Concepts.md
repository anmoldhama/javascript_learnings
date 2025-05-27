 Core Comparison Concepts
== vs === (loose vs strict equality)

!= vs !==

Comparing different types (number vs string, boolean, null, undefined)

Object and array reference equality

Truthy vs Falsy values

Comparison of NaN

Comparing primitive vs object wrapper (new String(), new Number())

Relational comparisons (<, >, <=, >=)

Implicit coercion in comparisons

Edge cases with null, undefined, [], {}, ''

null == undefined is true (only special case).

null coerces to 0 in math, undefined coerces to NaN.

All three (null, undefined, NaN) are falsy.

NaN is the only value in JavaScript that is not equal to itself.

Always use === and Object.is() to avoid coercion pitfalls.


🔢 100 JavaScript Comparison Questions
🧠 Category 1: Basic Equality and Strict Equality
'5' == 5   true

'5' === 5  false

0 == false  true   because false is coerse to 0

0 === false  false

null == undefined   true

null === undefined   false

NaN == NaN   false

NaN === NaN   false

undefined == false  false 

null == false   false

🔄 Category 2: Type Coercion in Comparisons
true == 1   true      true is coerse to 1

true === 1   false     No coercion with ===

false == 0   true      false is coerse to 0

false === 0  false     No coercion with ===

'' == 0   true       '' coerse to 0

' ' == 0   true      ' ' coerse to 0

[] == 0  true        step1 -> [] --> ''
                     step2 -> '' --> 0

[0] == 0  true      step1 -> [0]--> '0'
                     step2 -> '0' --> 0

[] == false  true    step1 -> []--> ''
                      step2 -> '' --> 0
                      step3 -> false --> 0

[null] == 0   false   step1 -> [null] --> 'null'
                      step2 -> 'null' --> NaN

⚠️ Category 3: Object Reference Equality
{ } == { }   false they compares the different references

[1, 2] == [1, 2]   false  they also compares the different references

new String('abc') == 'abc'    true   object 'abc' coersed to string 'abc'.

new Number(5) == 5    true   object 5 coerse to number 5

new Boolean(false) == false  object false not coerse to boolean false
                                all objects are truthy itself     

Object.is(NaN, NaN)   true   

Object.is(0, -0)  false   

{ a: 1 } === { a: 1 }   false   

obj1 === obj2 // with obj1 = obj2    true

obj1 === obj2 // with obj1 = { a: 1 }, obj2 = { a: 1 }   false

🧮 Category 4: Relational Operators
'5' > 2    true   '5' --> 5

'5' < 2    false   '5'  --> 5

'5' > '12'   true   '5' > '1'  does not convert to number

10 > '2'    true    10 > 2   

'a' > 'A'   true   97 > 65

null < 1    null --> 0   relational operators converts null to 0

undefined < 1   true   undefined --> NaN

NaN < 1    false 

[] < 1   true   [] --> ''
                 '' --> 0

[2] > 1   true   [2] --> '2'
                 '2'  --> 2

🧪 Category 5: Truthy / Falsy in Comparisons
!!0    false   !! coverts value to boolean withour negation

!!1     true

!!""    false

!!"abc"   true

!![]    true    all objects are truthy

!!{}    true

!!null   false

!!undefined   false

!!NaN    false    NaN is falsy

!!(new Boolean(false))   true    all objects are truthy

🧊 Category 6: Weird Coercion Edge Cases
[] == ''  true  step 1 [] --> ''

[] == '0'   false   step1 [] --> ''

'' == 0   true     step1 '' --> 0

false == ''   true   step1 false --> 0
                     step2 '' --> 0

false == []    true   step1 false --> 0
                       step2 [] --> '' --> 0

false == {}   false    step1  false --> 0
                       step2  {} --> '[Object Object]'

0 == {}    false     step1 {} --> '[Object Object]'

0 == null   false  null is always gives false in comparison == 

null >= 0   true   null --> 0

null <= 0   true   null --> 0


If one side is boolean then convert both the values to numbers at the end and compare

🧱 Category 7: Symbol, BigInt, typeof
typeof Symbol() === 'symbol'   true 

typeof BigInt(1) === 'bigint'  true

Symbol() == Symbol()    false

BigInt(1) === 1    false   no coercion is ====

BigInt(1) == 1    true  

typeof null === 'object'   true

typeof [] === 'object'  true

typeof {} === 'object'   true

typeof NaN === 'number'    true

typeof undefined === 'undefined'   true

🧮 Category 8: Loose vs Strict in Ternary
'' ? 'yes' : 'no'   'no'

null ? 'yes' : 'no'    'no'

[] ? 'yes' : 'no'    'yes'

{ } ? 'yes' : 'no'    'yes'

0 ? 'yes' : 'no'     'no'

undefined ? 'yes' : 'no'    'no'

NaN ? 'yes' : 'no'    'no'

'false' ? 'yes' : 'no'    'yes'

false ? 'yes' : 'no'    'no'

true ? 'yes' : 'no'    'yes'

📐 Category 9: Complex Expressions
[] + []    '' + '' --> ''

[] + {}    '' + '[Object Object]' --> '[Object Object]'

{} + []    '[Object Object]' + 0  --> 0
({} + [])    '[Object Object]' + '' --> '[object Object]'

{} + {}    NaN
({} + {})   '[object Object]' + '[object Object]'  --> '[object Object][object Object]'

[] == ![]    '' == false 
             0 == 0  true

null == 0    false  

null == ''    false

undefined == ''   false

typeof (null + 1)    null-->0
                     0+1 --> 1    'number'

typeof (undefined + 1)   undefiend --> 0
                         0+1 --> 1   'number'

🧱 Category 10: Custom Comparisons
1 == [1]  true

1 == true   true

2 == [2]   true    [2]--> '2'--> 2

'2' == [2]  true   [2]--> '2'

'2' == [[2]]  true   ['2']--> '2'

[[]] == ''  true  [[]]--> ['']--> ''

[1,2] == '1,2'  true  [1,2]--> '1,2'

[1] == '1' true [1]--> '1'

new Date(0) == 0  true  '[0]'--> 0

new Date(0).getTime() == 0   '[0]'--> 0