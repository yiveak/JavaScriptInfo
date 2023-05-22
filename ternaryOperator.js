// * Conditionals: Ternary Operator 三元操作符
// * condition ? ifTure : ifFalse;
/*
 * let result = condition ? value1 : value2;
 * 计算condition条件结果，如果结果为真，那么就返回value1，否则就返回value2  
*/

let soup = "Chicken Noodle Soup";
soup = "";

let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response);

let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you."
  : soup
  ? `Yes, we have ${soup}.`
  : "Sorry, no soup today.";
console.log(soupAccess);

// nested
let testScore = 59;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My test grade is: ${myGrade}.`);
