// alert("Hola");
console.log("Hello, World.");
console.log(typeof "bala");
console.log(typeof 20);
console.log(typeof false);

// ! Strings
const myString = "Mathematics";

// * length of string
console.log("length of myString:", myString.length);
console.log("bala bala".length); // 包括空格

// * charAt() 索引、定位获得 字符串中具体位置的字符 
// * return string
// * 索引 从数字0 开始
console.log(myString.charAt(0));
// * toUpperCase() 转大写
// * toLowerCase() 转小写
console.log(myString.charAt(3).toUpperCase());

// * indexOf() 
// * return number
console.log(myString.indexOf("m"));
console.log(myString.indexOf("ic"));
console.log(myString.indexOf("p")); // return -1
// * lastIndexOf() 
console.log(myString.lastIndexOf("at"));

// * slice() 切片，切，片，部分 
// * return string
console.log(myString.slice(5, 8));
console.log(myString.slice(5));
// ? Questions
console.log(myString.slice(3, -5));

// * includes()
// * return boolean
console.log(myString.includes("a"));
console.log(myString.includes("am"));
console.log(myString.includes("2"));

// * split() 划分，分开
// * Split a string into substrings using the specified separator 
// * return them as an array.
console.log(myString.split("t"));
// ? 如果是"" 即中间无空格 返回的是？
console.log(myString.split(""));
// ? 如果是" " 即中间有空格 返回的是？
console.log(myString.split(" "));
console.log("alex,john,eve,chole".split(","));
