var contador = 1;
mostrar(contador);

function flecha(n) {
  mostrar(contador += n); //AVANZA O DECRECE
}
function correrFoto(n) {
  mostrar(contador = n);
}

function mostrar(n) {
  var i=0;
  var slides = $(".carrousel");
  var dots =  $(".punto");
  if (n==undefined){
    n = ++contador
  }
  if (n > $(".carrousel").length){
    contador = 1
  }
  if (n < 1) {
    contador = $(".carrousel").length
  }

  $(".carrousel").each(function() {
    $(this).css("display", "none");
  });
  $(".punto").each(function() {
    $(this).removeClass("active").addClass("");
  });
  slides[contador-1].style.display = "block";
  dots[contador-1].className += " active";

  setTimeout(mostrar, 10000);
}
