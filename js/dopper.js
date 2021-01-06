var plus = document.querySelector("section:nth-of-type(2) article h4")
var dropDown = document.querySelector("section:nth-of-type(2) article ul")

plus.addEventListener("click", open)

function open(){
    dropDown.style.display = "block"
}

function open(){
    if(dropDown.style.display === "none"){
    dropDown.style.display = "block";
    }
    else{
    dropDown.style.display = "none";
    }
}




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




$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('#container-header').addClass('change-color');
    } else {
        $('#container-header').removeClass('change-color');
    }
});




// $(".upper").click(function () {
//     // Adding a class to the upper list item to handle the icon animation and background change
//     $(this).toggleClass("collapsed");
//
//     var collapsedMenu = this.nextElementSibling;
//
//     // If the submenu is already collapsed, hide
//     if (collapsedMenu.style.maxHeight) {
//         collapsedMenu.style.maxHeight = null;
//
//         // Else, set its max-height to its scroll-height.
//     } else {
//         collapsedMenu.style.maxHeight = collapsedMenu.scrollHeight + "px";
//     }
// });



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
