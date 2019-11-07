  var botones = document.getElementsByClassName("tecla");

  for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("mousedown", function () {
    botones[i].style.transform = "scale(.95, .95)";
  });
  botones[i].addEventListener("mouseup", function () {
    botones[i].setAttribute("style", "transform:scale(1, 1)");
  });
  };

var pantalla = document.getElementById("display");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cero = document.getElementById("0");
var suma = document.getElementById("mas");
var resta = document.getElementById("menos");
var division = document.getElementById("dividido");
var multiplicacion = document.getElementById("por");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");
var on = document.getElementById("on");
var signo = document.getElementById("sign");
var valor1, valor2, valor3, valor4, resultado;

uno.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="1";
    }
  }
  else {pantalla.textContent="1"}
})
dos.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="2";
    }
  }
  else {pantalla.textContent="2"}
})
tres.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="3";
    }
  }
  else {pantalla.textContent="3"}
})
cuatro.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="4";
    }
  }
  else {pantalla.textContent="4"}
})
cinco.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="5";
    }
  }
  else {pantalla.textContent="5"}
})
seis.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="6";
    }
  }
  else {pantalla.textContent="6"}
})
siete.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="7";
    }
  }
  else {pantalla.textContent="7"}
})
ocho.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="8";
    }
  }
  else {pantalla.textContent="8"}
})
nueve.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="9";
    }
  }
  else {pantalla.textContent="9"}
})
cero.addEventListener("click",function(){
  if (pantalla.textContent != "0"){
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+="0";
    }
  }
  else {pantalla.textContent="0"}
})
punto.addEventListener("click",function(){
  var flag;
  if (!pantalla.textContent.includes('.')) {
    if (pantalla.textContent.length < 8) {
      pantalla.textContent+=".";
    }
  }
})
signo.addEventListener("click",function(){
  if (!pantalla.textContent.includes('-')) {
    if (pantalla.textContent!="0") {
      if (pantalla.textContent.length < 8) {
        pantalla.textContent = "-" + pantalla.textContent;
      }
    }
  }
  else {
    pantalla.textContent = pantalla.textContent.replace(/-/g,'');
  }
})
on.addEventListener("click",function(){
pantalla.textContent="0";
})
suma.addEventListener("click",function(){
  if (pantalla.textContent != 0) {
    valor1 = pantalla.textContent;
    pantalla.textContent = "";
  }
})
igual.addEventListener("click",function(){
  valor2 = pantalla.textContent;
  pantalla.textContent = parseInt(valor1) + parseInt(valor2);
})
