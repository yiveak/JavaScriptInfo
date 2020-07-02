/* 
解释 "this" 的值
重要程度: 3
在下面的代码中，我们试图连续调用 obj.go() 方法 4 次。
但是前两次和后两次调用的结果不同，为什么呢？
*/

let obj, method;

obj = {
    go: function () {
        alert(this);
    }
};

obj.go(); // (1) [object Object]

(obj.go)(); // (2) [object Object]

(method = obj.go)(); // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// (1) 未丢失的this指向，指向的是当前调用方法的对象，即 this == obj
obj.go();

// (2) 包裹obj.go的()是迷惑作用，即(user.go) 外边这层括号在这没有任何作用。
// 通常用它们来设置操作的顺序，但在这里点符号 . 总是会先执行，所以并没有什么影响。
// 所以，this == obj
(obj.go)()

// (3) (4) 都丢失了this的指向