var elementVisible = -10;
var elements = [...document.querySelectorAll("[scroll]")];
let moveFrom = ["l", "r", "b", "t"], moveto = ["r", "l", "t", "b"];
window.addEventListener("scroll", () => {
  elements.map((element) => {
    if (
      element.getBoundingClientRect().top <
      window.innerHeight - elementVisible
    ) {
      for (let i = 0; i <= 4; i++)
        if (element.getAttribute(`s-${moveFrom[i]}-to-${moveto[i]}`))
          element.setAttribute(`s-${moveFrom[i]}-to-${moveto[i]}`, "true");
    }
  });
});
// Add css file
// const style = document.createElement("link");
// style.rel = "stylesheet";
// style.href = "../css/Scroll_Library.css";
// document.getElementsByTagName("head")[0].appendChild(style);
