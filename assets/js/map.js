function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.857049, lng: 2.335665 },
        zoom: 8
    });
}

function searchCity() {
    var input = document.getElementById("city").value;
    console.log(input);
}

