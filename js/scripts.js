function handleQuestion(event) {
  event.preventDefault();

  let python = document.querySelector("div#python");
  let script = document.querySelector("div#javascript");
  let ruby = document.querySelector("div#ruby");

  const operator = document.querySelector("input[name='operator']:checked").value;

 python.setAttribute('class', 'hidden');
 script.setAttribute('class', 'hidden');
 ruby.setAttribute('class', 'hidden');

}

window.addEventListener("load", function () {
  const form = document.getElementById("program");
  form.addEventListener("submit", handleQuestion);
});