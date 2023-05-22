// * Conditionals: If Statements
// * like waterfall
/*
 * if（表达式）｛｝
 * 计算 圆括号中 表达式 的值，且将 计算结果 转换为 Boolean
 * 
*/

let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  // * nested if statement
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}

console.log(grade);