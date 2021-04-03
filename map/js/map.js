/*
var mymap = L.map('mapid').setView([48.8566, 2.3522], 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianNjaGVyIiwiYSI6ImNrbXhpY203azBucXIyd3BmcjgyOHgwbmcifQ.6H9VXO8lV6EcgoKVRAUHjQ'
}).addTo(mymap);
*/

var testData = {
  max: 500,
  data: [{lat: 48.8566, lng:2.3522, count: 250},{lat: 50.0066, lng:2.3522, count: 2}]
};

var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianNjaGVyIiwiYSI6ImNrbXhpY203azBucXIyd3BmcjgyOHgwbmcifQ.6H9VXO8lV6EcgoKVRAUHjQ'
});

var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 0.2,
  "maxOpacity": .8,
  // scales the radius based on map zoom
  "scaleRadius": true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": false,
  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'count'
};


var heatmapLayer = new HeatmapOverlay(cfg);

var map = new L.Map('mapid', {
  center: new L.LatLng(48.8566, 2.3522),
  zoom: 12,
  layers: [baseLayer, heatmapLayer]
});

heatmapLayer.setData(testData);