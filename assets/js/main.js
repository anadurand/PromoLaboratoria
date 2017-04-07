document.getElementById("toggle").addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("navHeader").classList.toggle("open");
  document.getElementById("body").classList.toggle("overflow-hidden");
});
