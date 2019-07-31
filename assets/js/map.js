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
    //Error handling to be incorporated on invalid input
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
    //    getAttractions("point_of_interest");
    //        getPointsOfInterest();
    }
    else {
        document.getElementById("city").placeholder = 'Enter a city';
    }
}

function attractionSelect(option) {
    console.log(`Option Selected: + ${option}`);
    getAttractions(option);
}

/*
function getPointsOfInterest(){
    console.log("points of interest function called");
    
    
}
*/

// Function to get attractions within a specified city -- adapted from https://developers.google.com/maps/documentation/javascript/examples/place-search
function getAttractions(type) {
    //    console.log(`City: ${detail.geometry.location}`);
    
    console.log(`Attraction type: ${type}`);

    var attractionAreaType = {
        bounds: map.getBounds(),
        types: [type]
    };

    console.log(`Bounds: ${attractionAreaType.types}`);

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
            populateTable(type, results);
            //            console.log("Type: " + type);
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

//Function to remove markers
function removeMapMarkers() {}


// Populate table function to display search results
function populateTable(attractionType, data) {
    console.log("Attraction type:" + attractionType);
    var category = document.getElementById("tables");
    category.innerHTML = ``;

    // Table headers
    var attractionHeaders = `<th>Name</th><th>Type</th><th>Address</th><th>Rating</th><th>Website</th>`;

    var dataRow;
    var tableRow = ``;
    for (var i = 0; i < data.length; i++) {
        dataRow = `<td>${data[i].name}</td><td>${data[i].types[0]}</td><td>${data[i].vicinity}</td><td>${data[i].rating}</td><td>url</td>`;
        tableRow += `<tr>${dataRow}</tr>`;
        dataRow = ``;
    }
    console.dir(data);

    category.innerHTML = `<table id="dataTable">${attractionHeaders}${tableRow}</table>`;

}
