/* 
不可变对象
重要程度: 5
有可能改变用 const 声明的对象吗？你怎么看？
const user = {
    name: "John"
};
// 这样有效吗？
user.name = "Pete";
*/

const user = {
    name: "John",
};

// 这是改变了user所引用的对象里的属性名为name的属性值，user对象本身所指向的引用并没有改变，且不能被改变
user.name = "Pete";

// 如果重新给user赋值新的值，或是原始值，或是新对象引用，即使空对象，也报错。
user = {}; // TypeError: Assignment to constant variable.