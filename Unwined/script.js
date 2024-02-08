//sticky
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
  
    window.addEventListener("scroll", function(){
        header.classList.toggle("sticky", window.scrollY > 0);
    });
  });
  
  //smooth scroll
  function smoothScrollTo(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  //Navbar animation
  document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
  
    if (currentUrl.indexOf("index.html") !== -1) {
        document.querySelector("nav .animation").classList.add("start-home");
        document.querySelector("a:nth-child(1)").classList.add("active");
    }
    else if (currentUrl.indexOf("tour.html") !== -1) {
        document.querySelector("nav .animation").classList.add("start-tour");
        document.querySelector("a:nth-child(2)").classList.add("active");
    }
    else if (currentUrl.indexOf("gallery.html") !== -1) {
        document.querySelector("nav .animation").classList.add("start-gallery");
        document.querySelector("a:nth-child(3)").classList.add("active");
    }
  });
  