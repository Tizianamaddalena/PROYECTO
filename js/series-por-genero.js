var seriesPorGenero = document.querySelector ()

var queryString = new URLSearchParams(location.search);

var api-key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=with_genres&page=1&with_genres=18")
.then(function(response){
  return response.json()
})
.then(function(informacion) {
  console.log(informacion);
})
