/* 
检查语法
重要程度: 2
这段代码的结果是什么？
*/

let user = {
    name: "John",
    go: function () {
        alert(this.name)
    }
}

(user.go)()

// Me: 失去了this
(user.go)() // TypeError: cannot read property "name" of undefined


// But
// 严格模式、非严格模式下，一样的报错信息
(user.go)(); // TypeError: {(intermediate value)(intermediate value)} is not a function


/* 
出现此错误是因为在 user = {...} 后面漏了一个分号。
JavaScript 不会在括号 (user.go)() 前自动插入分号，所以解析的代码如下：
let user = { go:... }(user.go)()
这样的联合表达式在语法上是将对象 { go: ... } 作为参数为 (user.go) 的函数。
这发生在 let user 的同一行上，因此 user 对象是甚至还没有被定义，因此出现了错误

如果我们插入该分号，一切都变得正常：
    let user = {
    name: "John",
    go: function() { alert(this.name) }
};

(user.go)() // John
要注意的是，(user.go) 外边这层括号在这没有任何作用。
通常用它们来设置操作的顺序，但在这里点符号 . 总是会先执行，所以并没有什么影响。
分号是唯一重要的。
*/