//Global variables for script
var autocomplete;
var map;
var mapMarkers = [];
var markerLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var markerLabelIndex = 0;

//Initialise map object for display, default Paris, call function to search for city
function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.857049, lng: 2.335665 },
        zoom: 8
    });

    //Function called to initialise auto complete search function for city
    searchCity();
}

//Search function for cities, using autocomplete from Google Places API -- adapted from https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
function searchCity() {

    autocomplete = new google.maps.places.Autocomplete(document.getElementById("city"), {
        types: ['(cities)']
    });
    //Error handling to be incorporated on invalid input
    autocomplete.addListener('place_changed', citySelected);
}

// Function to get city details and zoom to city  -- adapted from https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
function citySelected() {
    
    //Variable to store city selected
    var city = autocomplete.getPlace();

    //Functions to clear tables and markers if new city selected
    removeMarkers();
    clearTable();

    //Try catch to be inserted for error handling
    //Function to pan map to city selected
    if (city.geometry) {
        map.panTo(city.geometry.location);
        map.setZoom(12);
    }
    else {
        document.getElementById("city").placeholder = 'Enter a city';
    }
}

// Function to initialise search for attractions
function attractionSelect(option) {
    
    // Functions to clear tables and markers if new attraction selected
    removeMarkers();
    clearTable();
    
    //Call to get attractions based on selection
    getAttractions(option);
}


// Function to get attractions within a specified city -- adapted from https://developers.google.com/maps/documentation/javascript/examples/place-search
function getAttractions(type) {

    //Variable to set parameters for search of attraction
    var attractionAreaType = {
        bounds: map.getBounds(),
        types: [type]
    };

    var attractions = new google.maps.places.PlacesService(map);

    //Function to search for attractions, based on bounds and type, using nearbySearch
    attractions.nearbySearch(attractionAreaType, function(results, status) {
        //Error handling to be incorporated
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            //Call to populate table function using results from nearby search together with type
            populateTable(type, results);
        }
    });
}

// Function to create markers on map with info display on click -- adapted from https://developers.google.com/maps/documentation/javascript/markers
function createMapMarker(attraction) {

    //Initialise marker with label according to position in label string and push to array
    var marker = new google.maps.Marker({
        label: markerLabels[markerLabelIndex++ % markerLabels.length],
        position: attraction.geometry.location,
        map: map,
    });
    mapMarkers.push(marker);

    //Event listener for infowindows when click on marker, sets content of infowindow
    google.maps.event.addListener(marker, 'click', function() {
        var info = new google.maps.InfoWindow();
        info.setContent(`<h6>${attraction.name}</h6>
                <p>Address: ${attraction.formatted_address}</p>
                <p>Phone: ${attraction.international_phone_number}</p>`);
        info.open(map, this);
    });
}


// Function to remove the markers from the map and clear array - adapted from https://jsfiddle.net/upsidown/b5r4nm3s/.
function removeMarkers() {

    for (var i = 0; i < mapMarkers.length; i++) {
        mapMarkers[i].setMap(null);
    }
    mapMarkers = [];
    markerLabelIndex = 0;
}

// Function to display search results in table and call for markers to be created on map
function populateTable(attractionType, data) {

    var category = document.getElementById("table");

    // Table variables
    var attractionHeaders = `<tr><th>Marker</th><th>Name</th><th>Rating</th><th>Phone Number</th><th>Website</th></tr>`;
    var tableRow=``;

    var service = new google.maps.places.PlacesService(map);
    
    //For loop to request details from Places API and print to html
    for (var i = 0; i < data.length; i++) {
        
        //Variable parameters of fields to return from request
        var placeRequest = {
            placeId: data[i].place_id,
            fields: ['name', 'formatted_address', 'international_phone_number', 'website', 'geometry', 'rating']
        };
        
        //Request to Places API, populate of table rows
        service.getDetails(placeRequest, function(place, status) {
            
            //Error handling to be incorporated
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                tableRow += `<tr><td><a href="#map">${markerLabels[markerLabelIndex]}<a></td><td>${place.name}</td><td>${place.rating}</td><td>${place.international_phone_number}</td><td><a target="_blank" aria-label="Website" rel="noopener" href=${place.website}><button>Website</button></a></td></tr>`;
                createMapMarker(place);
            }
        
        //Print results to html
        category.innerHTML = `<table>${attractionHeaders}${tableRow}</table>` ;   
        });
    }
}

//Function to clear data from table
function clearTable() {
    var category = document.getElementById("table");
    category.innerHTML = ``;
}
