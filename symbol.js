// * Symbol
// * 只有2种原始类型 可用作对象的属性键：字符串类型、symbol类型
// * symbol值 表示 唯一的标识符，保证是唯一的
// * 即使我们创建了许多具有相同描述的 symbol，它们的值也是不同
// * 描述只是一个标签，不影响任何东西
// * symbol 是带有可选描述的“原始唯一值”
// * 所有 symbol 都具有 description 属性
{
  let idA = Symbol("id");
  let idB = Symbol("id");

  console.log(idA == idB); // false

  console.log(idA.toString()); // Symbol(id)
  console.log(idB.description); // id
}

// * symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。

// * 对象字面量中的symbol
{
  let id = Symbol("id");
  let user = {
    [id]: 12, // * 需要变量id的值作为键,而不是字符串'id'
    userName: "John",
  };
}

// * symbol 在 for...in 中会被跳过
// * Object.keys(user) 也会忽略它们。这是一般“隐藏符号属性”原则的一部分。
{
  let id = Symbol("id");
  let user = {
    [id]: 12,
    firstName: "John",
    lastName: "Smith",
    age: 20,
    hobbies: ["football", "baseball", "code"],
  };
  for (let key in user) {
    console.log(key);
  }
}

// * Object.assign() 会复制字符串和symbol属性
{
  let id = Symbol("id");
  let user = {
    [id]: 13,
    firstName: "Zoe",
  };
  let clone = Object.assign({}, user);
  console.log(clone);
}

// * 全局symbol
// * 全局symbol注册表
// * 每次访问相同名字的 symbol 时，返回的都是相同的 symbol
// * 要从注册表中读取（不存在则创建）symbol，使用 Symbol.for(key)
// * 该调用会检查全局注册表，如果有一个描述为 key 的 symbol，则返回该 symbol
// * 否则将创建一个新 symbol（Symbol(key)），并通过给定的 key 将其存储在注册表中
// * Symbol.for(key) 按名字返回一个symbol
{
  let idA = Symbol.for("id");
  let idB = Symbol.for("id");
  console.log(idA === idB); // true
}

// * 通过全局 symbol 返回一个名字，可以使用Symbol.keyFor(sym)
{
  // 通过 name 获取 symbol
  let symA = Symbol.for("name");
  let symB = Symbol.for("id");

  // 通过 symbol 获取 name
  console.log(Symbol.keyFor(symA));
  console.log(Symbol.keyFor(symB));
}
