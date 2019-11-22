var but = document.querySelector("#perfil")

  but.onclick= function (){
  alert("¡Se ha iniciado sesión con éxito!")
}


///////////////////////////GUARDO PERFIL///////////////////////////////////////

$(document).ready(function(){
    $('#perfil').click(function(){
        /*Captura de datos escrito en los inputs*/
        var coment = document.getElementById("primer_comentario").value;

        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("primer_comentario", coment);
        /*Limpiando los campos o inputs*/
        document.getElementById("primer_comentario").value = "";

    });
});

/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){
    $('#perfil').click(function(){
        /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("primer_comentario");

        /*Mostrar datos almacenados*/
        document.getElementById("primer_comentario").innerHTML = nombre;

    });
});
/////////////////////////////////////////////////////////////////////
