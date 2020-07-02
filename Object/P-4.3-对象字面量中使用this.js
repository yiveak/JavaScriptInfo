/* 
在对象字面量中使用 "this"
重要程度: 5
这里 makeUser 函数返回了一个对象。
访问 ref 的结果是什么？为什么？
*/

function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

console.log(user.ref.name); // 结果是什么？

// undefined this指向的是user.ref， 而ref指向的是user， ref里面没有name属性，但是可以访问到