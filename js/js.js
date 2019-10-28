fetch("https://api.themoviedb.org/3/movie/550?api_key=60be6317b0012697cb25d6ce427de920")
.then(function(response){
  return response.json();
})
.then(function(data){

})
.catch(function(error)
{console.log("El error fue: " + error);
})
