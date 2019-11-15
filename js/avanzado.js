window.addEventListener('load',function(){
//



var api_key= "60be6317b0012697cb25d6ce427de920"
fetch("https://api.themoviedb.org/3/discover/tv?api_key=" + api_key + "&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
.then(function(response) {
 return response.json()
})
.then(function(information) {
    console.log(information);

    var elegir-genero= document.querySelector("#genero-elegido");

})

.catch(function(error) {
 console.log("Error: " + error);
})
