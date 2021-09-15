// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
      [-78.512511, -0.219641],
      [-78.512886, -0.219008],
      [-78.511985, -0.216500],
      [-78.506439, -0.215583],
      [-78.505474, -0.214024],
      [-78.502452, -0.213671],
      [-78.498996, -0.214442]
    ];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoicGFibG92amEiLCJhIjoiY2t0aHZ5eXRoMGNybjJyanc5YXVpZmxjOSJ9.nQCEZJfc60G-ZE1kEUX_ig';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style:'mapbox://styles/mapbox/dark-v10',
  center: [-78.512511, -0.219641],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
      .setLngLat([-78.512511, -0.219641])
      .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(()=> {
        if(counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
      }, 1000);

}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
