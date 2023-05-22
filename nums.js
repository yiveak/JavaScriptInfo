// || Number
const myNum = "123456789.333";

console.log(myNum);

// || 1. Number()
// * convert str or other value to num
// * NaN: Not a Number
console.log("Number():");
console.log(Number()); // 0
console.log(Number("123")); // 123
console.log(Number("")); // 0
console.log(Number("\n")); // 0
console.log(Number("two")); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("  12 ")); // 12
console.log(Number("1 2 3")); // NaN

// || ************ Methods(static) ************
// || 1. Number.isFinite
// * checks value is a number, and the number is neither Infinity, -Infinity, nor NaN
// * Syntax: Number.isFinite(value)
// * return boolean value
console.log("Number.isFinite(value):");
console.log(Number.isFinite(1 / 0)); // false
console.log(Number.isFinite(0 / 0)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(2e12)); // true

// || 2. Number.isInteger()
// * 判断是否为整数
// * Syntax: Number.isInteger(value)
// * return boolean value
console.log("Number.isInteger(value):");
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(01)); // note true
console.log(Number.isInteger(0.1)); // false
console.log(Number.isInteger(10.0)); // true
console.log(Number.isInteger(Math.PI)); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger("10")); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger([1])); // false

// || 3. Number.isNaN()
// *
// * Syntax: Number.isNaN(value)
// * return boolean value
console.log("Number.isNaN():");
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN("hola")); // note false
console.log(Number.isNaN("100F")); // note false
console.log(Number.isNaN(30)); // false
console.log(Number.isNaN("NaN")); // note false
console.log(Number.isNaN(undefined)); // note false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN({})); // note false
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN("2.33")); // false
console.log(Number.isNaN()); // note false
console.log(Number.isNaN("")); // false
console.log(Number.isNaN(" ")); // false

// * parseFloat() convert strNum to float num
// * return num
console.log(Number.parseFloat("212"));
console.log(typeof Number.parseFloat("102.3"));
// * parseInt()
console.log(Number.parseInt("123"));
// * toFixed()
const mySize = 123.02;
console.log(mySize.toFixed(3));

// quiz ***********************************************************************
console.log(5 == 5.0);
console.log(5 === 5.0);
console.log(5 == "5");
console.log(5 == "5.0");
console.log(5 === "5");

console.log(Number.parseInt("2.33"));
console.log(Number.parseFloat("one"));
console.log(Number.parseInt("undefined"));
console.log(Number.parseInt(true));
console.log(Number.parseInt(false));
console.log(Number.parseFloat("2.33one"));
// quiz ***********************************************************************
