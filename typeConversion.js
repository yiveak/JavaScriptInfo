// || 1. String Conversion
// * Call the String(value) function to convert a value to a string.
{
  let value = true;
  console.log(typeof value);
  value = String(value);
  console.log(typeof value);
  let a = null;
  console.log(typeof a);
  a = String(a);
  console.log(typeof a);
  console.log(typeof String(undefined));
}

// || 2. Numeric Conversion
// * 在mathematical functions、表达式（expressions）中 自动进行number类型转换
// * If the string is not a valid number, the result of such a conversion is NaN.
{
  console.log("6" / "3");
}
// * Number(value) 显式转换（explicity convert）
{
  let str = "123";
  console.log(typeof str, "\n");
  let num = Number(str);
  console.log(typeof num, "\n");
  // $ 1. Number(NaN)
  console.log("Number(NaN):", Number(NaN));
  console.log("typeof Number(NaN):", typeof Number(NaN), "\n");
  // $ 2. Number(undefined)
  console.log("Number(undefined):", Number(undefined)); // ?
  console.log("typeof Number(undefined):", typeof Number(undefined), "\n");
  // $ 3. Number(null)
  console.log("Number(null):", Number(null));
  console.log("typeof Number(null)", typeof Number(null), "\n");
  // $ 4. String includes white-spaces
  console.log(`Number(""):`, Number(""));
  console.log(`Number(" "):`, Number(" "));
  console.log(`Number(" 13 ")`, Number(" 13 "));
  console.log(`Number("1 23"):`, Number("1 23"), "\n");
}

// || 3. Boolean Conversion
// * true 1, false 0
// * Boolean(value)
// * values that are intuitively(直观上地) "empty": 0, an empty string, null, undefined, NaN become false
// * other values become true
{
  console.log("Boolean(1):", Boolean(1));
  console.log("Boolean(0):", Boolean(0));
  console.log(`Boolean(""):`, Boolean(""));
  console.log(`Boolean(null):`, Boolean(null));
  console.log(`Boolean(undefined):`, Boolean(undefined));
  console.log("Boolean(NaN):", Boolean(NaN));
}
