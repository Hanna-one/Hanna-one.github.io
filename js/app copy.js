// <⚠️ DONT DELETE THIS ⚠️>
/* import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"]; */
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const superEventHandler = {
  handleMouseEnter: () => {
    document.querySelector("h2").innerText = "The mouse is here!";
    document.querySelector("h2").style.color = "#1abc9c";
  },
  handleMouseLeave: () => {
    document.querySelector("h2").innerText = "The mouse is gone!";
    document.querySelector("h2").style.color = "#3498db";
  },
  handleWindowResize: () => {
    document.querySelector("h2").innerText = "You just Resized!";
    document.querySelector("h2").style.color = "#9b59b6";
  },
  handleContextMenu: () => {
    document.querySelector("h2").innerText = "You was right click!";
    document.querySelector("h2").style.color = "#e74c3c";
  }
};

document
  .querySelector("h2")
  .addEventListener("mouseenter", superEventHandler.handleMouseEnter);
document
  .querySelector("h2")
  .addEventListener("mouseleave", superEventHandler.handleMouseLeave);
document
  .querySelector("h2")
  .addEventListener("resize", superEventHandler.handleWindowResize);
document
  .querySelector("h2")
  .addEventListener("contextmenu", superEventHandler.handleContextMenu);
