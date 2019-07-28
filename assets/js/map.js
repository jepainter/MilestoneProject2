//Initialise map object for display, call function to search for city
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.857049, lng: 2.335665 },
        zoom: 8
    });
    
    searchCity();
}

//Search function for cities, using autocomplete from Google Places API
function searchCity() {
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById("city"), {
        types: ['(cities)']
    });

    autocomplete.addListener('place_changed', citySelected);
}

// Function to get city details and start search for details
function citySelected() {
    console.log(document.getElementById('city').value);
}
