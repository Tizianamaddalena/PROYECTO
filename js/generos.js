window.addEventListener('load',function()){
//
var listaGeneros = document.querySelector('#dropdown-generos');

var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key="+api_key+"&language=es-AR&page=1")
.then(function(response) {
 return response.json()

})
.then(function(informacion){
   var generos = ""

   for (var i = 0; i <= 15; i++) {
     generos = information.results[i].name
     console.log(information.results[i].title);



   }

})
.catch(function(error){
  console.log("Error: " + error);
})
}
