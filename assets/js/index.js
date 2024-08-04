// Navbar
let navBar = document.getElementsByTagName("nav")[0];
let navBtn = document.getElementById("menuBtn");

navBtn.addEventListener("click", () => navBar.style.display = navBar.style.display == "block" ? "none" : "block");

window.addEventListener('resize', () => {
  window.innerWidth < 539 ? navBar.style.display == "none" : navBar.style.display = "block";
  window.innerWidth > 539 ? navBar.style.display == "block" : navBar.style.display = "none";
});




function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

