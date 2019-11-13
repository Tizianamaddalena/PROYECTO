window.addEventListener('load',function(){

 var api = "https://api.themoviedb.org/3/discover/tv?api_key=60be6317b0012697cb25d6ce427de920&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"
var listaGeneros = document.querySelector('genero-elegido');

fetch(api)
.then(function(response) {
 return response.json()
})
.then(function(information) {
console.log(information);

var generos = information.with_genres;
for (var i = 0; i <= 15; i++) {
  listaGeneros.innerHTML += `
     <li><a href="series-por-genero.html?genero=${generos[i].id}">${generos[i].name}</a></li>
 `
 }



})
.catch(function(error) {
 console.log("Error: " + error);
})
})
