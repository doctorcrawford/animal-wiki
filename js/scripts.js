function hide() {
  document.querySelector("#goats").setAttribute("class", "hidden")
  document.querySelector("#ducks").setAttribute("class", "hidden")
  document.querySelector("#platypus").setAttribute("class", "hidden")
  document.querySelector("#any-other-animal").setAttribute("class", "hidden")
}

const form = document.querySelector("form")
form.onsubmit = function(e) {
  e.preventDefault();

  const input = document.querySelector("#animal").value;
  hide()

  if (input === "platypus") {
    document.querySelector("#platypus").removeAttribute("class")
  } else if (input === "ducks") {
    document.querySelector("#ducks").removeAttribute("class")
  } else if (input === "goats") {
    document.querySelector("#goats").removeAttribute("class")
  } else { 
    document.querySelector("#any-other-animal").removeAttribute("class") }
    document.querySelector("span#other-animal").innerText = input
}
