// code adapted from https://codepen.io/JackZelig/pen/VPdQXJ

var figureTrigger = [...document.querySelectorAll(".trigger")];
figureTrigger.forEach(function(figure){
  figure.onclick = function() {
    var modal = figure.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
    document.body.classList.add("modal-open"); // added to prevent body from scrolling behind modal
  }
});

var figureClose = [...document.querySelectorAll(".close")];
figureClose.forEach(function(figure){
  figure.onclick = function() {
    var modal = figure.closest('.modal');
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // removed to enable body from scrolling after modal
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}