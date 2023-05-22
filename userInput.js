// * user input


let yourName = prompt("Please enter your name:");
// console.log(yourName ?? "You didn't enter your name.");

if (yourName) {
  console.log(yourName.length);
  console.log(yourName.trim().length);
  console.log(yourName.trim());
} else {
  console.log("You did not enter your name.")
}