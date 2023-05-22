// * 可选链 ?.
// * 特殊的语法结构
// * 如果一个属性既不是null，也不是undefined，那么它就是'存在'的
// * value?.prop:
// * 如果 value 存在，则结果与 value.prop 相同
// * 否则，当 value 为 undefined/null 时，则返回 undefined
// * 安全地访问嵌套的属性
{
  let user = {};
  // console.log(user.address.street); // TypeError: Cannot read properties of undefined (reading 'street')
  console.log(user?.address?.street); // return undefined
}

// * 即使对象不存在
// * ?. 语法使其前面的值成为可选值，但不会对其后面的起作用
{
  let user = null;
  console.log(user?.address); // undefined
  console.log(user?.address.street); // undefined
}

// * 可选链仅适用于已声明的变量
{
  //user?.address; // ReferenceError: user is not defined
}

// * 短路效应
// * 如果 ?. 左边部分不存在，就会立即停止运算
// * 即使 ?. 右边有任何进一步的函数调用或操作，均不会执行
{
  let user = null;
  let x = 0;
  user?.hello(x++); // undefined
  console.log(x); // 0
}

// * 其他变体
// * ?.()  ?.[]
// * ?.() 调用一个可能不存在的函数
{
  let userAdmin = {
    admin() {
      console.log("Hello, Admin.");
    },
  };
  let userGuest = {};
  userAdmin.admin?.(); // Hello, Admin.
  userGuest.admin?.(); // no return
}
// * ?.[] 调用一个可能不存在的属性
{
  let key = "firstName";
  let user = {
    firstName: "John",
  };
  let anotherUser = null;
  console.log(user?.[key]); // John
  console.log(anotherUser?.[key]); // undefined
}
// * ?. 跟 delete 使用
{
  let user = {
    firstName: "Bob",
    lastName: "Smith",
  };
  delete user?.firstName;
  console.log(user.firstName);
  console.log(user); // { lastName: 'Smith' }
}

// * ?. 安全地读取或删除，但不能写入
{
  let user = null;
  // user?.name = "John"; // SyntaxError: Invalid left-hand side in assignment
}

// * 可选链 ?. 语法的3种形式
// * 1. obj?.prop 如果obj存在，则返回obj.prop，否则返回undefined
// * 2. obj?.[prop] 如果obj存在，则返回obj[prop]，否则返回undefined
// * 3. obj.method?.() 如果obj.method存在，则调用obj.method()，否则返回undefined
