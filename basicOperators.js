/*
 1. unary 一元运算符：1个操作数 等于，负号
 2. binary 二元运算符：2个操作数 加减乘除取余
 3. operand 运算元：运算符操作的对象，比如2+2，其中2，2即是operands
 4. operator 运算符
 5. operator precedence 运算符优先级
*/

// * + 连接字符串
// * if any of the operands is a string, then the other one is converted to a string too
// * num + str, return str; 自动进行强制类型转换
console.log(`2 + 3 + "3":`, 2 + 3 + "3");
console.log(`"2" + 3 + 3:`, "2" + 3 + 3);

// * +, unary
// * if the operand is not a number, the unary plus converts it into a number
{
  // no effect on numbers
  console.log(+1);
  console.log(+-1);
  // converts non-numbers
  console.log(+"233");
  console.log(+true);
  console.log(+"");
}

{
  let apples = "12";
  let orange = "21";
  console.log(+apples + +orange);
}

// * Chaining assignments 链式赋值
{
  let a, b, c;
  a = b = c = 233;
  console.log(a, b, c);
}

// * modify-in-plac
// * +=，-=，*=，/=
{
  let n = 3;
  console.log((n *= 2 + 2));
}

// * increment/decrement 自加/自减
// * ++, --
// * 只能应用于变量，如果5++，return error
{
  let count = 0;
  count++;
  // console.log(count++); // return old value
  console.log(count);
  count--;
  // console.log(count--);
  console.log(count);
}

/*
 * 前置形式：++counter
 * 后置形式：counter++
 * 都将变量counter+1
 * ++counter 这个表达式返回的值是 新值 即counter+1后的值
 * counter++ 这个表达式返回的值是 旧值 即counter的值
 */
{
  let counter = 1;
  console.log(2 * counter++); // return 2
}
{
  let counter = 1;
  console.log(2 * ++counter); // return 4
}

// * Bitwise operators 位运算符
// * 与&，或|，异或^，非~，左移<<，右移>>，无符号右移>>>

// * Comma 逗号运算符
// * 处理多个语句
// * 优先级非常低，比 = 还低
{
  let a = (1 + 2, 10 + 20);
  console.log(a); // 每个语句都运行了，但是只有最后的语句的结果会返回。
}
{
  for(a = 1, b = 2, c = a * b; a < 10; a++){

  }
}

// quiz
{
  console.log("Quiz:");
  console.log(""+1+0); // 1 ❌ 係 拼接字符串 "10"
  console.log(""-1+0); // -1
  console.log(true+false); // 1
  console.log(6/"3"); // 2
  console.log("2"*"3"); // 6
  console.log(4+5+"px"); // NaN ❌ "9px"
  console.log("$"+4+5); // NaN ❌ 係 拼接字符串 "$45"
  console.log("4"-2); // 2
  console.log("4px"-2); // NaN
  console.log("   -9  "+5); // -4 ❌ 係 拼接字符串 "   -9  5"
  console.log("   -9  "-5); // -14
  console.log(null+1); // NaN ❌ 1 Number(null) = 0;
  console.log(undefined+1); // NaN Number(undefined) = NaN
  console.log("\t \n"-2); // -2 使空字符串转换为0，Number("\t \n") = 0;
}

{
  let a = prompt("First number?", 1);
  let b = prompt("Second number?", 2);
  console.log(+a + +b);
}