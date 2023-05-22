// * try...catch
// * 仅对运行时的error有效
// * 即，只能处理有效代码中出现的错误
// * 运行时的错误，runtime error，or exception(异常)

// * No error occurred in the try{}, ignore catch block
{
  try {
    console.log("starting try block...");
    console.log("End try block");
  } catch (err) {
    console.log("An error occurred in the try block");
  }
}

// * An error occurred in the try{}, execute catch block
{
  try {
    console.log("starting try block...");
    const name = "John";
    name = "Joe";
    console.log("End try block");
  } catch (err) {
    console.log("There is an error occurred in the try{}.");
  }
}

// * try...catch 同步执行：如果在”计划的(scheduled)“代码中发生的异常，那么捕获失败，因为”运行时“

{
  //
  try {
    setTimeout(() => {
      // ...
    }, 1000);
  } catch (err) {
    console.log("Failure catch...no error catch");
  }
}
{
  //
  setTimeout(() => {
    try {
      // ...
    } catch (err) {
      console.log("Catch an error successfully.");
    }
  }, 1000);
}

// * Error Object
// * 发生错误时，JavaScript会生成一个包含有关此 error 详细信息的对象，然后将该error对象作为参数传递给catch
// * 对于所有内建的error，error对象具有2个主要属性：name, message
// * name: Error的名称
// * message: 关于error的详细文字描述
// * stack: 当前调用的栈
{
  try {
    const name = "John";
    name = "Adam";
  } catch (err) {
    console.log(err.name); // TypeError
    console.log(err.message); // invalid assignment to const 'name'
    console.log(err.stack); // @debugger...
  }
}

// * try...catch 使用场景：捕获JSON异常
{
  const myObj = {
    firstName: "John",
    lastName: "English",
    country: "Canada",
    age: 22,
  };
  // * JSON：用来解析从网络、服务器或是其他来源接收到的数据
  let sendJSON = JSON.stringify(myObj);
  // * JavaScript支持 JSON.parse(str) 方法来解析 JSON 编码的值
  let receiveJSON = JSON.parse(sendJSON); // parse(): str to object
  console.log(receiveJSON);
  console.log(receiveJSON.firstName);
}
{
  //
  let myJSON = { age: 30 };
  try {
    let user = JSON.parse(myJSON);
    console.log(user.name);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
  }
}

// * try...catch 使用场景：if an error, 发送一个新的网络请求

// * 自定义error
// * throw 操作符 生成一个 error对象：throw <error object>
{
  let myJSON = '{"age": "99"}';
  try {
    let user = JSON.parse(myJSON);
    console.log(user.name);
  } catch (err) {
    console.log();
  }
}
// * JavaScript内建的 标准error的 构造器：Error, SyntaxError, ReferenceError, TypeError...
// * 也可以使用它们来创建 error 对象
{
  let errorA = new Error(message);
  let errorB = new SyntaxError(message);
  let errorC = new ReferenceError(message);
  let errorD = new TypeError(message);
}

{
  let myJSON = "{'bad json'}";

  try {
    let user = JSON.parse(myJSON);
    if (!user.name) {
      throw new SyntaxError("There is no name property.");
    }
    console.log(user.name);
  } catch (err) {
    console.log("JSON Error: " + err.message);
  }
}

// * Rethrowing
// * catch 应该只处理它知道的 error，并“抛出”所有其他 error
// * 使用 instanceof 操作符判断错误类型
// * or 从 err.name 属性中获取错误的类名，所有原生的错误都有name属性
// * or 读取 err.constructor.name

// $ **************************************************************************
{
  const makeError = () => {
    try {
      const name = "John";
      name = "Adam";
    } catch (err) {
      console.log(err);
    }
  };
  makeError();
  // TypeError: invalid assignment to const 'name'
}

{
  const makeError = () => {
    try {
      const name = "Adam";
      name = "Hope";
    } catch (err) {
      console.error(err);
      console.warn(err);
      console.info(err);
      console.table(err);
      // different looking of error
    }
  };
  makeError();
}

{
  // error is an object, so it has properties
  const makeError = () => {
    try {
      const name = "John";
      name = "Jane";
    } catch (err) {
      console.error(err.name);
      console.error(err.message);
      console.error(err.stack); // * more details on error
    }
  };
  makeError();
}

// * custom error
{
  const makeError = () => {
    try {
      throw new customError("This is a custom error message...");
    } catch (err) {
      console.error(err.name);
      console.error(err.message);
      console.error(err.stack);
    }
  };
  makeError();

  function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
  }
}

// * generic built-in error constructor
{
  const makeError = () => {
    try {
      throw new Error("Generic built-in error can be customized.");
    } catch (err) {
      console.error(err.name);
      console.error(err.message);
      console.error(err.stack);
    }
  };
  makeError();
}

// * finally{} block
{
  const makeError = () => {
    let i = 1;
    while (i <= 5) {
      try {
        if (i % 2 !== 0) {
          throw new Error("Odd number...");
        }
        //
        console.log("\nEven number...");
      } catch (err) {
        console.log();
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
      } finally {
        console.log("...finally block");
        i++;
      }
    }
  };
  makeError();
}
