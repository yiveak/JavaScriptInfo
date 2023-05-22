// * 构造器 操作符new
// * 构造函数 --- 常规函数
// * 2个约定：a. 以大写字母开头；b. 只能由 new 操作符来执行
// * 使用 new 来调用，意味着在开始时创建了空的this，并在最后返回填充了值的this
// * 构造器的主要目的 --- 实现可重用的对象创建代码
// * 从技术上讲，任何函数（除了箭头函数，它没有自己的 this）都可以用作构造器
{
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  let user = new User("John");
  console.log(user.name);
  console.log(user.isAdmin);
  console.log(user);
  console.log(typeof user);
}

// * new function(){...}
// * 如果我们有许多行用于创建单个复杂对象的代码，可以将其封装在一个立即调用的构造函数中
// * 这个构造函数不能被再次调用，因为它不保存在任何地方，只是被创建和调用
// * 因此，这个技巧旨在封装构建单个对象的代码，而无需将来重用
{
  let user = new (function () {
    this.name = "John";
    this.isAdmin = false;
    //...
  })(); // * 后面的()表示函数立即调用
}

// quiz 2. from objectC.js quiz 2 使用 new 改写
{
  function Calculator() {
    this.read = function () {
      this.a = +prompt("Please enter a number:", 0);
      this.b = +prompt("Please enter another number:", 0);
    };
    this.sum = function () {
      return this.a + this.b;
    };
    this.mul = function () {
      return this.a * this.b;
    };
  }
  let calculator = new Calculator();
  calculator.read();
  console.log("Sum = " + calculator.sum());
  console.log("Mul = " + calculator.mul());
}
