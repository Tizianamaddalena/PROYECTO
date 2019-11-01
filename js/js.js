window.onload = function (){

fetch("https://api.themoviedb.org/3/movie/550?api_key=60be6317b0012697cb25d6ce427de920")
.then(function(response) {
 return response.json()
})
.then(function(information) {
 console.log(information.data);
var nombre= information.data.title;
var url = information.data.image_url;

var titulo=document.querySelector("#titulo");
titulo.innerHTML=nombre;
var imagen=document.querySelector(".imagen")
imagen.innerHTML =  ' <img src="'+url+'" alt="">'

})
.catch(function(error) {
 console.log("Error: " + error);
})
}
