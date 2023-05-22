// * Web Storage API

// * not part of the DOM - refers to the Window API
// * Available to JS via the global variable: window
// ! Web Storage can only store data as strings

// * window.location: URL of website

// ! localStorage and sessionStorage only store string data
// * if not, it will attempt to convert it to string data

// * window.localStorage

// * window.sessionStorage
{
  const myObject = {
    name: "John",
    logName: function () {
      console.log(this.name);
    },
  };

  const myArray = ["eat", "sleep", "code"];

  sessionStorage.setItem("mySessionStore", myObject);
  const mySessionData = sessionStorage.getItem("mySessionStore");
  console.log(mySessionData); // [Object Object]

  sessionStorage.setItem("mySessionAnotherStore", myArray);
  const mySessionAnotherData = sessionStorage.get("mySessionAnotherStore");
  console.log(mySessionAnotherData); // eat,sleep,code
  console.log(typeof mySessionAnotherData); // string
}

// ! Use JSON to store complex data: Web Storage can only store data as strings
// * so if you need to store complex data such as objects or arrays
// * 1. you should first convert it to JSON using JSON.stringify()
// * 2. and then convert it back to its original format using JSON.parse() when you retrieve it.
// * when we convert to JSON, it converts an object to JSON, it won't keep the methods, it only keeps the properties we have defined
{
  const myObject = {
    name: "John",
    hobbies: ["eat", "sleep", "code"],
    logName: () => {
      console.log(this.name);
    },
  };

  sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject)); // to string
  const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage")); // to object
  console.log(mySessionData); // object, no include methods
}

// * remove item
{
  const myArray = ["football", "PSP", "code"];
  const myObject = {
    name: "Hope",
    hobbies: ["football", "PSP", "code"],
    logName: ()=>{
      console.log(this.name);
    }
  };
  localStorage.getItem("myLocalStore", JSON.stringify(myArray));
  // * remove item
  localStorage.removeItem("myLocalStore");
  // * clear all of the local storage for the particular website or web app
  localStorage.clear();
  // * localStorage.key(indexNumber), get the key as return
  const myKey = localStorage.key(0);
  // * number of items? localStorage.length
  const storeLength = localStorage.length;

  const myLocalData = JSON.parse(localStorage.setItem("myLocalStore"));
  console.log(myLocalData); // ! null
}
