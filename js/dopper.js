var showFoto = document.getElementById("hoofdAfbeelding")

var eersteFoto = document.querySelector(".eersteFoto")
var tweedeFoto = document.querySelector(".tweedeFoto")
var derdeFoto = document.querySelector(".derdeFoto")
var vierdeFoto = document.querySelector(".vierdeFoto")

eersteFoto.addEventListener("click", toggleFotoStandaard)

function toggleFotoStandaard(){
  showFoto.src = "images/groenekaart.png";
}

tweedeFoto.addEventListener("click", toggleFoto1)

function toggleFoto1(){
  showFoto.src = "images/fles.png";
}

derdeFoto.addEventListener("click", toggleFoto2)

function toggleFoto2(){
  showFoto.src = "images/openfles.png";
}

vierdeFoto.addEventListener("click", toggleFoto3)

function toggleFoto3(){
  showFoto.src = "images/kaart.png";
}




var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")

ham.addEventListener("click", toggleHamburger)

function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}


// var hammenu = document.querySelector(".hammenu")
// var menu = document.querySelector(".menu")
//
// menu.addEventListener("click", toggleHamburger)
//
// // toggles hamburger menu in and out when clicking on the hamburger
// function toggleHamburger(){
//   hammenu.classList.toggle("showNav")
//   menu.classList.toggle("showClose")
// }
//
// var menuLinks = document.querySelectorAll(".menuLink")
//
// menuLinks.forEach(
//   function(menuLink) {
//     menuLink.addEventListener("click", toggleHamburger)
//   }
// )
//
//
//
//
// function slideSlider(){
//   $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
//   $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left")) - 500) + "px","transition":"all 5s linear"});
//   setTimeout(function(){moveSliderItem()}, 2635);
// }
//
// function moveSliderItem(){
//   $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
//   slideSlider();
// }
//
// slideSlider();
