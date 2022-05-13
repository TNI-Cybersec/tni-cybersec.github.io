var myVar = setInterval(scroll, 2500);
var x = -100;
function scroll() {
      var carousel = document.getElementById("carousel");
      carousel.style.transform = `translateX(${x}%)`;
      x -= 100;
      if (x == -400) {
       x = 0;
      }
}