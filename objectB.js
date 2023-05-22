// * 对象的引用、复制
// * 变量存储的是 对象的引用，即对象在内存中的地址，而不是具体对象本身。
// * 所以，一个对象变量被复制时，是引用被复制了，而不是对象本身又复制了一个
{
  let user = {
    firstName: "John",
    lastName: "Smith",
    gender: "Male",
    age: 45,
  };
  let admin = user; // * 复制的是引用，是对 对象的引用，不是对象本身。即有2个变量，分别是user, admin都指向了同一个对象
  // * 可以通过其中任意一个变量来访问、修改该对象
  admin.firstName = "Bob";
  console.log(user.firstName); // Bob
}

// * 比较是否为同一个对象
// * 即比较是否为同一个引用
// * 即通过 引用 来比较对象是否相等
{
  let a = {};
  let b = a;
  console.log(b === a); // true;
  let c = {};
  console.log(c === a); // false 虽然都是空对象，但是指向对象的引用并不相同，即不是同一个对象，而是2个独立的对象
}

// * 对象的克隆、合并
// * 方式1. 创建一个新的空对象，通过遍历已有对象的所有属性，在原始类型值的层面上复制这些值，以实现在现有对象结构的复制
{
  let user = {
    firstName: "Alex",
    lastName: "Black",
  };
  // a. 创建一个新空对象
  let clone = {};
  // b. 遍历 user 对象中的所有属性，且将其拷贝到 clone中
  for (let key in user) {
    clone[key] = user[key];
  }
  console.log(clone); // clone 是与 user 有相同内容，但各自完全独立的对象
  clone.firstName = "Ben";
  console.log(user.firstName); // Alex
  console.log(clone.firstName); // Ben
}
// * 方式2. 通过 Object.assign() 方法
// * Syntax: Object.assign(dest, [src1...srcN]);
// * dest: 目标对象，srcN：源对象
{
  let user = {
    firstName: "Frank",
    lastName: "English",
  };
  let clone = Object.assign({}, user);
  console.log(clone);
  clone.lastName = "Kay";
  console.log(clone.lastName); // Kay
  console.log(user.lastName); // English
}
// * 合并对象
{
  console.log("合并对象：");
  let user = {
    firstName: "John",
    lastName: "Kay",
  };
  let permissions = {
    idAdmin: true,
    canEdit: true,
  };
  let languages = {
    1: "EN",
    2: "CN",
    3: "JP",
  };
  Object.assign(user, permissions, languages);
  console.log(user);
  /* for (let key in user) {
    console.log(user[key]);
  } */
  // * 覆盖对象现有属性的值
  Object.assign(user, { firstName: "Eve" });
  console.log(user);

  // * 使用 Object.assign 代替 for..in 循环 进行简单克隆
  let anotherClone = Object.assign({}, user);
  console.log(anotherClone);
}

// * 深层克隆
// * 即假如 对象中包含一个对象属性，包含一个对 其他对象的引用
{
  let user = {
    userName: "John",
    age: 20,
    sizes: {
      height: 181,
      weight: 60,
    },
  };
  let clone = Object.assign({}, user);
  console.log(clone);
  clone.sizes.height = 175;
  clone.sizes.weight = 55;
  console.log(clone);
  console.log(user); // changed, but should not
  // * 应使用一个拷贝循环来检查源对象的所有属性，如果有一个属性是对象，应该复制它的结构，即所谓的 深拷贝
  // * 或直接使用 lodash 库的 _.cloneDeep(obj)
  /* 
  todo not right  
  let anotherClone = {};
  for (let key in user) {
    for (let prop in key) {
      anotherClone[key][prop] = user[key][prop];
    }
    anotherClone[key] = user[key];
  }
  console.log(anotherClone); 
 */
}
