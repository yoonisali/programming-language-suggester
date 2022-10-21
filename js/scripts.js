function handleQuestion(event) {
  event.preventDefault();

  let python = document.querySelector("div#python");
  let script = document.querySelector("div#javascript");
  let ruby = document.querySelector("div#ruby");

  const idealSpace = document.querySelector("input[name='idealSpace']:checked").value;
  const personType = document.querySelector("input[name='personType']:checked").value;
  const superPower = document.querySelector("input[name='superPower']:checked").value;



  python.setAttribute('class', 'hidden');
  script.setAttribute('class', 'hidden');
  ruby.setAttribute('class', 'hidden');

  if (idealSpace === 'office' && personType === 'royal') {
    ruby.removeAttribute('class', 'hidden');
  } else if (idealSpace === 'resort' && personType === 'royal') {
    ruby.removeAttribute('class', 'hidden');
  } else if (idealSpace === 'office' && personType === 'average') {
    script.removeAttribute('class', 'hidden');
  } else if (idealSpace === 'resort' && personType === 'average') {
    script.removeAttribute('class', 'hidden');
  } else if (idealSpace === 'home' && personType === 'royal') {
    python.removeAttribute('class', 'hidden');
  } else if (idealSpace === 'home' && personType === 'average') {
    python.removeAttribute('class', 'hidden');
  }



}

window.addEventListener("load", function () {
  const form = document.getElementById("program");
  form.addEventListener("submit", handleQuestion);
});