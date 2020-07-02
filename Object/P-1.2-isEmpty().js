/* 
检查空对象
重要程度: 5
写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。

应该像这样：

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

function isEmpty(obj) {
    for (let key in obj) {
        // 如果进到循环里面，说明有属性
        return false;
    }
    return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false