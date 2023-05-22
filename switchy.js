// * Conditionals: Switch Statements
// * switch 语句可以替代多个 if 判断。
// * switch 语句有至少一个 case 代码块和一个可选的 default 代码块。
// * 如果没有 break，程序将不经过任何检查就会继续执行下一个 case。
// * 任何表达式都可以成为 switch/case 的参数
// ! 严格相等检查
/* *strict match
  switch (expression or value) {
    case choice1:
      run this code
      break;
    case choice2:
      run this code;
      break;
    default:
      run this code;
  }

*/

//switch (1) {
switch (Math.floor(Math.random() * 4 + 1)) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("No match");
}


// * “case” 分组
// * 共享同一段代码的几个 case 分支可以被分为一组
// * 其实是 switch 语句没有 break 时的副作用
{
  switch (2) {
    case 1: 
      console.log(1);
      break;
    case 2:
    case 3:
      console.log("Shared");
      break;
    case 4:
      console.log(4);
      break;
    default:
      console.log("hola");
  }
}

