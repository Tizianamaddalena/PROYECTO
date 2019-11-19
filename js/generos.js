window.addEventListener('load',function(){
//
var listaGeneros = document.querySelector('#dropdown-generos');

var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key="+api_key+"&page=1")
.then(function(response) {
 return response.json()
})
.then(function(informacion){
   var generos = informacion.genres;
   //var id = informacion.results[i].id, se rompe
   for (var i = 0; i <= 16; i++) {
     listaGeneros.innerHTML += `
        <li><a href="series-por-genero.html?genero=${generos[i].id}">${generos[i].name}</a></li>
    `
    }
  })

.catch(function(error){
  console.log("Error: " + error);
})
})
