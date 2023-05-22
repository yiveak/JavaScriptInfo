// * Objects
// * key: value pairs in curly braces(花括号)

// * syntaxes
// * 1. constructor(构造函数)
{
  const myObjectA = new Object();
  console.log(typeof myObjectA);
  console.log(myObjectA);
}
// * 2. literal(字面量) - more usually
{
  const myObjectB = {};
  console.log(typeof myObjectB);
  console.log(myObjectB);
}

// * key: value pairs 键值对
const myObj = {
  firstName: "John", //  key "firstName", value "John"
  lastName: "English", // by key "lastName" store value "English"
  age: 32,
  language: "English",
  country: "Canada",
  hobbies: ["baseball", "tennis", "football"],
  beverage: {
    morning: "Coffee",
    afternoon: "Tea",
    night: "Tequila",
  },
  action: function () {
    // return "Hola";
    return `Time for ${this.beverage.night}.`;
  }, // * 最后一个属性应以 , 结尾 --- 尾随(trailing)/悬挂(hanging)逗号
};

// * keys: properties of object
// * property values are accessible using the dot notation
// * 使用 . 访问对象某个属性的值
// ! . 要求 key 是有效的变量标识符，即不包含空格、不以数字开头、也不包含特殊字符（允许$ _）
console.log(myObj.age);

console.log(myObj.action); // ?
console.log(myObj.action());

// * 通过赋值操作改变值，或添加新的属性
// * 1. 改变值
myObj.age = 23;
console.log(myObj.age);
// * 2. 添加新的属性，赋值 or 不赋值
myObj.isAdmin;
console.log(myObj.isAdmin); // undefined
myObj.isAdmin = false;
console.log(myObj.isAdmin); // false

// * 删除对象的属性 property
delete myObj.isAdmin;
console.log(myObj.isAdmin); // ! undefined

// * 多词属性名必须添加""
{
  console.log("多词属性名：");
  const myObjectC = {
    "First Name": "John",
  };
  // * 通过 [] 来访问对象的多词属性
  // ! [] 可用于访问 任何字符串
  console.log(myObjectC["First Name"]);
  myObjectC["Last Name"] = "Smith";
  console.log(myObjectC["Last Name"]);
  // ! [] 可通过 任意表达式 来获取属性名 --- more flexible, powerful
  // * 可以是 程序计算得到 or 根据用户的输入得到
  // * 计算属性
  // let age = prompt("How old are you?");
  // myObjectC[age] =
}

// * 属性值简写/缩写
// * 属性名 = 变量名
{
  let user = {
    firstName: "", // names: names;
    age: 20,
  };
}

// * 属性名称限制
// * 无限制，可以是保留字
// * 可以是任何字符串 or symbol
// * 如果是其他类型，则会自动转换为字符串
{
  let obj = {
    0: "hola",
  };
  console.log(obj[0]);
}

// * in --- 检测对象的某个属性是否存在
// * syntax: "key" in object
// ! 可以访问任何属性，即使属性不存在，也不会报错。
// * 读取不存在的属性，return undefined
{
  let user = {};
  console.log("name" in user); // false
  // * 如果省略引号，那么 in 的左边应是一个变量，包含要判断的实际属性名
  user.age = 20;
  let key = "age";
  console.log(key in user); // true
}

// * for..in loops
// * 遍历 对象所有的键key
// * syntax: for(key in object){...}
{
  let user = {
    userName: "John",
    age: 20,
    hobbies: ["football", "code"],
    hola: () => {
      console.log(`Hello, ${this.userName}.`);
    },
  };

  for (let key in user) {
    // console.log(key);
    console.log(user[key]);
  }
}

// * 获取对象属性的顺序是和属性添加时的顺序相同吗？
// * 有特别的顺序：'整数属性' 会被进行排序，其他属性则按照创建的顺序显示。
// * 如果属性名不是整数，那它们就按照创建时的顺序来排序
{
  let codes = {
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    1: "USA",
  };
  for (let key in codes) {
    console.log(key); // 1, 41, 44, 49
  }
}

// quiz 1. 写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。
{
  function isEmpty(obj) {
    for (let key in obj) {
      // ! 如果进到loop里面，说明有属性
      return false;
    }
    return true;
  }
  let user = {};
  console.log(isEmpty(user)); // true
  user.age = 20;
  console.log(isEmpty(user)); // false
}

/* 
 quiz 2. 求出工资总和，将计算结果保存到变量sum。从所给的信息来看，结果应该是 390。如果 salaries 是一个空对象，那结果就为 0。
 let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
*/
{
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };
  function sumSalaries(obj) {
    let sum = 0;
    for (let key in obj) {
      sum += obj[key];
    }
    return sum;
  }
  console.log(sumSalaries(salaries));
  let salariesNone = {};
  console.log(sumSalaries(salariesNone));
}

// quiz 3.创建一个 multiplyNumeric(obj) 函数，把 obj 所有的数值属性值都乘以2。
/* 
 * 在调用之前
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

 * 调用函数之后
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
 * 注意 multiplyNumeric 函数不需要返回任何值，应就地修改对象。
*/
{
  let menu = {
    width: 200,
    height: 300,
    title: "My menu",
  };

  function multiplyNumeric(obj) {
    for (let key in obj) {
      // if (typeof obj[key] == 'number') {
      if (!isNaN(obj[key])) {
        // console.log(key);
        obj[key] *= 2;
      }
    }
  }

  multiplyNumeric(menu);
}
