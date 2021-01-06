// dropdown navigatie footer
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


// image slider pagina 2
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
