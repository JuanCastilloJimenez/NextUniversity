//Creamos una variable que almacenos los elementos con la clase tecla
var botones = document.getElementsByClassName("tecla");

//Creamos un ciclo que recorra todos los elementos
//Detectando sobre que elementos se escucha el los dos eventos

for (let i = 0; i < botones.length; i++){
  botones[i].addEventListener("mousedown", function(){
    botones[i].style.transform="scale(.95,.95)";
  });
  botones[i].addEventListener("mouseup", function(){
    botones[i].style.transform="scale(1,1)";
  });
};
