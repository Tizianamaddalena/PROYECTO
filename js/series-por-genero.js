window.addEventListener('load', function () {
var urlParams = new URLSearchParams(location.search);

var idGenero = urlParams.get('genre_ids');
var nombreGenero = document.querySelector('#titulo-genero')


var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
.then(function(response){
  return response.json()
})
.then(function(information){
  var generos = "";
  var titulo = ""
  for (var i =0; i< information.results.length; i++) {
    generos = information.results.genre_ids
    titulo= information.results.name
console.log(information);
}
})
.catch(function(error) {
 console.log("Error: " + error);
})
})
