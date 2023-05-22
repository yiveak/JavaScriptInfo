// * Functions
// * 主要目的之一：避免代码重复。

// * Methods: built-in functions
Math.random();

// * 1.

function sum(a,b) {
  return a + b;
}
console.log(sum("2", 4));

function getUserNameEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameEmail("xxxxxx@gmail.com"));

// * 2. anonymous function, which means no name
// * function (){}
const myMin = function(a, b) {
  if (a >= b)
    return b;
  else
    return a;
}
console.log(myMin(123, 4));

// * 3. arrow function
// * (params) => {}
const myMax = (a, b) => {
  if ( a >= b)
    return a;
  else
    return b;
}
console.log(myMax(1, 10));

const toProperCase = (yourName) => {
  return yourName.charAt(0).toUpperCase()+yourName.slice(1).toLowerCase();
}
console.log(toProperCase("sAtaNiChI"));

// * 默认参数
// * 现代 JavaScript 引擎支持 空值合并运算符 ??，它在大多数假值（例如 0）应该被视为“正常值”时更具优势
{
  function showCount(count){
    console.log(count ?? "unknown");
  }
  showCount(0); // 0
  showCount(null); // unknown
  showCount(); // unknown
}


// quiz
// 2. 写一个函数 pow(x,n)，返回 x 的 n 次方。
{
  function myPow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  let x = +prompt("Please enter x:");
  let n = +prompt("Please enter n:");
  
  
  if(n<1) {
    alert(`Power ${n} is not supported, please enter a positive integer.`)
  }else {
    alert(myPow(x, n));
  }
}