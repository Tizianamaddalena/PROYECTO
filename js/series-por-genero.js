window.addEventListener('load', function () {
  var urlParams = new URLSearchParams(location.search);

})

var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&with_genres=18")
.then(function(response){
  return response.json()
})
.then(function(informacion) {
  console.log(informacion);
  var seleccionGenero = document.querySelector("#titulo-genero");
  var urlImg = "https://image.tmdb.org/t/p/original" + informacion.poster_path;
  var serie = informacion.genre_ids;
  var listaSeries = ""
  for (var i = 0; i < serie.length; i++) {
    listaSeries += '<a href="detalle.html">' + serie[i].name + '</a> ,'
  }

  seleccionGenero.innerHTML = `
  <h2>${titulo}</h2>
  <img src="${urlImg}" width="250">
  <p>Lenguaje original: ${lenguaje} </p>
  <p>Fecha de estreno: ${fechaEstreno} </p>
  <p>Género: ${listaGenero}</p>
  <p>${descripcion}</p>
`;
})

.catch(function(error) {
 console.log("Error: " + error);
})
