{
    const hideSection = () => {
      const section = document.querySelector(".js-section");
      section.classList.add(".js-section--hidden");
      section.style.display = "none";
    };
  
    const init = () => {
      const hideSectionButton = document.querySelector(".hide-section-button");
      hideSectionButton.addEventListener("click", hideSection);
    };
  
    init();
  }
  
  console.log("cześć")