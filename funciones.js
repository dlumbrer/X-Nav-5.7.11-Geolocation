$(document).ready(function() {
    
    
    $("#geo").click(getLocation);
    
    
    //ME COJE LA LOCALIZACION SI MI NAVEGADOR LO PERMITE
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            $("#demo").text("Geolocation is not supported by this browser.");
        }
    }

    //ME MUESTRA LA POSICION, PRIMERO EN LETRAS Y LUEGO EN MAPA
    function showPosition(position) {
        $("#demo").text("Latitude: " + position.coords.latitude + "    Longitude: " + position.coords.longitude);
        
        //me pinta el mapa en mi geolocalizacion
        var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 16);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { //para mapquest: http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
            var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
        marker.bindPopup("<b>Aqui estas!!!!!!!!</b>").openPopup();	
    }
    
    
    
    
    
    
    



});
