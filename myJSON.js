// * JSON
// * send and receive data

const myObj = {
  firstName: "John",
  lastName: "English",
  age: 22,
  country: "Canada",
  hobbies: ["baseball", "tennis", "football"],
  hola: function () {
    console.log("Hola");
  },
};

console.log(myObj);
console.log(myObj.firstName);
myObj.hola();

// * JSON.stringify(): object to str
// ! JSON don't send functions, functions ignored
// * send str
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

// * JSON.parse(): str to object
// * receive object
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
