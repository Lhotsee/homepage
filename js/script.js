console.log("Witajcie Ziemianie!");

let button = document.querySelector(".js-sectionButton");

let themeName = document.querySelector(".js-themeName");

let body = document.querySelector(".body");
  
button.addEventListener("click", () => {
  body.classList.toggle("white");
  if (body.classList.contains("white")) {
  themeName.innerText = "Wyłącz";
} else {
  themeName.innerText = "Włącz";
};
});

