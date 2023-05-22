// * Interaction: alert(), prompt(), confirm()
// * modal window 模态窗: Pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

// || 1. alert()
// * shows a message
{
  alert("Hello, world");
  let myAge = 23;
  alert(`You are ${myAge} years old.`);
}

// || 2. prompt()
// * shows a message asking the user to input text, return text or null
// * prompt(title, [default])
// * 2 arguments(参数)：title, [default]
// * title：提示信息
// * [default]: input field的初始值，optional
// [...] 包裹在方括号中的 表示 the parameter is optional.
{
  prompt("How old are you?", 18);
}
// * 如果Cancel or Esc，那么the text form input field获得的值为 null

// || 3. confirm()
// * shows a modal window with a question and two buttons: OK and Cancel
// * the result is true or false
{
  confirm("Do you want to build a snowman?")
}


// quiz Create a web-page that asks for a name and outputs it
{
  const yourName = prompt("Hello, what is your name?");
  alert(`Hello, ${yourName}. Nice to meet you.`);
}