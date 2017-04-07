document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);


function PostImag(){

  this.createHTMLFoto = function(nombre,ruta){
    var div = document.createElement("div");
    div.classList.add("foto");
    var img = new Image();
    img.src = ruta;
    img.className = "imagen";
    var divSpan = document.createElement("div");
    var span = document.createElement("span");
    span.innerHTML = nombre;
    divSpan.classList.add("overlay");

    div.appendChild(img);
    div.appendChild(divSpan);
    divSpan.appendChild(span);

    return div;

  }

}

function mostrar(array,valor){
  var postFotos = new PostImag();
  var docF = document.createDocumentFragment();

  for(i=1; i<=54; i++){
    var ruta = "assets/img/students/i" + ".png";
    var nombre;
    docF.appendChild(postFotos.createHTMLFoto(nombre,ruta));
  }

  return docF;
}

window.addEventListener("load", function(){
  var post = document.getElementById("promo");


});
