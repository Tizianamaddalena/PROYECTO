window.addEventListener('load',function(){
  var urlParams = new URLSearchParams(location.search);

  var id = urlParams.get('id');

  console.log(id);

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

   detalleSerie.innerHTML = `
      <h2>${titulo}</h2>
      <img src="${urlImg}" width="100">
      <p>${descripcion}</p>
   `;

})

.catch(function(error) {
 console.log("Error: " + error);
})



})
