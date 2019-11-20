
var urlParams = new URLSearchParams(location.search);
var idBuscado = urlParams.get('genero')

var api_key = "60be6317b0012697cb25d6ce427de920"

fetch("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=popularity.desc&page=1&with_genres="+idBuscado)
.then(function(response){
  return response.json()
})
.then(function(datos){
  console.log(datos.results);
  var resultados = datos.results;
  var titulo = ""
  var posterURL = ""
  var urlFija = "https://image.tmdb.org/t/p/original"
  var listado = document.querySelector("#lista-series")

  if (resultados.length > 0) {
    for (var i = 0; i < resultados.length; i++) {
      titulo = resultados[i].name
      var id = resultados[i].id

    listado.innerHTML = `
    <li><a href='detalle.html?id=${id}'>${titulo}</a></li>
    `
  if (resultados[i].poster_path === null) {
      listado.innerHTML = `
    <h2>${titulo}</h2>
    <img src='img/no-disponible.png'>
      `
    } else {
      posterURL = urlFija + resultados[i].poster_path;

      listado.innerHTML += `
      <a href='detalle.html?id=${id}'><img src='${posterURL}'></a>
      `
    }

    }
  }
})
.catch(function(error){
  console.log("Error" + error);
})


//pagina de generos por series

//display none;
//display block (boton onclik)
