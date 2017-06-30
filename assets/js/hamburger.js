function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("dropdown").classList.toggle("show");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("show");
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

// function showaccordion() {
// 	console.log("show accordion");
//     var accmenu = document.getElementsByClassName("accordionmenu");
//     accmenu.classList.toggle("show");
// }

// for (i = 0; i < acc.length; i++) {
// 	acc[i].onclick = function() {
// 		this.classList.toggle("active");
// 		this.nextElementSibling.classList.toggle("show");
// 	}
// }