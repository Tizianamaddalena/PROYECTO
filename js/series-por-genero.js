
window.addEventListener('load', function () {

var listaSeries = document.querySelector('#lista-series');

var api_key = "60be6317b0012697cb25d6ce427de920"
var urlParams = new URLSearchParams(location.search);
var id = urlParams.get('genre_id')

fetch("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=popularity.desc&page=1&with_genres="+id)
.then(function(response){
  return response.json()
})
.then(function(informacion){
  var generos = informacion.genres;
  for (var i = 0; i <= informacion.length; i++) {



}
})

.catch(function(error) {
 console.log("Error: " + error);
})
})
//pagina de generos por series

//display none;
//display block (boton onclik)
