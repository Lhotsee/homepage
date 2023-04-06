{
  const welcome = () => {
    console.log("Witajcie Ziemianie!");
  };

  const onChangeBackgroundClick = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("white");

    themeName.innerText = body.classList.contains("white") ? "Wyłącz" : "Włącz";
  };

  const init = () => {
    const button = document.querySelector(".js-sectionButton");
    button.addEventListener("click", onChangeBackgroundClick);

    welcome();
  };

  init();
}
