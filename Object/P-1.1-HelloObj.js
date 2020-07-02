/* 
你好，对象
重要程度: 5
按下面的要求写代码，一条对应一行代码：
创建一个空的对象 user。
为这个对象增加一个属性，键是 name，值是 John。
再增加一个属性，键是 surname，值是 Smith。
把键为 name 的属性的值改成 Pete。
删除这个对象中键为 name 的属性。
*/

let user = {
    name: "John",
};

// 通过obj.key = value;的方式直接给对象添加新的属性
user.surname = "Smith";
console.log(user); // { name: 'John', surname: 'Smith' }

// 给对象的属性重新赋值，即更新对象的属性的属性值
user.name = "Pete";
console.log(user); // { name: 'Pete', surname: 'Smith' }

// 使用delete删除对象的属性
delete user.name;
console.log(user); // { surname: 'Smith' }