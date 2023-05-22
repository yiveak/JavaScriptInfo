//  * loops
// * while, do..while, for(..; ..; ..;)
// * 遍历 对象属性： for..in
// * 遍历 数组、可迭代对象：for..of, iterables
// ! 任何表达式或变量都可以是循环条件，而不仅仅是比较
// * 在 while 中的循环条件会被计算，计算结果会被转化为布尔值

let myName = "satanichi";

// * 1. while() {}
{
  let i = 3;
  while (i) {
    console.log(i);
    i--;
  }
}

// * 2. do {} while ();
// * 循环首先执行循环体，然后检查条件，当条件为真时，重复执行循环体。
// * at least once
// * 这种形式的语法很少使用，除非你希望不管条件是否为真，循环体至少执行一次。通常更倾向于使用另一个形式：while(…) {…}

// * 3. for
/*
 * for(begin; condition; step) {...}
 * for 循环的任何语句段都可以被省略。删除所有内容，从而创建一个无限循环
 * “计数”变量 i 是在循环中声明的。这叫做“内联”变量声明。这样的变量只在循环中可见。
 */
/*
for (let i = 0; i <= myName.length; i++) {
  console.log(myName.charAt(i));
}
*/
// || i <= myName.length, last output a blank
// || so should be i < myName.length
for (let i = 0; i < myName.length; i++) {
  console.log(myName.charAt(i));
}

// * 4. break
// * 根据需要，"无限循环 + break" 的组合非常适用于不必在循环开始/结束时检查条件，但需要在中间甚至是主体的多个位置进行条件检查的情况。

// * 5. continue
// * 继续下一次迭代
// * 不会停掉整个循环，而是停止当前这一次迭代，并强制启动新一轮循环（如果条件允许的话）
{
  // 输出0-10范围内的奇数
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
  }
}
// ! continue 指令利于减少嵌套
// ! 禁止 break/continue 在 ‘?’三元运算符 的右边

// * 6. break/continue标签
// * 有时候我们需要一次从多层嵌套的循环中跳出来
// * 标签是 break/continue 跳出嵌套循环以转到外部的唯一方法
// * 标签 是在循环之前带有冒号的标识符：
/*
{
  labelName: for(..;..;..;){...}
}
break <labelName> 语句跳出循环
*/
{
  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords:${i},${j}`, "");
      // if input field is '' or Esc, then break this loop
      if (!input) break outer;
      //
    }
  }
  console.log("Done.");
}

// * break 指令必须在代码块内。从技术上讲，任何被标记的代码块都有效
// * continue 只有在循环内部才可行

// quiz
// 1. 使用 for 循环输出从 2 到 10 的偶数。
{
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
    /* or
    if(i % 2 != 0) continue;
    console.log(i);
    */
  }
}

/* 2.
编写一个提示用户输入大于 100 的数字的循环。如果用户输入其他数值 —— 请他重新输入。

循环一直在请求一个数字，直到用户输入了一个大于 100 的数字、取消输入或输入了一个空行为止。

在这我们假设用户只会输入数字。在本题目中，不需要对非数值输入进行特殊处理。
*/
{
  let num;
  do {
    num = prompt("Enter a number greater than 100?");
  } while (num <= 100 && num);
}

// 3. 写一个可以输出 2 到 n 之间的所有素数的代码。
{
  let n = +prompt("Please enter a number:");
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        continue nextPrime;
      }
     
    }
    console.log(i);
  }
}
