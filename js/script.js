{
  const welcome = () => {
    console.log("Witajcie Ziemianie!");
  };

  const onChangeBackgroundClick = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("white");
    if (body.classList.contains("white")) {
      themeName.innerText = "Wyłącz";
    } else {
      themeName.innerText = "Włącz";
    }
  };

  const init = () => {
    const button = document.querySelector(".js-sectionButton");
    button.addEventListener("click", onChangeBackgroundClick);

    welcome();
  };

  init();
}
