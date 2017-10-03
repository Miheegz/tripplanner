const mapboxgl = require('mapbox-gl');

function buildMarker(type, coords) {

  const markerElement = document.createElement('div');
  markerElement.style.width = '32px';
  markerElement.style.height = '39px';

  if (type === 'Activity') {
    markerElement.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  } else if (type === 'Hotel') {
    markerElement.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  } else if (type === 'Restaurant') {
    markerElement.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
  }

  return new mapboxgl.Marker(markerElement).setLngLat(coords);
}

module.exports = buildMarker;
