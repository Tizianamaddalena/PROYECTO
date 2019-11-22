window.onload= function () {
  var recuperacionStorage = localStorage.getItem("seriesFavoritas");
  var api_key = "60be6317b0012697cb25d6ce427de920"


    var seriesFavoritas = JSON.parse (recuperacionStorage);
    console.log(seriesFavoritas);


    for (var i = 0; i < seriesFavoritas.length; i++) {
      fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritas + "?api_key="+api_key)


      .then(function(response) {
       return response.json()
      })

      .then(function(information) {
          console.log(information);
         var detalleSerie = document.querySelector("#favs");
         var posterURL =  "https://image.tmdb.org/t/p/original" + information.poster_path;
         var titulo = information.name



         serie = '<li  class="uk-animation-toggle" tabindex="0" >'
         serie += '<a href="detalle.html?id=' + seriesFavoritas + '">'
         serie +=   '<img class="uk-animation-fade" src="'+posterURL+'" alt="" width=300px>'
         serie +=   '<div class="uk-position-center uk-panel"><h2 class=""></h2></div>'
         serie += '</a>'
         serie += '</li>'
         detalleSerie.innerHTML += serie

      })

      .catch(function(error) {
       console.log("Error: " + error);
      })
    }




}
