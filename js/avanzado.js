window.addEventListener('load',function(){
//

var searchParams = new URLSearchParams(window.location.search);
var genre = searchParams.get('genre')
var withoutG = searchParams.get('withoutGenres')
var date = searchParams.get('date')
var order = searchParams.get('orden')



//var api_key= "60be6317b0012697cb25d6ce427de920"
//fetch("https://api.themoviedb.org/3/discover/tv?api_key=" + api_key + "&language=en-US&sort_by=ORDEN&first_air_date_year=FECHA&page=1&with_genres=GENRE&without_genres=WITHOUT")
fetch("https://api.themoviedb.org/3/discover/tv?api_key=60be6317b0012697cb25d6ce427de920&language=en-US&sort_by=popularity.desc")
.then(function(response) {
 return response.json()
})
.then(function(information) {
    console.log(information);
    var elegirGenero= document.querySelector("#genero-elegido");


})

.catch(function(error) {
 console.log("Error: " + error);
})
})


// SELECCION DE GENERO
var listaGeneros = document.querySelector('#genero-elegido');

var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key="+api_key+"&page=1")
.then(function(response) {
 return response.json()
})
.then(function(informacion){
console.log(informacion);
   var generos = informacion.genres;

   for (var i = 0; i <= 16;i++) {
     listaGeneros.innerHTML += `
      <option>${generos[i].name}</option>
      `
    }
  })

.catch(function(error){
  console.log("Error: " + error);
})

// SELECCION DE EXCLUSION DE GENERO







// SORT BY
