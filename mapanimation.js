// This array contains the coordinates for all bus stops between Carondelet and National Assembly of Ecuador located in the center of Quito
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
  center: [-78.512511, -0.219641], //Carondelet coordinates
  zoom: 14,
});


var marker = new mapboxgl.Marker()
      .setLngLat([-78.512511, -0.219641]) // bus starts here in Carondelet
      .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
 
  setTimeout(()=> {
        if(counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
      }, 1000);

}


if (typeof module !== 'undefined') {
  module.exports = { move };
}
