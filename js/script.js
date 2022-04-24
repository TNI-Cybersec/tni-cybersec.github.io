$(document).ready(function () {
  // Load components
  $("#navigation").load("common/navbar.html");
  $("#footer").load("common/footer.html");
  $("#cookie-banner").load("common/cookie-banner.html");
  $("#msg-plugin").load("common/messenger-plugin.html");
});


document.getElementById("version").innerHTML = "4.1.2";
document.getElementById("year").innerHTML = new Date().getFullYear();

// Loader starts

var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.05);
    }, 50);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(1);
});

// Loader ends
