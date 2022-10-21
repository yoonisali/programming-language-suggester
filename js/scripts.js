function handleQuestion(event) {
  event.preventDefault();

  let python = document.querySelector("div#python");
  let script = document.querySelector("div#javascript");
  let ruby = document.querySelector("div#ruby");
  let form = document.querySelector("form#program");

  const idealSpace = document.querySelector("input[name='idealSpace']:checked").value;
  const personType = document.querySelector("input[name='personType']:checked").value;

 
  if (idealSpace === 'office' && personType === 'royal') {
    ruby.removeAttribute('class', 'hidden');
    form.setAttribute('class', 'hidden');
  } else if (idealSpace === 'vacation' && personType === 'royal') {
    ruby.removeAttribute('class', 'hidden');
    form.setAttribute('class', 'hidden');
  } else if (idealSpace === 'office' && personType === 'average') {
    script.removeAttribute('class', 'hidden');
    form.setAttribute('class', 'hidden');
  } else if (idealSpace === 'vacation' && personType === 'average') {
    script.removeAttribute('class', 'hidden');
    form.setAttribute('class', 'hidden');
  } else if (idealSpace === 'home' && personType === 'royal') {
    python.removeAttribute('class', 'hidden');
    form.setAttribute('class', 'hidden');
  } else if (idealSpace === 'home' && personType === 'average') {
    python.removeAttribute('class', 'hidden');
    form.setAttribute('class', 'hidden');
  }



}

window.addEventListener("load", function () {
  const form = document.getElementById("program");
  form.addEventListener("submit", handleQuestion);
});