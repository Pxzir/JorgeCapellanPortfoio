// Nav bar

window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


// Responsive 

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    document.querySelector(".portfolio-navbar").classList.toggle("show")
});