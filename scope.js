// var, let, const

// * 1. var
// * global scope, function scoped
var x = 1;
const y = 2;

// * 2. let
// * local scope, block scoped
// * { }
{
  let z = 3;
}

// * 3. const
// * block scoped


// * function local scope
function myFunc() {
  const y = 5;
  return y;
}

console.log(y); // || 2
console.log(myFunc()); // || 5
//console.log(z); // || undefined


// ? Quiz
{
  let a = 23;
  function myFunction() {
    console.log(a);
    {
      let a = 32;
      console.log(a);
    }
    console.log(a);
  }
  myFunction();
  console.log(a);
}

// *
{

}

/*
 ! Global = Not in a function or block, not desirable(不值得的).
 ! Local = In a function or block. Not global.
 ! var instantiates(实例化，具体化) function() scoped variables.
 ! let and const instantiate {block} scoped variables.
*/