
const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker')
mapboxgl.accessToken = 'pk.eyJ1IjoibWloZWVneiIsImEiOiJjajhicmdlcHcwMTB5MndwNXQwOXh4azI1In0.UF5giSqoFXbS0aybzdF9TA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.63544819999998, 41.8885198],
  zoom: 12,
  style: 'mapbox://styles/mapbox/satellite-streets-v10'
});


const marker = buildMarker('Activity', [-87.63544819999998, 41.8885198]).addTo(map);
