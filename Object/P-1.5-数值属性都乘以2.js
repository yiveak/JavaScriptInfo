/* 
数值属性都乘以 2
重要程度: 3
创建一个 multiplyNumeric(obj) 函数，把 obj 所有的数值属性都乘以 2。
例如：
// 在调用之前
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// 调用函数之后
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
注意 multiplyNumeric 函数不需要返回任何值，它应该就地修改对象。
P.S. 用 typeof 检查值类型。
*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        // let typeCheck = typeof obj[key];
        // if(typeCheck === 'number'){
        if (!isNaN(obj[key])) {
            obj[key] *= 2;
        }
    }
    // 无需return
    // return obj;
}

multiplyNumeric(menu);
console.log(menu);