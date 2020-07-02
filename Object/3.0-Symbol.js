/* 
对象的属性键只能是字符串类型或者 Symbol 类型。
“Symbol” 值表示唯一的标识符。
*/

// 1. 可以使用 Symbol() 来创建这种类型的值
let id = Symbol();
console.log(id); // Symbol()

/* ==================================================================================================== */

// 2. 创建时，可以给 Symbol 一个描述（也称为 Symbol 名），这在代码调试时非常有用
// id 是描述为 "id" 的 Symbol
let id = Symbol("id");
console.log(id); // Symbol(id)

/* ==================================================================================================== */

// 3. Symbol 保证是唯一的。即使创建了许多具有相同描述的 Symbol，它们的值也是不同。描述只是一个标签，不影响任何东西。
// 两个描述相同的 Symbol —— 它们不相等：
let id2 = Symbol('id');
let id3 = Symbol('id');
console.log(id2 == id3); // false

/* ==================================================================================================== */

// 4. JavaScript 中的大多数值都支持字符串的隐式转换。但Symbol 比较特殊，它不会被自动转换。
// 这是一种防止混乱的“语言保护”，因为字符串和 Symbol 有本质上的不同，不应该意外地将它们转换成另一个。
let id = Symbol("id");
alert(id); // 类型错误：无法将 Symbol 值转换为字符串。alert()方法将传入的参数以字符串的形式输出显示

/* ==================================================================================================== */

// 5. 显示一个Symbol
// 方式1.
let id = Symbol("id");
alert(id.toString()); // Symbol(id)
// 方式2. 获取 symbol.description 属性，只显示描述（description）
alert(id.description); // id

/* ==================================================================================================== */

// 6.“隐藏”属性
/* 
Symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。
即通过Symbol键———— Symbol("id") 作为键
*/
// 如果我们使用的是属于第三方代码的 user 对象，想要给它们添加一些标识符，即可以通过Symbol键
let user = {
    name: "John",
    age: 24,
};
let id = Symbol('id');
user[id] = 1;
console.log(user[id]); // 使用 Symbol 作为键来访问数据

// 使用 Symbol("id") 作为键，比起用字符串 "id" 来有什么好处呢？
/* 
因为 Symbol 总是不同的，即使它们有相同的名字。
、如果我们想要向“属于”另一个脚本或者库的对象添加一个属性，我们可以创建一个 Symbol 并使用它作为属性的键。
Symbol 属性不会出现在 for..in 中，因此它不会意外地被与其他属性一起处理。
并且，它不会被直接访问，因为另一个脚本没有我们的 symbol。因此，该属性将受到保护，防止被意外使用或重写。
*/

/* ==================================================================================================== */

// 7. 字面量中的Symbol
// 如果我们要在对象字面量 {...} 中使用 Symbol，则需要使用方括号把它括起来
let id = Symbol('id');
let user = {
    name: "John",
    age: 24,
    [id]: 229, // 而不是 id:229,
}

console.log(user); // {name: "John", age: 24, Symbol(id): 229}
for (let key in user) console.log(key); // name age 未任何输出
/* 
Object.keys(user) 也会忽略它们。这是一般“隐藏符号属性”原则的一部分。
如果另一个脚本或库遍历我们的对象，它不会意外地访问到符号属性。
*/

// 使用 Symbol 任务直接访问
console.log("Direct: " + user[id]); // Direct: 229


// Object.assign() 会同时复制字符串和 symbol 属性
let id = Symbol("id");
let user = {
    name: "John",
    [id]: 110,
}
// Ojbect.assign(复制后的目标对象，被复制的对象)
let clone = Object.assign({}, user);
console.log(clone); // {name: "John", Symbol(id): 110}
console.log(clone[id]); // 110

/* ==================================================================================================== */

// 8. 全局Symbol
/* 
通常所有的 Symbol 都是不同的，即使它们有相同的名字(描述)。但有时想要访问获取名字相同的 Symbol 具有相同的实体。
例如，应用程序的不同部分想要访问的 Symbol "id" 指的是完全相同的属性。
为了实现这一点，这里有一个 全局 Symbol 注册表。
我们可以在其中创建 Symbol 并在稍后访问它们，它可以确保每次访问相同名字的 Symbol 时，返回的都是相同的 Symbol。
要从注册表中读取（不存在则创建）Symbol，请使用 Symbol.for(key)。
该调用会检查全局注册表，如果有一个描述为 key 的 Symbol，则返回该 Symbol。
否则，将创建一个新 Symbol（Symbol(key)），并通过给定的 key 将其存储在注册表中。
注册表内的 Symbol 被称为 全局 Symbol。
*/
// 从全局Symbol注册表中读取，如果不存在，就新建这个Symbol 
let id = Symbol.for("id");
// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");
// 相同的Symbol
console.log(id === idAgain); // true

/* ==================================================================================================== */

// 9. Symbol.keyFor
/* 
对于全局 Symbol，不仅有 Symbol.for(key) 按名字返回一个 Symbol，
还有一个反向调用：Symbol.keyFor(sym)，它的作用完全反过来：通过全局 Symbol 返回一个名字。
Symbol.keyFor 内部使用全局 Symbol 注册表来查找 Symbol 的键。所以它不适用于非全局 Symbol。
如果 Symbol 不是全局的，它将无法找到它并返回 undefined。
*/
// 通过name获取Symbol
let id = Symbol.for("id");
// 通过Symbol获取name
console.log(Symbol.keyFor(id)); // id

// 全局Symbol 局部Symbol
// 任何 Symbol 都具有 description 属性。
let globalSym = Symbol.for("name"); // 全局Symbol
let localSym = Symbol("name");

console.log(Symbol.keyFor(globalSym)); // name
console.log(Symbol.keyFor(localSym)); // undefined

console.log(localSym.description); // name

/* ==================================================================================================== */

// 10. 系统Symbol
/* 
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
……等等。
使用 Symbol.iterator 来进行 迭代 操作。
Symbol.toPrimitive 允许我们将对象描述为原始值转换。
*/

/* ==================================================================================================== */

/* 
从技术上说，Symbol 不是 100% 隐藏的。有一个内置方法 Object.getOwnPropertySymbols(obj) 允许我们获取所有的 Symbol。
还有一个名为 Reflect.ownKeys(obj) 的方法可以返回一个对象的 所有 键，包括 Symbol。所以它们并不是真正的隐藏。
*/