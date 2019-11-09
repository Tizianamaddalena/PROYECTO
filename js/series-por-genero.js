window.addEventListener('load', function () {
var urlParams = new URLSearchParams(location.search);

var idGenero = urlParams.get('genre_ids');
var nombreGenero = document.querySelector('#titulo-genero')


var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=popularity.desc&page=1&with_genres=18")
.then(function(response){
  return response.json()
})
.then(function(informacion){
  var generos = informacion.genres;

  for (var i =0; i<=1; i++) {
  nombreGenero.innerHTML += `
  <h2>${generos[i].name}</h2>
  `
}
})
.catch(function(error) {
 console.log("Error: " + error);
})
})
