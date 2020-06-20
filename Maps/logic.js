// Perform a GET request to the query URL
d3.json('/Listing_large_new.json', function(data) {
  //console.log(data)
  data.forEach(element => {
    Marker(element)
  });
});

var layers = {
  Toyota: new L.LayerGroup(),
  Ford: new L.LayerGroup(),
  Honda: new L.LayerGroup(),
  Chevrolet: new L.LayerGroup(),
  Other: new L.LayerGroup()
};

var myMap = L.map("map", {
  center: [45, -79],
  zoom: 6.7,
  layers: [
    layers.Toyota,
    layers.Ford,
    layers.Honda,
    layers.Chevrolet,
    layers.Other
  ]
});


var overlays = {
  "Toyota": layers.Toyota,
  "Ford": layers.Ford,
  "Honda": layers.Honda,
  "Mazda": layers.Chevrolet,
  "Other": layers.Other
};

L.control.layers(null, overlays).addTo(myMap);

// Create a legend to display information about our map
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map
info.addTo(myMap);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: 'pk.eyJ1IjoiYW5kcmV3bWF4aW1vcyIsImEiOiJja2F4Mnl2d2YwMnI0MzJyeTlsN2JzdjJqIn0.BoI4gSjXwVPo7dXCaGp02g'
}).addTo(myMap);

function Marker(element) {
  var LayerStatus;

  switch((element.brand).toLowerCase()) {
    case 'toyota':
      LayerStatus = 'Toyota';
      break;
    case 'ford':
      LayerStatus = 'Ford';
      break;
    case 'honda':
      LayerStatus = 'honda';
      break;
    case 'chevrolet':
      LayerStatus = 'Chevrolet';
      break;
    default:
      LayerStatus = 'Other';
  }

  var location = [element.Lat, element.Lng]
  var marker = L.marker(location, {
    fillOpacity: 0.75,
    win_url: element.Url
  }).on('click', onClick).addTo(layers[LayerStatus]);

  marker.bindPopup("<h1>"  + element.year + " " + element.brand + " " + element.model + "</h1>  <hr> <h3>Odometer: " + element.Odometer + "</h3> <hr> <h3>Price: " + element.Price + "</h3")

  marker.on('mouseover', function (e) {
    this.openPopup();
  });

  marker.on('mouseout', function (e) {
    this.closePopup();
  });
}

function onClick(e){
  window.open(this.options.win_url);
}
