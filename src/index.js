console.log('inside the index.js file');

const mapboxgl = require("mapbox-gl");
const markerMaker = require("./marker.js")

mapboxgl.accessToken = 'pk.eyJ1Ijoid2FsZWplZ3MiLCJhIjoiY2o4YnJhYXBpMDB6MjJ3bGJrcTViaHN3MSJ9.vy-Pf3fUuGD52cWavIpVrQ';




const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const fullStack  = markerMaker("hotel",[-74.009, 40.705]);
fullStack.addTo(map);
