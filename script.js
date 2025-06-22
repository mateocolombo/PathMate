// Crear el mapa centrado en Valencia
const map = L.map('map').setView([39.4699, -0.3763], 13); // Coordenadas de Valencia

// Cargar el mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Evento de clic para seleccionar puntos de interés
map.on('click', function(e) {
    const { lat, lng } = e.latlng;
    L.marker([lat, lng]).addTo(map)
      .bindPopup(`Punto de interés:<br>Lat: ${lat.toFixed(4)}<br>Lng: ${lng.toFixed(4)}`)
      .openPopup();
});
