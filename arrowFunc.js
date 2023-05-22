
// quiz
/* 用箭头函数重写下面的函数表达式
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); 
*/
{
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
}

{
  let ask = (question, yes, no) => confirm(question) ? yes() : no();
  ask(
    "Do you agreed?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
}