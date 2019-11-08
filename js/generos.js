window.addEventListener('load',function()){
//
var listaGeneros = document.querySelector('#dropdown-generos');

var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key="+api_key+"&language=es-AR&page=1")
.then(function(response) {
 return response.json()

})
.then(function(informacion){
   var generos = informacion.results;

   for (var i = 0; i <= 15; i++) {
     listaGeneros.innerHTML += `
     <li> <button type="button" class="opciones" id="generos">GENEROS</button>
     <div uk-dropdown="pos: bottom-justify">
     <ul class="uk-nav uk-dropdown-nav" id="dropdown-generos">${generos[i].title}</ul>
     </div>
     </li>
    `;
  })
  
.catch(function(error){
  console.log("Error: " + error);
})
}
