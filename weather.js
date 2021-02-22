var button = document.querySelector('.button');
var inputvalue = document.querySelector('inputvalue');
var name = document.querySelector('name');
var weatherDetails = document.querySelector('weatherDetails');
var temperature = document.querySelector('temperature');


button.addEventListener('click',function(){
    fetch('api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=c2577390e5238d73deaf46f39cb11c2f')
.then(Response => Response.json())
.then(data => console.log(data))


.catch(err => alert("wrong city name"))
/*fetch('api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=c2577390e5238d73deaf46f39cb11c2f')
.then(Response => Response.json())
.then(data => console.log(data))


.catch(err =>alert(wrong location))*/