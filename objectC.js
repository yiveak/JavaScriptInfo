// * this

// quiz 1.
/* 
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // 结果是什么？
*/


// quiz 2. 创建一个有三个方法的 calculator 对象
/* 
  read() 提示输入两个值，并将其保存为对象属性，属性名分别为 a 和 b。
  sum() 返回保存的值的和。
  mul() 将保存的值相乘并返回计算结果。
*/
{
  const calculator = {
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
    read() {
      this.a = +prompt("Please enter an number:", 0);
      this.b = +prompt("Please enter another number:", 0);
    },
  };
  calculator.read();
  console.log(calculator.sum());
  console.log(calculator.mul());
}

// quiz 3. 链式调用 return this
// * 每次调用后返回这个对象本身
