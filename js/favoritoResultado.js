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
         var resultados = information.results;
         if (resultados.length > 0) {
          for (var i = 0;i < information.results.length; i++){
        var titulo = resultados[i].name
         var posterURL =  "https://image.tmdb.org/t/p/original" + resultados[i].poster_path




         serie = '<li class="fav1" tabindex="0" >'
         serie += '<a href="detalle.html?id=' + seriesFavoritas + '">'
         serie +=   '<img src="'+posterURL+'" alt="" width=300px>'
         serie +=   '<div"><h2 class=""></h2></div>'
         serie += '</a>'
         serie += '</li>'
         detalleSerie.innerHTML += serie
       }
       }
      })

      .catch(function(error) {
       console.log("Error: " + error);
      })
    }




}
