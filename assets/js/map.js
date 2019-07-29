var autocomplete;
var map;

//Initialise map object for display, call function to search for city
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.857049, lng: 2.335665 },
        zoom: 8
    });

    searchCity();
}

//Search function for cities, using autocomplete from Google Places API -- adapted from https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
function searchCity() {
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("city"), {
        types: ['(cities)']
    });

    autocomplete.addListener('place_changed', citySelected);
}

// Function to get city details and zoom to city  -- adapted from https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
function citySelected() {
    var city = autocomplete.getPlace();
    console.log(`the city is ${city.geometry.location}`);
    //Try catch to be inserted for error handling
    if (city.geometry) {
        map.panTo(city.geometry.location);
        map.setZoom(10);
        getAttractions(city);
    }
    else {
        document.getElementById("city").placeholder = 'Enter a city';
    }
}

// Function to get attractions within a specified city -- adapted from https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
function getAttractions(detail) {
    console.log(`City: ${detail.geometry.location}`);

    var attractions = {
        bounds: map.getBounds(),
        types: ['amusement_park', 'aquarium', 'art_gallery', 'museum', 'casino', 'zoo']
    };

    console.log(`Bounds: ${attractions.bounds}`);

}
