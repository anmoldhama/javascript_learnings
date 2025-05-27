1
js
Copy
Edit
console.log(null == undefined);
✅ Output: true

2
js
Copy
Edit
console.log(null === undefined);
✅ Output: false

3
js
Copy
Edit
console.log([] == []);
✅ Output: false

4
js
Copy
Edit
console.log([1] == [1]);
✅ Output: false

5
js
Copy
Edit
console.log({} == {});
✅ Output: false

6
js
Copy
Edit
console.log(0 == '0');
✅ Output: true

7
js
Copy
Edit
console.log(false == '0');
✅ Output: true

8
js
Copy
Edit
console.log(false === '0');
✅ Output: false

9
js
Copy
Edit
console.log([] == false);
✅ Output: true

10
js
Copy
Edit
console.log('' == false);
✅ Output: true

11
js
Copy
Edit
console.log('' === false);
✅ Output: false

12
js
Copy
Edit
console.log([] == '');
✅ Output: true

13
js
Copy
Edit
console.log([null] == '');
✅ Output: true

14
js
Copy
Edit
console.log([undefined] == '');
✅ Output: true

15
js
Copy
Edit
console.log([1,2] == '1,2');
✅ Output: true

16
js
Copy
Edit
console.log([1] == true);
✅ Output: true

17
js
Copy
Edit
console.log([1,2] == true);
✅ Output: false

18
js
Copy
Edit
console.log([] == 0);
✅ Output: true

19
js
Copy
Edit
console.log([0] == 0);
✅ Output: true

20
js
Copy
Edit
console.log([null] == 0);
✅ Output: true

21
js
Copy
Edit
console.log([undefined] == 0);
✅ Output: false

22
js
Copy
Edit
console.log({ valueOf() { return 10; } } == 10);
✅ Output: true

23
js
Copy
Edit
console.log({ toString() { return '10'; } } == 10);
✅ Output: true

24
js
Copy
Edit
console.log({ valueOf() { return {}; }, toString() { return '10'; } } == 10);
✅ Output: true

25
js
Copy
Edit
console.log({ valueOf() { return {}; }, toString() { return {}; } } == 10);
✅ Output: false (TypeError in strict mode)

26
js
Copy
Edit
console.log(Object.is(+0, -0));
✅ Output: false

27
js
Copy
Edit
console.log(+0 === -0);
✅ Output: true

28
js
Copy
Edit
console.log(NaN === NaN);
✅ Output: false

29
js
Copy
Edit
console.log(Object.is(NaN, NaN));
✅ Output: true

30
js
Copy
Edit
console.log(1 < 2 < 3);
✅ Output: true

31
js
Copy
Edit
console.log(3 > 2 > 1);
✅ Output: false

32
js
Copy
Edit
console.log([] == ![]);
✅ Output: true

33
js
Copy
Edit
console.log(false == []);
✅ Output: true

34
js
Copy
Edit
console.log(false == {});
✅ Output: false

35
js
Copy
Edit
console.log(' \t\r\n' == 0);
✅ Output: true

36
js
Copy
Edit
console.log('' == 0);
✅ Output: true

37
js
Copy
Edit
console.log('' === 0);
✅ Output: false

38
js
Copy
Edit
console.log('5' == new Number(5));
✅ Output: true

39
js
Copy
Edit
console.log(5 == new Number(5));
✅ Output: true

40
js
Copy
Edit
console.log(5 === new Number(5));
✅ Output: false

41
js
Copy
Edit
console.log(new Boolean(false) == false);
✅ Output: true

42
js
Copy
Edit
console.log(new Boolean(false) === false);
✅ Output: false

43
js
Copy
Edit
console.log(new Boolean(false) == true);
✅ Output: true

44
js
Copy
Edit
console.log(undefined == null);
✅ Output: true

45
js
Copy
Edit
console.log(undefined === null);
✅ Output: false

46
js
Copy
Edit
console.log("0" == 0);
✅ Output: true

47
js
Copy
Edit
console.log("0" === 0);
✅ Output: false

48
js
Copy
Edit
console.log(false == "false");
✅ Output: false

49
js
Copy
Edit
console.log(false == "0");
✅ Output: true

50
js
Copy
Edit
console.log(false == undefined);
✅ Output: false

51
js
Copy
Edit
console.log(null == 0);
✅ Output: false

52
js
Copy
Edit
console.log(null >= 0);
✅ Output: true

53
js
Copy
Edit
console.log(null > 0);
✅ Output: false

54
js
Copy
Edit
console.log(undefined > 0);
✅ Output: false

55
js
Copy
Edit
console.log(undefined < 0);
✅ Output: false

56
js
Copy
Edit
console.log(undefined == false);
✅ Output: false

57
js
Copy
Edit
console.log(0 == '\n');
✅ Output: true

58
js
Copy
Edit
console.log([] < 1);
✅ Output: true

59
js
Copy
Edit
console.log([] > 1);
✅ Output: false

60
js
Copy
Edit
console.log([] == 0);
✅ Output: true

61
js
Copy
Edit
console.log([1] > null);
✅ Output: true

62
js
Copy
Edit
console.log([1] < true);
✅ Output: false

63
js
Copy
Edit
console.log([1] == true);
✅ Output: true

64
js
Copy
Edit
console.log([1,2] > "1");
✅ Output: true

65
js
Copy
Edit
console.log("abc" > "ab");
✅ Output: true

66
js
Copy
Edit
console.log("2" > "12");
✅ Output: true

67
js
Copy
Edit
console.log('2' > 12);
✅ Output: false

68
js
Copy
Edit
console.log('10' < 2);
✅ Output: false

69
js
Copy
Edit
console.log('10' < '2');
✅ Output: true

70
js
Copy
Edit
console.log([] == ![]);
✅ Output: true

71
js
Copy
Edit
console.log([1,2] == "1,2");
✅ Output: true

72
js
Copy
Edit
console.log([1] == "1");
✅ Output: true

73
js
Copy
Edit
console.log([''] == 0);
✅ Output: true

74
js
Copy
Edit
console.log([undefined] == 0);
✅ Output: false

75
js
Copy
Edit
console.log([] == '');
✅ Output: true

76
js
Copy
Edit
console.log({} + []);
✅ Output: "[object Object]"

77
js
Copy
Edit
console.log([] + {});
✅ Output: "[object Object]"

78
js
Copy
Edit
console.log({} + {});
✅ Output: "[object Object][object Object]"

79
js
Copy
Edit
console.log("5" - - "2");
✅ Output: 7

80
js
Copy
Edit
console.log("5" + - "2");
✅ Output: "5-2"

81
js
Copy
Edit
console.log("5" + +"2");
✅ Output: "52"

82
js
Copy
Edit
console.log("true" == true);
✅ Output: false

83
js
Copy
Edit
console.log(true == "1");
✅ Output: true

84
js
Copy
Edit
console.log(false == 0);
✅ Output: true

85
js
Copy
Edit
console.log(true == 1);
✅ Output: true

86
js
Copy
Edit
console.log(" " == 0);
✅ Output: true

87
js
Copy
Edit
console.log("" == 0);
✅ Output: true

88
js
Copy
Edit
console.log("" === 0);
✅ Output: false

89
js
Copy
Edit
console.log("" == false);
✅ Output: true

90
js
Copy
Edit
console.log(0 == false);
✅ Output: true

91
js
Copy
Edit
console.log(0 === false);
✅ Output: false

92
js
Copy
Edit
console.log(false == null);
✅ Output: false

93
js
Copy
Edit
console.log([] == {});
✅ Output: false

94
js
Copy
Edit
console.log([] === {});
✅ Output: false

95
js
Copy
Edit
console.log([1,2,3] == "1,2,3");
✅ Output: true

96
js
Copy
Edit
console.log([1,2] == "1,2,3");
✅ Output: false

97
js
Copy
Edit
console.log([] == false);
✅ Output: true

98
js
Copy
Edit
console.log({} == '[object Object]');
✅ Output: false

99
js
Copy
Edit
console.log({ toString() { return 'test'; } } == 'test');
✅ Output: true

100
js
Copy
Edit
console.log(Object.is(-0, +0));
✅ Output: false