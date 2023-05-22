// * || && ! ??
// * 操作数可以是任意类型的值
// ! && 的优先级 高于 ||
// ! ! 的优先级在所有逻辑运算符中是最高的，即总是第1个执行

// * 1. || 逻辑或

// * 或运算 寻找 第1个真值
// * 1. 获取变量列表或表达式中的第1个真值
{
  let firstName = "";
  let lastName = "";
  let nickName = "satanichi";
  console.log(firstName || lastName || nickName || "Anonymous");
}
// * 2. 短路求值 short-circuit evaluation
/*
 或运算符 || 的另一个用途是所谓的“短路求值”。
 
 这指的是，|| 对其参数进行处理，直到达到第一个真值，然后立即返回该值，而无需处理其他参数。

 如果操作数不仅仅是一个值，而是一个有副作用的表达式，例如变量赋值或函数调用，那么这一特性的重要性就变得显而易见了。
*/
{
  true || console.log("hola, true");
  false || console.log("hola, false");
}

// * 2. && 逻辑与
// * ＆＆ 寻找 第１个假值
{
  console.log("&&:");
  console.log(1 && 0); // 0
  console.log(1 && 5); // 5
  console.log(null && 5); // null
  console.log(0 && "no matter what"); // 0
  console.log(1 && 2 && null && 3); // null
  console.log(1 && 2 && 3); // 3
}

// * 3. ! 逻辑非
// * result  = !value;
/*
  step 1. 将 操作数 转化为 布尔类型：true or false
  step 2. 返回相反的值
*/

// * 2个!! 用来 将 某个值 转化为布尔类型的值
// * 任意值 到 布尔值 的转化
{
  console.log(typeof !!1);
  console.log(!!0);
}

// quiz
{
  console.log("Quiz:");
  console.log(null || 2 || undefined); // 逻辑或 寻找第1个真值 即return 2
  console.log(console.log(1) || 2 || console.log(3)); // return 1 ❌
  console.log();
  console.log(1 && null && 2); // 逻辑与 寻找第1个假值 即return null
  console.log(console.log(1) && console.log(2)); // return 1 2 ❌
  console.log();
  console.log(null || (2 && 3) || 4); // return 3
}

// 检查 age 是否位于 14 到 90 的闭区间
{
  let age = +prompt("Please enter your age:");
  if (age >= 14 && age <= 90) {
    console.log("Conclusion!");
  } else {
    console.log("See you again.");
  }
}
// 检查 age 是否不位于 14 到 90 的闭区间。
// 创建两个表达式：第一个用非运算 !，第二个不用。
{
  let age = +prompt("Please enter your age:");
  if (!(age >= 14 && age <= 90)) {
  }
  if (age < 14 || age > 90) {
  }
}

/*
  登录校验
  重要程度: 3

  实现使用 prompt 进行登录校验的代码。

  如果访问者输入 "Admin"，那么使用 prompt 引导获取密码，如果输入的用户名为空或者按下了 Esc 键 —— 显示 “Canceled”，如果是其他字符串 —— 显示 “I don’t know you”。

  密码的校验规则如下：

    如果输入的是 “TheMaster”，显示 “Welcome!”，
    其他字符串 —— 显示 “Wrong password”，
    空字符串或取消了输入，显示 “Canceled.”。

*/

{
  let user = prompt("Please enter your account:");
  if (user === "Admin") {
    let pwd = prompt("Please enter your password:");
    if (pwd === "TheMaster") {
      alert("Welcome!");
    } else if (pwd === "" || pwd === null) {
      alert("Canceled.");
    } else {
      alert("Wrong password.");
    }
  } else if (user === "" || user === null) {
    alert("Canceled.");
  } else {
    alert("Sorry, I don't know you.");
  }
}
