// 对象方法 this

/* 
在 JavaScript 中，行为（action）由属性中的函数来表示。
作为对象属性的函数被称为 方法。
*/
let user = {
    name: "John",
    age: 20,
    sex: "Male",
};
// 使用函数表达式创建了一个函数，并将其指定给对象的 user.sayHi 属性。
user.sayHi = function () {
    console.log("Hello!");
}
// 调用对象的行为
user.sayHi();

// 使用预先声明的函数作为方法
// 首先，声明一个函数
function play() {
    console.log("Do you want to build snowman?");
}
// 然后，将其作为一个方法添加。注意不要加()，因为方法就直接调用了
user.paly = play;
user.paly();

/* ==================================================================================================== */

// 2. 方法简写

let user = {
    // ...
    sayHi: function () {
        console.log("Hello!");
    }
};

let user = {
    // ...
    sayHi() {
        console.log("Hello!") // 与 "sayHi: function()" 一样
    }
};

/* ==================================================================================================== */
// 3. 方法中的this
/* 
通常，对象方法需要访问对象中存储的信息才能完成其工作。
为了访问该对象，方法中可以使用 this 关键字。
this 的值就是在点之前的这个对象，即调用该方法的对象。
*/
let user = {
    name: "John",
    age: 18,
    sayHi() {
        // "this" 指的是“当前的对象”
        console.log(`Hey, I'm ${this.name}.`);
    }
}
user.sayHi();
// 技术上讲，也可以在不使用 this 的情况下，通过外部变量名来引用它
let user = {
    name: "John",
    age: 18,
    sayHi() {
        // // "user" 替代 "this"
        console.log(`I am ${user.age} year old.`)
    }
}
user.sayHi();
/* ***************
但这样的代码是不可靠的。如果我们决定将 user 复制给另一个变量，例如 admin = user，
并赋另外的值给 user，那么它将访问到错误的对象。 
*************** */
let user = {
    name: "John",
    age: 18,
    sayHi() {
        // // "user" 替代 "this"
        console.log(`I am ${user.age} year old.`)
    }
}
let admin = user;
// 重写让其更明显
user = null;

admin.sayHi(); // Uncaught TypeError: Cannot read property 'age' of null
// 在 sayHi() 使用了旧的 name 属性！报错！

// 如果我们在 alert 中以 this.name 替换 user.name，那么代码就会正常运行。
let user = {
    name: "John",
    age: 18,
    sayHi() {
        // // this 指的是当前的对象
        console.log(`I am ${this.age} year old.`)
    }
}
let admin = user;
// 重写让其更明显
user = null;
admin.sayHi();

/* ==================================================================================================== */

// 4. "this"不受限制
// JavaScript 中的 this 可以用于任何函数。
// this 的值是在代码运行时计算出来的，它取决于代码上下文。
function sayHi() {
    console.log(this.name);
}

// 相同的函数被分配给两个不同的对象，在调用中有着不同的 “this” 值
// 这个规则很简单：如果 obj.f() 被调用了，则 this 在 f 函数调用期间是 obj。
let user = {
    name: "John",
};
let admin = {
    name: "Admin"
};

function sayHi() {
    console.log(`I am ${this.name}.`);
}

// 在两个对象中使用相同的函数
user.sayHi = sayHi;
admin.sayHi = sayHi;

// 这两个调用有不同的 this 值
// 函数内部的 "this" 是“点符号前面”的那个对象
user.sayHi(); // I am John. (this == user)
admin.sayHi(); // I am Admin. (this == admin)

/* *************** 在没有对象的情况下调用：this == undefined
在这种情况下，严格模式下的 this 值为 undefined。如果我们尝试访问 this.name，将会报错。
在非严格模式的情况下，this 将会是 全局对象（浏览器中的 window）。这是一个历史行为，"use strict" 已经将其修复了。
通常这种调用是程序出错了。如果在一个函数内部有 this，那么通常意味着它是在对象上下文环境中被调用的。
*************** */
// 非严格模式
function play() {
    console.log(this);
}
play(); // Window {parent: Window, opener: null, top: Window, length: 1, frames: Window, …}

// 严格模式
"use strict"

function play() {
    console.log(this);
}
play(); // undefined

/* *************** 解除 this 绑定的后果
在 JavaScript 中，this 是“自由”的。
它的值是在调用时计算出来的，它的值并不取决于方法声明的位置，而是取决于在“点符号前”的是什么对象。
在运行时对 this 求值的这个概念既有优点也有缺点。
一方面，函数可以被重用于不同的对象。另一方面，更大的灵活性造成了更大的出错的可能。
*************** */

/* ==================================================================================================== */
// 5. 内部：引用类型
// “复杂”的方法调用可能会失去 this
let user = {
    name: "John",
    hi() {
        console.log(`Hi, my name is ${this.name}.`)
    },
    bye() {
        console.log("Byebye...");
    },
};
user.hi();

(user.name == 'John' ? user.hi : userbye)(); // (非严格模式下)Hi, my name is .
// 严格模式下：Uncaught TypeError: Cannot read property 'name' of undefined
/* 
最后一行中有一个三元运算符，用来决定调用 user.hi 还是 user.bye。在这种情况下，结果会是 user.hi。
该方法立即被括号 () 调用。但它不能正常工作！
可以看到该调用导致了错误，因为调用中的 "this" 为 undefined。
*/

(user.name == 'John') ? user.hi(): user.bye(); // Hi, my name is John.

/* 
另外，obj.method() 语句中有两个操作符：
1. 首先，点符号 '.' 取得这个 obj.method 属性。
2. 然后，括号 () 调用它。
*/
// this 是怎样被从第一部分传递到第二部分的呢？
// 如果把这些操作拆分开，那么 this 肯定会丢失：
"use strict"
let user = {
    name: "John",
    hi() {
        console.log(`Hi, my name is ${this.name}.`)
    },
}
let hi = user.hi;
hi(); // Uncaught TypeError: Cannot read property 'name' of undefined

/* 
这里 hi = user.hi 把函数赋值给变量，其后的最后一行代码是完全独立的，所以它没有 this。

为了让 user.hi() 有效，JavaScript 用了一个技巧 —— 这个 '.' 点符号返回的不是一个函数，而是一种特殊的 引用类型 的值。

引用类型是一种“规范中有的类型”。我们不能明确地指定它，但它被用在编程语言的内部。

引用类型的值是三部分的结合 (base, name, strict)，如下：

base 是对象。
name 是属性名。
在严格模式 use strict 下，strict 为真。
属性访问 user.hi 的结果不是函数，而是引用类型。在严格模式下的 user.hi 是：
// 引用类型值
(user, "hi", true)

括号 () 调用引用类型时，将接收关于该对象及其方法的所有信息，并且可以设定正确的 this 值（这里等于 user）。
引用类型是一种特殊的“中间”内部类型，用于将信息从点符号 . 传递到调用括号 ()。
像赋值 hi = user.hi 等其他的操作，将引用类型作为一个整体丢弃，只获取 user.hi（一个函数）的值进行传递。
因此，任何进一步的操作都会“失去” this。
所以，只有使用点符号 obj.method() 或方括号语法 obj[method]()调用函数时，this 的值才被正确传递。
*/

/* ==================================================================================================== */

// 6. 箭头函数没有自己的 “this”
/* 
箭头函数有些特别：它们没有自己的 this。如果我们在这样的函数中引用 this，this 值取决于外部“正常的”函数。
这是箭头函数的一个特性，当我们并不想要一个独立的 this，反而想从外部上下文中获取时，它很有用。
*/
let user = {
    firstName: "Ilya",
    sayHi() {
        let arrowF = () => console.log(this.firstName);
        arrowF();
    }
};

user.sayHi(); // Ilya