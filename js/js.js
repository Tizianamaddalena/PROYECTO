window.onload = function (){
  //
var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/tv/popular?api_key="+api_key+"&language=en-US&page=1")
.then(function(response) {
 return response.json()
})
.then(function(information) {
  var posterURL = "https://image.tmdb.org/t/p/original"

console.log(information.results);
  for (var i = 0; i < information.results.length; i++) {
    console.log(information.results[i].name)
    console.log(posterURL+ information.results[i].poster_path)
  }

})
.catch(function(error) {
 console.log("Error: " + error);
})



}
