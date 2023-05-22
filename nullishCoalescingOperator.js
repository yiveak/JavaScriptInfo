// * 空值合并运算符 ??
// * ?? || 的优先级相同
// ! 出于安全原因，JavaScript 禁止将 ?? 运算符与 && 和 || 运算符一起使用，除非使用括号明确指定了优先级。
/*
 * 当一个值既不是 null ，也不是 undefined，那么认其为 已定义的（defined）
 * ａ ?? b 的结果是：
 * 如果 a 是已定义的，那么return a
 * 如果 a 不是已定义的，那么return b
 * 也就是说：如果第一个参数不是 null/undefined，则 ?? 返回第一个参数。否则，返回第二个参数。
 * 它只是一种获得两者中的第一个“已定义的”值的不错的语法
*/

/*  
{
  result = a ?? b;
  result = a !== null && a !== undefined ? a : b;
}
*/


// ! ?? 的常见使用场景是提供默认值
{
  // 当 height 的值为 null 或 undefined 时，将 height 的值设置为 100
  height = height ?? 100;
}

// * 使用 ?? 从一系列的值中选择出第一个非 null/undefined 的值
/*
假设我们在变量 firstName、lastName 或 nickName 中存储着一个用户的数据。
如果用户决定不填写相应的值，则所有这些变量的值都可能是未定义的。
我们想使用这些变量之一显示用户名，如果这些变量的值都是 null/undefined，则显示 “匿名”。
*/
{
  let firstName = null;
  let lastName = null;
  let nickName = "John";
  // 显示第1个已定义的值
  console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // return John
}

// * ?? vs ||
// * 区别：|| 返回的是第1个真值，而 ?? 返回的是第1个已定义的值

