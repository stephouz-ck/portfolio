let navbar = document.getElementById('navbar');

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
    navbar.style.background = "#f1f1f1";
  } else {
    navbar.style.background = "none";
  }
}
