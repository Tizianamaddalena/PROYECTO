window.addEventListener('load',function(){
  //
var api_key = "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+ "&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")

.then(function(response) {
 return response.json()
})

.then(function(information) {
  var urlFija = "https://image.tmdb.org/t/p/original"
  var titulo = ""
  var posterURL = ""
  var serie = ""
  var ul = document.querySelector('ul#Series')
  for (var i = 0; i < information.results.length; i++) {
    titulo = information.results[i].name
    var id = information.results[i].id
    console.log(id);
    console.log(information.results[i].poster_path);
    posterURL = urlFija + information.results[i].poster_path

    serie = '<li>'
    serie += '<a href="detalle.html?id=' + id + '">'
    serie +=   '<img src="'+posterURL+'" alt="">'
    //serie +=   '<div class="uk-position-center uk-panel"><h2 class="">'+'</h2></div>'
    serie += '</a>'
    serie += '</li>'

    console.log(serie);
    ul.innerHTML += serie
}
})
//<div uk-slider="autoplay: true" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
.catch(function(error) {
 console.log("Error: " + error);
})



})
