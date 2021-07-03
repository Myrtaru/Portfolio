 document.getElementById("hamburger").onclick = function () {
   document.getElementById("hamlabel").innerHTML = this.checked
     ? "X"
     : "&#9776;";
 };

function toggleImage(e) {
  if (e.type == "touchstart") {
    swap.removeEventListener("mouseenter", toggleImage);
    swap.removeEventListener("mouseleave", toggleImage);
  }
  swap.classList.toggle("hover");
}
var swap = document.querySelector(".swap");
["mouseenter", "mouseleave", "touchstart"].forEach(function (event) {
  swap.addEventListener(event, toggleImage, false);
});