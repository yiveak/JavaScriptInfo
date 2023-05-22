// * Arrays

const myArray = [];

// * add elements to an array
myArray[0] = "John";
myArray[1] = 233;
myArray[3] = true;
console.log(myArray);

// * refer to an array
// * 1. length property
console.log(myArray.length);
// * 2. last element in an array
console.log(myArray[myArray.length - 1]);

// * 3. push() 添尾
// * return length of the array
myArray.push("English");
// console.log(myArray.push("English"));
console.log(myArray);

// * 4. pop() 删尾
// * return last item
const lastItem = myArray.pop();
console.log(lastItem);
console.log(myArray);

// * 5. unshift() 添头
// * return length of the array
myArray.unshift("Canada");
// console.log(myArray.unshift("USA"));
console.log(myArray);

// * 6. shift() 删头
// * return first item
const firstItem = console.log(myArray.shift());
console.log(firstItem);
console.log(myArray);
console.log(myArray[0]);

// * 7. splice() 绞接，粘接
// * delete & replace
console.log(myArray.splice(2, 1));
console.log(myArray);

// * 8. slice()
// * return an new array

// * 9. reverse()

// * 10. join()
// * return a new string
// const myString = myArray.join("White");
const myString = myArray.join();
console.log(myString);
// console.log(typeof myString.split(","));
// console.log(mySting.split());
console.log(myString.split(",")); // * return a new array

// * 11. concat() 拼接，连接
const myArrayA = [1, 2, 3];
const myArrayB = ["a", "b", "c"];
const myArrayC = ["x", "y", "z"];
const newArray = myArrayA.concat(myArrayB).concat(myArrayC);
console.log(newArray);


// * 12. spread operator ...
const myArrayD = ["i", "ii", "iii"];
const newArrayE = [...myArrayA, ...myArrayD];
console.log(newArrayE);
const newArrayF = [myArrayB, myArrayC];
console.log(newArrayF);

// * 13. nested Array
{
  const equipShelfA = ["baseball", "football", "volleyball"];
  const equipShelfB = ["basketball", "golf balls", "tennis balls"]

  const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
  const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

  const equipDept = [equipShelfA, equipShelfB];
  const clothesDept = [clothesShelfA, clothesShelfB];
  console.log("equipDept: ", "\n",equipDept,"\n",  "clothesDept: ", "\n",clothesDept);

  console.log(equipDept[0][1], ",", clothesDept[1][0]);

  const sportStore = [equipDept, clothesDept];
  console.log("sportStore:", sportStore);
  console.log(sportStore[0][0][1], ",", sportStore[1][1][0]);
}