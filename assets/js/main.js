var students = ["marilu_llamocca", "lourdes_vilchez", "glisse_jorge", "ruth_salvador" , "leslie_avendaño", "flor_tello",
                "miriam_peralta", "fiorella_quispe", "annia_flores", "leidy_maldonado", "rosario_felix", "liliana_peña", "miriam_mendoza",
                "flor_condori", "naomi_villanueva", "milagros_gutierrez", "karin_alejo", "michelle_more", "fiorella_cisneros","betsi_loayza",
                "mariel_garcia", "erika_vidal", "angie_condor", "stephanie_hyagon","grecia_rayme", "cindy_mendoza","mitchell_rodriguez",
                "maria_grecia_cutipa", "geraldine_chauca", "mary_castillo", "nadia_cuadros", "elizabeth_condori", "emma_tapia", "neiza_nunez",
                "arantza_burga", "brilly_majuan", "sandra_solorzano", "yelitza_choque", "katherine_ortega", "maricarmen_rojas", "ariana_cabana",
                "nathaly_pacheco","janine_vega", "wendy_reyes", "jenny_velasquez", "dana_franco", "nakarid_jave", "ayda_sulca", "flor_retamozo",
                "cynthia_quispe", "ana_durand"];


document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
  document.getElementById("promo").classList.toggle("hidden");
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
    span.className = "name";
    divSpan.classList.add("overlay");

    div.appendChild(img);
    div.appendChild(divSpan);
    divSpan.appendChild(span);

    return div;

  }

}

function mostrar(){
  var postFotos = new PostImag();
  var docF = document.createDocumentFragment();

  students.forEach(function(item){
    var ruta = "assets/img/students-imagenes/"+ item + ".png";
    item = item.split("_");
    var nombre = "";
    item.forEach(function(e){
      e = e.toUpperCase();
      nombre = nombre + e + " ";
    });

    docF.appendChild(postFotos.createHTMLFoto(nombre,ruta));

  });

  return docF;
}

window.addEventListener("load", function(){
  var post = document.getElementById("promo");
  post.innerHTML = "";
  post.appendChild(mostrar());


});
