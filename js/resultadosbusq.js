window.addEventListener('load', function()){

  fetch("https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&first_air_date_year=2013&with_genres=6531")
  .then(function(response){
    return response.json()
  })
}
  .then(function(information)){


  }

  .catch(function(error){
    console.log("Error:" + error)
  })
