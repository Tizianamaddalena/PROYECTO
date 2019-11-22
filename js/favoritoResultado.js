window.onload= function () {
  var recuperacionStorage = localStorage.getItem("seriesFavoritas");
  var api_key = "60be6317b0012697cb25d6ce427de920"


    var seriesFavoritas = JSON.parse (recuperacionStorage);
    console.log(seriesFavoritas);

    for (var i = 0; i < seriesFavoritas.length; i++) {
      fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key="+api_key)


      .then(function(response) {
       return response.json()
      })

      .then(function(information) {
          console.log(information);
         var detalleSerie = document.querySelector("#favs");
         var urlImg =  "https://image.tmdb.org/t/p/original" + information.poster_path;
         // var titulo = information.name
         // var descripcion = information.overview;
         // var lenguaje = information.original_language
         // var fechaEstreno = information.first_air_date
         // var genero= information.genres
         // var listaGenero = ""
         // var

         serie = '<li  class="uk-animation-toggle" tabindex="0" >'
         serie += '<a href="detalle.html?id=' + i + '">'
         serie +=   '<img class="uk-animation-fade" src="'+posterURL+'" alt="">'
         serie +=   '<div class="uk-position-center uk-panel"><h2 class="">'+'</h2></div>'
         serie += '</a>'
         serie += '</li>'
         // detalleSerie.innerHTML = `
         //    <h2>${titulo}</h2>
         //    <div id="foto_info">
         //    <section class="info_serie">
         //      <img src="${urlImg}" width="250">
         //    </section>
         //    <!-- <section class="info_serie">
         //      <p>Lenguaje original: ${lenguaje} </p>
         //      <p>Fecha de estreno: ${fechaEstreno} </p>
         //      <p>Género: ${listaGenero}</p>
         //
         //      <p>${descripcion}</p>
         //    </section> -->
         //    </div>
         //
         //    `


      })

      .catch(function(error) {
       console.log("Error: " + error);
      })
    }




}
