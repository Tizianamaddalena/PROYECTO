var queryString = new URLSearchParams(location.search);

var dia = queryString.get('dia');
var hora = queryString.get('hora');

var final = 'El día de tu cita es el ' + dia + ' a las ' + hora;

console.log(final);
