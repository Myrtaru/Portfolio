 document.getElementById("hamburger").onclick = function () {
   document.getElementById("hamlabel").innerHTML = this.checked
     ? "X"
     : "&#9776;";
 };