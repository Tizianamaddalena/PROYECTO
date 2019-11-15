window.addEventListener('load',function(){
  var urlParams = new URLSearchParams(location.search);

  var id = urlParams.get('id');

  console.log(id);
// FUNCION DE INFORMACION
  var api_key = "60be6317b0012697cb25d6ce427de920"
  fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key="+api_key+"&language=en-US")
  .then(function(response) {
   return response.json()
  })

  .then(function(information) {
      console.log(information);
     var detalleSerie = document.querySelector("#detalle-serie");
     var urlImg =  "https://image.tmdb.org/t/p/original" + information.poster_path;
     var titulo = information.name
     var descripcion = information.overview;
     var lenguaje = information.original_language
     var fechaEstreno = information.first_air_date
     var genero= information.genres
     var listaGenero = ""
     for (var i = 0; i < genero.length; i++) {
       listaGenero+= ' <a href="generos.html" >' + genero[i].name + '</a> ,'
     }

     detalleSerie.innerHTML = `
        <h2>${titulo}</h2>
        <div id="foto_info">
        <section class="info_serie">
          <img src="${urlImg}" width="250">
        </section>
        <section class="info_serie">
          <p>Lenguaje original: ${lenguaje} </p>
          <p>Fecha de estreno: ${fechaEstreno} </p>
          <p>Género: ${listaGenero}</p>
          <p>${descripcion}</p>
        </section>
        </div>
     `;

  })

  .catch(function(error) {
   console.log("Error: " + error);
  })

  // FUNCION DE TRAILER

  var apiVideo = "https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=60be6317b0012697cb25d6ce427de920&language=en-US";

  fetch(apiVideo)
    .then(function(response) {
     return response.json()
    })
    .then(function(information) {
      console.log("=======");
      console.log(information.results[0]);
      var contTrailer = document.querySelector("#trailer");

      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + information.results[0].key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      var urlVideo = 'https://www.youtube.com/watch?v=' + information.results[0].key;
      contTrailer.innerHTML += `
      <section>${iframe}</section>
      <a href="${urlVideo}"' target='_blank'+">VER TRAILER</a>
      `

    })

    .catch(function(error) {
     console.log("Error: " + error);
    })

    //  COMENTARIOS
    var api_key = "60be6317b0012697cb25d6ce427de920"
    var urlParams = new URLSearchParams(location.search);
    var id = urlParams.get('id');
    var reviewSerie = "https://api.themoviedb.org/3/tv/"+ id +"/reviews?api_key="+api_key+"&language=en-US&page=1"

    fetch(reviewSerie)
    .then(function(response){
      return response.json()
    })
    .then(function(respuesta){
      console.log(respuesta);

      if (respuesta.results.length > 0) {
        var comentarios = document.querySelector("#reviews")
        //for (var i = 0; i < results.length; i++) {
        var contenido = respuesta.results[0].content
        var autor = respuesta.results[0].author
        comentarios.innerHTML += `
        <h3>Opiniones de otros usuarios</h3>
        <p>${contenido}</p>
        <p>Por ${autor}</p>
        `
      }//}
      else {
        comentarios.innerText = "<p>Se el primero en dejar un comentario!</p>"
      }


    })

    // FUNCION DE RECOMENDACION

   var apiRecomendaciones = "https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=60be6317b0012697cb25d6ce427de920&language=en-US&page=1"

   fetch(apiRecomendaciones)
     .then(function(response) {
      return response.json()
     })
     .then(function(information) {
       console.log(information);
       var opciones= ""
       var reco = document.querySelector('#recomendaciones')
       for (var i = 10; i < information.results.length; i++) {
         var id =  information.results[i].id
         opciones= "https://image.tmdb.org/t/p/original" + information.results[i].poster_path
         console.log(opciones);
         reco.innerHTML +=
         `<a href="detalle.html?id=${id}">
         <img class= "recomm" src="${opciones}" width="250">
         </a>`

         //


       }


     })

     .catch(function(error) {
      console.log("Error: " + error);
     })

     var btn = document.querySelector("#abracadabra")
     btn.onclik = function() {

     }

// FUNCION QUE APAREZCA RECOMENDACIONES








})
