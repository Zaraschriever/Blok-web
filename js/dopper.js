var hammenu = document.querySelector(".hammenu")
var menu = document.querySelector(".menu")

menu.addEventListener("click", toggleHamburger)

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  hammenu.classList.toggle("showNav")
  menu.classList.toggle("showClose")
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener("click", toggleHamburger)
  }
)
