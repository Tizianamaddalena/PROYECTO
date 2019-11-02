window.addEventListener('load',function(){
  //
var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/tv/popular?api_key="+api_key+"&language=en-US&page=1")
.then(function(response) {
 return response.json()
})
.then(function(information) {
  var urlFija = "https://image.tmdb.org/t/p/original"
  var titulo = ""
  var posterURL = ""
  var serie = ""
  var ul = document.querySelector('ul#masPopulares')
  for (var i = 0; i < information.results.length; i++) {
    titulo = information.results[i].name
    console.log(information.results[i].poster_path);
    posterURL = urlFija + information.results[i].poster_path

    serie = '<li>'
    serie +=   '<img src="'+posterURL+'" alt="">'
    serie +=   '<div class="uk-position-center uk-panel"><h2 class="">'+titulo+'</h2></div>'
    serie += '</li>'

    console.log(serie);
    ul.innerHTML += serie
  }
})
.catch(function(error) {
 console.log("Error: " + error);
})



})
