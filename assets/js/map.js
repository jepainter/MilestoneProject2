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
        map.setZoom(12);
        getAttractions(city);
    }
    else {
        document.getElementById("city").placeholder = 'Enter a city';
    }
}

// Function to get attractions within a specified city -- adapted from https://developers.google.com/maps/documentation/javascript/examples/place-search
function getAttractions(detail) {
//    console.log(`City: ${detail.geometry.location}`);

    var attractionAreaType = {
        bounds: map.getBounds(),
        types: ['casino']
    };

    console.log(`Bounds: ${attractionAreaType.bounds}`);

    var attractions = new google.maps.places.PlacesService(map);

    attractions.nearbySearch(attractionAreaType, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMapMarker(results[i]);
            }

            map.setCenter(results[0].geometry.location);
//            console.log(results.length);
//            console.log(results[1]);
//Call populate table function
            populateTable(results);
        }
    });
    
}

// Marker creation function -- adapted from https://developers.google.com/maps/documentation/javascript/examples/place-search
function createMapMarker(attraction) {
    var marker = new google.maps.Marker({
        map: map,
        position: attraction.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        var info = new google.maps.InfoWindow();
        
//        console.log(`Place: ${attraction.name}`);
        
        info.setContent(attraction.name);
        info.open(map, this);
    });
}

// Populate table function to display search results
function populateTable(data){
    var category = document.getElementById("attractions");
    category.innerHTML = ``;
    
    var attractionHeaders = ["Name","Type","Address","Rating","Website"];
    var barsRestaurantHeaders = ["Name","Type","Address","Rating","Phone"];
    var accommodationHeaders = ["Name","Rating","Phone","Website"];
    
    for (var i=0;i<data.length;i++){
        category.innerHTML += `<p> ${data[i].name} </p>`;
    }    
        console.dir(data);
        
    category.innerHTML = attractionHeaders;

}
